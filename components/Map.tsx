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
          카카오지도 보기
        </LinkToMap>
        <LinkToMap
          href={
            'nmap://search?query=%EB%B9%8C%EB%9D%BC%EB%93%9C%EC%A7%80%EB%94%94%EC%88%98%EC%84%9C'
          }
          target="_blank"
        >
          네이버 지도 보기
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
  height: 300px;
`;
const KakaoMap = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const LinkToMap = styled.a`
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
`;
