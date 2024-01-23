const prize = {
  1: "first",
  2: "second",
  3: "third",
  4: "x"
}
function PrizeButton({number = 1}) {
  return ( 
    <button>
      Giải {prize[number]}
    </button>
  );
}

export default PrizeButton;