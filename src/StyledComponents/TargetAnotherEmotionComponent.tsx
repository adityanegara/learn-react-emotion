import styled from '@emotion/styled/macro'

const TargetAnotherEmotionComponent = () => {
    const Child = styled.div`
    color: red;
  `
  
  const Parent = styled.div`
    ${Child} {
      color: green;
    }
  `

  return (
    <div>
    <Parent>
      <Child>Green because I am inside a Parent</Child>
    </Parent>
    <Child>Red because I am not inside a Parent</Child>
  </div>
  );
};

export default TargetAnotherEmotionComponent;
