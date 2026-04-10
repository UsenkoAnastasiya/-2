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
  const [todayMeals, setTodayMeals] = useState([]);

  const [history, setHistory] = useState([]);
  const saveDayToHistory = () => {
    if (todayMeals.length === 0) return;

    const totalCalories = todayMeals.reduce(
      (sum, meal) => sum + meal.calories,
      0,
    );
    const newHistoryEntry = {
      date: new Date().toLocaleDateString(),
      calories: totalCalories,
      id: Date.now(),
    };

    setHistory([newHistoryEntry, ...history]);
    setTodayMeals([]);
    alert("День збережено в історію!");
  };
  const addMeal = (product) => {
    setTodayMeals([...todayMeals, { ...product, id: Date.now() }]);
    console.log("Додано продукт:", product);
  };

  const handleSaveData = (data) => {
    setUserStats(data);
    setActivePage(null);
    console.log("App отримав дані користувача:", data);
  };

  const totals = todayMeals.reduce(
    (acc, meal) => {
      acc.calories += Number(meal.calories) || 0;
      return acc;
    },
    { calories: 0, proteins: 0, fats: 0, carbs: 0 },
  );
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
                calories={52}
                btnText="Додати"
                btnColor="btn-success"
                onAction={() => addMeal({ title: "Яблуко", calories: 52 })}
              />
              <Card
                title="Банан"
                calories={89}
                btnText="Додати"
                btnColor="btn-success"
                onAction={() => addMeal({ title: "Банан", calories: 89 })}
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
              {activePage === "diary" && (
                <Diary
                  meals={todayMeals}
                  onSave={saveDayToHistory}
                  history={history}
                />
              )}
              {!activePage && (
                <div className="alert alert-info text-center">
                  Виберіть розділ у меню, щоб почати
                </div>
              )}
            </div>

            <div className="col-md-5">
              <CurrentData
                stats={userStats}
                eatenCalories={totals.calories}
                eatenProteins={totals.proteins}
                eatenFats={totals.fats}
                eatenCarbs={totals.carbs}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
