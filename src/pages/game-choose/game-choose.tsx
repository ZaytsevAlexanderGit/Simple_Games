import {
  Box,
  ButtonGroup,
  FormHelperText,
  Grid2,
  Input,
  Modal,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import { Routes } from '../../shared/router.ts';
import { useNavigate } from 'react-router';
import { ChangeEvent, useState } from 'react';
import { TTTState } from '../../assets/stores/state.ts';

export function GameChoose() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [size, setSize] = useState<number>(5);
  const [winCond, setWinCond] = useState<number>(4);
  const [error, setError] = useState<string>('');

  const setStateAreaSize = TTTState((state) => state.setAreaSize);
  const setStateWinCond = TTTState((state) => state.setWinCond);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const navigate = useNavigate();
  const allData = ['🗿📜✂️ Rock Paper Scissors Game', '❌⭕ Tic-Tac-Toe Game'];
  const navigationFunc = (element: string) => {
    if (element.indexOf('✂️') >= 0) {
      navigate(Routes.PRS);
    } else {
      navigate(Routes.XO);
    }
  };

  function onlyNumbers(s: string) {
    for (let i = 0; i < s.length; i++) {
      if (s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57) {
        return false;
      }
    }
    return true;
  }

  const buttonOutlineProps = {
    inlineSize: '40vw',
    ':focus': {
      outline: '1px black solid',
      zIndex: 1,
      transform: 'scale(1.05)',
    },
    ':focus-visible': {
      outline: '1px black solid',
      zIndex: 1,
      transform: 'scale(1.05)',
    },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10vh' }}>
      <Typography
        variant="h4"
        color="info"
        align="center"
        bgcolor=""
        sx={{
          padding: '15px',
          borderRadius: '10px',
          bgcolor: 'azure',
          boxShadow: '0px 0px 0px 2px white',
          border: '1px solid black',
          outline: '1px solid black',
          outlineOffset: '1px',
        }}
      >
        Chose a Game to Play
      </Typography>
      <br />
      <ButtonGroup
        size="large"
        variant="contained"
        aria-label="Main gaming buttons"
        color="info"
      >
        {allData.map((element) => (
          <Button
            key={element}
            sx={buttonOutlineProps}
            onClick={() => {
              if (!element.includes('❌⭕')) navigationFunc(element);
              else {
                handleOpen();
              }
            }}
          >
            <p>
              {element.split(/ (.*)/s)[0]}
              <br />
              {element.split(/ (.*)/s)[1]}
            </p>
          </Button>
        ))}
      </ButtonGroup>
      <Modal
        open={isOpen}
        onClose={handleClose}
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
            width: '50vi',
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
              inlineSize: '50vi',
              textAlign: 'center',
            }}
          >
            <Grid2 sx={{ display: 'flex', flexDirection: 'column' }}>
              <Input
                id="area-size"
                aria-describedby="area-size"
                value={size}
                sx={{
                  fontSize: 'inherit',
                }}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (error.length > 0) setError('');
                  if (onlyNumbers(event.target.value))
                    setSize(+event.target.value);
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
                  textAlign: 'inherit',
                }}
                id="win-cond"
                aria-describedby="win-cond"
                value={winCond}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (onlyNumbers(event.target.value))
                    if (error.length > 0) setError('');
                  setWinCond(+event.target.value);
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
              if (size >= winCond && winCond > 0) {
                setError('');
                setStateAreaSize(size);
                setStateWinCond(winCond);
                handleClose();
                navigate(Routes.XO);
              } else {
                setError(`Area Size >=\u00A0Win Condition\u00A0>\u00A00`);
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
    </div>
  );
}
