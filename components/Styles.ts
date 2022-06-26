import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SectionTitle = styled(motion.div)`
  font-size: 20px;
  margin: 12px 0 12px 0;
  font-weight: 600;
  color: ${(props) => props.theme.colors.highlight1};
`;
