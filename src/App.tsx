import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { User } from './Pages/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-select/dist/react-responsive-select.css';
import { Home } from './Pages/Home';
import { UserContextProvider } from './Context/UserContextProvider';
import NotFound from './Components/NotFound';
const router = createBrowserRouter([
  {
    path: "/",
    element: Home(),
  },
  {
    path: '*',
    element: NotFound()
  },
  {
    path: "/user/:username",
    element: User(),
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
