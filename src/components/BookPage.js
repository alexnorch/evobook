import { forwardRef } from "react";

import { ReactComponent as PageNumberIcon } from "../assets/images/pagenumber.svg";

const BookPage = forwardRef(({ title, picture, story, pageNum }, ref) => {
  return (
    <div ref={ref} className="page" data-density="soft">
      <div className="page__content">
        {title && <h1 className="page__title">{title}</h1>}

        <div className="page__image">
          <img src={picture} alt="story image" />
        </div>

        <p className="page__text">{story}</p>

        <div className="page__bottom">
          <PageNumberIcon />
          <span className="page__num">{pageNum + 1}</span>
        </div>
      </div>
    </div>
  );
});

export default BookPage;
