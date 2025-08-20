import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from '../pages/Authentication/SignIn';
import Dashboard from '../pages/Dashboard';
import AppLayout from '../components/layouts';
import AccordionPage from '../pages/Component/Accordions';
import AlertPage from '../pages/Component/Alerts';
import ButtonPage from '../pages/Component/Buttons';

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Public Routes - No Layout */}
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />

        {/* Protected Routes with Layout */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accordions" element={<AccordionPage />} />
          <Route path="/alerts" element={<AlertPage />} />
          <Route path="/buttons" element={<ButtonPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
