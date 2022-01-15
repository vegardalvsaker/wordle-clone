import React from "react";
import { Row } from ".";
import { v4 as uuidv4 } from "uuid";
interface Props {
  rows: Row[];
}

export const Board: React.FC<Props> = ({ rows }: Props) => {
  return (
    <div className="board">
      {rows.map((row) => (
        <div className="row">
          {row.map((cell) => (
            <span key={uuidv4()} className="cell">
              {cell.letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
