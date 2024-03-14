import HomePage from "./pages/HomePage";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="login" elemt={<HomePage/>}/>
        <Route path="registration" elemt={<HomePage/>}/>
      </Routes>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* <Route path="/rolls" element={ } />
          <Route path="/salads" element={ } />
          <Route path="/sushi" element={ } />
          <Route path="/burgers" element={ } />
          <Route path="/desserts" element={ } /> */}
      </Routes>
    </>
  );
}

export default App;
