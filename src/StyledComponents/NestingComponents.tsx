import styled from "@emotion/styled";

const NestingComponent = () =>{
    const Example = styled('span')`
    color: lightgreen;
  
    & > strong {
      color: hotpink;
    }
  `

  const ExampleWithObjectStyles = styled('span')({
    color: 'green',
    '& > strong': {
      color: 'hotpink'
    }
  })

    return(
        <ExampleWithObjectStyles>
        This is <strong>nested</strong>.
      </ExampleWithObjectStyles>
    )
}

export default NestingComponent;