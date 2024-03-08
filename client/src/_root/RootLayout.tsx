import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '@/components/organisms/Navigation';
import Header from '@/components/organisms/Header';

function RootLayout() {
  const location = useLocation();
  let title, desc;

  switch (location.pathname) {
    case '/':
      title = 'Home';
      desc = 'Here is a list of your transactions.';
      break;
    case '/distribution':
      title = 'Distribution';
      desc = 'Here is your financial report for the selected month.';
      break;
    case '/add':
      title = 'Add';
      desc = 'Add a new transaction here.';
      break;
    case '/budget':
      title = 'Budget';
      desc = 'View your budget distribution here.';
      break;
    case '/account':
      title = 'Account';
      desc = 'View and edit your account details here.';
      break;
    default:
      title = 'Page Not Found';
      desc = "The page you are looking for doesn't exist.";
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-700">
      <div className="break-words relative shadow-2xl rounded-2xl overflow-auto bg-background p-5 w-[390px] h-[663px]">
        <Header title={title} desc={desc} />
        <Outlet />
        <Navigation />
      </div>
    </div>
  );
}

export default RootLayout;
