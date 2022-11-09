import styled from "@emotion/styled/macro";

const MediaQueries = () => {
  const Paragraph = styled("p")({
    fontSize: "30px",
    color: "steelblue",
    ["@media (min-width: 420px)"]: {
      fontSizze: "50px",
      color: "coral",
    },
  });

  return (
    <Paragraph>
      On large screen its coral. On small screen its steelblue.
    </Paragraph>
  );
};

export default MediaQueries;
