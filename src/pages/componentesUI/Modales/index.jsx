import React, { useState } from 'react';
import {
  Typography, Grid, Button, Box, TextField, IconButton, Tooltip, Snackbar, Alert
} from '@mui/material';
import {
  Close, Send, Cancel, Check,
  ErrorOutline, InfoOutlined, CheckCircleOutline, AddCircleOutline
} from '@mui/icons-material';

// --- ESTILOS REUTILIZABLES (ESTÁNDAR CLICSALUD) ---
const robotoBold = { fontFamily: 'Roboto, sans-serif', fontWeight: 700 };

const btnBase = {
  ...robotoBold,
  fontSize: '13px',
  borderRadius: '4px',
  padding: '8px 24px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  textTransform: 'uppercase',
};

const inputStyle = {
  '& .MuiInputLabel-root': { ...robotoBold, fontSize: '14px', color: '#999' },
  '& .MuiInputBase-input': { fontFamily: 'Roboto', fontSize: '15px' },
};

// --- COMPONENTES ESTRUCTURALES ---
const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12 mt-20 first:mt-0 font-geist">
    <h2 className="text-3xl font-black text-zinc-900 tracking-tighter mb-2">{title}</h2>
    <p className="text-sm text-zinc-500 max-w-2xl">{subtitle}</p>
    <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full"></div>
  </div>
);

const CategoryHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-10 mt-16 font-geist">
    <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 whitespace-nowrap">
      {title}
    </h2>
    <div className="h-px grow bg-zinc-100"></div>
  </div>
);

const ModalTemplate = ({ title, children, actions, type, headerColor = '#08558d', icon: HeaderIcon }) => (
  <div className="mb-16 animate-in fade-in duration-500">
    <div className="flex justify-between items-center mb-4 px-2 font-geist">
      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Patrón: {type}</span>
    </div>

    <Box sx={{
      width: '100%', maxWidth: 650, bgcolor: 'white', borderRadius: '4px',
      overflow: 'hidden', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
      border: '1px solid #f1f5f9'
    }}>
      {/* HEADER: Color Dinámico + Italic */}
      <Box sx={{ bgcolor: headerColor, p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        {HeaderIcon && <HeaderIcon sx={{ color: 'white', fontSize: 32 }} />}
        <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '18px', fontStyle: 'italic', fontFamily: 'Roboto', flexGrow: 1 }}>
          {title}
        </Typography>
        <Close sx={{ color: 'white', fontSize: 18, cursor: 'pointer', opacity: 0.8 }} />
      </Box>

      {/* CUERPO */}
      <Box sx={{ p: 4 }}>{children}</Box>

      {/* FOOTER: Botones con Roboto y Sombras */}
      <Box sx={{ p: 2.5, px: 4, borderTop: '1px solid #f4f4f5', display: 'flex', justifyContent: 'flex-end', gap: 2, bgcolor: '#fff' }}>
        {actions}
      </Box>
    </Box>
  </div>
);

export default function Modales() {
  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4">
      <header className="mb-24">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-[10px]">
          Componentes UI / ClicSalud
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4">Modales y Diálogos</h1>
        <p className="text-lg text-zinc-500 max-w-3xl leading-relaxed">
          El sistema distingue entre modales informativos de avisos/estados y modales operativos con funcionalidad de carga.
        </p>
      </header>

      {/* --- SECCIÓN 01: AVISOS Y NOTIFICACIONES --- */}
      <SectionHeader
        title="01. Avisos y Notificaciones"
        subtitle="Utilizados para comunicar de forma pasiva el estado del sistema o solicitar confirmaciones antes de acciones críticas."
      />

      <CategoryHeader title="Información / DDJJ / Certificados" />
      <ModalTemplate
        type="Legal / Informativo"
        title="Acepto Declaración Jurada"
        headerColor="#08558d"
        actions={
          <>
            <Button variant="outlined" sx={{ ...btnBase, color: '#E2464C', borderColor: '#E2464C' }} startIcon={<Cancel />}>CANCELAR</Button>
            <Button variant="contained" sx={{ ...btnBase, bgcolor: '#08558d' }} endIcon={<Send />}>ACEPTAR</Button>
          </>
        }
      >
        <Typography sx={{ fontFamily: 'Roboto', fontSize: '15px', color: '#555', lineHeight: 1.6 }}>
          Este formulario tiene carácter de <strong>Declaración Jurada</strong>. Cualquier falsedad en los datos suministrados dará lugar a las sanciones legales correspondientes.
        </Typography>
      </ModalTemplate>

      <CategoryHeader title="Estados de Éxito y Finalización" />
      <ModalTemplate
        type="Finalización"
        title="¡Trámite Enviado!"
        headerColor="#4CAF50"
        icon={CheckCircleOutline}
        actions={
          <Button variant="contained" sx={{ ...btnBase, bgcolor: '#08558d', px: 6 }}>FINALIZAR</Button>
        }
      >
        <Typography sx={{ fontFamily: 'Roboto', fontSize: '15px', color: '#555' }}>
          Tu solicitud ha sido enviada con éxito para su evaluación.
        </Typography>
      </ModalTemplate>

      <CategoryHeader title="Errores y Avisos Críticos" />
      <ModalTemplate
        type="Aviso Crítico"
        title="Error en la carga"
        headerColor="#E2464C"
        icon={ErrorOutline}
        actions={
          <Button variant="contained" sx={{ ...btnBase, bgcolor: '#29B6F6', px: 6 }}>ENTENDIDO</Button>
        }
      >
        <Typography sx={{ fontFamily: 'Roboto', fontSize: '15px', color: '#555' }}>
          No es posible avanzar sin completar los campos obligatorios marcados en rojo.
        </Typography>
      </ModalTemplate>


      {/* --- SECCIÓN 02: MODALES CON FUNCIONALIDAD (CARGA) --- */}
      <SectionHeader
        title="02. Modales Funcionales (Carga de Datos)"
        subtitle="Incluyen campos de entrada (Inputs) y controles complejos para la creación o edición de entidades dentro del sistema."
      />

      <CategoryHeader title="Formulario de Carga Estándar" />
      <ModalTemplate
        type="Operativo / Formulario"
        title="Nueva Configuración de Servicio"
        headerColor="#08558d"
        actions={
          <>
            <Button variant="outlined" sx={{ ...btnBase, color: '#E2464C', borderColor: '#E2464C' }} startIcon={<Cancel />}>DESCARTAR</Button>
            <Button variant="contained" sx={{ ...btnBase, bgcolor: '#08558d' }} startIcon={<Check />}>GUARDAR EQUIPO</Button>
          </>
        }
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField label="TIPO DE SERVICIO" variant="standard" fullWidth defaultValue="CLÍNICAS Y HOSPITALES" sx={inputStyle} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="ORIGEN" variant="standard" fullWidth placeholder="Ingrese origen..." sx={inputStyle} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="REQUISITO MÍNIMO" variant="standard" fullWidth type="number" sx={inputStyle} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="OBSERVACIONES ADICIONALES" variant="standard" fullWidth multiline rows={2} sx={inputStyle} />
          </Grid>
        </Grid>
      </ModalTemplate>



      {/* --- ÍNDICE --- */}
      <section className="mt-20 p-10 bg-[#f8fafc] rounded-3xl border border-dashed border-zinc-200 font-geist">
        <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-400 mb-8">Índice Operativo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {[
            'Modales de Carga (Inputs)', 'Modales de Confirmación', 'Declaración jurada',
            'Enviado exitoso', 'Selección de Personal', 'Error al avanzar de etapa',
            'Documentación Adjunta', 'Carga de Jefe de Servicio'
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 py-2 border-b border-zinc-100 last:border-0">
              <span className="w-5 h-5 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">{idx + 1}</span>
              <span className="text-sm text-zinc-600 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}