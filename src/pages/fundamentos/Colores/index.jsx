import React, { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const ColorCard = ({ name, hex, variable, description, onCopy }) => (
  <div 
    onClick={() => onCopy(hex)}
    className="group border border-zinc-100 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-all cursor-pointer active:scale-95 flex flex-col h-full"
  >
    <div className="h-24 w-full" style={{ backgroundColor: hex }}></div>
    <div className="p-4 font-geist text-left grow">
      <div className="flex justify-between items-start mb-1">
        <h4 className="text-[13px] font-bold text-zinc-900">{name}</h4>
        <code className="text-[10px] font-mono text-zinc-400 uppercase">{hex}</code>
      </div>
      <code className="text-[9px] text-blue-600 font-mono block mb-3">{variable}</code>
      <p className="text-[11px] text-zinc-500 leading-tight border-t border-zinc-50 pt-2">
        {description}
      </p>
    </div>
  </div>
);

const SectionHeader = ({ title }) => (
  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8 font-geist flex items-center gap-4 mt-16">
    <span className="shrink-0">{title}</span>
    <div className="h-px w-full bg-zinc-100"></div>
  </h2>
);

export default function Colores() {
  const [open, setOpen] = useState(false);
  const [copiedColor, setCopiedColor] = useState("");

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setOpen(true);
  };

  return (
    <div className="max-w-6xl animate-in fade-in duration-500 text-left pb-32">
      <header className="mb-16 font-geist">
        <div className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">
          Fundamentos / ClicSalud
        </div>
        <h1 className="text-5xl font-black tracking-tighter text-zinc-900">Colores</h1>
      </header>

      {/* --- 1. JERARQUÍA TIPOGRÁFICA --- */}
      <SectionHeader title="Títulos y Textos" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ColorCard name="Títulos H1 y H2" hex="#0B85C4" variable="--cs-txt-primary" description="Color institucional para encabezados principales." onCopy={handleCopy} />
        <ColorCard name="Variante H3" hex="#25ADE6" variable="--cs-txt-accent" description="Títulos de tercer nivel y destacados." onCopy={handleCopy} />
        <ColorCard name="Cuerpo y Subtítulos" hex="#000000" variable="--cs-txt-base" description="Texto base, párrafos y labels secundarios." onCopy={handleCopy} />
        <ColorCard name="Texto Deshabilitado" hex="#A1A1AA" variable="--cs-txt-disabled" description="Inputs o botones que no permiten interacción." onCopy={handleCopy} />
      </div>

      {/* --- 2. INTERFAZ DE TABLAS --- */}
      <SectionHeader title="Componentes de Tablas" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ColorCard name="Cabecera (All Caps)" hex="#0B85C4" variable="--cs-table-head" description="Color obligatorio para los títulos de la tabla." onCopy={handleCopy} />
        <ColorCard name="Borde de Fila" hex="#E4E4E7" variable="--cs-table-border" description="Divisor horizontal entre registros." onCopy={handleCopy} />
        <ColorCard name="Hover de Fila" hex="#F8FAFC" variable="--cs-table-hover" description="Fondo sutil al pasar el mouse por la fila." onCopy={handleCopy} />
        <ColorCard name="Fondo Paginado" hex="#FAFAFA" variable="--cs-table-footer" description="Color de fondo para el control de páginas." onCopy={handleCopy} />
      </div>

      {/* --- 3. BOTONES Y FLUJOS --- */}
      <SectionHeader title="Botones de Acción" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ColorCard name="Avance / Siguiente" hex="#29B6F6" variable="--cs-btn-forward" description="Botones Contained para progresar en trámites." onCopy={handleCopy} />
        <ColorCard name="Acción Principal" hex="#0B579F" variable="--cs-btn-main" description="Color para FABs y Speed Dial." onCopy={handleCopy} />
        <ColorCard name="Retroceso / Volver" hex="#0B85C4" variable="--cs-btn-back" description="Botones Outlined para navegar atrás." onCopy={handleCopy} />
        <ColorCard name="Acción Crítica" hex="#E2464C" variable="--cs-btn-error" description="Botones de eliminar, cancelar o rechazar." onCopy={handleCopy} />
      </div>

      {/* --- 4. ICONOGRAFÍA DE GESTIÓN --- */}
      <SectionHeader title="Iconos de Bandeja" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <ColorCard name="Editar (Lápiz)" hex="#099BE3" variable="--cs-ico-edit" description="Icono de edición en tablas." onCopy={handleCopy} />
        <ColorCard name="Visualizar (Ojo)" hex="#FEDE27" variable="--cs-ico-view" description="Icono de visualización en tablas." onCopy={handleCopy} />
        <ColorCard name="Eliminar (Tacho)" hex="#D32F2F" variable="--cs-ico-delete" description="Icono de borrado en tablas." onCopy={handleCopy} />
        <ColorCard name="Historial (Reloj)" hex="#2E7D32" variable="--cs-ico-history" description="Icono de logs o historial." onCopy={handleCopy} />
        <ColorCard name="Certificado" hex="#AF4178" variable="--cs-ico-cert" description="Iconografía de documentos digitales." onCopy={handleCopy} />
      </div>

      {/* --- 5. SEMÁNTICA DE ESTADOS --- */}
      <SectionHeader title="Alertas y Estados" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <ColorCard name="Éxito" hex="#32A430" variable="--cs-st-success" description="Confirmación de procesos y checks." onCopy={handleCopy} />
        <ColorCard name="Error Crítico" hex="#E2464C" variable="--cs-st-error" description="Mensajes de error y denegación." onCopy={handleCopy} />
        <ColorCard name="Aviso Vencimiento" hex="#FFF4E5" variable="--cs-st-warning" description="Fondo para avisos de plazos." onCopy={handleCopy} />
      </div>

      <Snackbar 
        open={open} 
        autoHideDuration={2000} 
        onClose={() => setOpen(false)} 
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" sx={{ borderRadius: '8px', fontBold: true }}>
          Copiado: {copiedColor}
        </Alert>
      </Snackbar>
    </div>
  );
}