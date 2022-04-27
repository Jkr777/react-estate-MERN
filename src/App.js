import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

const Homepage = lazy(() => import('./pages/homepage'));
const Properties = lazy(() => import('./pages/properties'));
const Contact = lazy(() => import('./pages/contact'));
const Info = lazy(() => import('./pages/info'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
      <Suspense fallback={<h1>...loading</h1>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/properties/:id" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      </Suspense>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;