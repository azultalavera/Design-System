import React, { useState } from 'react';
import { 
  Typography, Checkbox, Switch, FormControlLabel, FormGroup, 
  Tooltip, Snackbar, Alert, Box 
} from '@mui/material';
import { ContentCopy, InfoOutlined } from '@mui/icons-material';

// --- COMPONENTES ESTRUCTURALES ---
const CategoryHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-10 mt-16 first:mt-0">
    <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900 font-geist">
      {title}
    </h2>
    <div className="h-px grow bg-zinc-200"></div>
  </div>
);

const ControlBox = ({ title, code, children, onCopy }) => (
  <div className="mb-10 animate-in fade-in duration-500">
    <div className="flex items-center gap-4 mb-6">
      <h4 className="text-[13px] font-bold text-zinc-400 font-geist uppercase">{title}</h4>
      <div className="h-px grow bg-zinc-100"></div>
      <Tooltip title="Copiar Snippet">
        <button onClick={() => onCopy(code)} className="p-1 hover:bg-zinc-100 rounded transition-all text-zinc-300">
          <ContentCopy sx={{ fontSize: 14 }} />
        </button>
      </Tooltip>
    </div>
    <div className="max-w-md ml-2 bg-white p-4 rounded-xl border border-zinc-50 shadow-sm">
      {children}
    </div>
  </div>
);

// Estilo para los Labels en Roboto Bold (Estándar ClicSalud)
const labelStyle = {
  '& .MuiFormControlLabel-label': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: '14px',
    color: '#555',
    textTransform: 'uppercase',
  }
};

export default function Seleccion() {
  const [snackbar, setSnackbar] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setSnackbar(true);
  };

  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4">
      <header className="mb-16">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-[10px]">
          Componentes UI / ClicSalud
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4">Controles de Selección</h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-light">
          Checkboxes y Switches para la gestión de estados, permisos y opciones múltiples.
        </p>
      </header>

      {/* --- CHECKBOXES --- */}
      <CategoryHeader title="01. Checkboxes" />
      
      <ControlBox 
        title="Estado Individual" 
        onCopy={handleCopy}
        code={`<FormControlLabel control={<Checkbox defaultChecked />} label="ETIQUETA" />`}
      >
        <FormGroup>
          <FormControlLabel 
            control={<Checkbox defaultChecked sx={{ color: '#0B85C4', '&.Mui-checked': { color: '#0B85C4' } }} />} 
            label="Acepto los términos" 
            sx={labelStyle}
          />
          <FormControlLabel 
            control={<Checkbox sx={{ color: '#0B85C4' }} />} 
            label="Requiere auditoría técnica" 
            sx={labelStyle}
          />
          <FormControlLabel 
            disabled 
            control={<Checkbox disabled />} 
            label="Opción no disponible" 
            sx={labelStyle}
          />
        </FormGroup>
      </ControlBox>

      {/* --- SWITCHES --- */}
      <CategoryHeader title="02. Switches (Interruptores)" />
      
      <ControlBox 
        title="Activación de Funciones" 
        onCopy={handleCopy}
        code={`<FormControlLabel control={<Switch defaultChecked />} label="HABILITAR" />`}
      >
        <FormGroup className="space-y-4">
          <FormControlLabel 
            control={<Switch defaultChecked sx={{ '& .MuiSwitch-switchBase.Mui-checked': { color: '#0B85C4' }, '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { bgcolor: '#0B85C4' } }} />} 
            label="Habilitar Establecimiento" 
            sx={labelStyle}
          />
          <FormControlLabel 
            control={<Switch sx={{ '& .MuiSwitch-switchBase.Mui-checked': { color: '#0B85C4' } }} />} 
            label="Modo Administrador" 
            sx={labelStyle}
          />
        </FormGroup>
      </ControlBox>

      {/* REGLA DE USO */}
      <div className="mt-20 p-6 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-start gap-4 font-geist">
        <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><InfoOutlined fontSize="small" /></div>
        <div className="text-xs text-zinc-600 leading-relaxed">
          <strong className="text-zinc-900 uppercase text-[10px] tracking-wider block mb-1">Diferencia de Uso:</strong>
          Utilizar <strong>Checkboxes</strong> cuando el usuario deba confirmar una acción antes de enviarla. 
          Utilizar <strong>Switches</strong> cuando la acción deba tener un efecto inmediato (ON/OFF) en la interfaz o el sistema.
        </div>
      </div>

      <Snackbar 
        open={snackbar} 
        autoHideDuration={2000} 
        onClose={() => setSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" sx={{ borderRadius: '8px', fontSize: '12px', bgcolor: '#0B85C4' }}>
          Snippet de Control copiado
        </Alert>
      </Snackbar>
    </div>
  );
}