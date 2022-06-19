import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Calender from './Calender';
import Map from './Map';
import SwipePhotos from './SwipePhotos';
import WaveSVG from './WaveSVG';

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
    <Wrapper>
      <LandingBackground>
        <TitleBlock>
          <span>THE MARRIAGE</span>
          <h1>07.23</h1>
          <p>우경제, 우아미 결혼합니다.</p>
        </TitleBlock>
      </LandingBackground>

      <WaveSVG />
      <div>메인 컨텐트</div>
      <div>컴퍼넌트</div>
      <button onClick={onShowFullPhoto}> 포토 보기</button>
      {showFullPhoto && <SwipePhotos setShowFullPhoto={setShowFullPhoto} />}
      <Calender />
      <Map />
      <Spacer>스페이서</Spacer>
    </Wrapper>
  );
};

export default MainContent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LandingBackground = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('/images/landingBackground.jpg');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
  position: relative;
  outline: #fffaf3 solid 1px;
  outline-offset: -10px;
`;

const TitleBlock = styled.div`
  padding: 30px 0;
  text-align: center;
  letter-spacing: -1px;
  color: #fffaf3;
  span {
    font-weight: 400;
    font-size: 24px;
  }
  h1 {
    font-size: 80px;
    margin-bottom: 20px;
  }
  p {
    font-size: 28px;
  }
`;
const Spacer = styled.div`
  height: 200vh;
`;
