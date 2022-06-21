import styled from 'styled-components';
import { SectionTitle } from './Styles';

const InvitationBlock = () => {
  return (
    <Wrapper>
      <SectionTitle>초대합니다</SectionTitle>
      <Letter>
        같은 듯 다른 듯 <br />
        그렇게 변함없이 돌아오는 계절처럼 <br />
        익숙함에 새로움에 <br />
        평생 서로의 계절을 채우겠습니다. <br /> <br />
        사랑으로 가득찬 우리 둘의 시작을 <br />
        소중한 분들과 함께 나누고 싶습니다. <br />
        <br />
      </Letter>
      <Line />
      <Parents>
        우종광 · 소인숙 의 아들 경제 <br />
        우정욱 · 김미영 의 딸 아미
      </Parents>
    </Wrapper>
  );
};

export default InvitationBlock;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0 60px 0;
  text-align: center;
`;

const Letter = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  line-height: 2;
`;

const Line = styled.div`
  width: 40px;
  height: 1px;
  background: #ddd;
`;

const Parents = styled.div`
  margin-top: 60px;
  line-height: 2;
`;
