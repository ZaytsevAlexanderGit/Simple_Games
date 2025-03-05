import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import { RPSState } from '../../assets/stores/state.ts';
import { RPSGamePosib } from '../../assets/stores/rps-data/state.ts';

interface IGameData {
  playerState: RPSGamePosib;
  computerState: RPSGamePosib;
  touched: boolean;
}

export const RPSGameButtonGroup = () => {
  const buttonOutlineProps = {
    inlineSize: '15vi',
    ':focus': {
      outline: '1px black solid',
      zIndex: 1,
      transform: 'scale(1.05)',
    },
    ':focus-visible': {
      outline: '1px black solid',
      zIndex: 1,
      transform: 'scale(1.05)',
    },
  };

  const setPlayerState = RPSState((state) => state.setRPSPlayerData);
  const setComputerState = RPSState((state) => state.setRPSComputerData);

  const increaseTouched = RPSState((state) => state.increaseRPSTouched);

  const increasePlayerScore = RPSState((state) => state.increaseRPSPlayerScore);
  const increaseComputerScore = RPSState(
    (state) => state.increaseRPSComputerScore
  );
  const allData = ['✂️ Scissors', '📜 Paper', '🗿 Rock'];

  const randomComputerState = (): RPSGamePosib => {
    const r = Math.floor(Math.random() * 3);
    return allData[r].split(' ')[1] as RPSGamePosib;
  };

  const whoWins = ({
    playerState,
    computerState,
    touched,
  }: IGameData): string => {
    const amount = 1;
    playerState = playerState.toLowerCase() as RPSGamePosib;
    computerState = computerState.toLowerCase() as RPSGamePosib;

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
  const setComment = RPSState((state) => state.setRPSComment);

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
            const elem = element.split(' ')[1].toLowerCase() as RPSGamePosib;
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
