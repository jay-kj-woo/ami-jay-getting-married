// /**
//  * type-hangul
//  * https://github.com/SDuck4/type-hangul
//  *
//  * MIT License
//  * Copyright (c) 2020 Chae SeungWoo
//  */
// 'use strict';

import { useEffect, useRef, useState } from 'react';

// import { d, a } from 'hangul-js';

// // 기본 옵션
// const DEFAULT_OPTIONS = {
//   // 출력할 텍스트
//   text: null,

//   // 기존 텍스트 뒤에 이어서 출력할 지 여부
//   append: false,

//   // 타이핑 사이 시간 간격, ms
//   intervalType: 120,

//   // 사람이 타이핑하는 것처럼 intervalType를 랜덤화
//   humanize: null,
// };

// // text가 타이핑되는 과정을 반환함
// function _process(text) {
//   // Hangul로 text의 자모음 분리
//   let disassembled = d(text, true);

//   // 타이핑 run 합치기
//   // run: 연속적으로 타이핑 되는 구간
//   let textProcess = [];
//   let run = [];
//   for (let i in disassembled) {
//     let charProcess = disassembled[i];
//     if (charProcess.length > 1) {
//       run = run.concat(charProcess);
//     } else {
//       if (run.length > 0) {
//         textProcess.push(run);
//         run = [];
//       }
//       textProcess.push(charProcess);
//     }
//   }
//   if (run.length > 0) {
//     textProcess.push(run);
//   }

//   return textProcess;
// }

// // text가 타이핑되는 과정을 selector로 선택한 DOM의 텍스트로 출력함
// function _type(target, options) {
//   // 기본 옵션 적용
//   options = _merge(DEFAULT_OPTIONS, options);

//   // text가 정의되지 않은 경우, target의 내용을 text로 설정
//   if (options.text === null) {
//     options.text = _getText(target);
//   }
//   let text = options.text;

//   // 타이핑 관련 변수들
//   let textProcess = _process(text);
//   let idxRun = 0;
//   let idxType = 0;
//   let intervalType;
//   let lastType = options.append ? _getText(target) : '';
//   let progress = lastType;

//   // intervalType 계산 함수
//   function getIntervalType() {
//     if (options.humanize === null) {
//       return options.intervalType;
//     }
//     if (typeof options.humanize === 'number') {
//       return _humanize(options.intervalType, options.humanize);
//     }
//     if (typeof options.humanize === 'function') {
//       return options.humanize(options.intervalType);
//     }
//     throw new Error("'humanize' cannnot be " + typeof options.humanize);
//   }

//   // 타이핑 인터벌 함수
//   function doType() {
//     // run: 연속적으로 타이핑 되는 구간
//     let run = textProcess[idxRun];

//     // run 타이핑 완료
//     if (idxType >= run.length) {
//       idxRun = idxRun + 1;
//       idxType = 0;
//       lastType = _getText(target);

//       // text 타이핑 완료
//       if (idxRun >= textProcess.length) {
//         const eventEndType = new CustomEvent('th.endType', {
//           detail: {
//             target,
//             options,
//           },
//         });
//         target.dispatchEvent(eventEndType);
//         return;
//       }

//       intervalType = getIntervalType();
//       setTimeout(doType, intervalType);
//       return;
//     }

//     // 타이핑 과정 출력
//     let typing = a(run.slice(0, idxType + 1));
//     let typeChar = run[idxType];

//     const eventBeforeType = new CustomEvent('th.beforeType', {
//       detail: {
//         target,
//         options,
//         progress,
//         typeChar,
//       },
//     });
//     target.dispatchEvent(eventBeforeType);

//     progress = lastType + typing;
//     _setText(target, progress);
//     idxType = idxType + 1;

//     const eventAfterType = new CustomEvent('th.afterType', {
//       detail: {
//         target,
//         options,
//         progress,
//         typeChar,
//       },
//     });
//     target.dispatchEvent(eventAfterType);

//     intervalType = getIntervalType();
//     setTimeout(doType, intervalType);
//   }

//   // 타이핑 인터벌 시작
//   const eventStartType = new CustomEvent('th.startType', {
//     detail: {
//       target,
//       options,
//     },
//   });
//   target.dispatchEvent(eventStartType);
//   doType();
// }

// // obj1에 obj2를 합친 객체를 반환
// function _merge(obj1, obj2) {
//   let merged = JSON.parse(JSON.stringify(obj1));
//   for (let key in obj2) {
//     merged[key] = obj2[key];
//   }
//   return merged;
// }

// // target DOM의 텍스트를 반환
// function _getText(target) {
//   if (target.nodeName === 'INPUT') {
//     return target.value;
//   } else {
//     return target.textContent;
//   }
// }

// // target DOM에 텍스트를 text로 설정
// function _setText(target, text) {
//   if (target.nodeName === 'INPUT') {
//     target.value = text;
//   } else {
//     target.textContent = text;
//   }
// }

// // 기본 humanize 함수, number를 ratio 비율로 랜덤화해서 반환
// function _humanize(number, ratio) {
//   let min = number - number * ratio;
//   let max = number + number * ratio;
//   return Math.round(Math.random() * (max - min) + min);
// }

// const TypeHangul = {
//   type: function (selector, options) {
//     // selector 필수 입력
//     if (selector === undefined) {
//       throw new Error("'selector' cannnot be undefined");
//     }
//     if (selector === null) {
//       throw new Error("'selector' cannnot be null");
//     }

//     // 출력 대상 DOM
//     let target = document.querySelectorAll(selector);
//     for (let i = 0; i < target.length; i++) {
//       _type(target[i], options);
//     }
//   },
// };

// // window.TypeHangul = TypeHangul;
// export default TypeHangul;

// String.prototype.toKorChars = function () {
//   var cCho = [
//       'ㄱ',
//       'ㄲ',
//       'ㄴ',
//       'ㄷ',
//       'ㄸ',
//       'ㄹ',
//       'ㅁ',
//       'ㅂ',
//       'ㅃ',
//       'ㅅ',
//       'ㅆ',
//       'ㅇ',
//       'ㅈ',
//       'ㅉ',
//       'ㅊ',
//       'ㅋ',
//       'ㅌ',
//       'ㅍ',
//       'ㅎ',
//     ],
//     cJung = [
//       'ㅏ',
//       'ㅐ',
//       'ㅑ',
//       'ㅒ',
//       'ㅓ',
//       'ㅔ',
//       'ㅕ',
//       'ㅖ',
//       'ㅗ',
//       'ㅘ',
//       'ㅙ',
//       'ㅚ',
//       'ㅛ',
//       'ㅜ',
//       'ㅝ',
//       'ㅞ',
//       'ㅟ',
//       'ㅠ',
//       'ㅡ',
//       'ㅢ',
//       'ㅣ',
//     ],
//     cJong = [
//       '',
//       'ㄱ',
//       'ㄲ',
//       'ㄳ',
//       'ㄴ',
//       'ㄵ',
//       'ㄶ',
//       'ㄷ',
//       'ㄹ',
//       'ㄺ',
//       'ㄻ',
//       'ㄼ',
//       'ㄽ',
//       'ㄾ',
//       'ㄿ',
//       'ㅀ',
//       'ㅁ',
//       'ㅂ',
//       'ㅄ',
//       'ㅅ',
//       'ㅆ',
//       'ㅇ',
//       'ㅈ',
//       'ㅊ',
//       'ㅋ',
//       'ㅌ',
//       'ㅍ',
//       'ㅎ',
//     ],
//     cho,
//     jung,
//     jong;
//   var str = this,
//     cnt = str.length,
//     chars = [],
//     cCode;
//   for (var i = 0; i < cnt; i++) {
//     cCode = str.charCodeAt(i);
//     if (cCode == 32) {
//       chars.push(' ');
//       continue;
//     } // 한글이 아닌 경우
//     if (cCode < 0xac00 || cCode > 0xd7a3) {
//       chars.push(str.charAt(i));
//       continue;
//     }
//     cCode = str.charCodeAt(i) - 0xac00;

//     jong = cCode % 28;
//     // 종성
//     jung = ((cCode - jong) / 28) % 21;

//     // 중성
//     cho = ((cCode - jong) / 28 - jung) / 21;
//     // 초성

//     //기본 코드 테스트가 ㅌㅔㅅ-ㅌ- 형식으로 저장됨
//     chars.push(cCho[cho], cJung[jung]);
//     if (cJong[jong] !== '') {
//       chars.push(cJong[jong]);
//     }

//     //  테스트라는 문장이 있으면 ㅌ테ㅅ스ㅌ트 형식으로 저장되도록함 (타이핑을 위해서)
//     chars.push(cCho[cho]);
//     chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28));
//     if (cJong[jong] !== '') {
//       chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28 + jong));
//     }
//   }

//   return chars;
// };

//타이핑할 문장

// const typeHangul = (result, className) => {
//   var typing = [];
//   result = result.split(''); // 한글자씩자름

//   //각글자 초성,중성,종성으로 나눔
//   for (var i = 0; i < result.length; i++) {
//     typing[i] = result[i].toKorChars();
//   }
//   console.log(typing);

//   //출력할 엘리먼트요소 가져옴
//   var resultDiv = document.getElementsByClassName(className)[0];
//   //
//   var text = '';
//   var i = 0;
//   var j = 0;
//   var text = '';

//   //총글자수
//   var imax = typing.length;

//   //setInterval을 이용해 반복적으로 출력
//   var inter = setInterval(typi, 150);

//   function typi() {
//     //글자수만큼 반복후 종료
//     if (i <= imax - 1) {
//       //각 글자가 초성 중성 종성 순서대로 추가되도록
//       var jmax = typing[i].length;
//       resultDiv.dangerouslySetInnerHTML = text + typing[i][j];
//       j++;
//       if (j == jmax) {
//         text += typing[i][j - 1]; //초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
//         i++;
//         j = 0;
//       }
//     } else {
//       clearInterval(inter);
//     }
//   }
// };

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

const useTypeHangul = (result) => {
  const [innerText, setInnerText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const mountedRef = useRef(false);
  result = result.split(''); // 한글자씩자름

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      const typing = [];
      for (let i = 0; i < result.length; i++) {
        typing[i] = toKorChars(result[i]);
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
          console.log(text + typing[i][j]);
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
      const inter = setInterval(typi, 300);
    }

    // return () => {
    //   mountedRef.current = false;
    // };
  }, [result, setInnerText]);

  return { innerText, isTypingComplete };
};

export default useTypeHangul;
