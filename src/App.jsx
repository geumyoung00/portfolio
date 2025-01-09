import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@style/style.css';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        children: [{}],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
