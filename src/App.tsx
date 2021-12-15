import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Dispute } from "./pages/Dispute";
import { Frontend } from "./pages/Frontend";
import { Home } from "./pages/Home";
import { Library } from "./pages/Library";
import { Notifications } from "./pages/Notifications";
import { Origamid } from "./pages/Origamid";
import { Profile } from "./pages/Profile";
import { Reactjs } from "./pages/Reactjs";
import { School } from "./pages/School";
import { Team } from "./pages/Team";
import { Timeline } from "./pages/Timeline";
import { Trilha } from "./pages/Trilha";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Router basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/notificacoes" element={<Notifications />}></Route>
          <Route path="/disputas" element={<Dispute />}></Route>
          <Route path="/time" element={<Team />}></Route>
          <Route path="/perfil" element={<Profile />}></Route>
          <Route path="/perfil/cronograma" element={<Timeline />}></Route>
          <Route path="/escola" element={<School />}></Route>
          <Route path="/biblioteca" element={<Library />}></Route>
          <Route path="/trilha" element={<Trilha />}></Route>
          <Route path="/trilha/frontend" element={<Frontend />}></Route>
          <Route path="/trilha/frontend/reactjs" element={<Reactjs />}></Route>
          <Route path="/trilha/frontend/reactjs/origamid" element={<Origamid />}></Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}
