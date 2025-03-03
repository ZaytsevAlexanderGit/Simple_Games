import { Grid2 } from '@mui/material';
import { GameButtonGroup } from '../ui/GameButtonGroup.tsx';
import { GamingZone } from '../ui/GamingZone.tsx';
import { TextData } from '../ui/TextData.tsx';

export function MainPage() {
  return (
    <Grid2
      container
      direction="column"
      spacing={10}
      sx={{
        bgcolor: '#cfe8fc',
        gap: 1,
        height: '80vh',
        padding: '1rem',
        // width: '70vi',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '16px',
      }}
    >
      <GamingZone />
      <TextData />
      <GameButtonGroup />
    </Grid2>
  );
}
