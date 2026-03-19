import React, { useState } from 'react';
import { 
  TextField, Typography, Tooltip, Snackbar, Alert, Checkbox, Autocomplete
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ContentCopy, InfoOutlined } from '@mui/icons-material';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

const robotoStyle = {
  '& .MuiInputLabel-root': { fontFamily: 'Roboto, sans-serif' },
  '& .MuiInputBase-input': { fontFamily: 'Roboto, sans-serif' },
  '& .MuiFormHelperText-root': { fontFamily: 'Roboto, sans-serif' },
};

// Subtítulos con línea en Gris
const InputSection = ({ title, code, children, onCopy }) => (
  <div className="mb-10 animate-in fade-in duration-500">
    <div className="flex items-center gap-4 mb-4">
      <h4 className="text-[13px] font-bold text-zinc-400 font-geist whitespace-nowrap">{title}</h4>
      <div className="h-px grow bg-zinc-100"></div>
      <Tooltip title="Copiar Snippet">
        <button onClick={() => onCopy(code)} className="p-1 hover:bg-zinc-100 rounded transition-all text-zinc-300">
          <ContentCopy sx={{ fontSize: 14 }} />
        </button>
      </Tooltip>
    </div>
    <div className="max-w-md ml-2">{children}</div>
  </div>
);

// Títulos de Categoría con línea en Negro
const CategoryHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-10 mt-16 first:mt-0">
    <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900 font-geist whitespace-nowrap">
      {title}
    </h2>
    <div className="h-px grow bg-zinc-200"></div>
  </div>
);

export default function Inputs() {
  const [snackbar, setSnackbar] = useState({ open: false, text: "" });
  const [selectedServices, setSelectedServices] = useState([]);
  const services = ['ANESTESIOLOGÍA', 'RADIOLOGÍA', 'LABORATORIO', 'UTI', 'CARDIOLOGÍA'];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setSnackbar({ open: true, text: "Snippet copiado" });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <div className="max-w-6xl mx-auto text-left font-geist pb-20">
        <header className="mb-16">
          <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-[10px]">
            Componentes UI / ClicSalud
          </Typography>
          <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4">Campos de Entrada</h1>
        </header>

        {/* --- SECCIÓN 1 --- */}
        <CategoryHeader title="Estados de Campos" />
        <div className="space-y-6">
          <InputSection title="Estado Default" onCopy={handleCopy} code={`<TextField variant="standard" label="Denominación" fullWidth />`}>
            <TextField variant="standard" label="Establecimiento" fullWidth sx={robotoStyle} />
          </InputSection>

          <InputSection title="Estado Error" onCopy={handleCopy} code={`<TextField error variant="standard" label="CUIL" helperText="Requerido" />`}>
            <TextField error variant="standard" label="CUIL / CUIT" helperText="Este campo es requerido" fullWidth sx={robotoStyle} />
          </InputSection>

          <InputSection title="Estado Deshabilitado" onCopy={handleCopy} code={`<TextField disabled variant="standard" label="Fecha" value="18/03/2026" />`}>
            <TextField disabled variant="standard" label="Fecha de Cambio" value="18/03/2026" fullWidth sx={robotoStyle} />
          </InputSection>
        </div>

        {/* --- SECCIÓN 2 --- */}
        <CategoryHeader title="Fechas" />
        <InputSection title="Input Fecha (Standard)" onCopy={handleCopy} code={`<DatePicker slotProps={{ textField: { variant: 'standard' } }} />`}>
          <DatePicker 
            label="Fecha últ. mantenimiento"
            format="DD/MM/YYYY"
            slotProps={{ textField: { variant: 'standard', fullWidth: true, sx: robotoStyle } }}
          />
        </InputSection>

        {/* --- SECCIÓN 3 --- */}
        <CategoryHeader title="Desplegables" />
        <div className="space-y-10">
          <InputSection title="Selección Simple con Borrado (X)" onCopy={handleCopy} code={`<Autocomplete ... />`}>
            <Autocomplete
              options={services}
              renderInput={(params) => (
                <TextField {...params} label="Servicio *" variant="standard" fullWidth sx={robotoStyle} />
              )}
            />
          </InputSection>

          <InputSection title="Multi-selección (Texto Plano)" onCopy={handleCopy} code={`<Autocomplete multiple ... />`}>
            <Autocomplete
              multiple
              options={services}
              value={selectedServices}
              onChange={(e, v) => setSelectedServices(v)}
              disableCloseOnSelect
              renderTags={() => null} 
              getOptionLabel={(option) => option}
              renderOption={(props, option, { selected }) => (
                <li {...props} style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}>
                  <Checkbox size="small" style={{ marginRight: 8 }} checked={selected} />
                  {option}
                </li>
              )}
              renderInput={(params) => (
                <TextField 
                  {...params} 
                  variant="standard" 
                  label="Servicios seleccionados" 
                  placeholder={selectedServices.length === 0 ? "Seleccionar..." : ""}
                  sx={robotoStyle}
                  inputProps={{ ...params.inputProps, value: selectedServices.join(', '), readOnly: true }}
                />
              )}
            />
          </InputSection>
        </div>

        {/* REGLA DE ESCRITURA */}
        <div className="mt-20 p-6 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-start gap-4">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><InfoOutlined fontSize="small" /></div>
          <p className="text-xs text-zinc-600 leading-relaxed font-geist">
            <strong className="text-zinc-900 uppercase text-[10px] tracking-wider block mb-1">Nota de Componente:</strong>
            Para los selectores que requieren limpieza (X), se debe utilizar Autocomplete. El uso de Roboto es obligatorio para el texto de entrada.
          </p>
        </div>

        <Snackbar 
          open={snackbar.open} 
          autoHideDuration={2000} 
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="info" variant="filled" sx={{ borderRadius: '8px', fontSize: '12px', fontFamily: 'Geist' }}>
            {snackbar.text}
          </Alert>
        </Snackbar>
      </div>
    </LocalizationProvider>
  );
}