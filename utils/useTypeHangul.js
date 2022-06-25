import { useEffect, useRef, useState } from 'react';

const toKorChars = (str) => {
  const cCho = [
    'ㄱ',
    'ㄲ',
    'ㄴ',
    'ㄷ',
    'ㄸ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅃ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅉ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];
  const cJung = [
    'ㅏ',
    'ㅐ',
    'ㅑ',
    'ㅒ',
    'ㅓ',
    'ㅔ',
    'ㅕ',
    'ㅖ',
    'ㅗ',
    'ㅘ',
    'ㅙ',
    'ㅚ',
    'ㅛ',
    'ㅜ',
    'ㅝ',
    'ㅞ',
    'ㅟ',
    'ㅠ',
    'ㅡ',
    'ㅢ',
    'ㅣ',
  ];
  const cJong = [
    '',
    'ㄱ',
    'ㄲ',
    'ㄳ',
    'ㄴ',
    'ㄵ',
    'ㄶ',
    'ㄷ',
    'ㄹ',
    'ㄺ',
    'ㄻ',
    'ㄼ',
    'ㄽ',
    'ㄾ',
    'ㄿ',
    'ㅀ',
    'ㅁ',
    'ㅂ',
    'ㅄ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];
  let cho;
  let jung;
  let jong;
  const cnt = str.length;
  const chars = [];
  let cCode;
  for (let i = 0; i < cnt; i++) {
    cCode = str.charCodeAt(i);
    if (cCode == 32) {
      chars.push(' ');
      continue;
    } // 한글이 아닌 경우
    if (cCode < 0xac00 || cCode > 0xd7a3) {
      chars.push(str.charAt(i));
      continue;
    }
    cCode = str.charCodeAt(i) - 0xac00;

    jong = cCode % 28;
    // 종성
    jung = ((cCode - jong) / 28) % 21;

    // 중성
    cho = ((cCode - jong) / 28 - jung) / 21;
    // 초성

    //  테스트라는 문장이 있으면 ㅌ테ㅅ스ㅌ트 형식으로 저장되도록함 (타이핑을 위해서)
    chars.push(cCho[cho]);
    chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28));
    if (cJong[jong] !== '') {
      chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28 + jong));
    }
  }

  return chars;
};

const useTypeHangul = (resultText, typingInterval = 150) => {
  const [innerText, setInnerText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const mountedRef = useRef(false);
  resultText = resultText.split(''); // 한글자씩자름

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      const typing = [];
      for (let i = 0; i < resultText.length; i++) {
        typing[i] = toKorChars(resultText[i]);
      }
      const imax = typing.length;

      let i = 0;
      let j = 0;
      let text = '';
      function typi() {
        //글자수만큼 반복후 종료
        if (i <= imax - 1) {
          //각 글자가 초성 중성 종성 순서대로 추가되도록
          const jmax = typing[i].length;
          // resultDiv.dangerouslySetInnerHTML = text + typing[i][j];
          setInnerText(text + typing[i][j]);
          j++;
          if (j === jmax) {
            //   console.log(i);
            text += typing[i][j - 1]; //초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
            // setInnerText(typing[i][j - 1]);
            i++;
            j = 0;
          }
        } else {
          clearInterval(inter);
          setIsTypingComplete(true);
        }
      }
      const inter = setInterval(typi, typingInterval);
    }

    // return () => {
    //   mountedRef.current = false;
    // };
  }, [resultText, setInnerText, typingInterval]);

  return { innerText, isTypingComplete };
};

export default useTypeHangul;
