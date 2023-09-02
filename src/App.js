import { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

// Components
import { BookClosed, BookPagination, BookPage, BookCover } from "./components";

// Dummy data
import { pages } from "./data";

const App = () => {
  const [isOpenBook, setIsOpenBook] = useState(false);
  const [isPagination, setIsPagination] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagesLength, setPagesLength] = useState(0);

  const bookRef = useRef(null);
  const appRef = useRef(null);

  const appClassNames = isOpenBook
    ? "app__content app__content_active"
    : "app__content";

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
    if (e.data === 0) {
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
          height="560"
          width="435"
          size="stretch"
          drawShadow={false}
          showCover={true}
          className="my-book"
        >
          <BookCover />
          {pages.map((item, i) => (
            <BookPage {...item} pageNum={i} key={i} />
          ))}
        </HTMLFlipBook>
      </div>

      <BookPagination
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
