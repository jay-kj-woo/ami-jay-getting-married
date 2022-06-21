import { createContext, useContext } from 'react';

interface AccordionContextProps {
  isExpanded: boolean;
  toggleExpansion: () => void;
  //   expand: () => void;
  //   collapse: () => void;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined
);

export const AccordionProvider = AccordionContext.Provider;

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      'Accordion.Collapsible, Accordion.ExpandButton and Accordion.CollapseButton must be used within an Accordion'
    );
  }
  return context;
};
