const { createTheme } = require("@mui/material");

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        md: 600,
        lg: 1040,
        xl: 1440,
      },
    },
  });

  export default theme;