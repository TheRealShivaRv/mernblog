import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import * as Pages from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="xl" style={{ minHeight: "100vh", paddingTop: "90px", marginBottom: "20px" }}>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/posts" element={<Pages.Posts />} />
          <Route path="/posts/:postId" element={<Pages.Post />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
