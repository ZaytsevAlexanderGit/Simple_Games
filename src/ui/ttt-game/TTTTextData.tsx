import { motion } from 'motion/react';
import { TTTState } from '../../assets/stores/state.ts';
import { Grid2, Typography } from '@mui/material';
import Button from '@mui/material/Button';

export function TTTTextData() {
  const comment = TTTState((state) => state.TTTComment);

  const resetArea = TTTState((state) => state.resetTTTArea);
  const resetTouched = TTTState((state) => state.resetTouched);
  const resetPlayer = TTTState((state) => state.resetPlayer);
  const setIsNotEnded = TTTState((state) => state.setIsNotEnded);
  const setTTTComment = TTTState((state) => state.setTTTComment);
  const setTTTWinCoomb = TTTState((state) => state.setTTTWinCoomb);

  return (
    <Grid2 container direction="row" spacing={2}>
      <motion.p
        style={{
          margin: '0',
          color: 'black',
          outline: '1px dashed black',
          backgroundColor: 'rgb(197, 232, 252)',
          borderRadius: '8px',
          // height: '10vh',
          padding: '0.25rem',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50vi',
          fontSize: '1.5rem',
        }}
        key={comment}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {comment}
      </motion.p>
      <>
        <Button
          sx={{
            border: '1px solid black',
            boxShadow: '1px 1px 1px black',
            ':hover': {
              backgroundColor: 'transparent',
              border: '1px solid black',
            },
            ':active': {
              outline: 'none',
              boxShadow: 'none',
              backgroundColor: 'transparent',
            },
            ':focus': {
              outline: 'none',

              backgroundColor: 'transparent',
            },
            ':focus-visible': {
              outline: 'none',
              backgroundColor: 'transparent',
            },
          }}
          onClick={() => {
            resetArea();
            resetTouched();
            resetPlayer();
            setIsNotEnded(true);
            setTTTComment("Player's 1 turn ❌");
            setTTTWinCoomb([[-1, -1]]);
          }}
        >
          <Typography component={'p'} color="info" align="center">
            Restart
          </Typography>
        </Button>
      </>
    </Grid2>
  );
}
