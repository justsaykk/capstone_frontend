import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login_page";

function App() {
  return (
    <div className="App">
      <LoginPage />
      <BrowserRouter>
        <Routes>{/* <Route path="/login" element={LoginPage} /> */}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
