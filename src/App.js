import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegPage from "./pages/RegPage";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<RegPage/>}/> 
          {/* <Route path="/hotdishes" element={<HotDishesPage/>}/>  */}
      </Routes>
    </>
  );
}

export default App;
