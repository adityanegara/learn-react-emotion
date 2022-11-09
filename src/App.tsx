import Styled from "./Introduction/Styled";
import ChangingBasedOnProps from "./StyledComponents/ChangingBasedOnProps";
import StylingAnyComponent from "./StyledComponents/StylingAnyComponent";
import DuplicateStyled from "./StyledComponents/DuplicateStyled";
import TargetAnotherEmotionComponent from "./StyledComponents/TargetAnotherEmotionComponent";
import NestingComponent from "./StyledComponents/NestingComponents";
import CSSProps from "./Introduction/CSSProps";
import Composition from "./Composition/Composition";
import CSSPropObjectStyles from "./ObjectStyles/CSSPropObjectStyles";
import StyledObjectStyles from "./ObjectStyles/StyledObjectStyles";
import ChildSelectorsObjectStyles from "./ObjectStyles/ChildSelectorsObjectStyles";
import MediaQueriesObjectStyles from "./ObjectStyles/MediaQueriesObjectStyles";
import FallbackObjectStyles from "./ObjectStyles/FallbacksObjectStyles";

const App = () =>{
  return(
    <div>
      <FallbackObjectStyles/>
    </div>
  )
}

export default App;
