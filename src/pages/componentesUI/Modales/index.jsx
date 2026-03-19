import React, { useState } from 'react';
import { 
  Typography, Grid, Button, Box, TextField, IconButton, Tooltip, Snackbar, Alert 
} from '@mui/material';
import { 
  Close, Send, Cancel, Check, Search, 
  InfoOutlined, ContentCopy 
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
const CategoryHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-10 mt-16 first:mt-0">
    <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900 font-geist whitespace-nowrap">
      {title}
    </h2>
    <div className="h-px grow bg-zinc-200"></div>
  </div>
);

const ModalTemplate = ({ title, children, actions, type, onCopy, code }) => (
  <div className="mb-16 animate-in fade-in duration-500">
    <div className="flex justify-between items-center mb-4 px-2 font-geist">
      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Patrón: {type}</span>
      <Tooltip title="Copiar Snippet">
        <IconButton onClick={() => onCopy(code)} size="small" sx={{ color: '#ccc' }}>
          <ContentCopy sx={{ fontSize: 16 }} />
        </IconButton>
      </Tooltip>
    </div>

    <Box sx={{ 
      width: '100%', maxWidth: 650, bgcolor: 'white', borderRadius: '4px', 
      overflow: 'hidden', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' 
    }}>
      {/* HEADER: Azul Institucional + Italic */}
      <Box sx={{ bgcolor: '#08558d', p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '15px', fontStyle: 'italic', fontFamily: 'Roboto' }}>
          {title}
        </Typography>
        <Close sx={{ color: 'white', fontSize: 18, cursor: 'pointer', opacity: 0.8 }} />
      </Box>

      {/* CUERPO */}
      <Box sx={{ p: 4 }}>{children}</Box>

      {/* FOOTER: Botones con Roboto y Sombras */}
      <Box sx={{ p: 2.5, px: 4, borderTop: '1px solid #f4f4f5', display: 'flex', justifyContent: 'space-between', bgcolor: '#fff' }}>
        {actions}
      </Box>
    </Box>
  </div>
);

export default function Modales() {
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
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4">Modales y Diálogos</h1>
      </header>

      {/* --- 01. CONFIRMACIÓN --- */}
      <CategoryHeader title="01. Modal de Confirmación" />
      <ModalTemplate 
        type="Acción Crítica"
        title="¿Está seguro que desea saltar de etapa?"
        onCopy={handleCopy}
        code={`<Dialog>...</Dialog>`}
        actions={
          <>
            <Button 
              variant="outlined" 
              startIcon={<Cancel />} 
              sx={{ ...btnBase, color: '#E2464C', borderColor: '#E2464C', '&:hover': { borderColor: '#c63a3f', bgcolor: '#fff5f5' } }}
            >
              CANCELAR
            </Button>
            <Button 
              variant="contained" 
              endIcon={<Send />} 
              sx={{ ...btnBase, bgcolor: '#29B6F6', '&:hover': { bgcolor: '#0288D1' } }}
            >
              CONFIRMAR
            </Button>
          </>
        }
      >
        <Typography sx={{ fontFamily: 'Roboto', fontSize: '14px', color: '#555', lineHeight: 1.6 }}>
          Al confirmar se perderá todos los datos cargados en el paso desde la última vez que presionaste <strong>Guardar</strong>.
        </Typography>
      </ModalTemplate>

      {/* --- 02. FUNCIONAL --- */}
      <CategoryHeader title="02. Modal Funcional" />
      <ModalTemplate 
        type="Entrada de Datos"
        title="Nueva Configuración"
        onCopy={handleCopy}
        code={`<Dialog fullWidth maxWidth="md">...</Dialog>`}
        actions={
          <>
            <Button 
              variant="contained" 
              startIcon={<Cancel />} 
              sx={{ ...btnBase, bgcolor: '#E2464C', '&:hover': { bgcolor: '#c63a3f' } }}
            >
              CANCELAR
            </Button>
            <Button 
              variant="contained" 
              startIcon={<Check />} 
              sx={{ ...btnBase, bgcolor: '#08558d', px: 4, '&:hover': { bgcolor: '#064471' } }}
            >
              AGREGAR
            </Button>
          </>
        }
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField label="TIPOLOGÍA" variant="standard" fullWidth defaultValue="CLÍNICAS, SANATORIOS Y HOSPITALES" sx={inputStyle} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="ORIGEN" variant="standard" fullWidth placeholder="Ingrese origen..." sx={inputStyle} />
          </Grid>
          <Grid item xs={2}>
            <TextField label="REQUISITO MÍNIMO" variant="standard" fullWidth type="number" sx={inputStyle} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="TIPO DE REQUISITO" variant="standard" fullWidth sx={inputStyle} />
          </Grid>
        </Grid>
      </ModalTemplate>

      {/* --- 03. AVISO / INFO --- */}
      <CategoryHeader title="03. Modal de Aviso" />
      <ModalTemplate 
        type="Informativo"
        title="Confirmar envío de respuestas"
        onCopy={handleCopy}
        actions={
          <Button 
            variant="contained" 
            endIcon={<Send />} 
            sx={{ ...btnBase, bgcolor: '#29B6F6', mx: 'auto', px: 6 }}
          >
            ACEPTAR
          </Button>
        }
      >
        <div className="space-y-4">
          <div className="flex gap-4 p-3 bg-blue-50/50 rounded border border-blue-100">
            <InfoOutlined sx={{ color: '#0B85C4' }} />
            <p className="text-[13px] text-zinc-600 font-roboto leading-relaxed">
              Este formulario tiene carácter de <strong>Declaración Jurada</strong>. ¿Acepta los términos para continuar con el trámite?
            </p>
          </div>
        </div>
      </ModalTemplate>

      <Snackbar 
        open={snackbar} autoHideDuration={2000} onClose={() => setSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" sx={{ borderRadius: '8px', fontSize: '12px', bgcolor: '#08558d' }}>
          Snippet copiado correctamente
        </Alert>
      </Snackbar>
    </div>
  );
}