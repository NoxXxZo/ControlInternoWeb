import { Link, Outlet, useLocation } from "react-router-dom";

import {
  FaClipboardCheck,
  FaExclamationTriangle,
  FaBoxes,
  FaHistory,
  FaHome,
} from "react-icons/fa";

export default function MainLayout() {
  const location = useLocation();

  const navItems = [
    {
      path: "/dashboard",
      label: "Inicio",
      icon: <FaHome />,
    },
    {
      path: "/recepcion",
      label: "Recepción",
      icon: <FaClipboardCheck />,
    },
    {
      path: "/incidentes",
      label: "Incidentes",
      icon: <FaExclamationTriangle />,
    },
    {
      path: "/operaciones",
      label: "Operaciones",
      icon: <FaBoxes />,
    },
    {
      path: "/historial",
      label: "Historial",
      icon: <FaHistory />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <header className="bg-green-700 text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Control Interno</h1>

            <p className="text-sm opacity-80">Jumbo</p>
          </div>

          <div className="text-sm">Arturo</div>
        </div>
      </header>

      <main className="p-4">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg flex justify-around p-3">
        {navItems.map((item) => {
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center text-sm ${
                active ? "text-green-600 font-bold" : "text-gray-500"
              }`}
            >
              <div className="text-xl">{item.icon}</div>

              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
