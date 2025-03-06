import { motion } from 'motion/react';
import { TTTState } from '../../assets/stores/state.ts';
import { Grid2, Typography, useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';

export function TTTTextData() {
  const comment = TTTState((state) => state.TTTComment);

  const resetArea = TTTState((state) => state.resetTTTArea);
  const resetTTTGameState = TTTState((state) => state.resetTTTGameState);

  const matches = useMediaQuery('(min-width:650px)');

  return (
    <Grid2
      container
      spacing={2}
      sx={{
        display: 'flex',
        flexDirection: matches ? 'row' : 'column',
      }}
    >
      <div
        style={{
          margin: '0',
          color: 'black',
          outline: '1px solid black',
          border: '1px solid black',
          backgroundColor: 'white',
          borderRadius: '8px',
          height: matches ? '10vh' : '6vh',
          padding: '0.25rem',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: matches ? '30vi' : '50vi',
          fontSize: matches ? '1.5rem' : '1.25rem',
        }}
      >
        <motion.p
          key={comment}
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {comment}
        </motion.p>
      </div>
      <>
        <Button
          disableRipple
          sx={{
            border: '1px solid black',
            boxShadow: '1px 1px 1px black',
            backgroundColor: 'white',
            ':hover': {
              boxShadow: '2px 2px 3px black',
              border: '1px solid black',
            },
            ':active': {
              outline: 'none',
              boxShadow: 'none',
            },
            ':focus': {
              outline: 'none',
            },
            ':focus-visible': {
              outline: 'none',
            },
          }}
          onClick={() => {
            resetTTTGameState();
            resetArea();
          }}
        >
          <Typography component={'p'} color="black" align="center">
            Restart
          </Typography>
        </Button>
      </>
    </Grid2>
  );
}
