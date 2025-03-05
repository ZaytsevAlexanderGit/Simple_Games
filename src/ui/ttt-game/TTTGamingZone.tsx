import { Table, TableBody, TableRow } from '@mui/material';
import { TTTState } from '../../assets/stores/state.ts';
import { TTTAreaCell } from './TTTAreaCell.tsx';

export const TTTGamingZone = () => {
  const TTTArea = TTTState((state) => state.TTTArea);
  const touched = TTTState((state) => state.touched);

  return (
    <Table>
      <TableBody
        key={touched}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {TTTArea.map((rowData, rowIndex) => (
          <TableRow
            key={rowIndex}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            {rowData.map((elem, elemIndex) => (
              <TTTAreaCell
                key={`${rowIndex}-${elemIndex} ${elem === 'none'}`}
                elem={elem}
                rowIndex={rowIndex}
                elemIndex={elemIndex}
              />
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
