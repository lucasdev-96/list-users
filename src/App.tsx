import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home';
import { User } from './Pages/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: Home(),
  },
  {
    path: "/user",
    element: User()
  }
]);


function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
