import "../styles/Buttons.css";

const Buttons = ({ clickHandler, clearHandler, calculateHandler }) => {
  return (
    <>
      <button className="button" onClick={clickHandler}> ( </button>
      <button className="button" onClick={clickHandler}> ) </button>
      <button className="button" onClick={clickHandler}> ^ </button>
      <button className="button" onClick={clearHandler}> C </button>

      <button className="button" onClick={clickHandler}> 1 </button>
      <button className="button" onClick={clickHandler}> 2 </button>
      <button className="button" onClick={clickHandler}> 3 </button>
      <button className="button" onClick={clickHandler}> + </button>

      <button className="button" onClick={clickHandler}> 4 </button>
      <button className="button" onClick={clickHandler}> 5 </button>
      <button className="button" onClick={clickHandler}> 6 </button>
      <button className="button" onClick={clickHandler}> - </button>

      <button className="button" onClick={clickHandler}> 7 </button>
      <button className="button" onClick={clickHandler}> 8 </button>
      <button className="button" onClick={clickHandler}> 9 </button>
      <button className="button" onClick={clickHandler}> * </button>

      <button className="button" onClick={clickHandler}> . </button>
      <button className="button" onClick={clickHandler}> 0 </button>
      <button className="button equals" onClick={calculateHandler}> = </button>
      <button className="button" onClick={clickHandler}> / </button>
    </>
  );
};

export default Buttons;
