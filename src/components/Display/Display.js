import { useSelector } from "react-redux";

const Display = () => {
  const { numbers } = useSelector((state) => state.phone);
  return <span className="number">{numbers}</span>;
};

export default Display;
