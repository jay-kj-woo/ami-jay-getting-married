import Image from 'next/image';
import { useDrag } from 'react-dnd';
import groom from '../../public/icons/groom.png';
const Groom = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'groom',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag}>
      <Image src={groom} />
    </div>
  );
};

export default Groom;
