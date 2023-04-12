import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { User } from './Pages/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Pages/Home';
import { UserContextProvider } from './Context/UserContextProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: Home(),
  },
  {
    path: "/user/:id",
    element: User()
  }
]);


function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
