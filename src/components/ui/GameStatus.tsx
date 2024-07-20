interface IGameStatusProps {
  currentPlayer: string;
  isTie: boolean;
  winner: string | null;
}

type TGetMessage = (
  isTie: boolean,
  winner: string | null,
  player: string
) => string;

const getMessage: TGetMessage = (isTie, winner, player) => {
  if (isTie) return "It's a tie!";
  if (!!winner) return `Player ${winner} wins!`;
  return `${player}'s Turn`;
};

const GameStatus: React.FC<IGameStatusProps> = (props) => {
  const { currentPlayer: player, isTie, winner } = props;
  const message = getMessage(isTie, winner, player);
  return (
    <div className="mt-8">
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
};

export default GameStatus;
