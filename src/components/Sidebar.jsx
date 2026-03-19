import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Layers,
  Component,
  LayoutTemplate,
  Briefcase,
  Palette,
  Type,
  HomeIcon,
  Maximize,
  Layers3,
  Square, LucideHome,
  TextCursorInput,
  Table2,
  UserCircle,
  Tag,
  Maximize2,
  Smile,
  PanelTop,
  FormInput,
  ListChecks,
  FileBarChart,
  Activity,
} from "lucide-react";
import { Tooltip, Zoom } from "@mui/material";

const menuGroups = [
  {
    name: "Fundamentos",
    icon: Layers,
    path: "/fundamentos",
    children: [
      { name: "Colores", path: "/fundamentos/colores", icon: Palette },
      { name: "Tipografía", path: "/fundamentos/tipografia", icon: Type },
      { name: "Espaciado", path: "/fundamentos/espaciado", icon: Maximize },
      { name: "Elevación", path: "/fundamentos/elevacion", icon: Layers3 },
      { name: "Logos", path: "/fundamentos/logos", icon: HomeIcon}
    ],
  },
  {
    name: "Componentes UI",
    icon: Component,
    path: "/componentes",
    children: [
      { name: "Botones", path: "/componentes/botones", icon: Square },
      { name: "Inputs", path: "/componentes/inputs", icon: TextCursorInput },
      { name: "Iconos", path: "/componentes/iconos", icon: Smile },
      { name: "Tablas", path: "/componentes/tablas", icon: Table2 },
      { name: "Avatares", path: "/componentes/avatares", icon: UserCircle },
      { name: "Chips", path: "/componentes/chips", icon: Tag },
      { name: "Modales", path: "/componentes/modales", icon: Maximize2 },
      { name: "Selección", path: "/componentes/seleccion", icon: ListChecks },
    ],
  },
  {
    name: "Patrones",
    icon: LayoutTemplate,
    path: "/layout",
    children: [
      { name: "Cabeceras", path: "/layout/cabeceras", icon: PanelTop },
      { name: "Formularios", path: "/layout/formularios", icon: FormInput },
      { name: "Bandejas", path: "/layout/bandejas", icon: ListChecks },
      { name: "Reportes", path: "/layout/reportes", icon: FileBarChart },
      { name: "Steppers", path: "/layout/steppers", icon: Layers3 },
    ],
  },
  {
    name: "Reglas de Negocio",
    icon: Briefcase,
    path: "/negocio",
    children: [{ name: "Estados", path: "/negocio/estados", icon: Activity }],
  },
];

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openGroups, setOpenGroups] = useState({
    Fundamentos: false,
    "Componentes UI": false,
    Patrones: false,
    "Reglas de Negocio": false,
  });

  const location = useLocation();

  const toggleGroup = (groupName) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 bg-[#0a192f] border-r border-white/5 transition-all duration-300 ease-in-out font-geist hidden md:flex flex-col overflow-x-hidden ${isExpanded ? "w-64" : "w-20"}`}
    >
      <Link 
        to="/" 
        onClick={() => {
          setIsExpanded(false);
          // Opcional: Cerrar todos los acordeones al volver al home
          setOpenGroups({
            'Fundamentos': false,
            'Componentes UI': false,
            'Patrones': false,
            'Reglas de Negocio': false
          });
        }} 
        className="h-20 flex items-center px-6 cursor-pointer hover:bg-white/10 border-b border-white/5 shrink-0 transition-colors"
      >
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
          <LucideHome size={20} strokeWidth={2.5} />
        </div>
        <div className={`ml-4 overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
          <h2 className="text-white font-black text-sm whitespace-nowrap uppercase tracking-tighter leading-none">ClicSalud</h2>
          <p className="text-[9px] text-blue-400 font-bold uppercase tracking-widest mt-1">Design System</p>
        </div>
      </Link>

      {/* Nav Content */}
      <nav className="p-3 space-y-4 flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
        {menuGroups.map((group) => {
          const isOpen = openGroups[group.name];
          const isActiveGroup = location.pathname.startsWith(group.path);

          return (
            <div key={group.name} className="space-y-1">
              <Tooltip
                title={!isExpanded ? group.name : ""}
                placement="right"
                TransitionComponent={Zoom}
                arrow
              >
                <div
                  onClick={() => toggleGroup(group.name)}
                  className={`flex items-center p-3 rounded-xl cursor-pointer transition-all ${isActiveGroup ? "text-blue-400 bg-blue-500/5" : "text-slate-500 hover:text-white hover:bg-white/5"}`}
                >
                  <group.icon size={20} className="shrink-0" />
                  <span
                    className={`ml-4 text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"}`}
                  >
                    {group.name}
                  </span>
                </div>
              </Tooltip>

              {/* Submenú Adaptativo */}
              {isOpen && group.children && (
                <div
                  className={`flex flex-col space-y-1 py-2 bg-black/20 rounded-2xl transition-all duration-300 ${isExpanded ? "px-2 items-start" : "mx-1 items-center"}`}
                >
                  {group.children.map((child) => {
                    const isChildActive = location.pathname === child.path;

                    return (
                      <Tooltip
                        key={child.name}
                        title={!isExpanded ? child.name : ""}
                        placement="right"
                        TransitionComponent={Zoom}
                        arrow
                      >
                        <Link
                          to={child.path}
                          className={`flex items-center w-full rounded-xl transition-all ${isExpanded ? "px-4 py-2.5" : "p-2.5 justify-center"} ${isChildActive ? "text-blue-400 bg-blue-500/20" : "text-slate-500 hover:text-blue-300 hover:bg-white/5"}`}
                        >
                          <child.icon size={16} className="shrink-0" />
                          <span
                            className={`ml-3 text-[12px] font-medium transition-all duration-300 whitespace-nowrap ${isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0 hidden"}`}
                          >
                            {child.name}
                          </span>
                        </Link>
                      </Tooltip>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div
        className={`p-6 border-t border-white/5 text-center transition-all ${isExpanded ? "opacity-100" : "opacity-20"}`}
      >
        <p className="text-[9px] text-white font-mono tracking-widest">
          V1.1.0-G
        </p>
      </div>
    </aside>
  );
};
