import React, { useEffect, useState } from "react";
import { Board } from "./Board";
import { Keyboard } from "./Keyboard";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

enum LetterState {
  UNTOUCHED,
  NOT_IN_WORD,
  WRONG_INDEX,
  CORRECT_INDEX,
}

interface Cell {
  letter: string;
  letterState: LetterState;
  key: string;
}

const cell: Cell = { letter: ".", letterState: LetterState.UNTOUCHED, key: "" };

const initialRows: Row[] = [
  [cell, cell, cell, cell, cell],
  [cell, cell, cell, cell, cell],
  [cell, cell, cell, cell, cell],
  [cell, cell, cell, cell, cell],
  [cell, cell, cell, cell, cell],
  [cell, cell, cell, cell, cell],
];

export type Row = Cell[];

const TODAYS_WORD = "TANGY";

export const Wordle: React.FC = () => {
  const [rows, setRows] = useState(initialRows);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCellIndex, setCurrentCellIndex] = useState(0);

  useEffect(() => {
    const newRows = rows.map((row) => {
      return row.map((cell) => {
        return {
          ...cell,
          key: uuidv4(),
        };
      });
    });
    setRows(newRows);
  }, []);

  const handleKeyboardClick = (keyStroke: string) => {
    const row = [...rows[currentRow]];
    if (keyStroke === "ENTER") {
      handleEnter(row);
    } else if (keyStroke === "<=X") {
      handleDelete(row);
    } else {
      if (currentCellIndex === 5) {
        return;
      }
      row[currentCellIndex].letter = keyStroke.toUpperCase();
      setCurrentCellIndex(currentCellIndex + 1);
    }
  };

  const handleEnter = (row: Row) => {
    if (currentCellIndex !== 5) {
      alert("Not a 5-letter word");
    }
    if (row[4]) {
      alert("Checking word");
      const word = row.join("");
    }
  };

  const handleDelete = (row: Row) => {
    if (currentCellIndex < 1) {
      alert("No letter to delete");
    }
  };
  return (
    <div className="game-container">
      <h1>Wordle</h1>
      <Board rows={rows} />
      <Keyboard onClick={handleKeyboardClick} />
    </div>
  );
};
