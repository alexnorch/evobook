import { useState, useEffect } from "react";

// Icons
import { ReactComponent as ArrowLeft } from "../assets/images/arrowleft.svg";
import { ReactComponent as Circle } from "../assets/images/circle.svg";
import { ReactComponent as Line } from "../assets/images/line.svg";

const BookSlider = ({ onOpenBook }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isOpenBookFlag, setIsOpenBookFlag] = useState(false);

  useEffect(() => {
    if (isOpenBookFlag) {
      onOpenBook();
      setIsOpenBookFlag(false);
    }
  }, [isOpenBookFlag]);

  useEffect(() => {
    const arrow = document.querySelector(".book-slider__starter");
    const arrowWidth = arrow.offsetWidth;
    const maxPosition = 0;
    const minPosition = arrow.parentElement.offsetWidth - arrowWidth;

    const onSliderStart = (e) => {
      if (e.target.closest(".book-slider__starter")) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;

        setIsDragging(true);
        setStartX(clientX - currentX);
      }
    };

    const onSliderEnd = () => {
      setIsDragging(false);
    };

    const onSliderMove = (e) => {
      if (isDragging) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const position = clientX - startX;

        setCurrentX(Math.max(-minPosition, Math.min(position, maxPosition)));

        if (position <= -minPosition && !isOpenBookFlag) {
          setIsOpenBookFlag(true);
        }
      }
    };

    window.addEventListener("mousedown", onSliderStart);
    window.addEventListener("mouseup", onSliderEnd);
    window.addEventListener("mousemove", onSliderMove);

    window.addEventListener("touchstart", onSliderStart);
    window.addEventListener("touchend", onSliderEnd);
    window.addEventListener("touchmove", onSliderMove);

    return () => {
      window.removeEventListener("mousedown", onSliderStart);
      window.removeEventListener("mouseup", onSliderEnd);
      window.removeEventListener("mousemove", onSliderMove);

      window.removeEventListener("touchend", onSliderEnd);
      window.removeEventListener("touchstart", onSliderStart);
      window.removeEventListener("touchmove", onSliderMove);
    };
  }, [isDragging]);

  return (
    <div className="book-slider">
      <span className="book-slider__circle">
        <Circle />
      </span>
      <span className="book-slider__line">
        <Line className="book-slider__svg" />
      </span>
      <div className="book-slider__starter" style={{ left: `${currentX}px` }}>
        <ArrowLeft className="test" />
      </div>
    </div>
  );
};

export default BookSlider;
