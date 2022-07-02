import { motion } from 'framer-motion';
import styled from 'styled-components';
import Accordion from './accordion/Accordion';
import Contact from './Contact';
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
      <Contact />
      <BouncingUpContainer>
        <MotionDiv variants={bounceUpVariants}>
          <Accordion>
            <Accordion.Header>신랑측 계좌번호</Accordion.Header>
            <Accordion.List>
              <Accordion.Item
                accountNumber="신한은행 110278912568"
                name="우경제"
                kakaoQR="FQxT02UbL"
              />
              <Accordion.Item
                accountNumber="하나은행 60501123100108"
                name="우종광"
                kakaoQR=""
              />
              <Accordion.Item
                accountNumber="신한은행 110281234418"
                name="소인숙"
                kakaoQR="FV0ieJnsK"
              />
            </Accordion.List>
          </Accordion>
          <Accordion>
            <Accordion.Header>신부측 계좌번호</Accordion.Header>
            <Accordion.List>
              <Accordion.Item
                accountNumber="토스뱅크 100015355835"
                name="우아미"
                kakaoQR="FQxT02UbL"
              />
              <Accordion.Item
                accountNumber="기업은행 30500468503021"
                name="우정욱"
                kakaoQR="FYUVyq2Eu"
              />
              <Accordion.Item
                accountNumber="기업은행 30500468503021"
                name="김미영"
                kakaoQR=""
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
  margin: 100px 0 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotionDiv = styled(motion.div)``;
