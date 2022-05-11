import { useDispatch, useSelector } from "react-redux";
import {
  callActionCreator,
  hangActionCreator,
} from "../../redux/features/phoneSlice";

import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = () => {
  const dispatch = useDispatch();
  const { calling, numbers } = useSelector((state) => state.phone);

  const phoneCallOn = (event) => {
    event.preventDefault();
    if (numbers.lenght < 9) {
      return;
    }
    dispatch(callActionCreator());
  };

  const phoneCallOff = (event) => {
    event.preventDefault();
    dispatch(hangActionCreator());
  };

  return (
    <>
      <Display />
      {!calling && (
        <Action
          action="call"
          isActive={numbers.length === 9}
          actionOnClick={phoneCallOn}
        />
      )}
      {calling && (
        <Action action="hang" isActive={true} actionOnClick={phoneCallOff} />
      )}
    </>
  );
};

export default Actions;
