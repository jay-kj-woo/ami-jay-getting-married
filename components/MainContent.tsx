import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Calender from './Calender';
import Contact from './Contact';
import Gratitude from './Gratitude';
import InvitationBlock from './InvitationBlock';
import LandingBlock from './LandingBlock';
import Location from './Location';
import Map from './Map';
import Photos from './Photos';
import SwipePhotos from './SwipePhotos';
import WaveSVG from './WaveSVG';

const MainContent = () => {
  const [showFullPhoto, setShowFullPhoto] = useState(false);
  useEffect(() => {
    if (showFullPhoto) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [showFullPhoto]);
  const onShowFullPhoto = () => {
    setShowFullPhoto(true);
  };

  return (
    <Wrapper>
      <LandingBlock />

      <InvitationBlock />
      <Photos />
      <Calender />
      <Location />
      <Gratitude />
      <Contact />

      <Spacer>스페이서</Spacer>
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

const Spacer = styled.div`
  height: 200vh;
`;
