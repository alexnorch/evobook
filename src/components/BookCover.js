import { forwardRef } from "react";

const BookCover = forwardRef((props, ref) => (
  <div ref={ref} className="book-cover">
    {props.children}
  </div>
));

export default BookCover;
