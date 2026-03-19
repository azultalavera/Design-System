import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { theme } from "./theme"; // El archivo que creamos recién
import { ThemeProvider } from '@mui/material/styles'; // <--- ESTA ES LA QUE FALTA
import { Home } from "./pages/Home";
// --- IMPORTACIÓN DE PÁGINAS ---
// Fundamentos
import Colores from "./pages/fundamentos/Colores";
import Tipografia from "./pages/fundamentos/Tipografia";


import LogosIdentidad from './pages/fundamentos/Logos';
import Cards from './pages/fundamentos/Cards';

// Estructura
import SidebarC from "./pages/estructura/SidebarC";
import { TopNavbar } from './pages/estructura/Navbar/TopNavbar';
import { SubNavbar } from './pages/estructura/Navbar/SubNavbar';
import Footer from "./pages/estructura/Footer";

// Componentes UI
import Botones from "./pages/componentesUI/Botones";
import Acordion from "./pages/componentesUI/Acordion";
import Inputs from "./pages/componentesUI/Inputs";
import Tablas from "./pages/componentesUI/Tablas";
import Avatares from "./pages/componentesUI/Avatares";
import Chips from "./pages/componentesUI/Chips";
import Modales from "./pages/componentesUI/Modales";
import Iconos from "./pages/componentesUI/Iconos";
import Seleccion from "./pages/componentesUI/Seleccion";
import Snackbars from "./pages/componentesUI/Snackbars";
import Alertas from "./pages/componentesUI/Alertas";
import Tooltips from "./pages/componentesUI/Tooltips";

// Layout
import Cabeceras from "./pages/layout/Cabeceras";
import Formularios from "./pages/layout/Formularios";
import Bandejas from "./pages/layout/Bandejas";
import Reportes from "./pages/layout/Reportes";
import Steppers from "./pages/layout/Steppers";
import Contenedores from "./pages/layout/Contenedores";
import Certificados from "./pages/layout/Certificados";

// Reglas de Negocio
import Estados from "./pages/reglasNegocio/Estados";

// ... imports
function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="flex min-h-screen bg-white text-left">
          <Sidebar isExpanded={isSidebarExpanded} setIsExpanded={setIsSidebarExpanded} />

          {/* Main Content: 
            Dynamic margin to push content when sidebar is expanded
          */}
          <main 
            className={`flex-1 transition-all duration-300 ${
              isSidebarExpanded ? "md:ml-64" : "md:ml-20"
            }`}
          >
            <div className="p-6 md:p-12 lg:p-20 max-w-6xl mx-auto font-geist">
              <Routes>
                {/* Redirección inicial */}
                <Route path="/" element={<Home />} />

                {/* RUTAS: FUNDAMENTOS */}
                <Route path="/fundamentos/colores" element={<Colores />} />
                <Route
                  path="/fundamentos/tipografia"
                  element={<Tipografia />}
                />
                
                
                <Route path="/fundamentos/logotipos" element={<LogosIdentidad />} />
                <Route path="/fundamentos/cards" element={<Cards />} />

                {/* RUTAS: ESTRUCTURA */}
                <Route path="/estructura/sidebarC" element={<SidebarC />} />
                <Route path="/estructura/topnavbar" element={<TopNavbar />} />
                <Route path="/estructura/subnavbar" element={<SubNavbar />} />
                <Route path="/estructura/footer" element={<Footer />} />

                {/* RUTAS: COMPONENTES UI */}
                <Route path="/componentes/botones" element={<Botones />} />
                <Route path="/componentes/acordion" element={<Acordion />} />
                <Route path="/componentes/inputs" element={<Inputs />} />
                <Route path="/componentes/tablas" element={<Tablas />} />
                <Route path="/componentes/chips" element={<Chips />} />
                <Route path="/componentes/modales" element={<Modales />} />
                <Route path="/componentes/iconos" element={<Iconos />} />
                <Route path="/componentes/seleccion" element={<Seleccion />} />
                <Route path="/componentes/snackbars" element={<Snackbars />} />
                <Route path="/componentes/alertas" element={<Alertas />} />
                <Route path="/componentes/avatares" element={<Avatares />} />
                <Route path="/componentes/tooltips" element={<Tooltips />} />

                {/* RUTAS: LAYOUT */}
                <Route path="/layout/cabeceras" element={<Cabeceras />} />
                <Route path="/layout/formularios" element={<Formularios />} />
                <Route path="/layout/bandejas" element={<Bandejas />} />
                <Route path="/layout/reportes" element={<Reportes />} />
                <Route path="/layout/steppers" element={<Steppers />} />
                <Route path="/layout/contenedores" element={<Contenedores />} />
                <Route path="/layout/certificados" element={<Certificados />} />

                {/* RUTAS: REGLAS DE NEGOCIO */}
                <Route path="/negocio/estados" element={<Estados />} />

                {/* Fallback para rutas no encontradas */}
                <Route
                  path="*"
                  element={
                    <div className="py-20 text-center">
                      <h2 className="text-2xl font-bold text-zinc-300">
                        404 - Sección no encontrada
                      </h2>
                      <p className="text-zinc-400">
                        La página que buscas aún no ha sido documentada.
                      </p>
                    </div>
                  }
                />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
