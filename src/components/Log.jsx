const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <ol>
          <li key={` ${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row}, {turn.square.col}
          </li>
        </ol>
      ))}
    </ol>
  );
};
export default Log;
