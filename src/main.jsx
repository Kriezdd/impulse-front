import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import MainPage from "./routes/MainPage";
import Impulse from "./routes/Impulse";
import Leagues from "./routes/Leagues";
import './index.scss';

const router = createBrowserRouter([
  {
    path: "/impulse-front/",
    element: <App/>,
    children: [
      {
        path: "/impulse-front/",
        element: <MainPage/>,
      },
      {
        path: "/impulse-front/impulse",
        element: <Impulse/>,
      },
      {
        path: "/impulse-front/leagues",
        element: <Leagues/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
