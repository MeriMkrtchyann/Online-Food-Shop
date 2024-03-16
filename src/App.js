import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegPage from "./pages/RegPage";
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
