/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react/macro";
import { Global } from "@emotion/react";

const GlobalStyles = () => {
  const pink = css({
    ["p"]: {
      color: "pink !important",
    },
  });

  return (
    <div>
      <Global styles={pink} />
      <p>Im pink</p>
    </div>
  );
};

export default GlobalStyles;