import Header from "./Components/Layout/Header/Header";
import Main from "./Components/Pages/Main/Main";
import Support from "./Components/Pages/Support/Support";
import Authorization from "./Components/Pages/Athorization/Authorization";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./Components/UserContext/UserContextProvider";
import ServicesPage from "./Components/Pages/ServicesPage";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <Header/>
          <main>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/services" element={<ServicesPage/>}/>
              <Route path="/authorization" element={<Authorization/>}/>
              <Route path="/support" element={<Support/>}/>
            </Routes>    
          </main>
        </UserContextProvider>
      </BrowserRouter>
      </div>
    );
  }

export default App