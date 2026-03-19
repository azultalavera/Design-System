import React, { useState } from 'react';
import {
  Typography, Grid, TextField, Button, Box, Paper,
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

const FormWrapper = ({ title, subtitle, children, code }) => (
  <div className="mb-20 p-8 bg-white border border-zinc-100 rounded-3xl shadow-sm">
    <div className="flex justify-between items-start mb-10">
      <div>
        <h2 className="text-2xl font-black text-zinc-900 tracking-tighter font-geist italic uppercase">{title}</h2>
        <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest mt-1">{subtitle}</p>
      </div>
    </div>

    <div className="mb-10">
      {children}
    </div>

    {/* Implementación MUI visible */}
    <div className="mt-8 border-t border-zinc-50 pt-8">
      <p className="text-[9px] font-black text-blue-500 uppercase tracking-[0.2em] mb-4 italic">Implementación Estructural MUI</p>
      <div className="bg-[#0a192f] p-5 rounded-2xl border border-white/5">
        <pre className="text-[11px] text-blue-300 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </div>
  </div>
);

export default function Formularios() {
  const [terms, setTerms] = useState(false);

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

      <FormWrapper
        title="Registro de Efector"
        subtitle="Uso: Alta de nuevos usuarios y entidades."
        code={`<Grid container spacing={4}>
  <Grid item xs={12} md={6}>
    <TextField label="CUIL / CUIT" variant="standard" fullWidth />
  </Grid>
  <Grid item xs={12} md={6}>
    <TextField label="RAZÓN SOCIAL" variant="standard" fullWidth />
  </Grid>
</Grid>`}
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
        code={`<Grid container spacing={4}>
  <Grid item xs={12} md={8}><TextField label="CALLE..." /></Grid>
  <Grid item xs={12} md={4}><TextField label="NÚMERO..." /></Grid>
</Grid>`}
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

      {/* --- 3. SECCIÓN DE ASUNTO ESTANDARIZADA --- */}
      <FormWrapper
        title="Asunto del Trámite"
        subtitle="Uso obligatorio en todos los trámites del sistema."
        code={`<Paper elevation={1} sx={{ p: 4, borderRadius: '16px' }}>
  <Typography variant="h5" sx={{ color: 'rgb(0, 180, 236)', fontWeight: 800, mb: 3 }}>Asunto</Typography>
  
  {/* Línea de Asunto Dinámica */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 2 }}>
    <Typography variant="body1">Adecuación - HOSPITAL PRIVADO CENTRO MEDICO DE CORDOBA S.A. - </Typography>
    <TextField variant="standard" placeholder="Nombre establecimiento" sx={{ minWidth: '200px' }} />
  </Box>

  <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 4 }}>
    Tipología: <span style={{ fontWeight: 400 }}>Unidad o Servicio de Diálisis</span>
  </Typography>

  <TextField 
    label="Descripción *" 
    multiline 
    rows={4} 
    fullWidth 
    variant="standard" 
    placeholder="Ingrese la descripción aquí..."
  />
</Paper>`}
      >
        <Paper elevation={1} sx={{ p: 4, borderRadius: '24px', bgcolor: 'rgb(255, 255, 255)', border: '1px solid rgb(244, 244, 245)' }}>
          <Typography variant="h5" sx={{ color: 'rgb(0, 180, 236)', fontWeight: 800, mb: 3, fontFamily: 'Geist' }}>
            Asunto
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1, mb: 2, flexWrap: 'wrap' }}>
            <Typography sx={{ fontFamily: 'Roboto', fontSize: '15px', color: 'rgb(63, 63, 70)' }}>
              Habilitación - HOSPITAL PRIVADO CENTRO MEDICO DE CORDOBA S.A. -
            </Typography>
            <TextField
              variant="standard"
              placeholder="Nombre del establecimiento"
              sx={{
                minWidth: '200px',
                '& .MuiInputBase-input': { fontSize: '15px', fontFamily: 'Roboto', pb: 0.5 }
              }}
            />
          </Box>

          <Typography sx={{ fontFamily: 'Roboto', fontSize: '15px', fontWeight: 'bold', mb: 4, color: 'rgb(24, 24, 27)' }}>
            Tipología: <span style={{ fontWeight: 400 }}>Clínicas, Sanatorios y Hospitales</span>
          </Typography>

          <Box sx={{ mt: 4 }}>
            <TextField
              label={<>Descripción {asterisk}</>}
              variant="standard"
              fullWidth
              multiline
              rows={3}
              sx={robotoStyle}
              placeholder="Agrego una descripción para el trámite"
            />
          </Box>
        </Paper>


      </FormWrapper>
      {/* --- 4. CANTIDAD DE CARACTERES Y VALIDACIONES --- */}
      <div className="mt-24 mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-600 font-geist">
            04. Control de Extensión y Validación
          </h2>
          <div className="h-px grow bg-blue-50"></div>
        </div>

        <div className="bg-white border border-zinc-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="p-8 border-b border-zinc-100 bg-zinc-50/30">
            <h3 className="text-xl font-black text-zinc-900 tracking-tighter font-geist mb-2">Cantidad de caracteres</h3>
            <p className="text-sm text-zinc-400 font-geist italic">
              Se debe tener en cuenta la siguiente distribución de limites de caracteres para los campos del sistema.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-roboto">
              <thead>
                <tr className="bg-zinc-50/50 border-b border-zinc-100">
                  <th className="px-8 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Campo</th>
                  <th className="px-8 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Condición limitante</th>
                  <th className="px-8 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Observaciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50 text-[13px]">
                {[
                  ["Altura", "10 caracteres", "-"],
                  ["Piso", "10 caracteres", "-"],
                  ["N° resolución", "10 caracteres", "-"],
                  ["Año resolución", "10 caracteres", "-"],
                  ["Fecha", "dd/mm/aaaa", "Formato estándar (10 caracteres)"],
                  ["CUIL", "11 caracteres", "XX-XXXXXXXX-X / XXXXXXXXXXX (Aplica máscara)"],
                  ["Celular", "16 caracteres", "-"],
                  ["Celular / Teléfono", "16 caracteres", "-"],
                  ["Matrícula", "16 caracteres", "-"],
                  ["N° expediente", "16 caracteres", "-"],
                  ["Dpto", "25 caracteres", "-"],
                  ["Correo", "64 caracteres", "Cadena (alfanumérico) + @ + cadena + . + cadena (2 a 6 caracteres)"],
                  ["Nombre", "64 caracteres", "-"],
                  ["Calle", "64 caracteres", "-"],
                  ["Barrio", "64 caracteres", "-"],
                  ["Nombre director", "64 caracteres", "-"],
                  ["Apellido director", "64 caracteres", "-"],
                  ["Marca equipo", "64 caracteres", "-"],
                  ["Modelo equipo", "64 caracteres", "-"],
                  ["Nombre representante", "64 caracteres", "-"],
                  ["Apellido representante", "64 caracteres", "-"],
                  ["Tipo plantel", "64 caracteres", "-"],
                  ["Asunto", "100 caracteres", "-"],
                  ["Denominación", "100 caracteres", "-"],
                  ["Propiedad", "100 caracteres", "-"],
                  ["Entidad deontológica", "100 caracteres", "-"],
                  ["Equipo", "100 caracteres", "-"],
                  ["N° serie", "128 caracteres", "-"],
                  ["Observaciones", "256 caracteres", "-"],
                  ["Mensajes", "500 caracteres", "-"],
                  ["Descripción", "600 caracteres", "-"],
                  ["Docs adjuntos", "Hasta 10 documentos", "Máximo 5 MB por archivo."]
                ].map(([campo, limit, obs], i) => (
                  <tr key={i} className="hover:bg-zinc-50/30 transition-colors group">
                    <td className="px-8 py-3 font-bold text-zinc-700">{campo}</td>
                    <td className="px-8 py-3 text-zinc-500 font-medium">{limit}</td>
                    <td className="px-8 py-3 text-[11px] text-zinc-400 italic">{obs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

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
    </div>
  );
}