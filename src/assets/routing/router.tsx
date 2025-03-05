import { createBrowserRouter } from 'react-router';
// import { createHashRouter } from 'react-router';

import { Routes } from '../../shared/router';
import {
  // ContactsPage,
  Layout,
  GameChoose,
  TTTPage,
  NotFoundPage,
  RPSPage,
} from '../../pages';

// export const router = createHashRouter([
export const router = createBrowserRouter([
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
