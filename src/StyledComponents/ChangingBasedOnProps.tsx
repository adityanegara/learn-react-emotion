import styled from "@emotion/styled";

interface ButtonProps {
  primary?: boolean;
}

interface ContainerProps {
  column?: boolean;
}


const ChangingBasedOnProps = (): JSX.Element => {
  const Button = styled.button<ButtonProps>`
    color: ${(props) => (props.primary ? "hotpink" : "turquoise")};
    background-color: seagreen; 
  `;

  const Container = styled("div")<ContainerProps>(
    {
      display: "flex",
    },
    (props) => ({
      flexDirection: props.column ? "column" : "row",
    })
  );

  return (
    <>
      <Container column>
        <Button>This is a regular button</Button>
        <Button primary>This is a primary button</Button>
      </Container>
    </>
  );
};

export default ChangingBasedOnProps;
