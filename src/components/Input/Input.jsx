const Input = ({ inputChangeHandler, value }) => {
  return <input type="text" onChange={inputChangeHandler} value={value} />;
};

export default Input;
