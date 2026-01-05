

function Square({value,onSquareClick}) {
  
  
  return (
    <>
      <button
        className="bg-white h-12 w-12 border border-gray-400 m-2 leading-12 text-lg font-bold"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
}

export default Square;
