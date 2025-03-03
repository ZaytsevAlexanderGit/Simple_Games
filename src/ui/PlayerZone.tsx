import { motion } from 'motion/react';
import { gameState } from '../assets/stores/state.ts';
import { Box } from '@mui/material';

interface IPlayerZone {
  player: 'player' | 'computer';
}

export function PlayerZone({ player }: IPlayerZone) {
  const playerState = gameState((state) => state.player);
  const computerState = gameState((state) => state.computer);
  const playerScore = gameState((state) => state.playerScore);
  const computerScore = gameState((state) => state.computerScore);
  const touched = gameState((state) => state.touched);

  const cardVis = {
    borderRadius: '8px',
    height: '30vh',
    width: '30vi',
    bgcolor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '1rem',
  };

  return (
    <>
      {player === 'player' ? (
        <Box sx={cardVis}>
          <motion.div
            key={touched}
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img width={100} src={`./src/assets/imgs/${playerState}.png`} />
          </motion.div>
          <p>Player Score: {playerScore}</p>
        </Box>
      ) : (
        <Box sx={cardVis}>
          <motion.div
            key={touched}
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img width={100} src={`./src/assets/imgs/${computerState}.png`} />
          </motion.div>
          <p>Computer Score: {computerScore}</p>
        </Box>
      )}
    </>
  );
}
