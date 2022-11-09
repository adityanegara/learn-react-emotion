import styled from "@emotion/styled/macro";

const SomeText = styled("div")(
  {
    display: "flex",
  },
  (props) => ({
    color: props.theme.colors.primary,
  })
);
const Child = () => {
  return <SomeText>Im a child</SomeText>;
};

export default Child;
