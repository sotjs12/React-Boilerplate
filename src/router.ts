import NotFound from '@/components/not-found';
// import CoreRoute from '@/features/core/route';
// import HomeRoute from '@/features/home/route';

// const appRoutes = [...CoreRoute, ...HomeRoute];
// const appRoutes = [];

export default [
  // ...appRoutes,
  {
    path: '*',
    layout: {
      header: false,
      footer: false,
    },
    component: NotFound,
  },
];
