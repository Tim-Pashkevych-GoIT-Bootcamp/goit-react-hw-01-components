const theme = Object.freeze({
  colors: {
    primary: '#9a9ea3',
    secondary: 'black',
    bgPrimary: '#e7ecf2',
    bgSecondary: '#f3f6f9',
    bgContainer: 'white',
    random: () =>
      `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`,
  },
  fontSize: {
    header: '20px',
  },
  fontWeight: {
    header: '700',
  },
  width: {
    width: '100%',
    maxWidth: '600px',
  },
  spacing: value => `${value * 4}px`,
});

export default theme;
