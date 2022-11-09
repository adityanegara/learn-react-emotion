import styled from "@emotion/styled/macro";

const ReusableMediaQueries = () => {
  const breakPoints = [576, 768, 992, 1200];

  const mediaQueries = breakPoints.map(bp => `@media (min-width: ${bp}px)`);

  const Paragraph = styled("p")({
    fontSize: "30px",
    color: "steelblue",
    [mediaQueries[0]]: {
      fontSizze: "50px",
      color: "coral",
    },
    [mediaQueries[1]]: {
        fontSizze: "60px",
        color: "red",
    }
  });

  return (
    <Paragraph>
      Small screen = blue, medium screen = coral, large screen = red
    </Paragraph>
  );
};

export default ReusableMediaQueries;
