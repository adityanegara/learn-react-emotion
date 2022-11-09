/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react/macro";

const Composition = () => {
  const danger = css({
    color: "red",
  });

  const base = css({
    backgroundColor: "darkgreen",
    color: "turquoise",
  });

  return (
    <div>
      <div css={base}>This will be turquoise</div>
      <div css={[danger, base]}>
        This will be also turquoise since the base styles overwrite the danger.
      </div>
      <div css={[base, danger]}>This will be red</div>
    </div>
  );
};

export default Composition;