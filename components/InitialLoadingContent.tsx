import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect } from 'react';
import styled from 'styled-components';
import useTypeHangul from '../utils/useTypeHangul';
interface Props {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const InitialLoadingContent = ({ setIsLoading }: Props) => {
  // const onSetLoadingComplete = () => {
  //   setIsLoading(false);
  // };
  const text = '우경제 우아미 결혼합니다.';
  const typingInterval = 150;
  const { innerText, isTypingComplete } = useTypeHangul(text, typingInterval);
  useEffect(() => {
    if (isTypingComplete) {
      setIsLoading(false);
    }
  }, [isTypingComplete, setIsLoading]);

  return (
    <Wrapper>
      <TypingText>{innerText}</TypingText>
      {/* <button onClick={onSetLoadingComplete}>로딩 종료 : 메인 화면 이동</button> */}
    </Wrapper>
  );
};

export default InitialLoadingContent;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* color: #c8a062; */
  color: #e2e2e2;
  /* background-color: #0a4b2b; */
  background-color: #548365;
  /* background-image: url('/buried.png'); */
  z-index: 2000;
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
`;

const TypingText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textBright};
`;
