import { Theme, ThemeProvider } from "@emotion/react";
import Child from "./Child";

const theme: Theme = {
  colors: {
    primary: "hotpink",
    secondary: "steelblue",
  },
};

const ParentCSSPropsTheming = () => {
  return (
    <ThemeProvider theme={theme}>
        <Child/>
    </ThemeProvider>
  );
};

export default ParentCSSPropsTheming;
