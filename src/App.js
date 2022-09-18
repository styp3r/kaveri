import './App.css';
import Home from './components/Home';
import AccountsPage from './components/AccountsPage';
import VendorsPage from './components/VendorsPage';
import LicensesPage from './components/LicensesPage';
import Insights from './components/Insights';
import Inventory from './components/InventoryPage';
import PartnersPage from './components/PartnersPage';
import UploadDS from './components/UploadDS';
import EditDS from './components/EditDS';
import ViewDS from './components/ViewDS';
//import Auth from './components/Auth';
import Navbar from './components/Navbar';
import PageHeader from './components/PageHeader';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <PageHeader /> 
      <div id = "app" className="App">
        <Navbar />
        {/*<Auth />*/}
        <Routes>
          {/*Visible Page Elements */}
          <Route path="/" element={<Home />} />
          <Route path="accounts" element={<AccountsPage />} />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="vendors" element={<VendorsPage />} />
          <Route path="licenses" element={<LicensesPage />} />
          <Route path="insights" element={<Insights />} />
          <Route path="inventory" element={<Inventory />} />

          {/*Invisible Page Elements */}
          <Route path="viewDS" element={<ViewDS />} />
          <Route path="uploadDS" element={<UploadDS />} />
          <Route path="editDS" element={<EditDS />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
