import { useState } from "react";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Footer from "./layouts/Footer/Footer";
import "./styles/base.css";

function App() {
  // Состояние для поискового запроса здесь
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <>
      <div className="app-container">
        <div className="app-container__content">
          <Header onSearchChange={handleSearchChange} />
          <Main searchQuery={searchQuery} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
