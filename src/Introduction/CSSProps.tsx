/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

import { css } from "@emotion/react/macro";

const CSSProps = () => {
  const color = 'white';
  return (
    <div
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
 
  );
};

export default CSSProps;
