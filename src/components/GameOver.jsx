const GameOver = ({ winner }) => {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It's a draw!</p>}

      <button>Rematch!</button>
    </div>
  );
};
export default GameOver;
