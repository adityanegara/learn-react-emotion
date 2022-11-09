import { ThemeProvider, Theme } from "@emotion/react";
import Child from "./Child";

const theme: Theme = {
  colors: {
    primary: "salmon",
    secondary: "seagreen",
  },
};

const ParentStyledTheming = () => {
  return (
    <ThemeProvider theme={theme}>
      <Child />
    </ThemeProvider>
  );
};

export default ParentStyledTheming;
