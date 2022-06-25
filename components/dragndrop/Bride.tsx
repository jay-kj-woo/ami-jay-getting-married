import Image from 'next/image';
import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import bride from '../../public/icons/bride.png';
import { DragItem } from '../InitialLoadingContent';

const Bride = ({ title, left, top }: DragItem) => {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: 'bride',
      item: { title, left, top },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [left, top]
  );
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <StyledDiv ref={drag} left={left} top={top} isDragging={isDragging}>
      <Image src={bride} />
    </StyledDiv>
  );
};

export default Bride;

const StyledDiv = styled.div<{
  left: number;
  top: number;
  isDragging: boolean;
}>`
  position: absolute;
  transform: ${(props) => `translate3d(${props.left}px, ${props.top}px, 0)`};
  opacity: ${(props) => (props.isDragging ? 0 : 1)};
  height: ${(props) => (props.isDragging ? 0 : '')};
`;
