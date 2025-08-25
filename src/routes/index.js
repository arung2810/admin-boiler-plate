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
import CheckboxPage from '../pages/FormElement/Checkbox';
import RadioPage from '../pages/FormElement/Radio';
import TextFieldPage from '../pages/FormElement/TextField';
import ListPage from '../pages/Component/List';
import MenuPage from '../pages/Component/Menu';
import PaginationPage from '../pages/Component/Pagination';
import ProgressPage from '../pages/Component/Progress';
import RatingsPage from '../pages/Component/Ratings';
import TextAreaPage from '../pages/FormElement/Textarea';
import SelectPage from '../pages/FormElement/Select';
import SwitchPage from '../pages/FormElement/Switch';
import AutocompletePage from '../pages/FormElement/Autocomplele';
import SwiperPage from '../pages/Component/Swiper';
import TabsPage from '../pages/Component/Tabs';
import ToastsPage from '../pages/Component/Toasts';
import TablePage from '../pages/Component/Table';

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
          <Route path="/checkbox" element={<CheckboxPage />} />
          <Route path="/radio" element={<RadioPage />} />
          <Route path="/textfield" element={<TextFieldPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/pagination" element={<PaginationPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/ratings" element={<RatingsPage />} />
          <Route path="/textarea" element={<TextAreaPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/switch" element={<SwitchPage />} />
          <Route path="/autocomplete" element={<AutocompletePage />} />
          <Route path="/swiper" element={<SwiperPage />} />
          <Route path="/tabs" element={<TabsPage />} />
          <Route path="/toasts" element={<ToastsPage />} />
          <Route path="/table" element={<TablePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
