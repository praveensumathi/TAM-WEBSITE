import React, { useState, useEffect, useRef } from "react";

const ScrollUnderline = ({ children }) => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const { top } = titleRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const titleOffset = 50;
        const isTitleVisible = top <= windowHeight / 1.1 - titleOffset;
        setIsTitleVisible(isTitleVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${isTitleVisible ? "underline" : ""}`}
      ref={titleRef}
    >
      {children}
    </div>
  );
};

export default ScrollUnderline;
