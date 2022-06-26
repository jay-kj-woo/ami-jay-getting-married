// import { Heart } from '@styled-icons/heroicons-solid';
import { Heart } from '@styled-icons/foundation';
import { motion } from 'framer-motion';
import styled from 'styled-components';
interface DropProps {
  canDrop: boolean;
  width: number;
  height: number;
  numDrops: number;
}

const heartVariants = {
  zero: { scale: 1 },
  one: { scale: 1.3 },
  two: { scale: 2 },
};
const DropZone = ({ canDrop, width, height, numDrops }: DropProps) => {
  return (
    <MotionDiv
      width={width}
      height={height}
      initial={{ scale: 1 }}
      variants={heartVariants}
      animate={!numDrops ? 'zero' : numDrops === 1 ? 'one' : 'two'}
      //   animate={{ scale: 1.5 }}
    >
      <StyledHeart
        canDrop={canDrop}
        width={width}
        height={height}
      ></StyledHeart>
    </MotionDiv>
  );
};

export default DropZone;
const MotionDiv = styled(motion.div)<Omit<DropProps, 'canDrop' | 'numDrops'>>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
`;
const StyledHeart = styled(Heart)<Omit<DropProps, 'numDrops'>>`
  position: absolute;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  fill: ${(props) => props.theme.colors.highlight3};
  /* border: ${(props) => props.canDrop && '1px solid red'}; */
`;
