import { Outlet, useLocation } from "react-router-dom"
import Header from "@/components/Header"
import Navigation from "@/components/Navigation"

function RootLayout() {
  const location = useLocation()
  let title, desc

  switch (location.pathname) {
    case "/":
      title = "Home"
      desc = "Here is a list of your transactions."
      break
    case "/distribution":
      title = "Distribution"
      desc = "Here is your financial report for the selected month."
      break
    case "/add":
      title = "Add"
      desc = "Add a new transaction here."
      break
    case "/budget":
      title = "Budget"
      desc = "View your budget distribution here."
      break
    case "/account":
      title = "Account"
      desc = "View and edit your account details here."
      break
    default:
      title = "Page Not Found"
      desc = "The page you are looking for doesn't exist."
  }

  return (
    <div className="w-full bg-background">
      <Header title={title} desc={desc} />
      <div className="mt-4">
        <Outlet />
      </div>
      <Navigation />
    </div>
  )
}

export default RootLayout
