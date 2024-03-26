import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import PassResetPage from "./pages/passReset/passResetPage";
import {SignUpPage} from "./pages/signUpPage/SignUpPage"
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signIn" element={<LoginPage/>}/>
          <Route path="/signUp" element={<SignUpPage/>}/>
          <Route path="/forgetPassword" element={<PassResetPage/>}/>
      </Routes>
    </>
  );
}

export default App;
