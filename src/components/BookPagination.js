import { ReactComponent as ArrowLeft } from "../assets/images/arrowleft.svg";
import { ReactComponent as ArrowRight } from "../assets/images/arrowright.svg";

const BookPagination = ({
  currentPage,
  pagesLength,
  onNextPage,
  onPrevPage,
  isPagination,
}) => {
  console.log(currentPage);
  const isPrevActive = currentPage > 1;
  const isNextActive = currentPage + 2 !== pagesLength;

  const leftButton = isPrevActive ? "btn btn_active" : "btn";
  const rightButton = isNextActive ? "btn btn_active" : "btn";

  let paginationClass = "book-pagination";

  if (isPagination) {
    paginationClass += " book-pagination_active";
  }

  return (
    <div className={paginationClass}>
      <button onClick={onPrevPage} className={leftButton}>
        <ArrowLeft className="btn__icon" />
      </button>
      <button onClick={onNextPage} className={rightButton}>
        <ArrowRight />
      </button>
    </div>
  );
};

// SVG active nonactive

export default BookPagination;
