import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Layers, Component, LayoutTemplate, Briefcase, Palette, Type,
  HomeIcon, Maximize, Layers3, Square, LucideHome, TextCursorInput,
  Table2, UserCircle, Tag, Maximize2, Smile, PanelTop,
  FormInput, ListChecks, FileBarChart, Activity, Bell, HelpCircle, ChevronDown,
  Search, PanelLeftClose, PanelLeftOpen, Menu
} from "lucide-react";
import { Tooltip, Zoom, InputBase } from "@mui/material";

const menuGroups = [
  {
    name: "Fundamentos",
    icon: Layers,
    path: "/fundamentos",
    children: [
      { name: "Colores", path: "/fundamentos/colores", icon: Palette },
      { name: "Tipografía", path: "/fundamentos/tipografia", icon: Type },

      { name: "Logotipos", path: "/fundamentos/logotipos", icon: LucideHome },
      { name: "Cards", path: "/fundamentos/cards", icon: Square },
    ],
  },
  {
    name: "Estructura",
    icon: Layers3,
    path: "/estructura",
    children: [
      { name: "Sidebar", path: "/estructura/sidebarC", icon: Square },
      { name: "TopNavbar", path: "/estructura/topnavbar", icon: Square },
      { name: "SubNavbar", path: "/estructura/subnavbar", icon: Square },
      { name: "Footer", path: "/estructura/footer", icon: Activity },
    ],
  },
  {
    name: "Componentes UI",
    icon: Component,
    path: "/componentes",
    children: [
      { name: "Botones", path: "/componentes/botones", icon: Square },
      { name: "Acordiones", path: "/componentes/acordion", icon: ChevronDown },
      { name: "Inputs", path: "/componentes/inputs", icon: TextCursorInput },
      { name: "Iconos", path: "/componentes/iconos", icon: Smile },
      { name: "Tablas", path: "/componentes/tablas", icon: Table2 },
      { name: "Chips", path: "/componentes/chips", icon: Tag },
      { name: "Modales", path: "/componentes/modales", icon: Maximize2 },
      { name: "Selección", path: "/componentes/seleccion", icon: ListChecks },
      { name: "Avatares", path: "/componentes/avatares", icon: UserCircle },
      { name: "Tooltips", path: "/componentes/tooltips", icon: HelpCircle },
      { name: "Alertas", path: "/componentes/alertas", icon: Activity },
      { name: "Snackbars", path: "/componentes/snackbars", icon: Bell },
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
      {name: "Contenedores", path: "/layout/contenedores", icon: Maximize },
      { name: "Certificados", path: "/layout/certificados", icon: Activity },
    ],
  },
  {
    name: "Reglas de Negocio",
    icon: Briefcase,
    path: "/negocio",
    children: [{ name: "Estados", path: "/negocio/estados", icon: Activity }],
  },
];

export const Sidebar = ({ isExpanded, setIsExpanded }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openGroups, setOpenGroups] = useState({
    Fundamentos: true,
    Estructura: false,
    "Componentes UI": true,
    Patrones: false,
    "Reglas de Negocio": false,
  });

  const location = useLocation();

  const toggleGroup = (groupName) => {
    setOpenGroups((prev) => ({ ...prev, [groupName]: !prev[groupName] }));
  };

  // Toggle all groups at once
  const areAnyOpen = Object.values(openGroups).some(val => val === true);
  const toggleAllGroups = () => {
    const newState = !areAnyOpen;
    const updated = {};
    menuGroups.forEach(g => updated[g.name] = newState);
    setOpenGroups(updated);
  };

  // Filtrado de grupos y páginas
  const filteredGroups = menuGroups.map(group => {
    const filteredChildren = group.children?.filter(child =>
      child.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesGroup = group.name.toLowerCase().includes(searchTerm.toLowerCase());

    if (matchesGroup || (filteredChildren && filteredChildren.length > 0)) {
      return { ...group, children: matchesGroup ? group.children : filteredChildren };
    }
    return null;
  }).filter(Boolean);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 bg-[#0a192f] border-r border-white/5 transition-all duration-300 ease-in-out font-geist hidden md:flex flex-col overflow-x-hidden ${isExpanded ? "w-64" : "w-20"}`}
    >
      {/* HEADER SECTION: Menu Toggle + Brand + Collapse All */}
      <div className="h-20 flex items-center px-5 border-b border-white/5 shrink-0 overflow-hidden">
        {/* Sidebar Toggle (Menu Icon) */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isExpanded ? 'bg-transparent text-slate-400 hover:bg-white/10' : 'bg-blue-500 text-white shadow-lg'}`}
        >
          <Menu size={18} />
        </button>

        <div className={`flex items-center justify-between flex-1 ml-4 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}>
          <div>
            <h2 className="text-white font-black text-xs uppercase tracking-tighter leading-none">ClicSalud</h2>
            <p className="text-[9px] text-blue-400 font-bold uppercase mt-1">Design System</p>
          </div>

          {/* Bulk Toggle Button (Expands/Collapses all children) */}
          <Tooltip title={areAnyOpen ? "Colapsar Categorías" : "Expandir Categorías"}>
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleAllGroups();
              }}
              className="p-1.5 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-colors ml-2"
            >
              {areAnyOpen ? <PanelLeftClose size={16} className="rotate-90" /> : <PanelLeftOpen size={16} className="rotate-90" />}
            </button>
          </Tooltip>
        </div>
      </div>

      {/* SEARCH BAR SECTION */}
      <div className={`px-4 py-4 transition-all duration-300 ${isExpanded ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'}`}>
        <div className="relative group">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
          </div>
          <InputBase
            placeholder="Buscar páginas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              width: '100%',
              bgcolor: 'rgba(255,255,255,0.05)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '12px',
              fontFamily: 'Geist',
              px: '40px',
              py: '8px',
              border: '1px solid rgba(255,255,255,0.05)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' },
              '& .MuiInputBase-input::placeholder': { color: '#64748b', opacity: 1 }
            }}
          />
        </div>
      </div>

      {/* Nav Content */}
      <nav className="p-3 space-y-4 flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
        {/* NEW HOME ITEM */}
        <div className="mb-2">
          <Tooltip title={!isExpanded ? "Home" : ""} placement="right" TransitionComponent={Zoom} arrow>
            <Link
              to="/"
              className={`flex items-center p-3 rounded-xl transition-all ${location.pathname === "/" ? "text-blue-400 bg-blue-500/10" : "text-slate-500 hover:text-white hover:bg-white/5"}`}
            >
              <LucideHome size={20} className="shrink-0" />
              <span className={`ml-4 text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>
                Home
              </span>
            </Link>
          </Tooltip>
        </div>

        {filteredGroups.map((group) => {
          const isOpen = openGroups[group.name] || searchTerm.length > 0;
          const isActiveGroup = location.pathname.startsWith(group.path);

          return (
            <div key={group.name} className="space-y-1">
              <Tooltip title={!isExpanded ? group.name : ""} placement="right" TransitionComponent={Zoom} arrow>
                <div
                  onClick={() => toggleGroup(group.name)}
                  className={`flex items-center p-3 rounded-xl cursor-pointer transition-all ${isActiveGroup ? "text-blue-400 bg-blue-500/5 text-shadow-sm shadow-blue-500/20" : "text-slate-500 hover:text-white hover:bg-white/5"}`}
                >
                  <group.icon size={20} className="shrink-0" />
                  <span className={`ml-4 text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>
                    {group.name}
                  </span>
                </div>
              </Tooltip>

              {isOpen && group.children && (
                <div className={`flex flex-col space-y-1 py-2 bg-black/20 rounded-2xl transition-all duration-300 ${isExpanded ? "px-2 items-start" : "mx-1 items-center"}`}>
                  {group.children.map((child) => (
                    <Tooltip key={child.name} title={!isExpanded ? child.name : ""} placement="right" TransitionComponent={Zoom} arrow>
                      <Link
                        to={child.path}
                        className={`flex items-center w-full rounded-xl transition-all ${isExpanded ? "px-4 py-2.5" : "p-2.5 justify-center"} ${location.pathname === child.path ? "text-blue-400 bg-blue-500/20" : "text-slate-500 hover:text-blue-300 hover:bg-white/5"}`}
                      >
                        <child.icon size={16} className="shrink-0" />
                        <span className={`ml-3 text-[12px] font-medium transition-all duration-300 whitespace-nowrap ${isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0 hidden"}`}>
                          {child.name}
                        </span>
                      </Link>
                    </Tooltip>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className={`p-6 border-t border-white/5 text-center transition-all ${isExpanded ? "opacity-100" : "opacity-20"}`}>
        <p className="text-[9px] text-white font-mono tracking-widest">V1.1.0-G</p>
      </div>
    </aside>
  );
};