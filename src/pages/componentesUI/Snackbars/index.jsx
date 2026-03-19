import React, { useState } from 'react';
import {
  Typography, Grid, Button, Box, Snackbar, Alert, Stack, Tooltip, IconButton
} from '@mui/material';
import {
  ContentCopy, InfoOutlined, CheckCircle, ErrorOutline, WarningAmber, Notifications
} from '@mui/icons-material';

const CategoryHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-10 mt-16 first:mt-0">
    <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900 font-geist whitespace-nowrap">
      {title}
    </h2>
    <div className="h-px grow bg-zinc-200"></div>
  </div>
);

const RuleCard = ({ title, description, color }) => (
  <div className={`p-6 rounded-2xl border-l-4 shadow-sm bg-white font-geist`} style={{ borderColor: color }}>
    <h4 className="text-sm font-bold text-zinc-900 mb-2 uppercase tracking-wide">{title}</h4>
    <p className="text-xs text-zinc-500 leading-relaxed">{description}</p>
  </div>
);

export default function Snackbars() {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');

  const showSnackbar = (sev, msg) => {
    setSeverity(sev);
    setMessage(msg);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    showSnackbar('success', 'Código copiado al portapapeles');
  };

  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4">
      <header className="mb-16">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-[10px]">
          Componentes UI / Mensajería
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4">Snackbars y Alertas</h1>
        <p className="text-lg text-zinc-500 max-w-3xl leading-relaxed">
          Sistema de notificaciones para comunicar errores, éxitos, advertencias e información relevante al usuario.
        </p>
      </header>

      {/* --- REGLAS DE NEGOCIO --- */}
      <CategoryHeader title="Reglas de Errores y Éxitos" />
      <Grid container spacing={4} className="mb-20">
        <Grid item xs={12} md={6}>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
              <ErrorOutline className="text-red-500" /> Errores
            </h3>
            <RuleCard
              color="#E2464C"
              title="Modales de Error"
              description="La cabecera del modal será de color rojo institucional (#E2464C) para acciones críticas o fallos de sistema."
            />
            <RuleCard
              color="#f59e0b"
              title="Helper Text"
              description="Avisos en campos determinados (límite de caracteres, formato inválido) se indican debajo del campo de texto."
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
              <CheckCircle className="text-emerald-500" /> Éxitos
            </h3>
            <RuleCard
              color="#10b981"
              title="Guardado Exitoso"
              description="Se notifica mediante un Snackbar en la esquina inferior izquierda (bottom-left) con color verde."
            />
            <RuleCard
              color="#08558d"
              title="Envío de Trámite"
              description="Se utiliza un modal con cabecera verde para confirmar que el envío fue exitoso para evaluación."
            />
          </div>
        </Grid>
      </Grid>

      {/* --- SNACKBARS (FILLED) --- */}
      <CategoryHeader title="Snackbars (Notificaciones Flotantes)" />
      <div className="p-10 bg-zinc-50 rounded-3xl border border-zinc-100 mb-8">
        <div className="flex items-center gap-2 mb-8 p-3 bg-blue-50 rounded-lg border border-blue-100 w-fit">
          <InfoOutlined className="text-blue-500" fontSize="small" />
          <p className="text-[11px] font-bold text-blue-700 uppercase tracking-widest">
            💡 Posicionamiento: Bottom-Left (Inferior Izquierda)
          </p>
        </div>

        <Stack spacing={3} className="max-w-xl">
          <Alert variant="filled" severity="success" className="shadow-lg">
            Guardado exitoso
          </Alert>
          <Alert variant="filled" severity="info" className="shadow-lg">
            Información del sistema: Actualización disponible
          </Alert>
          <Alert variant="filled" severity="warning" className="shadow-lg">
            Advertencia: La sesión expirará pronto
          </Alert>
          <Alert variant="filled" severity="error" className="shadow-lg">
            Error: No se pudo conectar con el servidor
          </Alert>
        </Stack>

        <div className="mt-10 flex gap-4">
          <Button
            variant="contained"
            onClick={() => showSnackbar('success', 'Guardado exitoso')}
            sx={{ bgcolor: '#10b981', '&:hover': { bgcolor: '#059669' }, textTransform: 'none', fontWeight: 700 }}
          >
            Probar éxito
          </Button>
          <Button
            variant="contained"
            onClick={() => showSnackbar('error', 'Error inesperado')}
            sx={{ bgcolor: '#E2464C', '&:hover': { bgcolor: '#c63a3f' }, textTransform: 'none', fontWeight: 700 }}
          >
            Probar error
          </Button>
        </div>
      </div>

      {/* --- AVISOS (OUTLINED) --- */}
      <CategoryHeader title="Mensajes de Alerta (En Contenido)" />
      <div className="p-10 bg-white rounded-3xl border border-zinc-200">
        <p className="text-sm text-zinc-500 mb-8">
          Utilizados dentro del flujo de la página para advertencias de documentación o estados específicos.
        </p>
        <Stack spacing={3} className="max-w-xl">
          <Alert variant="outlined" severity="success">
            La documentación adjunta ha sido validada correctamente.
          </Alert>
          <Alert variant="outlined" severity="info">
            Este formulario tiene carácter de Declaración Jurada.
          </Alert>
          <Alert variant="outlined" severity="warning">
            Falta adjuntar el título habilitante del profesional.
          </Alert>
          <Alert variant="outlined" severity="error">
            El archivo seleccionado excede el tamaño máximo permitido (5MB).
          </Alert>
        </Stack>
      </div>

      {/* --- LISTADO DE MODALES EXISTENTES --- */}
      <CategoryHeader title="Modales Documentados" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-geist">
        {[
          'Cancelar guardado', 'Cancelar aviso de perder datos', 'Declaración jurada',
          'Enviado exitoso', 'Enviar trámite', 'Error al avanzar de etapa',
          'Error en documentación adjunta', 'Error en carga jefe de servicio',
          'Error inesperado', 'Error en selecciones', 'Aviso posible perdida datos'
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100 text-[11px] font-medium text-zinc-600">
            <div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center text-[10px] font-bold">
              {index + 1}
            </div>
            {item}
          </div>
        ))}
      </div>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert variant="filled" severity={severity} onClose={handleClose} sx={{ fontWeight: 600 }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
