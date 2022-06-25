import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  bounceUpVariants,
  BouncingUpContainer,
} from './motionDiv/BouncingUpContainer';

const Calender = () => {
  const date = [
    ['', '', '', '', '', 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30],
    [31, '', '', '', '', ''],
  ];
  return (
    <Wrapper>
      <BouncingUpContainer>
        <MotionDiv variants={bounceUpVariants}>
          <Title>7월</Title>
          <Table>
            <StyledHead>
              <tr>
                <StyledTH sun>SUN</StyledTH>
                <StyledTH>MON</StyledTH>
                <StyledTH>TUE</StyledTH>
                <StyledTH>WED</StyledTH>
                <StyledTH>THU</StyledTH>
                <StyledTH>FRI</StyledTH>
                <StyledTH sat>SAT</StyledTH>
              </tr>
            </StyledHead>
            <StyledBody>
              {date.map((week, index) => (
                <tr key={`week${index}`}>
                  {week.map((day, index) => {
                    if (index === 0) return <StyledTD sun>{day}</StyledTD>;
                    else if (day === 23)
                      return (
                        <StyledTD>
                          <Dday>{day}</Dday>
                        </StyledTD>
                      );
                    else if (index === 6) return <StyledTD sat>{day}</StyledTD>;
                    return <StyledTD key={`day${index}`}>{day}</StyledTD>;
                  })}
                </tr>
              ))}
            </StyledBody>
          </Table>
        </MotionDiv>
      </BouncingUpContainer>
    </Wrapper>
  );
};

export default Calender;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 280px;
`;

const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-bottom: 24px;
  font-size: 18px;
`;

const Table = styled.table`
  width: 100%;
  font-weight: 400;
`;

const StyledHead = styled.thead``;

const StyledBody = styled.tbody``;

const StyledTR = styled.tr``;
const StyledTH = styled.th<{ sat?: boolean; sun?: boolean }>`
  /* padding: 6px; */
  width: 14.28%;
  height: 34px;
  vertical-align: middle;
  color: ${(props) => props.sat && props.theme.colors.blue1};
  color: ${(props) => props.sun && props.theme.colors.red1};
`;
const StyledTD = styled.td<{ sat?: boolean; sun?: boolean }>`
  text-align: center;
  width: 14.28%;
  height: 34px;
  vertical-align: middle;
  color: ${(props) => props.sat && props.theme.colors.blue1};
  color: ${(props) => props.sun && props.theme.colors.red1};
  /* padding: 6px; */
`;

const Dday = styled.div`
  color: #fff;
  position: relative;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.highlight2};
  margin: auto auto;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
