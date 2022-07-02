import { AnimatePresence, motion } from 'framer-motion';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import styled from 'styled-components';
import InitialLoadingContent from '../components/InitialLoadingContent';
import MainContent from '../components/MainContent';

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const isTouchEnabled = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };
  useEffect(() => {
    if (!isTouchEnabled()) setIsTouchDevice(false);
  }, []);
=======
  // const isTouchEnabled = () => {
  //   return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  // };
>>>>>>> main
  // const isScreenTallerThanMobile =() => {
  // return window.innerHeight > 1000;
  // // }
  // useEffect(() => {
  //   console.log(isTouchEnabled());
  //   console.log(window.innerWidth);
  //   console.log(window.innerHeight);
  // }, []);

  return (
    <SiteWrapper>
      <MobileContentWrapper>
        <AnimatePresence exitBeforeEnter={true}>
          {isLoading && (
            <MotionDiv
              key={'initialLoadingContent'}
              transition={{ duration: 2, delay: 1 }}
              exit={{ opacity: 0 }}
            >
<<<<<<< HEAD
              <DndProvider
                backend={isTouchDevice ? TouchBackend : HTML5Backend}
              >
=======
              <DndProvider backend={TouchBackend}>
>>>>>>> main
                <InitialLoadingContent setIsLoading={setIsLoading} />
              </DndProvider>
            </MotionDiv>
          )}
        </AnimatePresence>
        {!isLoading && <MainContent />}
      </MobileContentWrapper>
    </SiteWrapper>
  );
};

// const MotionComp = motion(InitialLoadingContent);

const SiteWrapper = styled.div`
  background-color: #d2d2d2;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const MobileContentWrapper = styled.div`
  position: relative;
  /* background-color: #548365; */
  background-color: ${(props) => props.theme.colors.background};
  /* color: ${(props) => props.theme.colors.highlight1}; */
  width: 420px;
  max-width: 100%;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
`;

const MotionDiv = styled(motion.div)`
  position: fixed;
  width: 100%;
  max-width: 420px;
  height: calc(var(--vh, 1vh) * 100);
  z-index: 2000;
`;
export default Home;
