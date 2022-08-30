import React, { useRef } from "react";

const TestimonialRow = ({ children, speed, playing }) => {
  const scrollerRef = useRef(null);
  const clonedScrollerRef = useRef(null);
  const hoverRef = useRef(false);
  const playingRef = useRef(playing);

  React.useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  const clonedChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child);
  });

  React.useEffect(() => {
    const pixelsPerFrame = speed / 60;
    let animating = true;
    let scrollerXPos = 0;
    let clonedScrollerXPos = 0;
    function animate() {
      if (playingRef.current) {
        if (hoverRef.current) {
          scrollerXPos -= pixelsPerFrame / 2;
          clonedScrollerXPos -= pixelsPerFrame / 2;
        } else {
          scrollerXPos -= pixelsPerFrame;
          clonedScrollerXPos -= pixelsPerFrame;
        }

        if (scrollerXPos <= -scrollerRef.current?.offsetWidth) {
          scrollerXPos = scrollerRef.current?.offsetWidth;
        }

        if (clonedScrollerXPos <= -clonedScrollerRef.current?.offsetWidth * 2) {
          clonedScrollerXPos = 0;
        }

        scrollerRef.current?.style.transform = `translateX(${scrollerXPos}px)`;
        clonedScrollerRef.current?.style.transform = `translateX(${clonedScrollerXPos}px)`;
      }

      if (animating) {
        window.requestAnimationFrame(animate);
      }
    }
    window.requestAnimationFrame(animate);

    return () => (animating = false);
  }, []);

  return (
    <div
      className="flex flex-row space-x-4"
      onMouseOver={() => (hoverRef.current = true)}
      onMouseOut={() => (hoverRef.current = false)}
    >
      <div className="flex space-x-8 " ref={scrollerRef}>
        {children}
      </div>
      <div className="flex space-x-8" ref={clonedScrollerRef}>
        {clonedChildren}
      </div>
    </div>
  );
};

export default TestimonialRow;
