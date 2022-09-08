import './App.css';
import Home from './components/Home';
import AccountsPage from './components/AccountsPage';
import VendorsPage from './components/VendorsPage';
import LicensesPage from './components/LicensesPage';
import Insights from './components/Insights';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/*<Auth />*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="accounts" element={<AccountsPage />} />
          <Route path="vendors" element={<VendorsPage />} />
          <Route path="licenses" element={<LicensesPage />} />
          <Route path="insights" element={<Insights />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
