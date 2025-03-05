import { Box, TableCell } from '@mui/material';
import { TTTGamePosib } from '../../assets/stores/ttt-data/state.ts';
import { TTTWinCheck } from '../../shared/utils.ts';
import { TTTState } from '../../assets/stores/state.ts';

interface IAreaCell {
  elem: TTTGamePosib;
  rowIndex: number;
  elemIndex: number;
}

export const TTTAreaCell = ({ elem, rowIndex, elemIndex }: IAreaCell) => {
  const winCondition = TTTState((state) => state.TTTWinCondition);
  const touched = TTTState((state) => state.touched);
  const curPlayer = TTTState((state) => state.TTTCurPlayer);
  const TTTArea = TTTState((state) => state.TTTArea);
  const isNotEnded = TTTState((state) => state.isNotEnded);
  const TTTWinCoomb = TTTState((state) => state.TTTWinCoomb);

  const setIsNotEnded = TTTState((state) => state.setIsNotEnded);
  const setComment = TTTState((state) => state.setTTTComment);
  const increaseTouched = TTTState((state) => state.increaseTouched);
  const setCellData = TTTState((state) => state.setCellData);
  const switchPlayer = TTTState((state) => state.switchPlayer);
  const setTTTWinCoomb = TTTState((state) => state.setTTTWinCoomb);

  return (
    <TableCell
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: !TTTWinCoomb.map((sub) => sub.toString()).includes(
          [[rowIndex], [elemIndex]].toString()
        )
          ? 'black'
          : 'rgb(104,170,202)',
        scale: !TTTWinCoomb.map((sub) => sub.toString()).includes(
          [[rowIndex], [elemIndex]].toString()
        )
          ? 1
          : 1.05,
        color: 'white',
        textAlign: 'center',
        padding: '1px',
        borderRadius: '5px',
        outline: '1px solid black',
        outlineOffset: '1px',
        cursor:
          TTTArea[rowIndex][elemIndex] === 'none' && isNotEnded
            ? 'pointer'
            : 'default',
        ':hover':
          TTTArea[rowIndex][elemIndex] === 'none' && isNotEnded
            ? {
                transform: 'scale(1.1)',
                backgroundColor: 'rgb(125,147,158)',
              }
            : {},
      }}
      onClick={() => {
        if (TTTArea[rowIndex][elemIndex] === 'none' && isNotEnded) {
          console.log(TTTArea.length);
          setCellData({
            col: elemIndex,
            row: rowIndex,
            type: curPlayer === 'player1' ? 'cross' : 'zero',
          });
          increaseTouched();
          switchPlayer();
          const quickCheck = TTTWinCheck(TTTArea, winCondition);
          if (quickCheck[0]) {
            setComment(
              `${quickCheck[1].toUpperCase() === 'CROSS' ? '❌' : '⭕'} WINS!!!`
            );
            setIsNotEnded(false);
            setTTTWinCoomb(quickCheck[2]);
          } else {
            if (touched === TTTArea.length * TTTArea.length - 1)
              setComment(`Draw. Try One More Time.`);
            else
              setComment(
                `Player's ${((touched + 1) % 2) + 1} turn ${touched % 2 === 0 ? '⭕' : '❌'}`
              );
          }
        }
      }}
    >
      <Box
        sx={{
          inlineSize: `clamp(30px, calc(40vi / ${TTTArea.length}), 50px)`,
          aspectRatio: 1 / 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {elem !== 'none' ? (
          <img
            style={{
              width: `clamp(30px, calc(40vi / ${TTTArea.length}), 40px)`,
            }}
            src={`./src/assets/imgs/ttt-game/${elem}.png`}
            alt={elem}
          />
        ) : (
          <></>
        )}
      </Box>
    </TableCell>
  );
};
