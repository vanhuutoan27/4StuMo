import { NavLink } from "react-router-dom"
import { CircleUser, Home, PieChart, Plus, Wallet } from "lucide-react"

const Navigation = () => {
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Distribution", path: "/distribution", icon: PieChart },
    { name: "Add", path: "/add", icon: Plus },
    { name: "Budget", path: "/budget", icon: Wallet },
    { name: "Account", path: "/account", icon: CircleUser }
  ]

  return (
    <div className="fixed inset-x-0 bottom-0 rounded-t-xl bg-card text-gray-400 shadow-md">
      <div className="flex items-center justify-between text-xs">
        {navItems.map((navItem) => {
          const isAddButton = navItem.name === "Add"

          return (
            <NavLink
              key={navItem.name}
              to={navItem.path}
              className={({ isActive }) =>
                `flex ${isAddButton ? "flex-col-reverse" : "flex-col"} 
                items-center justify-center px-2 py-4 text-center 
                ${isActive ? "text-primary" : ""} 
                ${isAddButton ? "rounded-full bg-primary text-white shadow-lg" : ""} 
                ${isAddButton ? "-mt-16 h-16 w-16" : "flex-1"}`
              }
            >
              <navItem.icon className={`cursor-pointer ${isAddButton ? "h-8 w-8" : ""}`} />
              {isAddButton ? "" : <span className="mt-2 text-[11px]">{navItem.name}</span>}
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Navigation
