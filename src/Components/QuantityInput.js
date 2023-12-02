const QuantityInput = ({ setUserInput, userInput }) => {
  return (
    <input
      type="number"
      onChange={(e) => setUserInput(e.target.value)}
      value={userInput}
    />
  );
};
export default QuantityInput;
