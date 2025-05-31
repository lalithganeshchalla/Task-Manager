import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Dashboard from './Pages/Dashboard';
import VitalTasks from './Pages/VitalTasks';
import  Settings  from './Pages/Settings';
import Help from './Pages/Help';
import TasksCategory from './Pages/TasksCategory';
import MyTasks from './Pages/MyTasks';
import CreateCategories from './Pages/SubPages/CreateCategories';
import PageError from './pag/PageError';
import AccountInfo from './Pages/SubPages/AccountInfo';
import ChangePassword from './Pages/SubPages/ChangePassWord';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vitaltasks" element={<VitalTasks />} />
          <Route path="/categories" element={<TasksCategory/> }/>
          <Route path="/mytasks" element={<MyTasks/> }/>
          <Route path="/setting" element={<Settings/> }/>
          <Route path="/help" element={<Help/> }/>
          <Route path="/createcategories" element={<CreateCategories />} />
          <Route path="/pageerror" element={<PageError />} />
          <Route path="/accountinfo" element={<AccountInfo />} />
          <Route path="/changepassword" element={<ChangePassword />} />
        </Routes>
      </Router>
    </div>
  );

};
export default App;