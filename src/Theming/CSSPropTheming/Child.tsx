/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

const Child = () =>{
    return(
        <div css={(theme) => ({ color: theme.colors.secondary })}>
        some other text
      </div>
    )
}

export default Child;