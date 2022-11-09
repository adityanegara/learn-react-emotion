import { ThemeProvider, Theme } from "@emotion/react";
import Child from "./Child";

const theme: Theme = {
  colors: {
    primary: "seagreen",
    secondary: "crimson",
  },
};

const ParentUseThemeHook = () => {
  return (
    <ThemeProvider theme={theme}>
      <Child/>
    </ThemeProvider>
  );
};

export default ParentUseThemeHook;
