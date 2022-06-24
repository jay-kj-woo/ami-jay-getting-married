import { ChevronDown } from '@styled-icons/heroicons-outline';
import { FC, FunctionComponent, ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';
import { AccordionProvider, useAccordionContext } from './AccordionContext';
import kakaoPayIcon from '../../public/icons/kakao_pay_icon.png';
interface Children {
  children: ReactNode | ReactNode[];
}

interface AccordionComposition {
  Header: FC<Children>;
  List: FC<Children>;
  Item: FC<{ accountNumber: string; name: string; kakaoQR: string }>;
}

const Accordion: AccordionComposition & FC<Children> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <AccordionProvider value={{ isExpanded, toggleExpansion }}>
      <AccordionContainer>{children}</AccordionContainer>
    </AccordionProvider>
  );
};

const Header: FC<Children> = ({ children }) => {
  const { isExpanded, toggleExpansion } = useAccordionContext();
  return (
    <AccordionHeader onClick={toggleExpansion}>
      {children}
      <AccordionDownArrow isExpanded={isExpanded} />
    </AccordionHeader>
  );
};

const List: FC<Children> = ({ children }) => {
  const { isExpanded } = useAccordionContext();
  return <AccordionList isExpanded={isExpanded}>{children}</AccordionList>;
};

const Item: FC<{ accountNumber: string; name: string; kakaoQR: string }> = ({
  accountNumber,
  name,
  kakaoQR,
}) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      // test with iphone and other browsers
      alert('계좌번호가 복사되었습니다.');
    } catch {
      alert('계좌번호 복사에 실패하였습니다.');
    }
  };
  return (
    <AccordionItem>
      <Name>
        {name}
        <ClipboardButton onClick={copyToClipboard}>복사하기</ClipboardButton>
      </Name>
      <AccountNumber>
        {accountNumber}
        <KakaoPayButton href={`https://qr.kakaopay.com/${kakaoQR}`} />
      </AccountNumber>
    </AccordionItem>
  );
};

Accordion.Header = Header;
Accordion.List = List;
Accordion.Item = Item;

const AccordionContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 3px 0 #ccc;
  border-radius: 6px;
  background: #fff;
  & + & {
    margin-top: 20px;
  }
`;

const AccordionHeader = styled.div`
  position: relative;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000;
`;

const AccordionDownArrow = styled(ChevronDown)<{ isExpanded: boolean }>`
  position: absolute;
  right: 16px;
  font-size: 14px;
  height: 18px;
  color: #666;
  transition: all 0.3s ease;
  ${(props) =>
    props.isExpanded &&
    css`
      transform: rotate(180deg);
    `}
`;

const AccordionList = styled.div<{ isExpanded: boolean }>`
  height: ${(props) => (props.isExpanded ? '219px' : '0')};
  transition: height 0.5s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const AccordionItem = styled.div`
  position: relative;
  padding: 6px;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccountNumber = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ClipboardButton = styled.div`
  background: #8f7f7f;
  width: 60px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const KakaoPayButton = styled.a`
  background: url('/icons/kakao_pay_icon.png');
  background-position: center;
  background-size: 80% auto;
  background-repeat: no-repeat;
  background-color: #ffeb00;
  width: 60px;
  height: 20px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export default Accordion;
