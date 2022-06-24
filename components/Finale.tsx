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
      <Image src={finale} priority />
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
