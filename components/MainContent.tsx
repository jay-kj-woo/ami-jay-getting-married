import styled from 'styled-components';
import Calender from './Calender';
import Contact from './Contact';
import Copyright from './Copyright';
import Finale from './Finale';
import Gratitude from './Gratitude';
import InvitationBlock from './InvitationBlock';
import LandingBlock from './LandingBlock';
import Location from './Location';
import Photos from './Photos';
import Video from './Video';

const MainContent = () => {
  return (
    <Wrapper>
      <LandingBlock />
      <InvitationBlock />
      <Photos />
      <Calender />
      <Video />
      <Location />
      {/* <Contact /> */}
      <Gratitude />
      <Finale />
      <Copyright />
    </Wrapper>
  );
};

export default MainContent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
