"use client";

import { useState, useEffect, useRef } from "react";

const generateTextSequence = (initialText: string) => {
  const textSequence: string[] = [];
  const spacePositions = findWhitespacePositions(initialText); // 找出空白字符的位置

  for (let i = 0; i < initialText.length; i++) {
    if (spacePositions[i]) {
      // 如果是空白字符，繼續保留原字符
      continue;
    } else {
      // 否則生成帶有隨機字母的文本序列
      const numRandomChars = initialText.length - (i + 1);
      const randomizedText = generateRandomLetters(
        numRandomChars,
        spacePositions.slice(i + 1),
      );
      const text = initialText.substring(0, i) + "_" + randomizedText;
      textSequence.push(text);
    }
  }

  textSequence.push(initialText);

  return textSequence;
};

const generateRandomLetters = (length: number, spacePositions: boolean[]) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < length; i++) {
    if (spacePositions[i]) {
      result += " "; // 如果 spacePositions[i] 是 true，則生成空格
    } else {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      ); // 否則生成隨機字母
    }
  }

  return result;
};

const findWhitespacePositions = (str: string): boolean[] => {
  const whitespacePositions: boolean[] = [];

  for (let i = 0; i < str.length; i++) {
    const isWhitespace = /\s/.test(str[i]); // 檢查是否是空白字符，包括空格、制表符、換行符等
    whitespacePositions.push(isWhitespace);
  }

  return whitespacePositions;
};

const useHoverTextAnimation = (initialText: string = "GET A DEMO") => {
  const [displayText, setDisplayText] = useState<string>(initialText);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const textSequence = generateTextSequence(initialText);

  let intervalId: NodeJS.Timeout | null = null;
  let currentTextIndex: number = 0;

  const hoverHandler = () => {
    if (intervalIdRef.current) return; // 如果已經有計時器在運行，則不執行

    intervalIdRef.current = setInterval(() => {
      setDisplayText(textSequence[currentTextIndex]);
      currentTextIndex++;

      if (currentTextIndex === textSequence.length) {
        clearInterval(intervalIdRef.current!);
        intervalIdRef.current = null;
      }
    }, 50); // 0.05 秒 = 50 毫秒
  };

  const mouseOutHandler = () => {
    clearInterval(intervalIdRef.current!);
    intervalIdRef.current = null;

    // 將文字恢復到初始狀態
    setDisplayText(initialText);
    currentTextIndex = 0;
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalIdRef.current!);
    };
  }, []);

  return { displayText, hoverHandler, mouseOutHandler };
};

export default useHoverTextAnimation;
