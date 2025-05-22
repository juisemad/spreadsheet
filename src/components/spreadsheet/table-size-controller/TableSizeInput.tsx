import React, {type FC} from 'react';

import Input from '../../input/Input.tsx';

const numbersOnly = /^[0-9]+$/;

interface Props {
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TableSizeInput: FC<Props> = (props) => (
  <Input
    size="small"
    pattern={numbersOnly}
    slotProps={{
      htmlInput: {
        maxLength: 2,
      },
    }}
    {...props}
  />
);

TableSizeInput.displayName = 'TableSizeInput';
export default TableSizeInput;
