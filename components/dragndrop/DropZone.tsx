import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const DropZone = ({ children }: { children?: ReactNode }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default DropZone;
const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.highlight3};
`;
