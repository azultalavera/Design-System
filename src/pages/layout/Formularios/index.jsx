import React, { useState } from 'react';
import { 
  Typography, Grid, TextField, Button, Box, 
  Checkbox, FormControlLabel, Tooltip, Snackbar, Alert 
} from '@mui/material';
import { 
  ContentCopy, Save, DeleteSweep, 
  ArrowForward, InfoOutlined, WarningAmber 
} from '@mui/icons-material';

// --- ESTILOS INSTITUCIONALES ---
const robotoStyle = {
  '& .MuiInputLabel-root': { fontFamily: 'Roboto', fontWeight: 700, fontSize: '14px' },
  '& .MuiInputBase-input': { fontFamily: 'Roboto', fontSize: '15px' },
  '& .MuiFormHelperText-root': { fontFamily: 'Roboto', fontSize: '11px' },
};

const asterisk = <span className="text-red-500 ml-1">(*)</span>;

// --- COMPONENTES ESTRUCTURALES ---
const FormSection = ({ title, children }) => (
  <div className="mb-12 animate-in fade-in slide-in-from-bottom-2 duration-700">
    <div className="flex items-center gap-4 mb-8">
      <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 font-geist whitespace-nowrap">
        {title}
      </h3>
      <div className="h-px grow bg-zinc-100"></div>
    </div>
    {children}
  </div>
);

const FormWrapper = ({ title, subtitle, children, onCopy, code }) => (
  <div className="mb-20 p-8 bg-white border border-zinc-100 rounded-3xl shadow-sm">
    <div className="flex justify-between items-start mb-10">
      <div>
        <h2 className="text-2xl font-black text-zinc-900 tracking-tighter font-geist">{title}</h2>
        <p className="text-sm text-zinc-400 font-geist">{subtitle}</p>
      </div>
      <Tooltip title="Copiar Estructura">
        <button onClick={() => onCopy(code)} className="p-2 hover:bg-zinc-50 rounded-xl text-zinc-300 transition-all">
          <ContentCopy sx={{ fontSize: 20 }} />
        </button>
      </Tooltip>
    </div>
    {children}
  </div>
);

export default function Formularios() {
  const [snackbar, setSnackbar] = useState({ open: false, text: "" });
  const [terms, setTerms] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setSnackbar({ open: true, text: "Estructura de formulario copiada" });
  };

  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4">
      <header className="mb-16">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-[10px]">
          Patrones y Layout / ClicSalud
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4 leading-none">Formularios y Flujos</h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-light">
          Estándares de agrupación, validación y navegación para la carga de datos del Efector.
        </p>
      </header>

      {/* --- 1. FORMULARIO DE REGISTRO --- */}
      <FormWrapper 
        title="Registro de Efector" 
        subtitle="Uso: Alta de nuevos usuarios y entidades."
        onCopy={handleCopy}
        code={`<Grid container spacing={4}>...</Grid>`}
      >
        <FormSection title="Datos de la Entidad">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField label={<>CUIL / CUIT {asterisk}</>} variant="standard" fullWidth sx={robotoStyle} placeholder="00-00000000-0" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label={<>RAZÓN SOCIAL {asterisk}</>} variant="standard" fullWidth sx={robotoStyle} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="ACTIVIDAD PRINCIPAL" variant="standard" fullWidth sx={robotoStyle} />
            </Grid>
          </Grid>
        </FormSection>

        <FormSection title="Contacto Institucional">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField label={<>EMAIL {asterisk}</>} variant="standard" fullWidth sx={robotoStyle} error helperText="No es un email válido" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="TELÉFONO" variant="standard" fullWidth sx={robotoStyle} />
            </Grid>
          </Grid>
        </FormSection>

        <div className="flex justify-end gap-4 mt-8">
          <Button variant="outlined" startIcon={<DeleteSweep />} sx={{ borderRadius: '8px', px: 4, color: '#666', borderColor: '#ccc', fontFamily: 'Roboto', fontWeight: 'bold' }}>LIMPIAR</Button>
          <Button variant="contained" endIcon={<ArrowForward />} sx={{ borderRadius: '8px', px: 4, bgcolor: '#0B85C4', fontFamily: 'Roboto', fontWeight: 'bold' }}>SIGUIENTE</Button>
        </div>
      </FormWrapper>

      {/* --- 2. FORMULARIO DE DOMICILIO --- */}
      <FormWrapper 
        title="Localización Geográfica" 
        subtitle="Uso: Domicilio real y legal de establecimientos."
        onCopy={handleCopy}
        code={`<Grid container spacing={4}>...</Grid>`}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <TextField label={<>CALLE {asterisk}</>} variant="standard" fullWidth sx={robotoStyle} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label={<>NÚMERO {asterisk}</>} variant="standard" fullWidth sx={robotoStyle} />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField label="PISO" variant="standard" fullWidth sx={robotoStyle} />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField label="DPTO" variant="standard" fullWidth sx={robotoStyle} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label={<>LOCALIDAD {asterisk}</>} variant="standard" fullWidth sx={robotoStyle} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label={<>PROVINCIA {asterisk}</>} variant="standard" fullWidth sx={robotoStyle} defaultValue="CÓRDOBA" disabled />
          </Grid>
        </Grid>
        
        <div className="flex justify-end gap-4 mt-12">
          <Button variant="outlined" sx={{ borderRadius: '8px', px: 4, color: '#666', borderColor: '#ccc', fontFamily: 'Roboto', fontWeight: 'bold' }}>LIMPIAR</Button>
          <Button variant="contained" endIcon={<ArrowForward />} sx={{ borderRadius: '8px', px: 4, bgcolor: '#0B85C4', fontFamily: 'Roboto', fontWeight: 'bold' }}>SIGUIENTE</Button>
        </div>
      </FormWrapper>

      {/* --- 3. SECCIÓN DE ASUNTO Y DESCRIPCIÓN --- */}
      <FormWrapper 
        title="Detalle de Solicitud" 
        subtitle="Uso: Notas, observaciones y motivos de trámite."
        onCopy={handleCopy}
        code={`<TextField multiline rows={4} ... />`}
      >
        <div className="space-y-10">
          <TextField 
            label={<>ASUNTO {asterisk}</>} 
            variant="standard" 
            fullWidth 
            sx={robotoStyle} 
            inputProps={{ maxLength: 100 }}
            helperText="15 / 100 caracteres"
          />
          <TextField 
            label={<>DESCRIPCIÓN {asterisk}</>} 
            variant="standard" 
            fullWidth 
            multiline 
            rows={4}
            sx={robotoStyle} 
            inputProps={{ maxLength: 600 }}
            helperText="Máximo alcanzado: 600 / 600 caracteres"
            error
          />
          
          <FormControlLabel 
            control={<Checkbox checked={terms} onChange={(e) => setTerms(e.target.checked)} sx={{ color: '#0B85C4' }} />} 
            label={<span className="text-xs font-bold text-zinc-600 font-roboto uppercase">Es necesario aceptar los términos y condiciones (*)</span>}
          />
        </div>

        <div className="flex justify-end gap-4 mt-12">
          <Button variant="outlined" sx={{ borderRadius: '8px', px: 4, color: '#666', borderColor: '#ccc', fontFamily: 'Roboto', fontWeight: 'bold' }}>LIMPIAR</Button>
          <Button variant="contained" disabled={!terms} endIcon={<Save />} sx={{ borderRadius: '8px', px: 4, bgcolor: '#0B85C4', fontFamily: 'Roboto', fontWeight: 'bold' }}>GUARDAR CAMBIOS</Button>
        </div>
      </FormWrapper>

      {/* REGLAS DE NEGOCIO */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-zinc-900 rounded-3xl text-white font-geist">
          <div className="flex items-center gap-3 mb-6">
            <Save className="text-blue-400" />
            <h4 className="text-xs font-black uppercase tracking-widest">Auto-guardado</h4>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Al presionar <strong>"Siguiente"</strong>, el sistema persiste automáticamente los cambios. 
            Si el usuario retrocede sin guardar, debe dispararse el modal de <strong>"Posible pérdida de datos"</strong>.
          </p>
        </div>

        <div className="p-8 bg-blue-50 border border-blue-100 rounded-3xl font-geist">
          <div className="flex items-center gap-3 mb-6 text-blue-900">
            <InfoOutlined />
            <h4 className="text-xs font-black uppercase tracking-widest">Validación</h4>
          </div>
          <ul className="text-[11px] space-y-3 font-bold text-zinc-500 uppercase">
            <li>• Campo Vacío: "Este campo es requerido"</li>
            <li>• Sintaxis: "No es un [Campo] válido"</li>
            <li>• Longitud: "Límite de caracteres alcanzado"</li>
          </ul>
        </div>
      </div>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={2000} 
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" sx={{ borderRadius: '8px', fontSize: '12px', bgcolor: '#0B85C4' }}>
          {snackbar.text}
        </Alert>
      </Snackbar>
    </div>
  );
}