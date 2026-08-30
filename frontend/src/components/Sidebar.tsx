import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const productionMenu = [
    { name: "Dashboard", path: "/" },
    { name: "Mother Batch", path: "/mother-batches" },
    { name: "Child Batch", path: "/child-batches" },
    { name: "Dispensing", path: "/dispensing" },
    { name: "Granulation", path: "/granulation" },
    { name: "Compression", path: "/compression" },
    { name: "Coating", path: "/coating" },
    { name: "Filling", path: "/filling" },
    { name: "QC", path: "/qc" },
    { name: "Packing", path: "/packing" },
  ];

  const masterMenu = [
    { name: "Composition Master", path: "/composition-master" },
    { name: "FG Master", path: "/fg-master" },
    { name: "Machine Master", path: "/machine-master" },
    { name: "Area Master", path: "/area-master" },
    { name: "Packing Change Part", path: "/packing-change-part-master" },
    { name: "Party Master", path: "/party-master" },
    { name: "User Master", path: "/user-master" },
  ];

  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen">

      <div className="text-3xl font-bold p-6 border-b border-slate-700">
        PPIC 360
      </div>

      <nav className="p-4">

        <h2 className="text-xs uppercase text-slate-400 mb-2 mt-2">
          Production
        </h2>

        {productionMenu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg mb-2 transition ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-700"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

        <hr className="my-5 border-slate-700" />

        <h2 className="text-xs uppercase text-slate-400 mb-2">
          Masters
        </h2>

        {masterMenu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg mb-2 transition ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-700"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

        <hr className="my-5 border-slate-700" />

        <h2 className="text-xs uppercase text-slate-400 mb-2">
          Reports
        </h2>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `block px-4 py-3 rounded-lg mb-2 transition ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-slate-700"
            }`
          }
        >
          Reports
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `block px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-slate-700"
            }`
          }
        >
          Settings
        </NavLink>

      </nav>
    </aside>
  );
}