import { useDispatch } from "react-redux";
import { callActionCreator } from "../../redux/features/phoneSlice";

const Action = ({ action, isActive, actionOnClick }) => {
  const dispatch = useDispatch();
  const clickAnchor = (event) => {
    event.preventDefault();
    actionOnClick();
    dispatch(callActionCreator);
  };

  return (
    <>
      <a
        href={action}
        className={`${action}${isActive ? " active" : ""}`}
        onClick={clickAnchor}
      >
        {action[0]?.toUpperCase() + action.slice(1)}
      </a>
    </>
  );
};

export default Action;
