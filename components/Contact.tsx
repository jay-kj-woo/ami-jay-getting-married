import { Chat } from '@styled-icons/heroicons-outline';
import { Mail, Phone } from '@styled-icons/heroicons-solid';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  bounceUpVariants,
  BouncingUpContainer,
} from './motionDiv/BouncingUpContainer';

const Contact = () => {
  return (
    <Wrapper>
      <BouncingUpContainer>
        <MotionDiv variants={bounceUpVariants}>
          <Main>
            <ContactBox>
              신랑에게 연락하기
              <IconContainer>
                <a href="tel:01066458412">
                  <PhoneIcon isGroom />
                </a>
                <a href="sms:01066458412">
                  <SMSIcon />
                </a>
              </IconContainer>
            </ContactBox>
            <ContactBox>
              신부에게 연락하기
              <IconContainer>
                <a href="tel:01066458412">
                  <PhoneIcon />
                </a>
                <a href="sms:01066458412">
                  <SMSIcon />
                </a>
              </IconContainer>
            </ContactBox>
          </Main>
          <Parents>
            {/* <span>신랑측 혼주</span>
        <span>신부측 혼주</span> */}
            <ContactBox isGroom>
              <strong>신랑측 혼주</strong> 아버지 우종광
              <IconContainer>
                <a href="tel:01066458412">
                  <PhoneIcon isGroom />
                </a>
                <a href="sms:01066458412">
                  <SMSIcon />
                </a>
              </IconContainer>
              어머니 소인숙
              <IconContainer>
                <a href="tel:01066458412">
                  <PhoneIcon isGroom />
                </a>
                <a href="sms:01066458412">
                  <SMSIcon />
                </a>
              </IconContainer>
            </ContactBox>
            <ContactBox>
              <strong>신부측 혼주</strong> 아버지 우정욱
              <IconContainer>
                <a href="tel:01066458412">
                  <PhoneIcon />
                </a>
                <a href="sms:01066458412">
                  <SMSIcon />
                </a>
              </IconContainer>
              어머니 김미영
              <IconContainer>
                <a href="tel:01066458412">
                  <PhoneIcon />
                </a>
                <a href="sms:01066458412">
                  <SMSIcon />
                </a>
              </IconContainer>
            </ContactBox>
          </Parents>
        </MotionDiv>
      </BouncingUpContainer>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`;
const MotionDiv = styled(motion.div)`
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 16px;
`;

const Parents = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 14px;
`;

const ContactBox = styled.div<{ isGroom?: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  strong {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 20px;
    color: ${(props) => (props.isGroom ? '#78c0e9' : '#f79e9e')};
  }
`;

const IconContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  a {
    margin: 0 12px;
  }
`;

const PhoneIcon = styled(Phone)<{ isGroom?: boolean }>`
  height: 26px;
  fill: ${(props) => (props.isGroom ? `#78c0e9` : `#f79e9e`)};
`;
const SMSIcon = styled(Mail)`
  height: 26px;
`;
