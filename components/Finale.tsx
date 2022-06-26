import styled, { css } from 'styled-components';
import WaveSVG from './WaveSVG';
import finale from '../public/images/finale.jpg';
import Image from 'next/image';
const Finale = () => {
  return (
    <Wrapper>
      <WaveContainer reverse>
        <WaveSVG />
      </WaveContainer>
      <Image
        src={finale}
        priority
        alt=""
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      />
      <TextBlock>
        감사합니다. 행복하게 살겠습니다.
        <br />- 아미 & 경제 -
      </TextBlock>
      <WaveContainer>
        <WaveSVG />
      </WaveContainer>
    </Wrapper>
  );
};

export default Finale;

const Wrapper = styled.div`
  position: relative;
  margin-top: 80px;
  margin-bottom: 40px;
`;

const WaveContainer = styled.div<{ reverse?: boolean }>`
  position: absolute;
  z-index: 1;
  width: 100%;
  display: flex;
  ${(props) =>
    props.reverse
      ? css`
          top: 0;
          transform: rotate(180deg);
        `
      : css`
          bottom: 0;
        `}
`;

const TextBlock = styled.div`
  position: absolute;
  right: 20px;
  bottom: 30px;
  font-weight: 400;
  color: #fff;
  text-align: end;
  line-height: 1.5;
  font-size: 16px;
`;
