import { motion } from 'framer-motion';
import styled from 'styled-components';
import Accordion from './accordion/Accordion';
import {
  bounceUpVariants,
  BouncingUpContainer,
} from './motionDiv/BouncingUpContainer';
import { SectionTitle } from './Styles';

const Gratitude = () => {
  return (
    <Wrapper>
      <BouncingUpContainer>
        <SectionTitle variants={bounceUpVariants}>마음 전하실 곳</SectionTitle>
      </BouncingUpContainer>
      <BouncingUpContainer>
        <MotionDiv variants={bounceUpVariants}>
          <Accordion>
            <Accordion.Header>신랑측 계좌번호</Accordion.Header>
            <Accordion.List>
              <Accordion.Item
                accountNumber="110278912568"
                name="우경제"
                kakaoQR="FQxT02UbL"
              />
              <Accordion.Item
                accountNumber="110278912568"
                name="우종광"
                kakaoQR="FQxT02UbL"
              />
              <Accordion.Item
                accountNumber="110278912568"
                name="소인숙"
                kakaoQR="FQxT02UbL"
              />
            </Accordion.List>
          </Accordion>
          <Accordion>
            <Accordion.Header>신부측 계좌번호</Accordion.Header>
            <Accordion.List>
              <Accordion.Item
                accountNumber="110278912568"
                name="우아미"
                kakaoQR="FQxT02UbL"
              />
              <Accordion.Item
                accountNumber="110278912568"
                name="우정욱"
                kakaoQR="FQxT02UbL"
              />
              <Accordion.Item
                accountNumber="110278912568"
                name="김미영"
                kakaoQR="FQxT02UbL"
              />
            </Accordion.List>
          </Accordion>
        </MotionDiv>
      </BouncingUpContainer>
    </Wrapper>
  );
};

export default Gratitude;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 100px 0 100px 0;
`;

const MotionDiv = styled(motion.div)``;
