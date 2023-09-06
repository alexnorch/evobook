import { forwardRef } from "react";
import "./BookCover.scss";

const BookCover = forwardRef((props, ref) => (
  <div ref={ref} className="book-cover">
    {props.children}
  </div>
));

export default BookCover;
