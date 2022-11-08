import styled from "@emotion/styled";

const NestingComponent = () =>{
    const Example = styled('span')`
    color: lightgreen;
  
    & > strong {
      color: hotpink;
    }
  `
    return(
        <Example>
        This is <strong>nested</strong>.
      </Example>
    )
}

export default NestingComponent;