import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegPage from "./pages/LoginPage";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/registration" element={<RegPage/>}/>
          {/* <Route path="/hotdishes" element={<HotDishesPage/>}/>  */}
      </Routes>
    </>
  );
}

export default App;
