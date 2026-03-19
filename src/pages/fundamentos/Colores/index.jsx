import React, { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const hexToRgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
};

const ColorCard = ({ name, hex, variable, description }) => {
  const rgb = hexToRgb(hex);
  return (
    <div className="group border border-zinc-100 rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="h-28 w-full relative" style={{ backgroundColor: hex }}>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
          <span className="text-[10px] font-mono font-bold text-white bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
            {hex} | {rgb}
          </span>
        </div>
      </div>
      <div className="p-5 font-geist text-left grow flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-[11px] font-black text-zinc-900 uppercase tracking-tighter">{name}</h4>
        </div>
        
        {/* MUI Implementation snippet in RGB */}
        <div className="mb-4 bg-zinc-50 p-3 rounded-lg border border-zinc-100">
          <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5 italic">Propiedad MUI (RGB)</p>
          <code className="text-[10px] text-blue-600 font-mono block leading-tight">
            {`sx={{ color: "${rgb}" }}`}
          </code>
        </div>

        <p className="text-[11px] text-zinc-500 leading-relaxed grow italic">
          {description}
        </p>
      </div>
    </div>
  );
};

const SectionHeader = ({ title }) => (
  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8 font-geist flex items-center gap-4 mt-20">
    <span className="shrink-0">{title}</span>
    <div className="h-px w-full bg-zinc-100"></div>
  </h2>
);

export default function Colores() {
  return (
    <div className="max-w-6xl animate-in fade-in duration-500 text-left pb-32">
      <header className="mb-16 font-geist">
        <div className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-[0.2em] mb-3 italic">
          Fundamentos / Colores Institucionales
        </div>
        <h1 className="text-5xl font-black tracking-tighter text-zinc-900">Paleta de Color</h1>
      </header>

      {/* --- 1. JERARQUÍA TIPOGRÁFICA --- */}
      <SectionHeader title="Títulos y Textos" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ColorCard name="Títulos H1 y H2" hex="#0B85C4" variable="--cs-txt-primary" description="Color institucional para encabezados principales." />
        <ColorCard name="Variante H3" hex="#25ADE6" variable="--cs-txt-accent" description="Títulos de tercer nivel y destacados." />
        <ColorCard name="Cuerpo y Subtítulos" hex="#000000" variable="--cs-txt-base" description="Texto base, párrafos y labels secundarios." />
        <ColorCard name="Texto Deshabilitado" hex="#A1A1AA" variable="--cs-txt-disabled" description="Inputs o botones que no permiten interacción." />
      </div>

      {/* --- 2. INTERFAZ DE TABLAS --- */}
      <SectionHeader title="Componentes de Tablas" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ColorCard name="Cabecera (All Caps)" hex="#0B85C4" variable="--cs-table-head" description="Color obligatorio para los títulos de la tabla." />
        <ColorCard name="Borde de Fila" hex="#E4E4E7" variable="--cs-table-border" description="Divisor horizontal entre registros." />
        <ColorCard name="Hover de Fila" hex="#F8FAFC" variable="--cs-table-hover" description="Fondo sutil al pasar el mouse por la fila." />
        <ColorCard name="Fondo Paginado" hex="#FAFAFA" variable="--cs-table-footer" description="Color de fondo para el control de páginas." />
      </div>

      {/* --- 3. BOTONES Y FLUJOS --- */}
      <SectionHeader title="Botones de Acción" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ColorCard name="Avance / Siguiente" hex="#29B6F6" variable="--cs-btn-forward" description="Botones Contained para progresar en trámites." />
        <ColorCard name="Acción Principal" hex="#0B579F" variable="--cs-btn-main" description="Color para FABs y Speed Dial." />
        <ColorCard name="Retroceso / Volver" hex="#0B85C4" variable="--cs-btn-back" description="Botones Outlined para navegar atrás." />
        <ColorCard name="Acción Crítica" hex="#E2464C" variable="--cs-btn-error" description="Botones de eliminar, cancelar o rechazar." />
      </div>

      {/* --- 4. ICONOGRAFÍA DE GESTIÓN --- */}
      <SectionHeader title="Iconos de Bandeja" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <ColorCard name="Editar (Lápiz)" hex="#099BE3" variable="--cs-ico-edit" description="Icono de edición en tablas." />
        <ColorCard name="Visualizar (Ojo)" hex="#FEDE27" variable="--cs-ico-view" description="Icono de visualización en tablas." />
        <ColorCard name="Eliminar (Tacho)" hex="#D32F2F" variable="--cs-ico-delete" description="Icono de borrado en tablas." />
        <ColorCard name="Historial (Reloj)" hex="#2E7D32" variable="--cs-ico-history" description="Icono de logs o historial." />
        <ColorCard name="Certificado" hex="#AF4178" variable="--cs-ico-cert" description="Iconografía de documentos digitales." />
      </div>

      {/* --- 5. SEMÁNTICA DE ESTADOS --- */}
      <SectionHeader title="Alertas y Estados" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <ColorCard name="Éxito" hex="#32A430" variable="--cs-st-success" description="Confirmación de procesos y checks." />
        <ColorCard name="Error Crítico" hex="#E2464C" variable="--cs-st-error" description="Mensajes de error y denegación." />
        <ColorCard name="Aviso Vencimiento" hex="#FFF4E5" variable="--cs-st-warning" description="Fondo para avisos de plazos." />
      </div>

      {/* --- 6. DEGRADADOS INSTITUCIONALES --- */}
      <SectionHeader title="Degradados de Sistema" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="group border border-zinc-100 rounded-3xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500">
          <div className="h-24 w-full bg-gradient-to-r from-[#00B4EC] via-[#00519C] to-[#082E5A]" />
          <div className="p-6">
            <h4 className="text-[11px] font-black text-zinc-900 uppercase tracking-widest mb-4 italic">Azul Institucional (Navbar/Stepper)</h4>
            <div className="bg-zinc-900 p-4 rounded-xl font-mono text-[10px] text-blue-300 border border-white/5">
              {`background: 'linear-gradient(to right, rgb(0, 180, 236), rgb(0, 81, 156), rgb(8, 46, 90))'`}
            </div>
          </div>
        </div>

        <div className="group border border-zinc-100 rounded-3xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500">
          <div className="h-24 w-full bg-gradient-to-r from-[#F59E0B] to-[#D97706]" />
          <div className="p-6">
            <h4 className="text-[11px] font-black text-zinc-900 uppercase tracking-widest mb-4 italic">Naranja Auditoría (Modificados)</h4>
            <div className="bg-zinc-900 p-4 rounded-xl font-mono text-[10px] text-orange-300 border border-white/5">
              {`background: 'linear-gradient(to right, rgb(245, 158, 11), rgb(217, 119, 6))'`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}