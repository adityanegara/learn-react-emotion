import styled from "@emotion/styled";

interface BasicProps {
  className?: string;
}

const Basic = ({ className }: BasicProps): JSX.Element => {
  return <div className={className}>Styling any component</div>;
};

const StylingAnyComponent = () => {
  const Fancy = styled(Basic)`
    color: red;
  `;
  return(
    <Fancy/>
  )
};

export default StylingAnyComponent;
