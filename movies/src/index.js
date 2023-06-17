import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Page1 from './router1/Page1/Page1';
import Page2 from './router1/Page2/Page2';
import UsersPage, { loader as usersLoader } from './router1/Users/Users';
// import UserDetailsPage, {loader as userDetailsPageLoader} from './router1/Users/UserDetailsPage';
import UserDetails, {loader as userDetailsLoader} from './router1/Users/UserDetails';
import DoesNotExistPage from './router1/DoesNotExistPage/DoesNotExistPage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Page1 />
//     ),
//   },
//   {
//     path: "page2",
//     element: (
//       <Page2 />
//     ),
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <DoesNotExistPage />,
    children: [
      {
        path: "/",
        element: <Page1 />,
      },
      {
        path: "page1",
        element: <Page1 />,
      },
      {
        path: "page2",
        element: <Page2 />,
      },
      {
        path: "users",
        element: <UsersPage />,
        loader: usersLoader,
        children: [
          {
            path: ":userId",
            element: <UserDetails />,
            loader: userDetailsLoader
          }
        ]
      },
      // {
      //   path: "users/:userId",
      //   element: <UserDetailsPage />,
      //   loader: userDetailsPageLoader
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
