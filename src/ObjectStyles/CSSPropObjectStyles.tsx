/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react/macro";

const CSSPropObjectStyles = () =>{
    return(
        <p css={{
            color: 'darkorchid',
            backgroundColor: 'lightgray'
        }}>
            This is a darkorchid
        </p>
    )
}

export default CSSPropObjectStyles;