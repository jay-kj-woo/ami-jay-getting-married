import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { images } from '../../public/images';
import { wrap } from 'popmotion';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  setShowFullPhoto: Dispatch<SetStateAction<boolean>>;
}

const variants = {
  toLeft: {
    x: '-100%',
    pointerEvents: 'none',
  },
  toRight: {
    x: '100%',
    pointerEvents: 'none',
  },
  center: {
    x: 0,
    pointerEvents: 'initial',
  },
};

function SwipePhotos({ setShowFullPhoto }: Props) {
  const ref = useRef();
  const [rect, setRect] = useState();
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const imageList = Object.values(images);
  const [page, setPage] = useState(0);
  const prev = wrap(0, imageList.length, page - 1);
  const cur = wrap(0, imageList.length, page);
  const next = wrap(0, imageList.length, page + 1);

  const animation = useAnimation();

  function swipePower(offset, absDistance) {
    return (offset / absDistance) * 100;
  }
  const handleDragEnd = async (evt, { offset }) => {
    const power = swipePower(offset.x, rect.width);
    if (power > 60) {
      await animation.start('toRight');
      paginate(-1);
    } else if (power < -60) {
      await animation.start('toLeft');
      paginate(1);
    }
  };

  const paginate = (dir) => {
    setPage(page + dir);
  };

  return (
    <ModalContainer>
      <Wrapper>
        <SwiperDiv
          key={page}
          className="track"
          drag="x"
          dragDirectionLock
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          variants={variants}
          animate={animation}
          dragMomentum={false}
          transition={{
            x: { type: 'spring', mass: 0.5, stiffness: 500, damping: 50 },
          }}
        >
          <Item key={prev} data={imageList[prev]} />
          <Item ref={ref} key={cur} data={imageList[cur]} />
          <Item key={next} data={imageList[next]} />
        </SwiperDiv>
        <NextButton className="next" onClick={() => paginate(1)}>
          {'‣'}
        </NextButton>
        <PrevButton className="prev" onClick={() => paginate(-1)}>
          {'‣'}
        </PrevButton>
        <CloseButton onClick={() => setShowFullPhoto(false)}>❌</CloseButton>
      </Wrapper>
    </ModalContainer>
  );
}
export default SwipePhotos;
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
const NextButton = styled.div`
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
  right: 10px;
`;

const PrevButton = styled.div`
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
  right: 10px;
  left: 10px;
  transform: scale(-1);
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
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const SwiperDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Item = React.forwardRef(function ({ data }, ref) {
  return (
    <MotionImage
      ref={ref}
      draggable={false}
      src={data}
      layout="fill"
      objectFit="contain"
      // placeholder="empty"
    />
  );
});

const MotionImage = styled(Image)`
  flex: 1 0 100%;
`;
