import MainPage from "./components/mainpage";
import RegisterForm from "./components/register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Router>
        <RegisterForm />
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/mainpage" element={ <MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
