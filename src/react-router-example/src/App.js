import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

const MainPage = () => {
  return (
    <div className="main">
      <h1>Main Page</h1>
    </div>
  );
};

const DetailPage = () => {
  return (
    <div className="detail">
      <h1>Detail Page</h1>
    </div>
  );
};

const LoginPage = () => {
  return (
    <div className="login">
      <h1>Login Page</h1>
    </div>
  );
};

export default App;
