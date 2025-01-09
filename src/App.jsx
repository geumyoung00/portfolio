import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@style/style.css';
import RootLayout from '@pages/RootLayout';
import Home from '@pages/Home';
import Project from '@pages/Project';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/project/:projectId',
        element: <Project />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
