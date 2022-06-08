import { Dispatch, SetStateAction, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { images } from '../../public/images';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  setShowFullPhoto: Dispatch<SetStateAction<boolean>>;
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const SwipePhotos = ({ setShowFullPhoto }: Props) => {
  console.log(images);
  const imageList = Object.values(images);
  console.log(imageList);
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, imageList.length, page);
  const prev = wrap(0, imageList.length, page - 1);
  const cur = wrap(0, imageList.length, page);
  const next = wrap(0, imageList.length, page + 1);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <ModalContainer>
      <Wrapper>
        <AnimatePresence
          exitBeforeEnter={false}
          initial={false}
          custom={direction}
        >
          <MotionDiv
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <Image
              key={prev}
              src={imageList[prev]}
              layout="fill"
              objectFit="contain"
              placeholder="empty"
            />
            <Image
              key={cur}
              src={imageList[cur]}
              layout="fill"
              objectFit="contain"
              placeholder="empty"
            />
            <Image
              key={next}
              src={imageList[next]}
              layout="fill"
              objectFit="contain"
              placeholder="empty"
            />
          </MotionDiv>
          {/* <MotionDiv
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <Image
              src={imageList[imageIndex]}
              layout="fill"
              objectFit="contain"
              placeholder="empty"
            />
          </MotionDiv> */}
          {/* <motion.img
            key={page}
            src={imageList[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          /> */}
        </AnimatePresence>
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
};

export default SwipePhotos;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;
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

// const MotionDiv = styled(motion.div)`
//   /* position: absolute; */
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   width: 100%;
//   height: 100%;
//   /* object-fit: contain; */
// `;
const MotionDiv = styled(motion.div)`
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: flex-end;

  /* width: 100%; */
  height: 100%;
  /* object-fit: contain; */
`;
const StyledImage = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  /* max-width: 100vw; */
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
