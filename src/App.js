import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </Router>
      {/* <SignUp /> */}
    </div>
  );

};
export default App;