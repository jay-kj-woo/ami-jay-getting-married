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
  const { innerText, isTypingComplete } = useTypeHangul('우경제, 우아미, 결혼');
  useEffect(() => {
    if (isTypingComplete) {
      setIsLoading(false);
    }
  }, [isTypingComplete, setIsLoading]);

  return (
    <Wrapper>
      <div className="textRef">{innerText}</div>
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
  color: #c8a062;
  /* color: #e2e2e2; */
  background-color: #0a4b2b;
  /* background-color: #004a23; */
  background-image: url('/buried.png');
  z-index: 2000;
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
`;
