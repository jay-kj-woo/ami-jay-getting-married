import React from 'react';
import { motion, MotionValue, PanInfo } from 'framer-motion';
import styled from 'styled-components';

export type SliderProps = {
  x: MotionValue<number>;
  i: number;
  children: React.ReactNode;
  onDragEnd: (e: Event, dragProps: PanInfo) => void;
};

const Slider = ({ x, i, onDragEnd, children }: SliderProps) => (
  <SliderMotionDiv
    style={{
      x,
      left: `${i * 100}%`,
      right: `${i * 100}%`,
    }}
    drag="x"
    dragElastic={0.3}
    onDragEnd={onDragEnd}
  >
    {children}
  </SliderMotionDiv>
);

export default Slider;

const SliderMotionDiv = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex: none;
`;
