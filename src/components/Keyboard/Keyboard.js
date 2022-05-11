import { useSelector } from "react-redux";
import Key from "../Key/Key";

const Keyboard = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const { calling } = useSelector((state) => state.phone);

  return (
    <ol className="keyboard">
      {numbers.map((number) => (
        <Key key={number} text={number} disabled={calling} />
      ))}
      <Key text="delete" big={true} disabled={calling} />
    </ol>
  );
};

export default Keyboard;
