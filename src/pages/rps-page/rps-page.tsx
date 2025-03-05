import { Grid2 } from '@mui/material';
import { RPSGameButtonGroup } from '../../ui/rps-game/RPSGameButtonGroup.tsx';
import { RPSGamingZone } from '../../ui/rps-game/RPSGamingZone.tsx';
import { RPSTextData } from '../../ui/rps-game/RPSTextData.tsx';
import { BackButton } from '../../ui/shared/BackButton.tsx';

export function RPSPage() {
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
          padding: '1rem',
          // width: '70vi',
          justifyContent: 'space-around',
          alignItems: 'center',
          borderRadius: '16px',
        }}
      >
        <RPSGamingZone />
        <RPSTextData />
        <RPSGameButtonGroup />
      </Grid2>
    </>
  );
}
