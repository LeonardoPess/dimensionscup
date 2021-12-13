import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Router basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}
