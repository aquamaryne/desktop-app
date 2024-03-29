import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/mainpage";
import RegisterForm from "./components/register";
import { useEffect } from 'react';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/mainpage" element={ <MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
