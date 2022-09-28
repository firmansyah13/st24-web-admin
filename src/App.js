import { useRoutes } from "react-router-dom";
import './App.css';
import Dashboard from './Dashboard';

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Dashboard />
    },
    // {
    //   path: "/login",
    //   element: <LoginPage />
    // }
  ]);
  return routes;
}

export default App;
