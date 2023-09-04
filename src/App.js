import { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { getBookSize } from "./helpers";

// Components
import { BookClosed, BookNavigation, BookPage, BookCover } from "./components";

// Dummy data
import { pages } from "./data";

const App = () => {
  const [isOpenBook, setIsOpenBook] = useState(false);
  const [isPagination, setIsPagination] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagesLength, setPagesLength] = useState(0);
  const [bookSize, setBookSize] = useState(getBookSize());

  const bookRef = useRef(null);
  const appRef = useRef(null);

  const appClassNames = isOpenBook
    ? "app__content app__content_active"
    : "app__content";

  // Updating the book size due to the current screen size
  useEffect(() => {
    const updateScreenSize = () => {
      setBookSize(getBookSize());
    };

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, [bookSize.height, bookSize.width]);

  // Opening the book after delay
  useEffect(() => {
    let timeoutId;

    if (isOpenBook) {
      timeoutId = setTimeout(() => {
        setIsPagination(true);
        appRef.current.classList.add("app_active");
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpenBook]);

  const onOpenBook = () => {
    const Flip = bookRef.current.pageFlip();

    Flip.flipNext();
    setIsOpenBook(true);
  };

  const onNextPage = () => {
    bookRef.current.pageFlip().flipNext();
  };

  const onPrevPage = () => {
    if (currentPage > 1) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const onFlipHandler = (e) => {
    if (e.data === 0 && !isOpenBook) {
      setIsOpenBook(false);
      setIsPagination(false);
    }

    setCurrentPage(e.data);
  };

  const onFlipInit = (e) => {
    const flipObject = e.object;

    setPagesLength(flipObject.getPageCount());
  };

  return (
    <div ref={appRef} className="app">
      {!isOpenBook && <BookClosed onOpenBook={onOpenBook} />}

      <div className={appClassNames}>
        <HTMLFlipBook
          ref={bookRef}
          onFlip={onFlipHandler}
          onInit={onFlipInit}
          height={bookSize.height}
          width={bookSize.width}
          minWidth={290}
          maxWidth={1000}
          minHeight={430}
          maxHeight={1533}
          size="stretch"
          drawShadow={false}
          showCover={true}
        >
          <BookCover />
          {pages.map((item, i) => (
            <BookPage {...item} key={i} />
          ))}
        </HTMLFlipBook>
      </div>
      <BookNavigation
        isPagination={isPagination}
        currentPage={currentPage}
        pagesLength={pagesLength}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
      />
    </div>
  );
};

export default App;
