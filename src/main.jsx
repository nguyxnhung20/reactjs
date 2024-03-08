import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Root from "./routes/root";
import ErrorPage from "./error-page";

// set up router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './routes/contact.jsx';

// import component
import SingIn from './form/SignIn.jsx';
import HomePage from './components/HomePage.jsx';
import SearchPage from './components/search/SearchPage.jsx';
import ListUser from './listUsers/ListUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: '/signIn',
        element: <SingIn />,
      },
      {
        path: '/homePage',
        element: <HomePage />
      },
      {
        path: '/searchPage',
        element: <SearchPage />
      },
      {
        path: '/listUser',
        element: <ListUser />
      }
    ],
  },

  // Xấy dựng một component hiển thị mot danh sach user với api này: (can chinh css cho hop ly)
      // https://jsonplaceholder.typicode.com/users
      // b2: tao router cho danh sach user tren
      // b3: tao link tro den danh sach user do
      // nang cao: trong danh sach user co the tim kiem dc user
      // khi clikc vao mot user se sang mot trang chi tiet user
      // https://getbootstrap.com/docs/4.0/components/modal/
      // fetch api lib: https://www.npmjs.com/package/axios
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// App component
