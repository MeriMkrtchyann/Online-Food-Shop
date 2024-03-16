import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegPage from "./pages/regPage/RegPage";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signIn" element={<LoginPage/>}/>
          <Route path="/signUp" element={<RegPage/>}/> 
          <Route path="/forgetPassword" element={<HomePage/>}/>
          {/* <Route path="/hotdishes" element={<HotDishesPage/>}/>  */}
      </Routes>
    </>
  );
}

export default App;
