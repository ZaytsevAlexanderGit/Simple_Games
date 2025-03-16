import {
  Box,
  FormHelperText,
  Grid2,
  Input,
  Modal,
  Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import Button from '@mui/material/Button';
import { TTTState } from '../../assets/stores/state.ts';
import { onlyNumbers } from '../../shared/utils.ts';

interface ITTTModal {
  isOpen: boolean;
}

export function TTTModalAreaSize({ isOpen }: ITTTModal) {
  const [size, setSize] = useState<number | string>(5);
  const [winCond, setWinCond] = useState<number | string>(4);
  const [error, setError] = useState<string>('');

  const setStateAreaSize = TTTState((state) => state.setAreaSize);
  const setStateWinCond = TTTState((state) => state.setWinCond);

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        component="form"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          color: 'black',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: '2vh',
        }}
      >
        <Grid2
          sx={{
            fontSize: 'clamp(0.8rem,1.75vi,1rem)',
            display: 'flex',
            flexDirection: 'row',
            gap: '5vh',
            textAlign: 'center',
          }}
        >
          <Grid2 sx={{ display: 'flex', flexDirection: 'column' }}>
            <Input
              autoFocus
              id="area-size"
              aria-describedby="area-size"
              inputProps={{ style: { textAlign: 'center' } }}
              value={size}
              sx={{
                fontSize: 'inherit',
              }}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (error.length > 0) setError('');
                if (onlyNumbers(event.target.value)) {
                  if (event.target.value.length === 0) {
                    setSize(event.target.value);
                  } else setSize(+event.target.value);
                }
              }}
            />
            <FormHelperText
              sx={{
                fontSize: 'inherit',
                textAlign: 'inherit',
              }}
              id="area-size"
            >
              Area Size
            </FormHelperText>
          </Grid2>

          <Grid2
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Input
              sx={{
                fontSize: 'inherit',
              }}
              inputProps={{ style: { textAlign: 'center' } }}
              id="win-cond"
              aria-describedby="win-cond"
              value={winCond}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (error.length > 0) setError('');
                if (onlyNumbers(event.target.value)) {
                  if (event.target.value.length === 0) {
                    setWinCond(event.target.value);
                  } else setWinCond(+event.target.value);
                }
              }}
            />
            <FormHelperText
              sx={{
                fontSize: 'inherit',
                textAlign: 'inherit',
              }}
              id="win-cond"
            >
              Amount to&nbsp;Win
            </FormHelperText>
          </Grid2>
        </Grid2>
        <Button
          variant="contained"
          sx={{
            ':focus': { outline: 'none' },
          }}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (
              typeof winCond !== 'string' &&
              typeof size !== 'string' &&
              size >= winCond &&
              size <= 10 &&
              winCond > 0
            ) {
              setError('');
              setStateAreaSize(size);
              setStateWinCond(winCond);
            } else {
              setError(
                `10\u00A0>=\u00A0Area Size >=\u00A0Win Condition\u00A0>\u00A00`
              );
            }
          }}
        >
          Start
        </Button>
        {error.length > 0 && (
          <Typography
            sx={{
              fontSize: '0.75rem',
              textAlign: 'center',
            }}
          >
            {error}
          </Typography>
        )}
      </Box>
    </Modal>
  );
}
