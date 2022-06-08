import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SwipePhotos from './SwipePhotos';

const MainContent = () => {
  const [showFullPhoto, setShowFullPhoto] = useState(false);
  useEffect(() => {
    if (showFullPhoto) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [showFullPhoto]);
  const onShowFullPhoto = () => {
    setShowFullPhoto(true);
  };
  return (
    <>
      <Wrapper>
        <div>메인 컨텐트</div>
        <div>컴퍼넌트</div>
        <button onClick={onShowFullPhoto}> 포토 보기</button>
        {showFullPhoto && <SwipePhotos setShowFullPhoto={setShowFullPhoto} />}
        <Spacer>스페이서</Spacer>
      </Wrapper>
    </>
  );
};

export default MainContent;

const Wrapper = styled.div`
  width: 100%;
`;

const Spacer = styled.div`
  height: 200vh;
`;
