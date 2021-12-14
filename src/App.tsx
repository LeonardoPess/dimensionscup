import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Frontend } from "./pages/Frontend";
import { Home } from "./pages/Home";
import { School } from "./pages/School";
import { Trilha } from "./pages/Trilha";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Router basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/escola" element={<School />}></Route>
          <Route path="/trilha" element={<Trilha />}></Route>
          <Route path="/trilha/frontend" element={<Frontend />}></Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}
