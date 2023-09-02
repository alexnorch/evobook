import BookSlider from "./BookSlider";

const BookClosed = ({ onOpenBook }) => {
  return (
    <div className="backdrop">
      <div className="book-cover book-cover_absolute">
        <div className="slider">
          <BookSlider onOpenBook={onOpenBook} />
        </div>
      </div>
    </div>
  );
};

export default BookClosed;

// export default BookClosed;

// import { forwardRef } from "react";

// const BookCoverTest = forwardRef((props, ref) => (
//   <div ref={ref} className="book-cover">
//     {props.children}
//   </div>
// ));

// export default BookCoverTest;
