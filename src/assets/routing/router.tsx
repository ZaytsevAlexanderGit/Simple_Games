import { createHashRouter } from 'react-router';

import { Routes } from '../../shared/router';
import {
  Layout,
  GameChoose,
  TTTPage,
  NotFoundPage,
  RPSPage,
} from '../../pages';

export const router = createHashRouter([
  {
    path: Routes.ROOT,
    element: <Layout />,
    children: [
      { index: true, element: <GameChoose /> },
      { path: Routes.PRS, element: <RPSPage /> },
      { path: Routes.XO, element: <TTTPage /> },
      { path: Routes.NOT_FOUND, element: <NotFoundPage /> },
    ],
  },
]);
