import { Grid2 } from '@mui/material';
import { PlayerZone } from './PlayerZone.tsx';

export const GamingZone = () => {
  return (
    <Grid2 container direction="row" spacing={4}>
      <PlayerZone player={'player'} />
      <PlayerZone player={'computer'} />
    </Grid2>
  );
};
