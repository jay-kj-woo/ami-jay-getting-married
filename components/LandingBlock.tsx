import styled from 'styled-components';

const LandingBlock = () => {
  return (
    <LandingBackground>
      <TitleBlock>
        <span>THE NEW BEGINNING</span>
        <p>우경제</p>
        <p>우아미</p>
        {/* <h1>07.23</h1> */}
        {/* <p>우경제, 우아미 결혼합니다.</p> */}
      </TitleBlock>
      <LandingFooterBlock>
        2022. 07. 23. 토요일 오후 04:00 <br />
        빌라드지디 수서 5층, 르씨엘 홀
      </LandingFooterBlock>
    </LandingBackground>
  );
};

const LandingBackground = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  background-image: url('/images/landingBackground.jpg');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
  position: relative;
  outline: #e2e2e2 solid 1px;
  outline-offset: -10px;
  * {
    color: ${(props) => props.theme.colors.textBright};
  }
`;

const TitleBlock = styled.div`
  padding: 30px 0;
  text-align: center;
  letter-spacing: -1px;

  span {
    font-weight: 400;
    font-size: 24px;
  }
  h1 {
    font-size: 80px;
    margin-bottom: 20px;
  }
  p {
    font-size: 28px;
  }
`;
const LandingFooterBlock = styled.div`
  position: absolute;
  width: 100%;
  bottom: 20px;
  padding: 20px 0;
  text-align: center;
`;

export default LandingBlock;
