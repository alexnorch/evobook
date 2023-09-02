import { ReactComponent as ArrowLeft } from "../assets/images/arrowleft.svg";
import { ReactComponent as Circle } from "../assets/images/round.svg";
import { useState, useEffect } from "react";

const BookSlider = ({ onOpenBook }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  useEffect(() => {
    const arrow = document.querySelector(".book-slider__starter");
    const arrowWidth = arrow.offsetWidth;
    const maxPosition = 0;
    const minPosition = arrow.parentElement.offsetWidth - arrowWidth + 6;

    const onMouseDown = (e) => {
      if (e.target.closest(".book-slider__starter")) {
        setIsDragging(true);
        setStartX(e.clientX - currentX);
      }
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    const onMouseMove = (e) => {
      if (isDragging) {
        const position = e.clientX - startX;
        setCurrentX(Math.max(-minPosition, Math.min(position, maxPosition)));

        if (position <= -minPosition) {
          onOpenBook();
        }
      }
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isDragging]);

  return (
    <div className="book-slider">
      <span className="book-slider__circle">
        <Circle />
      </span>
      <span className="book-slider__line"></span>
      <div className="book-slider__starter" style={{ left: `${currentX}px` }}>
        <ArrowLeft className="test" />
      </div>
    </div>
  );
};

export default BookSlider;
