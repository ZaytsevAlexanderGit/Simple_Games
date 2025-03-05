import { Grid2 } from '@mui/material';
import { TTTGamePosib } from '../../assets/stores/ttt-data/state.ts';
import { TTTAreaCell } from './TTTAreaCell.tsx';

interface IAreaRow {
  rowData: TTTGamePosib[];
}

export const AreaRow = ({ rowData }: IAreaRow) => {
  const rowCSS = {
    display: 'flex',
    // flexDirection: 'row',
    backgroundColor: 'blue',
    // border: '10px solid black',
    // alignItems: 'center',
    // justifyContent: 'center',
    gap: '20px',
  };

  return (
    <Grid2 container sx={rowCSS} direction="row" gap="20px">
      <div>
        {rowData.map((elem: TTTGamePosib) => (
          <TTTAreaCell cellData={elem} />
        ))}
      </div>
    </Grid2>
  );
};
