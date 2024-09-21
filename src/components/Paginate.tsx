import { useState } from "react";
import styled from "styled-components";

interface PaginateI {
  dataLength: number;
  perPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Paginate({
  dataLength,
  perPage,
  setCurrentPage,
  currentPage,
}: PaginateI) {
  const paginateNumbers = [];

  for (let i = 1; i <= Math.ceil(dataLength / perPage); i++) {
    paginateNumbers.push(i);
  }
  const [clickedPage, setClickedPage] = useState<number>(currentPage);
  return (
    <PaginateParent>
      {paginateNumbers.map((paginateNumber) => {
        return (
          <button
            onClick={() => {
              setClickedPage(paginateNumber);
              setCurrentPage(paginateNumber);
            }}
            className={clickedPage === paginateNumber ? "clickedButton" : ""}
            key={paginateNumber}
          >
            {paginateNumber}
          </button>
        );
      })}
    </PaginateParent>
  );
}

const PaginateParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;

  button {
    padding: 5px 10px;
    cursor: pointer;
    font-size: 15px;
    background-color: #ff4343;
    border-radius: 5px;
    border: none;
    color: white;
  }

  .clickedButton {
    outline: 2px solid #ff4343;
    color: #ff4343;
    background-color: white;
    animation: animate 0.3s ease forwards;
  }

  @keyframes animate {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
    }
  }
`;
