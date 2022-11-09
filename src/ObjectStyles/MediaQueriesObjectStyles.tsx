/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react/macro";
import styled from "@emotion/styled/macro";

const MediaQueriesObjectStyles = () => {
  const WithStyled = styled("p")({
    color: "green",
    "@media(min-width: 420px)": {
      color: "red",
    },
  });

  return (
    <div>
      <p
        css={{
          color: "darkorchid",
          backgroundColor: "lightgray",
          "@media(min-width: 420px)": {
            color: "orange",
            backgroundColor: "seagreen",
          },
        }}
      >
        This is orange on big screen, and darkorchid on small screen
      </p>
      <WithStyled>
        Red on big screen, green on small screen
      </WithStyled>
    </div>
  );
};

export default MediaQueriesObjectStyles;
