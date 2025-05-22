const addressRegex = /^[A-Z]+\d+$/;

interface ReturnValue {
  result?: number | '';
  deps: string[];
  error?: string;
}

export function parseFormula(input: string, getCellValue: (addr: string) => number | ''): ReturnValue {
  const deps: string[] = [];
  try {
    if (!input) {
      return {result: '', deps};
    }

    if (input === '=') {
      throw new Error('Continue formula');
    }

    const isExpectingFormula = input.startsWith('= ') || input.startsWith('=');
    if (!isExpectingFormula) {
      const num = parseFloat(input as any);
      if (isNaN(num)) throw new Error('Not a number');
      return {result: num, deps};
    }

    const expr = input.slice(1);
    if (expr.startsWith('SUM(') && expr.endsWith(')')) {
      const args = expr
        .slice(4, -1)
        .split(',')
        .map((s) => s.trim());
      let sum = 0;
      args.forEach((arg) => {
        if (addressRegex.test(arg)) {
          deps.push(arg);
          sum += Number(getCellValue(arg));
        } else {
          const v = parseFloat(arg as any);
          if (isNaN(v)) throw new Error('Invalid number in SUM');
          sum += v;
        }
      });
      return {result: sum, deps};
    }
    // simple reference =A1
    if (addressRegex.test(expr)) {
      deps.push(expr);
      return {result: Number(getCellValue(expr)) + 1, deps};
    }
    throw new Error('Unsupported formula');
  } catch (e: any) {
    return {deps, error: e.message};
  }
}
