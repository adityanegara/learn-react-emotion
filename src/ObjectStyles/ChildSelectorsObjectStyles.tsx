/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react/macro";

const ChildSelectorsObjectStyles = () =>{
    return(
        <p css={{
            color: 'darkorchid',
            backgroundColor: 'lightgray',
            '& .name':{
                color: 'orange'
            }
        }}>
            This is a darkorchid
            <span className="name">This is orange</span>
        </p>
    )
}

export default ChildSelectorsObjectStyles;