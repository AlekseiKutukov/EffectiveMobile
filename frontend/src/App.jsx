import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Footer from "./layouts/Footer/Footer";
import "./styles/base.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
