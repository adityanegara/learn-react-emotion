import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Child = () =>{
    const theme = useTheme();
    const CustomDiv = styled('div')({
        color: theme.colors.primary,
    })
    return(
        <CustomDiv>Testing</CustomDiv>
    )
}

export default Child;