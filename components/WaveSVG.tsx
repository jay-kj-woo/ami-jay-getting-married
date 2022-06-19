import styled, { keyframes } from 'styled-components';

const WaveSVG = () => {
  return (
    <StyledSVG
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <StyledG>
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="0"
          fill="rgba(255,255,255,0.7"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(255,255,255,0.5)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(255,255,255,0.3)"
        />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
      </StyledG>
    </StyledSVG>
  );
};

export default WaveSVG;

const moveForever = keyframes`
     0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
    `;

const StyledSVG = styled.svg`
  position: relative;
  width: 100%;
  /* height: 15vh; */
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 40px;
  max-height: 40px;
`;

const StyledG = styled.g`
  & > use {
    animation: ${moveForever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  & > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  & > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  & > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  & > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
`;

// /*Shrinking for mobile*/
// @media (max-width: 768px) {
//   .waves {
//     height: 40px;
//     min-height: 40px;
//   }
// }
