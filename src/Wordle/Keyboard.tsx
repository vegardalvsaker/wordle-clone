const keys: string[] = [
  "Q",
  "W",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "ENTER",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "<=X",
];

interface Props {
  onClick: (key: string) => void;
}

export const Keyboard: React.FC<Props> = (props) => {
  return (
    <div className="keyboard">
      {keys.map((key) => (
        <button key={key} onClick={() => props.onClick(key)} className="key">
          {key.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
