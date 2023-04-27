import ChallengeList from "./Components/ChallengeList";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/challenges" element={<ChallengeList/>} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
