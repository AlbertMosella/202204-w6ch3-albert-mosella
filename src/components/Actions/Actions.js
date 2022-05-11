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

  return (
    <>
      <Display />
      {!calling && (
        <Action
          action="call"
          isActive={numbers.length === 9}
          actionOnClick={() => dispatch(callActionCreator)}
        />
      )}
      {calling && (
        <Action
          action="hang"
          isActive={true}
          actionOnClick={() => dispatch(hangActionCreator)}
        />
      )}
    </>
  );
};

export default Actions;
