import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import { GamePosib, gameState } from '../assets/stores/state.ts';

interface IGameData {
  playerState: GamePosib;
  computerState: GamePosib;
  touched: boolean;
}

export const GameButtonGroup = () => {
  const buttonOutlineProps = {
    ':focus': {
      outline: '1px black solid',
      zIndex: 1,
    },
    ':focus-visible': {
      outline: '1px black solid',
      zIndex: 1,
    },
  };

  const setPlayerState = gameState((state) => state.setPlayerData);
  const setComputerState = gameState((state) => state.setComputerData);

  const increaseTouched = gameState((state) => state.increaseTouched);

  const increasePlayerScore = gameState((state) => state.increasePlayerScore);
  const increaseComputerScore = gameState(
    (state) => state.increaseComputerScore
  );
  const allData = ['✂️ Scissors', '📜 Paper', '🗿 Rock'];

  const randomComputerState = (): GamePosib => {
    const r = Math.floor(Math.random() * 3);
    return allData[r].split(' ')[1] as GamePosib;
  };

  const whoWins = ({
    playerState,
    computerState,
    touched,
  }: IGameData): string => {
    const amount = 1;
    playerState = playerState.toLowerCase() as GamePosib;
    computerState = computerState.toLowerCase() as GamePosib;

    if (playerState === computerState && touched) {
      return 'Draw. Try More!';
    }
    if (
      (playerState === 'rock' && computerState === 'scissors') ||
      (playerState === 'scissors' && computerState === 'paper') ||
      (playerState === 'paper' && computerState === 'rock')
    ) {
      increasePlayerScore(amount);
      return 'Player Win!';
    } else {
      increaseComputerScore(amount);
      return 'Computer Win!';
    }
  };
  const setComment = gameState((state) => state.setComment);

  return (
    <ButtonGroup
      size="large"
      variant="contained"
      aria-label="Main gaming buttons"
      color="info"
    >
      {allData.map((element) => (
        <Button
          key={element}
          sx={buttonOutlineProps}
          onClick={() => {
            increaseTouched();
            const elem = element.split(' ')[1].toLowerCase() as GamePosib;
            setPlayerState(elem);
            const comp = randomComputerState();
            setComputerState(comp);
            setComment(
              whoWins({
                playerState: elem,
                computerState: comp,
                touched: true,
              })
            );
          }}
        >
          {element}
        </Button>
      ))}
    </ButtonGroup>
  );
};
