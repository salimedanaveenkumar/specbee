import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement : <Error />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
