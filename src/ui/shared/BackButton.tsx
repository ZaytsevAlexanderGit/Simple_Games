import Button from '@mui/material/Button';
import { Routes } from '../../shared/router.ts';
import { useLocation, useNavigate } from 'react-router';
import { Typography } from '@mui/material';
import { TTTState } from '../../assets/stores/state.ts';

export function BackButton() {
  const location = useLocation();
  const fromChoose = TTTState((state) => state.fromChoose);
  const setIsFromChoose = TTTState((state) => state.setIsFromChoose);
  const setStateAreaSize = TTTState((state) => state.setAreaSize);
  const setStateWinCond = TTTState((state) => state.setWinCond);

  const buttonOutlineProps = {
    position: 'absolute',
    top: '-8vh',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    ':hover': {
      backgroundColor: 'transparent',
    },
    ':focus': {
      outline: 'none',
      zIndex: 1,
      transform: 'scale(1.05)',
    },
    ':focus-visible': {
      outline: 'none',
      zIndex: 1,
      transform: 'scale(1.05)',
    },
  };

  const navigate = useNavigate();

  return (
    <Button
      sx={buttonOutlineProps}
      onClick={() => {
        if (location.pathname.includes('xo') && fromChoose) setIsFromChoose();
        setStateAreaSize(0);
        setStateWinCond(0);
        navigate(Routes.ROOT);
      }}
    >
      <Typography component={'p'} color="info" align="center">
        ⬅️Back
      </Typography>
    </Button>
  );
}
