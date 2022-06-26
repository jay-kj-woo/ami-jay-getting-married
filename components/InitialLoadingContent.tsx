import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import useTypeHangul from '../utils/useTypeHangul';
import DropZone from './dragndrop/DropZone';
import Groom from './dragndrop/Groom';
import { useDrop } from 'react-dnd';
import CustomDragLayer from './dragndrop/CustomDragLayer';
import Bride from './dragndrop/Bride';
import { motion } from 'framer-motion';
interface Props {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface DragItem {
  title: 'groom' | 'bride';
  left: number;
  top: number;
}

const DROPZONE_SIZE = {
  width: 200,
  height: 200,
};
const TOLERANCE = 50;

const InitialLoadingContent = ({ setIsLoading }: Props) => {
  const text = '경제, 아미 결혼합니다.';
  const typingInterval = 80;
  const { innerText, isTypingComplete } = useTypeHangul(text, typingInterval);

  const [itemLocations, setItemLocations] = useState({
    groom: { top: 200, left: -100, inBound: false },
    bride: { top: 200, left: 100, inBound: false },
  });

  const [isAllDropped, setIsAllDropped] = useState(false);
  const [numDrops, setNumDrops] = useState(0);

  useEffect(() => {
    if (isAllDropped) {
      setIsLoading(false);
    }
  }, [isAllDropped, setIsLoading]);

  const checkInBound = useCallback((left: number, top: number) => {
    const isWidthInBound = Math.abs(left) < DROPZONE_SIZE.width / 2 - TOLERANCE;
    const isHeightInBound =
      Math.abs(top) < DROPZONE_SIZE.height / 2 - TOLERANCE;
    if (isHeightInBound && isWidthInBound) return true;
    return false;
  }, []);

  const getNewLocations = useCallback((title: 'groom' | 'bride') => {
    if (title === 'groom') {
      return { newLeft: -19, newTop: 0 };
    }
    return { newLeft: 19, newTop: -2 };
  }, []);

  // useEffect(() => {
  //   const { groom, bride } = itemLocations;
  //   const isGroomInBound = checkInBound(groom.left, groom.top);
  //   const isBrideInBound = checkInBound(bride.left, bride.top);
  //   if (isGroomInBound && isBrideInBound) setIsAllDropped(true);
  // }, [checkInBound, itemLocations]);

  useEffect(() => {
    if (numDrops === 2) setIsAllDropped(true);
  }, [numDrops]);

  const moveBox = useCallback(
    (title: 'groom' | 'bride', left: number, top: number) => {
      setItemLocations((prevState) => ({
        ...prevState,
        [title]: { ...prevState[title], top, left },
      }));
    },
    []
  );

  const skipDragIntro = () => {
    const groomDestination = getNewLocations('groom');
    const brideDestination = getNewLocations('bride');
    moveBox('groom', groomDestination.newLeft, groomDestination.newTop);
    moveBox('bride', brideDestination.newLeft, brideDestination.newTop);
    setNumDrops(2);
  };

  const [{ canDrop }, drop] = useDrop(
    () => ({
      accept: ['groom', 'bride'],
      drop: (item: DragItem, monitor) => {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number;
          y: number;
        };
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        if (checkInBound(left, top)) {
          const { newLeft, newTop } = getNewLocations(item.title);
          setItemLocations({
            ...itemLocations,
            [item.title]: { ...itemLocations[item.title], inBound: true },
          });
          if (!itemLocations[item.title].inBound) {
            setNumDrops((prev) => prev + 1);
          }
          moveBox(item.title, newLeft, newTop);
        } else {
          setItemLocations({
            ...itemLocations,
            [item.title]: { ...itemLocations[item.title], inBound: false },
          });
          if (itemLocations[item.title].inBound) {
            setNumDrops((prev) => {
              if (prev > 0) return prev - 1;
              return 0;
            });
          }

          moveBox(item.title, left, top);
        }
        return undefined;
      },
      collect: (monitor) => ({
        canDrop: monitor.canDrop(),
      }),
    }),
    [moveBox, itemLocations]
  );

  return (
    <Wrapper>
      <TypingText>{innerText}</TypingText>
      {isTypingComplete && (
        <MotionDiv
          key={'DndContent'}
          transition={{ duration: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <DndWrapper ref={drop}>
            <DropZone
              numDrops={numDrops}
              canDrop={canDrop}
              width={DROPZONE_SIZE.width}
              height={DROPZONE_SIZE.height}
            />
            <Groom
              title="groom"
              left={itemLocations.groom.left}
              top={itemLocations.groom.top}
            />
            <Bride
              title="bride"
              left={itemLocations.bride.left}
              top={itemLocations.bride.top}
            />
            <TutorialText>
              아미와 경제를 <br />
              하트 가운데에 올려주세요
            </TutorialText>
          </DndWrapper>
        </MotionDiv>
      )}
      {isTypingComplete && (
        <SkipButton
          key={'SkipButton'}
          transition={{ delay: 1, duration: 1 }}
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={skipDragIntro}
        >
          바로 청첩장 보러 가기
        </SkipButton>
      )}
      <CustomDragLayer />
    </Wrapper>
  );
};

export default InitialLoadingContent;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* color: #c8a062; */
  color: #e2e2e2;
  /* background-color: #0a4b2b; */
  background-color: #548365;
`;

const DndWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #e2e2e2;
  background-color: transparent;
`;

const TypingText = styled.div`
  position: absolute;
  top: 8%;
  font-size: 22px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textBright};
`;

const MotionDiv = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const SkipButton = styled(motion.button)`
  padding: 14px 24px;
  width: fit-content;
  /* height: 50px; */
  position: absolute;
  margin: 0 auto;
  bottom: 3%;
  border: 2px solid transparent;
  border-radius: 32px;
  box-shadow: 0 5px 15px -8px #000;
  background-color: #f9f6f1;
  font-size: 16px;
  font-weight: 600;
  color: #064420;
`;

const TutorialText = styled.div`
  position: absolute;
  margin: 0 auto;
  width: fit-content;
  transform: translateY(-150px);
  color: ${(props) => props.theme.colors.textBright};
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
`;
