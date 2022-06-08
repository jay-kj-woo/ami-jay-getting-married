import { AnimatePresence, motion } from 'framer-motion';
import { NextPage } from 'next';
import { useState } from 'react';
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
              <InitialLoadingContent setIsLoading={setIsLoading} />
            </MotionDiv>
          )}
        </AnimatePresence>
        <MainContent />
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
  background-color: #e1b9b9;
  width: 420px;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const MotionDiv = styled(motion.div)`
  position: fixed;
  width: 100%;
  max-width: 420px;
  height: 100vh;
`;
export default Home;
