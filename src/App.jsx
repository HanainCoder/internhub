import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Candidates from './pages/Candidates'
import Layout from './components/Layout';
import Dashboard  from './pages/Dashboard';
import Internships from './pages/Internships';
import Profile from './pages/Profile'
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="internships" element={<Internships />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );


}
export default App;