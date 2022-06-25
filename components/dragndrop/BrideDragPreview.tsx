import Image from 'next/image';
import { memo } from 'react';
import styled from 'styled-components';
import bride from '../../public/icons/bride.png';

const BrideDragPreview = () => {
  return (
    <StyledDiv>
      <Image src={bride} />
    </StyledDiv>
  );
};

export default memo(BrideDragPreview);

const StyledDiv = styled.div`
  /* display: inline-block; */
`;
