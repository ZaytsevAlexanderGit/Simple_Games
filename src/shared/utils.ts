import { TTTGamePosib } from '../assets/stores/ttt-data/state.ts';

export const arrChange = (
  arr: TTTGamePosib[][],
  col: number,
  row: number,
  replace: TTTGamePosib
): TTTGamePosib[][] => {
  arr[row][col] = replace;
  return arr;
};

const isWinSequence = (
  arr: TTTGamePosib[],
  winCond: number
): [boolean, TTTGamePosib, number[]] => {
  let ret: [boolean, TTTGamePosib, number[]] = [false, 'none', []];
  let indexes: number[] = [];
  let last = 'none';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === last && last !== 'none') {
      indexes.push(i);
      if (indexes.length === winCond) {
        ret = [true, arr[i], indexes];
        break;
      }
    } else {
      if (arr[i] !== 'none') {
        indexes = [i];
        last = arr[i];
      }
    }
  }
  return ret;
};

export const TTTWinCheck = (
  arr: TTTGamePosib[][],
  winCondition: number
): [boolean, TTTGamePosib, number[][]] => {
  let ret: [boolean, TTTGamePosib, number[][]] = [false, 'none', [[]]];
  const size = arr.length;
  for (let i = 0; i < size; ++i) {
    const rowData = isWinSequence(arr[i], winCondition);
    if (rowData[0] === true) {
      const winRow: number[][] = rowData[2].map((el) => [i, el]);
      ret = [rowData[0], rowData[1], winRow];
      break;
    }
    const columnData = isWinSequence(
      arr.map((value) => value[i]),
      winCondition
    );
    if (columnData[0] === true) {
      const winCol: number[][] = columnData[2].map((el) => [el, i]);
      ret = [columnData[0], columnData[1], winCol];
      break;
    }
  }
  if (ret[0] === false) {
    for (let i = size - 1; i > -size; i--) {
      const rightDiag = [];
      const leftDiag = [];
      const leftCoord: number[][] = [[]];
      const rightCoord: number[][] = [[]];
      for (let j = 0; j < size; ++j) {
        if (i + j >= 0 && i + j < size) {
          rightDiag.push(arr[i + j][j]);
          rightCoord.push([i + j, j]);
        }
        if (j - i >= 0 && j - i < size) {
          leftDiag.push(arr[j - i][size - 1 - j]);
          leftCoord.push([j - i, size - 1 - j]);
        }
      }
      const rightDiagWin = isWinSequence(
        rightDiag as TTTGamePosib[],
        winCondition
      );
      const leftDiagWin = isWinSequence(
        leftDiag as TTTGamePosib[],
        winCondition
      );
      if (rightDiagWin[0] === true) {
        const winRDiag: number[][] = rightDiagWin[2].map(
          (el) => rightCoord[el + 1]
        );
        ret = [rightDiagWin[0], rightDiagWin[1], winRDiag];
        break;
      }
      if (leftDiagWin[0] === true) {
        const winLDiag: number[][] = leftDiagWin[2].map(
          (el) => leftCoord[el + 1]
        );
        ret = [leftDiagWin[0], leftDiagWin[1], winLDiag];
        break;
      }
    }
  }
  return ret;
};

export function onlyNumbers(s: string) {
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57) {
      return false;
    }
  }
  return true;
}
