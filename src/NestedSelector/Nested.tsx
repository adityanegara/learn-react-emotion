/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react/macro";

const Nested = () => {
  const paragraph = css({
    color: "steelblue",
    ["a"]: {
      borderBottom: "1px solid currentColor",
      cursor: "pointer",
    },
  });

  return (
    <p css={paragraph}>
      Some text. <a>A link with a bottom border.</a>
    </p>
  );
};

export default Nested;