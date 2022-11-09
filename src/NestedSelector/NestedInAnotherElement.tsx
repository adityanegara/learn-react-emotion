/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react/macro";

const NestedInAnotherElement = () => {
  const paragraph = css({
    color: "steelblue",
    ["header &"]: {
      color: "coral",
    },
  });

  return (
    <div>
      <header>
        <p css={paragraph}>This is coral since its in header</p>
      </header>
      <p css={paragraph}>This is steelblue since its not inside header</p>
    </div>
  );
};

export default NestedInAnotherElement;
