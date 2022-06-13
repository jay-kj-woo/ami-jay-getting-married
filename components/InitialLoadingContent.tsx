import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import buried from '../public/buried.png';
interface Props {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const InitialLoadingContent = ({ setIsLoading }: Props) => {
  const onSetLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <Wrapper>
      <h1>우경제 우아미 결혼</h1>
      <button onClick={onSetLoadingComplete}>로딩 종료 : 메인 화면 이동</button>
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
  color: #e2e2e2;
  background-color: #004a23;
  background-image: url('/buried.png');
  z-index: 2000;
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
`;
