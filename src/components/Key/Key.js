import { useDispatch } from "react-redux";
import {
  addDigitActionCreator,
  removeAllDigitsActionCreator,
} from "../../redux/features/phoneSlice";

const Key = ({ text, big = false, disabled }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {!big && (
        <button
          className="key"
          onClick={() => dispatch(addDigitActionCreator(text))}
          disabled={disabled}
        >
          {text}
        </button>
      )}
      {big && (
        <button
          className="key big"
          onClick={() => dispatch(removeAllDigitsActionCreator)}
          disabled={disabled}
        >
          {text}
        </button>
      )}
    </li>
  );
};

export default Key;
