import "./BookControllers.scss";

// Icons
import { ReactComponent as ArrowLeft } from "../../assets/images/arrowleft.svg";
import { ReactComponent as ArrowRight } from "../../assets/images/arrowright.svg";
import { ReactComponent as VolumeIcon } from "../../assets/images/volume.svg";

const BookControllers = ({
  currentPage,
  pagesLength,
  onNextPage,
  onPrevPage,
  isPagination,
}) => {
  const isPrevActive = currentPage > 1;
  const isNextActive = currentPage + 2 !== pagesLength;

  const leftButton = isPrevActive ? "btn btn_active" : "btn";
  const rightButton = isNextActive ? "btn btn_active" : "btn";

  let paginationClass = "book-controllers__pagination";

  if (isPagination) {
    paginationClass += " book-controllers__pagination_active";
  }

  return (
    <div className="book-controllers">
      <div className={paginationClass}>
        <button onClick={onPrevPage} className={leftButton}>
          <ArrowLeft className="btn__icon" />
        </button>
        <button onClick={onNextPage} className={rightButton}>
          <ArrowRight />
        </button>
      </div>
      <div className="book-controllers__icon">
        <VolumeIcon />
      </div>
    </div>
  );
};

export default BookControllers;
