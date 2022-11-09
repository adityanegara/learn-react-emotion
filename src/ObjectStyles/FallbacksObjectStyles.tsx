import styled from "@emotion/styled";

const FallbackObjectStyles = () => {
  const Gradient = styled("div")({
    background: ["red", "linear-gradient(#e66465, #9198e5)"],
    height: "100px",
  });
  return (
    <Gradient>
      This is a gradient when browser support, and red when browser not support
    </Gradient>
  );
};

export default FallbackObjectStyles;
