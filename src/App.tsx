import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TodayWeater from "./Pages/TodayWeater";
import WeakWeather from "./Pages/WeakWeather";
import WeatherHistory from "./Pages/WeatherHistory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="today-weather" element={<TodayWeater />} />
          <Route path="weak-weather" element={<WeakWeather />} />
          <Route path="history-weather" element={<WeatherHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
