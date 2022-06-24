import {
  animate,
  AnimationOptions,
  PanInfo,
  useMotionValue,
} from 'framer-motion';

import styled from 'styled-components';
import Slider from './Slider';
import { useEffect, useRef, useState } from 'react';
import { images } from '../public/images/gallery';
import Image from 'next/image';

const transition: AnimationOptions<any> = {
  type: 'spring',
  bounce: 0,
};

const Carousel = ({ loop = true }) => {
  const imageList = Object.values(images);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0);

  const handleEndDrag = (e: Event, dragProps: PanInfo) => {
    const clientWidth = containerRef.current?.clientWidth || 0;
    const { offset } = dragProps;
    if (offset.x > clientWidth / 4) {
      handlePrev();
    } else if (offset.x < -clientWidth / 4) {
      handleNext();
    } else {
      animate(x, calculateNewX(), transition);
    }
  };

  const handleNext = () => {
    const idx = loop ? 0 : index;
    setIndex(index + 1 === imageList.length ? idx : index + 1);
  };

  const handlePrev = () => {
    const idx = loop ? imageList.length - 1 : 0;
    setIndex(index - 1 < 0 ? idx : index - 1);
  };

  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    return controls.stop;
  }, [index]);

  return (
    <Container ref={containerRef}>
      {imageList.map((image, i) => (
        <Slider onDragEnd={handleEndDrag} x={x} i={i} key={image.src}>
          <Image draggable="false" src={image} objectFit="contain" />
        </Slider>
      ))}
      <BaseArrowButton direction="left" onClick={handlePrev}>
        &larr;
      </BaseArrowButton>

      <BaseArrowButton direction="right" onClick={handleNext}>
        &rarr;
      </BaseArrowButton>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
`;

const BaseArrowButton = styled.div<{ direction: 'right' | 'left' }>`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;

  right: ${(props) => props.direction === 'right' && '10px'};
  left: ${(props) => props.direction === 'left' && '10px'};
`;
