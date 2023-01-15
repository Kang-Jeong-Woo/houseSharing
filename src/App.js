import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import './App.css';
import Main from "./components/pages/Main";
import UserInfo from "./components/pages/UserInfo";
import Slider from "./components/Layout/Slider";
import Detail from "./components/pages/Detail";
import Navigation from "./components/Layout/Navigation";

function App() {
  return (
      <Layout>
          <Navigation/>
          <Slider/>
          <Routes>
              <Route path='/' exact={true} element={<Main/>}/>
              <Route path='/user-info' element={<UserInfo/>}/>
              <Route path='/detail' element={<Detail/>}/>
          </Routes>
      </Layout>
  );
}

export default App;
