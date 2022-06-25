import Image from 'next/image';
import { memo } from 'react';
import styled from 'styled-components';
import groom from '../../public/icons/groom.png';

const GroomDragPreview = () => {
  return (
    <StyledDiv>
      <Image src={groom} />
    </StyledDiv>
  );
};

export default memo(GroomDragPreview);

const StyledDiv = styled.div`
  /* display: inline-block; */
`;
