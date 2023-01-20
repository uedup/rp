import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

type TheBookProps = {};

export const TheBook: React.FC<TheBookProps> = () => {
  const params = useParams();
  const [search] = useSearchParams()
  const total =  search.get('amount')
  return (
    <div>
      <h3>
        <div>Book #{params.id}</div>
        <div>{!!total && `total:${total}`}</div>
        <span>e.g. /main/books/ABC?amount=100</span>
      </h3>
    </div>
  );
};
export default TheBook;
