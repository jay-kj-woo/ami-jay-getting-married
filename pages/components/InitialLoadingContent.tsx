import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

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
  background-color: #a99ded;
`;
