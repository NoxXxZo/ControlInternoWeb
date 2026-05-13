import { Link } from "react-router-dom";

import {
  FaClipboardCheck,
  FaExclamationTriangle,
  FaBoxes,
  FaHistory,
} from "react-icons/fa";

export default function Dashboard() {
  const modules = [
    {
      title: "Recepción",
      description: "Mantequilla, sellos y pesaje",
      icon: <FaClipboardCheck />,
      path: "/recepcion",
    },
    {
      title: "Incidentes",
      description: "Recuperaciones y merma",
      icon: <FaExclamationTriangle />,
      path: "/incidentes",
    },
    {
      title: "Operaciones",
      description: "Clave 07 y dotación",
      icon: <FaBoxes />,
      path: "/operaciones",
    },
    {
      title: "Historial",
      description: "Revisar procesos anteriores",
      icon: <FaHistory />,
      path: "/historial",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Bienvenido Arturo</h2>

        <p className="text-gray-600 mt-1">Sistema de Control Interno</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules.map((module) => (
          <Link
            key={module.title}
            to={module.path}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="text-4xl text-green-600 mb-4">{module.icon}</div>

            <h3 className="text-xl font-bold mb-2">{module.title}</h3>

            <p className="text-gray-600">{module.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
