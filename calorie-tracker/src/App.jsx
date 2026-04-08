import { useState } from "react";
import CurrentData from "./Components/CurrentData";
import Navbar from "./Components/Menu";
import Search from "./Components/Search";
import Card from "./Components/Card";
import Diary from "./Components/Diary";
import UserDataForm from "./Components/UserDataForm";

function App() {
  const [activePage, setActivePage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [userStats, setUserStats] = useState(null);

  const handleSaveData = (data) => {
    setUserStats(data);
    setActivePage(null);
    console.log("App отримав дані:", data);
  };

  return (
    <div className="container mt-4">
      <Navbar onNavigate={setActivePage} />

      <div className="row mb-3">
        <div className="col-12">
          <Search onSearch={setSearchQuery} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          {searchQuery && (
            <div className="search-results">
              <Card
                title="Яблуко"
                calories="52"
                btnText="Додати"
                btnColor="btn-success"
              />
              <Card
                title="Банан"
                calories="89"
                btnText="Видалити"
                btnColor="btn-danger"
              />
            </div>
          )}
        </div>

        <div className="col-md-8">
          <div className="row">
            <div className="col-md-7">
              {activePage === "data" && (
                <UserDataForm onSave={handleSaveData} />
              )}
              {activePage === "diary" && <Diary />}
              {!activePage && (
                <div className="alert alert-info">
                  Виберіть розділ у меню, щоб почати
                </div>
              )}
            </div>

            <div className="col-md-5">
              <CurrentData stats={userStats} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
