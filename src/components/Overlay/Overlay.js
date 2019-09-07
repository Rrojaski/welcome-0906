import styled from "styled-components";
import clouds from "../../media/clouds.jpg";

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${clouds});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Overlay;
