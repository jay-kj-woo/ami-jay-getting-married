import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  bounceUpVariants,
  BouncingUpContainer,
} from './motionDiv/BouncingUpContainer';

const Calender = () => {
  return (
    <Wrapper>
      <BouncingUpContainer>
        <MotionDiv variants={bounceUpVariants}>
          <Title>7월</Title>
          <Table>
            <StyledHead>
              <tr>
                <StyledTH>SUN</StyledTH>
                <StyledTH>MON</StyledTH>
                <StyledTH>TUE</StyledTH>
                <StyledTH>WED</StyledTH>
                <StyledTH>THU</StyledTH>
                <StyledTH>FRI</StyledTH>
                <StyledTH>SAT</StyledTH>
              </tr>
            </StyledHead>
            <StyledBody>
              <tr>
                <StyledTD></StyledTD>
                <StyledTD></StyledTD>
                <StyledTD></StyledTD>
                <StyledTD></StyledTD>
                <StyledTD></StyledTD>
                <StyledTD>1</StyledTD>
                <StyledTD>2</StyledTD>
              </tr>
              <tr>
                <StyledTD>3</StyledTD>
                <StyledTD>4</StyledTD>
                <StyledTD>5</StyledTD>
                <StyledTD>6</StyledTD>
                <StyledTD>7</StyledTD>
                <StyledTD>8</StyledTD>
                <StyledTD>9</StyledTD>
              </tr>
              <tr>
                <StyledTD>10</StyledTD>
                <StyledTD>11</StyledTD>
                <StyledTD>12</StyledTD>
                <StyledTD>13</StyledTD>
                <StyledTD>14</StyledTD>
                <StyledTD>15</StyledTD>
                <StyledTD>16</StyledTD>
              </tr>
              <tr>
                <StyledTD>17</StyledTD>
                <StyledTD>18</StyledTD>
                <StyledTD>19</StyledTD>
                <StyledTD>20</StyledTD>
                <StyledTD>21</StyledTD>
                <StyledTD>22</StyledTD>
                <StyledTD>
                  <Dday>23</Dday>
                </StyledTD>
              </tr>
              <tr>
                <StyledTD>24</StyledTD>
                <StyledTD>25</StyledTD>
                <StyledTD>26</StyledTD>
                <StyledTD>27</StyledTD>
                <StyledTD>28</StyledTD>
                <StyledTD>29</StyledTD>
                <StyledTD>30</StyledTD>
              </tr>
              <tr>
                <StyledTD>31</StyledTD>
                <StyledTD></StyledTD>
                <StyledTD></StyledTD>
                <StyledTD></StyledTD>
                <StyledTD></StyledTD>
                <StyledTD></StyledTD>
                <StyledTD></StyledTD>
              </tr>
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
  width: 300px;
`;

const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-bottom: 12px;
`;

const Table = styled.table`
  width: 100%;
`;

const StyledHead = styled.thead``;

const StyledBody = styled.tbody``;

const StyledTR = styled.tr``;
const StyledTH = styled.th`
  padding: 6px;
`;
const StyledTD = styled.td`
  text-align: center;
  width: 14%;
  height: 20px;
  /* padding: 6px; */
`;

const Dday = styled.div`
  color: #fff;
  position: relative;
  /* z-index: 1000; */
  /* &:before {
    content: '';
    position: absolute;
    display: inline-block;
    background: #004a23;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  } */
`;
