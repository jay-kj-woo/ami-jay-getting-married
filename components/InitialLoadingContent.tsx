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

const InitialLoadingContent = ({ setIsLoading }: Props) => {
  // const onSetLoadingComplete = () => {
  //   setIsLoading(false);
  // };
  const text = '우경제 우아미 결혼합니다.';
  const typingInterval = 120;
  const { innerText, isTypingComplete } = useTypeHangul(text, typingInterval);
  useEffect(() => {
    if (isTypingComplete) {
      // setIsLoading(false);
    }
  }, [isTypingComplete, setIsLoading]);

  const [itemLocations, setItemLocations] = useState({
    groom: { top: 200, left: -100 },
    bride: { top: 200, left: 100 },
  });

  const [isAllDropped, setIsAllDropped] = useState(false);
  const [numDrops, setNumDrops] = useState(0);

  useEffect(() => {
    if (isAllDropped) {
      console.log('yay');
      setIsLoading(false);
    }
  }, [isAllDropped]);

  const checkInBound = useCallback((left: number, top: number) => {
    const isWidthInBound = Math.abs(left) < DROPZONE_SIZE.width / 2;
    const isHeightInBound = Math.abs(top) < DROPZONE_SIZE.height / 2;
    if (isHeightInBound && isWidthInBound) return true;
    return false;
  }, []);

  const getNewLocations = useCallback((title: 'groom' | 'bride') => {
    if (title === 'groom') {
      return { newLeft: -20, newTop: 0 };
    }
    return { newLeft: 20, newTop: 0 };
  }, []);

  useEffect(() => {
    const { groom, bride } = itemLocations;
    const isGroomInBound = checkInBound(groom.left, groom.top);
    const isBrideInBound = checkInBound(bride.left, bride.top);
    if (isGroomInBound && isBrideInBound) setIsAllDropped(true);
  }, [checkInBound, itemLocations]);

  const moveBox = useCallback(
    (title: 'groom' | 'bride', left: number, top: number) => {
      setItemLocations({ ...itemLocations, [title]: { top, left } });
    },
    [itemLocations]
  );

  const [{ canDrop }, drop] = useDrop(
    () => ({
      accept: ['groom', 'bride'],
      drop: (item: DragItem, monitor) => {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number;
          y: number;
        };
        // console.log(item);
        // console.log(delta);
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        if (checkInBound(left, top)) {
          const { newLeft, newTop } = getNewLocations(item.title);
          setNumDrops((prev) => prev + 1);
          moveBox(item.title, newLeft, newTop);
        } else {
          setNumDrops((prev) => {
            if (prev > 0) return prev - 1;
            return 0;
          });
          moveBox(item.title, left, top);
        }
        return undefined;
      },
      collect: (monitor) => ({
        canDrop: monitor.canDrop(),
      }),
    }),
    [moveBox]
  );

  return (
    <Wrapper>
      <TypingText>{innerText}</TypingText>
      {isTypingComplete && (
        <MotionDiv
          key={'DndContent'}
          transition={{ duration: 2 }}
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
          </DndWrapper>
        </MotionDiv>
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
  top: 20%;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textBright};
`;

const MotionDiv = styled(motion.div)`
  width: 100%;
  height: 100%;
`;
