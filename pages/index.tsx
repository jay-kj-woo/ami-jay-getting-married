import { AnimatePresence, motion } from 'framer-motion';
import { NextPage } from 'next';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import styled from 'styled-components';
import InitialLoadingContent from '../components/InitialLoadingContent';
import MainContent from '../components/MainContent';

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SiteWrapper>
      <MobileContentWrapper>
        <AnimatePresence exitBeforeEnter={true}>
          {isLoading && (
            <MotionDiv
              key={'initialLoadingContent'}
              transition={{ duration: 2 }}
              exit={{ opacity: 0 }}
            >
              <DndProvider backend={TouchBackend}>
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
