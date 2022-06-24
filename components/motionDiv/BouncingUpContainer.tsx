import { motion, Variants } from 'framer-motion';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const bounceUpVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    // rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.5,
    },
  },
};

const BouncingUpContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
`;

export { BouncingUpContainer, bounceUpVariants };
