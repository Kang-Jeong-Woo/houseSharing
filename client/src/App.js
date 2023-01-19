import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import './App.css';
import UserInfo from "./components/Pages/UserInfo";
import Detail from "./components/Pages/Detail";
import Main from "./components/Pages/Main";

function App() {
  return (
      <Layout>
          <Routes>
              <Route path='/' exact={true} element={<Main/>}/>
              <Route path='/user-info' element={<UserInfo/>}/>
              <Route path='/detail' element={<Detail/>}/>
          </Routes>
      </Layout>
  );
}

export default App;
