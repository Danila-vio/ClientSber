import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import LogIn from './Auth/LogIn';
import ManagerMenu from './manager/ManagerMenu';
import AddNewPerson from './manager/AddNewPerson';
import EditPerson from './manager/EditPerson';
import UserMenu from './User/UserMenu';
import AddAccount from './manager/AddAccount';
import PlanOfAccountsMenu from './manager/PlanOfAccountsMenu';
import AccountsMenu from './manager/AccountsMenu';
import ContractsMenu from './manager/ContractsMenu';
import ViewContracts from './User/ViewContracts';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn/>}/>
        </Routes>
        <Routes>
        <Route exact path="/user" element={<UserMenu/>}/>
        <Route exact path="/user/contracts" element={<ViewContracts/>}/>
        </Routes>
        <Routes>
        <Route exact path="/manager" element={<ManagerMenu/>}/>
        <Route exact path="/manager/addUser" element={<AddNewPerson/>}/>
        <Route exact path="/manager/update/:id" element={<EditPerson/>}/>
        <Route exact path="/manager/addAccount/:id" element={<AddAccount/>}/>
        <Route exact path="/manager/addPlan" element={<PlanOfAccountsMenu/>}/>
        <Route exact path="/manager/accounts" element={<AccountsMenu/>}/>
        <Route exact path="/manager/contracts" element={<ContractsMenu/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
