import { RouterProvider } from 'react-router';

import { router } from './router';

export const AppRoutes = () => {
  return (
    <RouterProvider
      // future={{
      //   v7_startTransition: true,
      //   // @ts-expect-error Future Router change
      //   v7_relativeSplatPath: true,
      // }}
      router={router}
    />
  );
};
