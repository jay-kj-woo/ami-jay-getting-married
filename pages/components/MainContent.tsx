import styled from 'styled-components';

const MainContent = () => {
  return (
    <>
      <Wrapper>
        <div>메인 컨텐트</div>
        <div>컴퍼넌트</div>
      </Wrapper>
    </>
  );
};

export default MainContent;

const Wrapper = styled.div`
  background-color: #ee9ef5;
`;
