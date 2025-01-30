import { Route, Routes } from "react-router-dom";
import BottomNav from "./components/BottomNav";

// Import the page components
import QuotesPage from "./screens/QuotesPage";
import ChartsPage from "./screens/ChartsPage";
import TradePage from "./screens/TradePage";
import HistoryPage from "./screens/HistoryPage";
import Referrals from "./screens/Referrals";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<QuotesPage />} />
        <Route path="/charts" element={<ChartsPage />} />
        <Route path="/trade" element={<TradePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/referrals" element={<Referrals />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;
