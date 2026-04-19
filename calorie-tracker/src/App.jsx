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
  const removeLastMeal = () => {
    setTodayMeals((prevMeals) => {
      if (prevMeals.length === 0) return prevMeals;
      return prevMeals.slice(0, -1);
    });
  };
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

  const addMeal = (product, weight = 100) => {
    const factor = weight / 100;
    const newMeal = {
      ...product,
      id: Date.now(),
      calories: Math.round(product.calories * factor),
      proteins: Math.round(product.proteins * factor * 10) / 10,
      fats: Math.round(product.fats * factor * 10) / 10,
      carbs: Math.round(product.carbs * factor * 10) / 10,
      priority: Math.round(product.calories * factor),
    };
    setTodayMeals((prevMeals) =>
      [...prevMeals, newMeal].sort((a, b) => a.calories - b.calories),
    );
  };
  const [availableProducts, setAvailableProducts] = useState([]);
  async function loadProducts() {
    setAvailableProducts;
  }

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
              {availableProducts
                .filter((p) =>
                  p.title.toLowerCase().includes(searchQuery.toLowerCase()),
                )
                .map((product) => (
                  <Card
                    key={product.id}
                    title={product.title}
                    calories={product.calories}
                    btnText="Додати"
                    btnColor="btn-success"
                    onAction={(weight) => addMeal(product, weight)}
                  />
                ))}
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
                  onRemove={removeLastMeal}
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
