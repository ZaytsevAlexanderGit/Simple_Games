import { TTTState } from '../../assets/stores/state.ts';
import { useEffect } from 'react';
import { Grid2, useMediaQuery } from '@mui/material';
import { TTTGamingZone } from '../../ui/ttt-game/TTTGamingZone.tsx';
import { TTTTextData } from '../../ui/ttt-game/TTTTextData.tsx';
import { BackButton } from '../../ui/shared/BackButton.tsx';
import { TTTModalAreaSize } from '../../ui/ttt-game/TTTModalAreaSize.tsx';

export function TTTPage() {
  const resetTTTGameState = TTTState((state) => state.resetTTTGameState);
  const resetArea = TTTState((state) => state.resetTTTArea);
  const matches = useMediaQuery('(min-width:650px)');

  const AreaSize = TTTState((state) => state.TTTAreaSize);

  useEffect(() => {
    if (AreaSize !== 0) {
      resetTTTGameState();
      resetArea();
    }
  }, [AreaSize]);

  return (
    <>
      {AreaSize === 0 && <TTTModalAreaSize isOpen={true} />}
      <title>Tick-Tack-Toe</title>
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
            padding: '0.5rem',
            // width: '70vi',
            // width: matches ? '50vi' : 'auto',
            inlineSize: matches ? '50vi' : '70vi',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius: '16px',
          }}
        >
          <TTTGamingZone />
          <TTTTextData />
        </Grid2>
      </div>
    </>
  );
}
