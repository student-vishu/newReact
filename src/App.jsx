import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import AdminDashboard from './admin-penal/pages/AdminDashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='admin/dashbord' element={AdminDashboard} >Dashbord</Route>
      </Routes>
    </Router>
  );
}

export default App;
