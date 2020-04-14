export const selectCustomStyles = {
  control: (base) => ({
    ...base,

    // the next lines remove the blue outline when focused: https://stackoverflow.com/a/57250211/9787887
    borderColor: '#ccc',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#aaa',
    },
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
