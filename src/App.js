import "./App.css";
import RouterApp from "./Router";
import SuperProvider from "./context";

export default function App() {
  return (
    <div className="App">
      <SuperProvider>
        <RouterApp />
      </SuperProvider>
    </div>
  );
}