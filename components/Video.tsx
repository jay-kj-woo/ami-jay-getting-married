import { motion } from 'framer-motion';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import {
  bounceUpVariants,
  BouncingUpContainer,
} from './motionDiv/BouncingUpContainer';
import { SectionTitle } from './Styles';

const Video = () => {
  return (
    <Wrapper>
      <BouncingUpContainer>
        <SectionTitle variants={bounceUpVariants}>영상으로 만나요</SectionTitle>
      </BouncingUpContainer>
      <BouncingUpContainer>
        <MotionDiv variants={bounceUpVariants}>
          <StyledYoutube videoId="T4Ea9qx8Cm0" />
        </MotionDiv>
      </BouncingUpContainer>
    </Wrapper>
  );
};

export default Video;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 100px;
`;
const MotionDiv = styled(motion.div)`
  width: 100%;
  margin-top: 40px;
`;

const StyledYoutube = styled(YouTube)`
  position: relative;
  padding-bottom: 56.25%;
  iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
