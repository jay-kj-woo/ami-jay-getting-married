import { useDragLayer, XYCoord } from 'react-dnd';
import styled from 'styled-components';
import { DragItem } from '../InitialLoadingContent';
import BrideDragPreview from './BrideDragPreview';
import GroomDragPreview from './GroomDragPreview';

const CustomDragLayer = () => {
  const { item, isDragging, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem() as DragItem,
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  const getItemStyles = (currentOffset: XYCoord | null) => {
    if (!currentOffset) return { display: 'none' };
    const { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;
    return {
      transform,
      WebkitTransform: transform,
    };
  };

  const renderPreviewItem = () => {
    switch (item.title) {
      case 'groom':
        return <GroomDragPreview />;
      case 'bride':
        return <BrideDragPreview />;
      default:
        return null;
    }
  };

  if (!isDragging) return null;

  return (
    <LayerDiv>
      <div style={getItemStyles(currentOffset)}>{renderPreviewItem()}</div>
    </LayerDiv>
  );
};

export default CustomDragLayer;

const LayerDiv = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
