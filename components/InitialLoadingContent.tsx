import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect } from 'react';
import styled from 'styled-components';
import useTypeHangul from '../utils/useTypeHangul';
import groom from '../public/icons/groom.png';
import Image from 'next/image';
import DropZone from './dragndrop/DropZone';
import Groom from './dragndrop/Groom';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';
interface Props {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const DRAG_OPTIONS = {
  enableMouseEvents: false,
};

const InitialLoadingContent = ({ setIsLoading }: Props) => {
  // const onSetLoadingComplete = () => {
  //   setIsLoading(false);
  // };
  const text = '우경제 우아미 결혼합니다.';
  const typingInterval = 150;
  const { innerText, isTypingComplete } = useTypeHangul(text, typingInterval);
  useEffect(() => {
    if (isTypingComplete) {
      // setIsLoading(false);
    }
  }, [isTypingComplete, setIsLoading]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Wrapper>
        <TypingText>{innerText}</TypingText>
        <DropZone></DropZone>
        <Groom />
        {/* <button onClick={onSetLoadingComplete}>로딩 종료 : 메인 화면 이동</button> */}
      </Wrapper>
    </DndProvider>
  );
};

export default InitialLoadingContent;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
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
  position: absolute;
  top: 20%;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textBright};
`;
