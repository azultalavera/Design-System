import React, { useState } from 'react';
import { Typography, Grid, Chip, Snackbar, Alert } from '@mui/material';
import { 
  DownloadingOutlined, PendingActionsOutlined, AssignmentLateOutlined, 
  AssignmentTurnedInOutlined, ContentPasteOffOutlined, AlarmOffOutlined,
  InfoOutlined, ContentCopy
} from '@mui/icons-material';

const CHIP_STATES = [
  { label: "PENDIENTE DE SUBIR", color: "#8C8888", Icon: DownloadingOutlined, rotate: "180deg" },
  { label: "PENDIENTE DE VALIDAR", color: "#AF4178", Icon: PendingActionsOutlined },
  { label: "OBSERVADO", color: "#0885C4", Icon: AssignmentLateOutlined },
  { label: "VALIDADO", color: "#32A430", Icon: AssignmentTurnedInOutlined },
  { label: "RECHAZADO", color: "#E2464C", Icon: ContentPasteOffOutlined },
  { label: "VENCIDO", color: "#EB7F27", Icon: AlarmOffOutlined }
];

const TEXT_CHIPS = [
  { label: "DIÁLISIS", variant: "filled" },
  { label: "PLANTA ALTA", variant: "outlined" },
  { label: "URGENCIAS", variant: "filled" },
  { label: "MÉDICO AUDITOR", variant: "outlined" },
  { label: "FERTILIDAD", variant: "filled" },
  { label: "SOLICITUD WEB", variant: "outlined" }
];

const CategoryHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-10 mt-16 first:mt-0">
    <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900 font-geist whitespace-nowrap">
      {title}
    </h2>
    <div className="h-px grow bg-zinc-200"></div>
  </div>
);

const ColumnTitle = ({ title, subtitle }) => (
  <div className="mb-8 px-2">
    <h3 className="text-sm font-black text-zinc-800 uppercase font-geist mb-1">{title}</h3>
    <p className="text-[10px] text-zinc-400 uppercase tracking-widest">{subtitle}</p>
  </div>
);

export default function ChipsEstados() {
  const [snackbar, setSnackbar] = useState({ open: false, text: "" });

  const handleCopy = (label, code) => {
    navigator.clipboard.writeText(code);
    setSnackbar({ open: true, text: `Snippet de "${label}" copiado` });
  };

  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4">
      <header className="mb-16">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-[10px]">
          Componentes UI / ClicSalud
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4">Chips</h1>
      </header>

      <CategoryHeader title="Guía de Aplicación por Uso" />

      <Grid container spacing={10}>
        {/* --- COLUMNA 1: ESTADOS (OUTLINED) --- */}
        <Grid item xs={12} md={6}>
          <ColumnTitle title="Uso para Estados" subtitle="Semánticos con Iconos (Outlined)" />
          <div className="flex flex-col gap-2">
            {CHIP_STATES.map((state, index) => (
              <div 
                key={index}
                onClick={() => handleCopy(state.label, `<Chip variant="outlined" icon={<Icon />} label="${state.label}" sx={{ color: '${state.color}', borderColor: '${state.color}' }} />`)}
                className="group flex items-center p-3 hover:bg-zinc-50 transition-all cursor-pointer rounded-lg border-b border-zinc-50 last:border-none"
              >
                <Chip 
                  variant="outlined"
                  icon={<state.Icon sx={{ color: `${state.color} !important`, fontSize: '18px !important', transform: state.rotate ? `rotate(${state.rotate})` : 'none' }} />}
                  label={state.label}
                  sx={{ 
                    color: state.color,
                    borderColor: state.color,
                    fontFamily: 'Roboto', 
                    fontWeight: 'bold', 
                    fontSize: '11px',
                    height: 32,
                    px: 1,
                    '& .MuiChip-icon': { marginLeft: '4px' }
                  }} 
                />
                <div className="ml-4 overflow-hidden">
                  <p className="text-[10px] text-zinc-400 font-mono font-bold uppercase tracking-tighter">{state.color}</p>
                </div>
                <ContentCopy className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-zinc-300" sx={{ fontSize: 16 }} />
              </div>
            ))}
          </div>
        </Grid>

        {/* --- COLUMNA 2: TEXTO (SIN ICONO) --- */}
        <Grid item xs={12} md={6}>
          <ColumnTitle title="Uso para Texto" subtitle="Informativos sin Iconos" />
          <div className="flex flex-col gap-2">
            {TEXT_CHIPS.map((chip, index) => (
              <div 
                key={index}
                onClick={() => handleCopy(chip.label, `<Chip label="${chip.label}" sx={{ bgcolor: '#0B85C4' }} />`)}
                className="group flex items-center p-3 hover:bg-zinc-50 transition-all cursor-pointer rounded-lg border-b border-zinc-50 last:border-none"
              >
                <Chip 
                  variant={chip.variant}
                  label={chip.label}
                  sx={{ 
                    bgcolor: chip.variant === 'filled' ? '#0B85C4' : 'transparent',
                    color: chip.variant === 'filled' ? 'white' : '#0B85C4',
                    borderColor: '#0B85C4',
                    fontFamily: 'Roboto', 
                    fontWeight: 'bold', 
                    fontSize: '11px',
                    height: 32,
                    px: 1
                  }} 
                />
                <div className="ml-4">
                   <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tighter italic">
                     Variante {chip.variant}
                   </p>
                </div>
                <ContentCopy className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-zinc-300" sx={{ fontSize: 16 }} />
              </div>
            ))}
          </div>
        </Grid>
      </Grid>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={2000} 
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" sx={{ borderRadius: '12px', fontSize: '13px', bgcolor: '#0B85C4', fontWeight: 'bold' }}>
          {snackbar.text}
        </Alert>
      </Snackbar>
    </div>
  );
}