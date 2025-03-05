import Button from '@mui/material/Button';
import { Routes } from '../../shared/router.ts';
import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';

export function BackButton() {
  const buttonOutlineProps = {
    position: 'absolute',
    top: '-8vh',
    right: '45%',
    inlineSize: '10%',
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
        navigate(Routes.ROOT);
      }}
    >
      <Typography component={'p'} color="info" align="center">
        ⬅️Back
      </Typography>
    </Button>
  );
}
