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
        <Search onSearch={setSearchQuery} />
      </div>

      <div className="row">
        {/* Колонка для карток пошуку */}
        <div className="col-md-4">
          {searchQuery && (
            <>
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
            </>
          )}
        </div>

        {/* Основний контент (Центр + Права колонка) */}
        <div className="col-md-8">
          <div className="row">
            {/* Центральна частина для форм та щоденника */}
            <div className="col-md-8">
              {activePage === "data" && (
                <UserDataForm onSave={handleSaveData} />
              )}
              {activePage === "diary" && <Diary />}
            </div>

            {/* Права частина для статистики */}
            <div className="col-md-4">
              <CurrentData />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
