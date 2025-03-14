import { Grid2, useMediaQuery } from '@mui/material';
import { RPSGameButtonGroup } from '../../ui/rps-game/RPSGameButtonGroup.tsx';
import { RPSGamingZone } from '../../ui/rps-game/RPSGamingZone.tsx';
import { RPSTextData } from '../../ui/rps-game/RPSTextData.tsx';
import { BackButton } from '../../ui/shared/BackButton.tsx';
import { useEffect } from 'react';
import { RPSState } from '../../assets/stores/state.ts';

export function RPSPage() {
  const resetRPSState = RPSState((state) => state.resetRPSState);
  const matches = useMediaQuery('(min-width:575px)');

  useEffect(() => {
    resetRPSState();
  }, []);

  return (
    <>
      <title>Rock,Paper,Scissors</title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <BackButton />
        <Grid2
          container
          direction="column"
          spacing={10}
          sx={{
            bgcolor: '#cfe8fc',
            gap: 1,
            height: '80vh',
            padding: '1rem',
            width: matches ? '60vi' : 'auto',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius: '16px',
          }}
        >
          <RPSGamingZone />
          <RPSTextData />
          <RPSGameButtonGroup />
        </Grid2>
      </div>
    </>
  );
}
