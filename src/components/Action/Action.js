const Action = ({ action, isActive, actionOnClick }) => {
  return (
    <>
      <a
        href={action}
        className={`${action}${isActive ? " active" : ""}`}
        onClick={actionOnClick}
      >
        {action[0]?.toUpperCase() + action.slice(1)}
      </a>
    </>
  );
};

export default Action;
