// import styles from './styles.module.css';

import { ButtonGroup, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Routes } from '../../shared/router.ts';
import { useNavigate } from 'react-router';

export function GameChoose() {
  const buttonOutlineProps = {
    inlineSize: '40vw',
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

  const navigate = useNavigate();

  const allData = ['🗿📜✂️ Rock Paper Scissors Game', '❌⭕ Tic-Tac-Toe Game'];
  const navigationFunc = (element: string) => {
    if (element.indexOf('✂️') >= 0) {
      navigate(Routes.PRS);
    } else {
      navigate(Routes.XO);
    }
  };

  return (
    <>
      <Typography variant="h4" color="info" align="center">
        Chose a Game to Play
      </Typography>
      <br />
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
              navigationFunc(element);
            }}
          >
            <p>
              {element.split(/ (.*)/s)[0]}
              <br />
              {element.split(/ (.*)/s)[1]}
            </p>
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
}
