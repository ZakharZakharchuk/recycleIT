import Header from "./Components/Layout/Header/Header";
import Main from "./Components/Pages/Main/Main";
import Support from "./Components/Pages/Support/Support";
import Authorization from "./Components/Pages/Athorization/Authorization";
import { Routes, Route, HashRouter } from "react-router-dom";
import { UserContextProvider } from "./Components/UserContext/UserContextProvider";
import ServicesPage from "./Components/Pages/ServicesPage";
import Error404 from "./Components/Pages/Error404/Error404";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <UserContextProvider>
          <Header/>
          <main>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/services" element={<ServicesPage/>}/>
              <Route path="/authorization" element={<Authorization/>}/>
              <Route path="/support" element={<Support/>}/>
              <Route path="*" element={<Error404 />} />
            </Routes>    
          </main>
        </UserContextProvider>
        </HashRouter>
      </div>
    );
  }

export default App