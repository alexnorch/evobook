import BookSlider from "../BookSlider/BookSlider";
import "./BookClosed.scss";

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
