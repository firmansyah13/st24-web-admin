import "./App.css";
import RouterApp from "./Router";
import SuperProvider from "./context";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <SuperProvider>
          <RouterApp />
      </SuperProvider>
    </div>
  );
}
