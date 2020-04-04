const height = '3.6rem';

export const selectCustomStyles = {
  control: (base) => ({
    ...base,
    height: height,
    minHeight: height,
    // the next lines remove the blue outline when focused: https://stackoverflow.com/a/57250211/9787887
    borderColor: '#ccc',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#aaa',
    },
  }),
  singleValue: (base) => ({
    ...base,
    padding: '0.5rem 0',
  }),
  container: (base) => ({
    ...base,
    width: '14em',
    fontSize: '1.1em',
    zIndex: '20',
  }),
  option: (base) => ({
    ...base,
    padding: '0.15em 0.5em',
  }),
  menuList: (base) => ({
    ...base,
    padding: 2,
  }),
};
