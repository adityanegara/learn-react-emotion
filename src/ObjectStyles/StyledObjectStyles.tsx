import styled from "@emotion/styled/macro";

interface ButtonProps {
  fontSize?: number;
}

const StyledObjectStyles = () => {
  const Button = styled.button<ButtonProps>(
    {
      color: "darkorchid",
    },
    (props) => ({
      fontSize: props.fontSize,
    })
  );

  return (
    <Button fontSize={30}>
      This is a a darkorchid button with fontSize 30px
    </Button>
  );
};

export default StyledObjectStyles;
