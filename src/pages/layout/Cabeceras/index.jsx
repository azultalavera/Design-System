import React, { useState } from 'react';
import { Typography, Box, IconButton, Tooltip, Snackbar, Alert } from '@mui/material';
import { 
  ContentCopy, 
  AssignmentOutlined, 
  AppRegistrationOutlined, 
  BusinessCenterOutlined,
  AssessmentOutlined,
  InfoOutlined
} from '@mui/icons-material';

// --- COMPONENTES ESTRUCTURALES ---
const CategoryHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-10 mt-16 first:mt-0">
    <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900 font-geist">
      {title}
    </h2>
    <div className="h-px grow bg-zinc-200"></div>
  </div>
);

const HeaderPreview = ({ title, type, children, code, onCopy }) => (
  <div className="mb-12 group">
    <div className="flex justify-between items-center mb-4 px-2">
      <div className="flex flex-col">
        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{type}</span>
      </div>
      <Tooltip title="Copiar Snippet">
        <IconButton onClick={() => onCopy(code)} size="small" sx={{ color: '#ccc' }}>
          <ContentCopy sx={{ fontSize: 16 }} />
        </IconButton>
      </Tooltip>
    </div>
    <div className="border border-zinc-100 rounded-2xl overflow-hidden bg-white shadow-sm transition-all hover:shadow-md">
      {children}
    </div>
  </div>
);

export default function Cabeceras() {
  const [snackbar, setSnackbar] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setSnackbar(true);
  };

  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4">
      <header className="mb-16">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-[10px]">
          Patrones y Layout / ClicSalud
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4 leading-none">Cabeceras (Headers)</h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-light">
          Estructuras de navegación y contexto para trámites, gestiones y reportes de auditoría.
        </p>
      </header>

      {/* --- 1. CABECERA DE TRÁMITE --- */}
      <CategoryHeader title="01. Trámites (Efector)" />
      <HeaderPreview 
        type="Header de Trámite Activo"
        onCopy={handleCopy}
        code={`<Box sx={{ bgcolor: '#00519B', p: 2, textAlign: 'center', color: 'white' }}>\n  <Typography sx={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>Trámite Nº 190 Habilitación</Typography>\n  <Typography sx={{ fontFamily: 'Roboto', fontSize: '14px' }}>Talavera Maria Azul - Azul 22/10</Typography>\n</Box>`}
      >
        <Box sx={{ bgcolor: '#00519B', p: 2.5, textAlign: 'center', color: 'white', borderRadius: '4px 4px 0 0' }}>
          <Typography sx={{ fontFamily: 'Roboto', fontWeight: 900, fontSize: '18px', tracking: '-0.02em' }}>
            Trámite Nº 190 Habilitación
          </Typography>
          <Typography sx={{ fontFamily: 'Roboto', fontSize: '15px', opacity: 0.9, mt: 0.5 }}>
            Talavera Maria Azul - Azul 22/10
          </Typography>
        </Box>
      </HeaderPreview>

      {/* --- 2. CABECERA DE INICIO --- */}
      <CategoryHeader title="02. Inicio de Acción" />
      <HeaderPreview 
        type="Header con Icono Central"
        onCopy={handleCopy}
        code={`<Box sx={{ textAlign: 'center', p: 3 }}>\n  <Icon sx={{ fontSize: 40 }} />\n  <Typography variant="h6">Iniciar Habilitación</Typography>\n</Box>`}
      >
        <Box sx={{ bgcolor: '#00519B', p: 4, textAlign: 'center', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <AppRegistrationOutlined sx={{ fontSize: 32, mb: 1 }} />
          <Typography sx={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '22px', textTransform: 'uppercase' }}>
            Iniciar habilitación
          </Typography>
        </Box>
      </HeaderPreview>

      {/* --- 3. CABECERA DE GESTIÓN --- */}
      <CategoryHeader title="03. Gestión (Agente)" />
      <HeaderPreview 
        type="Header de Bandeja / Asignación"
        onCopy={handleCopy}
        code={`<Box sx={{ bgcolor: '#00519B', p: 2, textAlign: 'center' }}>\n  <Typography sx={{ fontWeight: 'bold' }}>Asignar Trámite N°51</Typography>\n</Box>`}
      >
        <div className="flex flex-col">
          <Box sx={{ bgcolor: '#00519B', p: 2, textAlign: 'center', color: 'white' }}>
            <Typography sx={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '16px' }}>
              Asignar Trámite N°51
            </Typography>
          </Box>
          <div className="p-4 bg-zinc-50 border-b border-zinc-100 flex justify-center">
            <Typography sx={{ fontColor: '#666', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', tracking: '0.1em' }}>
              Bandeja de Asignación de Trámites
            </Typography>
          </div>
        </div>
      </HeaderPreview>

      {/* --- 4. CABECERA DE REPORTE --- */}
      <CategoryHeader title="04. Reportes y Auditoría" />
      <HeaderPreview 
        type="Header de Reporte Complejo"
        onCopy={handleCopy}
        code={`<Box sx={{ bgcolor: '#00519B', p: 3 }}>\n  <Typography variant="h4">Auditoría Médica</Typography>\n  <Typography sx={{ color: '#25ade6' }}>Resumen de inspecciones</Typography>\n</Box>`}
      >
        <Box sx={{ bgcolor: '#00519B', p: 4, textAlign: 'center' }}>
          <Typography sx={{ fontFamily: 'Roboto', color: 'white', fontWeight: 900, fontSize: '28px', mb: 1 }}>
            ESTADÍSTICAS GENERALES DE AUDITORÍA
          </Typography>
          <Typography sx={{ fontFamily: 'Roboto', color: '#25ade6', fontWeight: 'bold', fontSize: '18px' }}>
            Periodo Fiscal 2026 - Control de Gestión
          </Typography>
        </Box>
      </HeaderPreview>

      {/* --- REGLAS DE NEGOCIO --- */}
      <CategoryHeader title="Reglas de Negocio Visuales" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl flex gap-4">
          <InfoOutlined className="text-blue-600 shrink-0" />
          <div className="text-xs text-zinc-600 leading-relaxed font-geist">
            <strong className="text-zinc-900 block mb-1 uppercase tracking-wider">Navegación del Efector:</strong>
            El sistema debe alternar automáticamente entre <strong>"Mis establecimientos"</strong> y <strong>"Trámites en curso"</strong> basándose en el contexto de selección previo en el Home.
          </div>
        </div>
        <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl flex gap-4">
          <AssessmentOutlined className="text-blue-600 shrink-0" />
          <div className="text-xs text-zinc-600 leading-relaxed font-geist">
            <strong className="text-zinc-900 block mb-1 uppercase tracking-wider">Consistencia con Iconografía:</strong>
            En cabeceras con iconos (como Inicio de Trámite), el icono siempre precede al texto en un renglón superior. Ambos elementos deben mantener un alineamiento central absoluto.
          </div>
        </div>
      </div>

      <Snackbar 
        open={snackbar} 
        autoHideDuration={2000} 
        onClose={() => setSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" sx={{ borderRadius: '8px', fontSize: '12px', bgcolor: '#00519B' }}>
          Snippet de Cabecera copiado al portapapeles
        </Alert>
      </Snackbar>
    </div>
  );
}