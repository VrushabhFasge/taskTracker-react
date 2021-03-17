const Button = ({ onClick, showAdd }) => {
  return (
    <button onClick={onClick} className="btn" style={{backgroundColor:showAdd ? 'red' :'green'}}>
      Add
    </button>
  );
};
export default Button;
