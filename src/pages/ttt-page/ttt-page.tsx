import { TTTState } from '../../assets/stores/state.ts';
import { useEffect } from 'react';
import { Grid2 } from '@mui/material';
import { TTTGamingZone } from '../../ui/ttt-game/TTTGamingZone.tsx';
import { TTTTextData } from '../../ui/ttt-game/TTTTextData.tsx';
import { BackButton } from '../../ui/shared/BackButton.tsx';
// import { TTTGameButtonGroup } from '../../ui/ttt-game/TTTGameButtonGroup.tsx';

export function TTTPage() {
  const resetArea = TTTState((state) => state.resetTTTArea);
  const resetTouched = TTTState((state) => state.resetTouched);
  const resetPlayer = TTTState((state) => state.resetPlayer);
  const setIsNotEnded = TTTState((state) => state.setIsNotEnded);
  const setTTTComment = TTTState((state) => state.setTTTComment);
  const setTTTWinCoomb = TTTState((state) => state.setTTTWinCoomb);

  useEffect(() => {
    resetArea();
    resetTouched();
    resetPlayer();
    setIsNotEnded(true);
    setTTTComment("Player's 1 turn ❌");
    setTTTWinCoomb([[-1, -1]]);
  }, []);

  return (
    <>
      <BackButton />
      <Grid2
        container
        direction="column"
        spacing={10}
        sx={{
          bgcolor: '#cfe8fc',
          gap: 1,
          height: '80vh',
          padding: '0.5rem',
          // width: '70vi',
          justifyContent: 'space-around',
          alignItems: 'center',
          borderRadius: '16px',
        }}
      >
        <TTTGamingZone />
        <TTTTextData />
        {/*<TTTGameButtonGroup />*/}
      </Grid2>
    </>
  );
}
