import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import './App.css';
import UserInfo from "./components/Pages/UserInfo";
import Detail from "./components/Pages/Detail";
import Main from "./components/Pages/Main";
import Payment from "./components/Pages/Payment";
import UserProvider from "./store/UserProvider";

function App() {
  return (
      <UserProvider>
      <Layout>
          <Routes>
              <Route path="/" exact={true} element={<Main/>}/>
              <Route path="/user-info" element={<UserInfo/>}/>
              <Route path="/detail" element={<Detail/>}/>
              <Route path="/payment" element={<Payment/>}/>
          </Routes>
      </Layout>
      </UserProvider>
  );
}

export default App;
