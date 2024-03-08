import { Route, Routes } from 'react-router-dom';
import RootLayout from './_root/RootLayout';
import {
  AccountPage,
  BudgetPage,
  DistributionPage,
  HomePage,
} from './_root/pages';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/distribution" element={<DistributionPage />} />
        {/* <Route path="/add" element={<AddPage />} /> */}
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Route>

      {/* <Route path="/not-found" element={<NotFound />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
