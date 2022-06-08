import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

interface Props {
  setShowFullPhoto: Dispatch<SetStateAction<boolean>>;
}

const SwipePhotos = ({ setShowFullPhoto }: Props) => {
  return (
    <ModalContainer>
      <Wrapper>
        <Carousel />
        <CloseButton onClick={() => setShowFullPhoto(false)}>❌</CloseButton>
      </Wrapper>
    </ModalContainer>
  );
};

export default SwipePhotos;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.92);
  /* width: 100%; */
  /* height: 400px; */
  /* position: relative; */
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1002;
  cursor: pointer;
`;
