import Script from 'next/script';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const handleOnLoad = () => {
    const { kakao } = window;
    kakao.maps.load(() => {
      const mapOptions = {
        center: new kakao.maps.LatLng(37.47410639103727, 127.11513070583904),
        level: 6,
        draggable: false,
        scrollwheel: false,
        disableDoubleClick: true,
        disableDoubleClickZoom: true,
      };

      const map = new kakao.maps.Map(mapRef.current, mapOptions);
      const marker = new kakao.maps.Marker({
        position: map.getCenter(),
      });
      marker.setMap(map);
    });
  };

  return (
    <Wrapper>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=247677513437e93adfdda6da85ee9abf&libraries=drawing&autoload=false"
        onLoad={handleOnLoad}
      ></Script>
      <KakaoMap ref={mapRef}></KakaoMap>
      <ButtonContainer>
        <LinkToMap
          href={'https://map.kakao.com/link/search/빌라드지디수서'}
          target="_blank"
        >
          <MapText map="kakao">카카오지도 보기</MapText>
        </LinkToMap>
        <LinkToMap
          href={'https://m.place.naver.com/place/1973278943/home'}
          target="_blank"
        >
          <MapText map="naver">네이버지도 보기</MapText>
        </LinkToMap>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Map;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
`;
const KakaoMap = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const LinkToMap = styled.a`
  flex: 1;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;

const MapText = styled.div<{ map: 'kakao' | 'naver' }>`
  /* background: left center no-repeat; */
  background-image: ${(props) =>
    props.map === 'kakao'
      ? `url('/icons/kakao_map_icon.png')`
      : `url('/icons/naver_map_icon.png')`};
  background-color: ${(props) =>
    props.map === 'kakao' ? '#fbe300' : '#f4fdff'};
  background-position: left center;
  background-repeat: no-repeat;
  background-size: contain;
  color: #202020;
  height: 40px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  /* vertical-align: middle;
  height: 100%; */ ;
`;
