export default {
  outerWrapper: {overflow: 'auto', maxHeight: '800px'},
  innerWrapper: (colsAmount: number) => ({display: 'grid', gridTemplateColumns: `40px repeat(${colsAmount}, 1fr)`}),
  indicators: {border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center'},
  cell: (highLightWithRed: boolean) => ({
    border: `1px solid ${highLightWithRed ? '#d32f2f' : '#ccc'}`,
    minWidth: 80,
    minHeight: 24,
  }),
  cellInput: {
    '& .MuiInputBase-input': {
      padding: '0px',
      height: '24px',
      lineHeight: '24px',
      px: '4px',
    },
  },
  cellTypography: {px: '4px'},
};
