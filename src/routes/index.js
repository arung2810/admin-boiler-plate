import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from '../pages/Authentication/SignIn';
import Dashboard from '../pages/Dashboard';
import AppLayout from '../components/layouts';
import AccordionPage from '../pages/Component/Accordions';
import AlertPage from '../pages/Component/Alerts';
import AvatarPage from '../pages/Component/Avatars';
import BadgePage from '../pages/Component/Badges';
import ButtonPage from '../pages/Component/Buttons';
import ChipsPage from '../pages/Component/Chips';
import ButtonGroupsPage from '../pages/Component/ButtonGroups';
import DialogsPage from '../pages/Component/Dialogs';

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
          <Route path="/avatars" element={<AvatarPage />} />
          <Route path="/badges" element={<BadgePage />} />
          <Route path="/buttons" element={<ButtonPage />} />
          <Route path="/chips" element={<ChipsPage />} />
          <Route path="/button-groups" element={<ButtonGroupsPage />} />
          <Route path="/dialogs" element={<DialogsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
