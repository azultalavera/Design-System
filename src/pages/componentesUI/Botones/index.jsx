import React, { useState } from 'react';
import {
  Button, Box, Typography, Grid,
  SpeedDial, SpeedDialAction, SpeedDialIcon,
  Tooltip
} from '@mui/material';
import {
  Send, NavigateNext, NavigateBefore, Save,
  DeleteForever, Backspace, Search,
  DeleteOutline, AttachFile, Add,
  Checklist, RuleFolder, CreateNewFolder,
  GroupAdd, Construction, PersonAddAlt1
} from '@mui/icons-material';
import { CassetteTape } from 'lucide-react';

const ButtonSection = ({ title, description, children }) => (
  <section className="mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 text-left font-geist">
    <div className="mb-8">
      <h3 className="text-xl font-black text-zinc-950 uppercase tracking-widest mb-2">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed max-w-3xl">{description}</p>
    </div>
    <div className="p-10 bg-blue-50/50 rounded-3xl">
      {children}
    </div>
  </section>
);

const DemoButton = ({ label, ...props }) => (
  <Grid item xs={12} sm={6} md={3} className="flex flex-col items-center">
    <Box className="transition-transform active:scale-95 w-full">
      <Button
        {...props}
        fullWidth
        className="clic-salud-preview"
        sx={{
          borderRadius: '4px',
          textTransform: 'uppercase',
          fontWeight: 600,
          px: 3,
          py: 1,
          fontSize: '0.875rem',
          boxShadow: props.variant === 'contained' ? '0 2px 4px' : 'none',
          ...props.sx
        }}
      >
        {label}
      </Button>
    </Box>
  </Grid>
);

export default function Botones() {
  const [open, setOpen] = useState(false);

  const dialActions = [
    { icon: <Checklist />, name: 'Adecuación' },
    { icon: <RuleFolder />, name: 'Renovación' },
    { icon: <CreateNewFolder />, name: 'Habilitación' },
    { icon: <Add />, name: 'Nuevo Trámite' },
  ];

  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32">
      <header className="mb-16">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-xs">
          Componentes UI / ClicSalud
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4">Botones de Acción</h1>
        <div className="flex items-center gap-2 text-[11px] font-bold text-blue-500 bg-blue-50 w-fit px-3 py-1 rounded-full border border-blue-100 uppercase tracking-widest shadow-sm">
          Spacing {"{3}"} - # Aplicado en avisos en los botones
        </div>
      </header>



      <ButtonSection
        title="Botones sin Iconos"
        description="Acciones directas que no requieren apoyo visual."
      >
        <Grid container spacing={4}>
          <DemoButton variant="contained" label="AGREGAR" sx={{ bgcolor: '#29b6f6', '&:hover': { bgcolor: '#0288d1' } }} />
          <DemoButton variant="outlined" color="primary" label="Cancelar" />
        </Grid>
      </ButtonSection>

      <ButtonSection
        title="BOTONES CONTAINED"
        description="Botones principales para el progreso del usuario en el sistema."
      >
        <div className="space-y-16">
          <div>
            <h4 className="text-sm font-bold text-zinc-400 mb-8 font-geist">Iconos a la derecha</h4>
            <Grid container spacing={4}>
              <DemoButton variant="contained" label="Siguiente" endIcon={<Send />} sx={{ bgcolor: '#29b6f6', '&:hover': { bgcolor: '#0288d1' } }} />
              <DemoButton variant="contained" label="Enviar" endIcon={<Send />} sx={{ bgcolor: '#29b6f6', '&:hover': { bgcolor: '#0288d1' } }} />
            </Grid>
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-400 mb-8 font-geist">Iconos a la izquierda</h4>
            <Grid container spacing={4}>
              <DemoButton variant="contained" label="Buscar" startIcon={<Search />} sx={{ bgcolor: '#29b6f6', '&:hover': { bgcolor: '#0288d1' } }} />
            </Grid>
          </div>
        </div>
      </ButtonSection>

      <ButtonSection
        title="BOTONES OUTLINED"
        description="Botones secundarios para navegación y guardado de datos."
      >
        <div className="space-y-16">
          <div>
            <h4 className="text-sm font-bold text-zinc-400 mb-8 font-geist">Iconos a la izquierda</h4>
            <Grid container spacing={4}>
              <DemoButton variant="outlined" color="primary" label="Anterior" startIcon={<NavigateBefore />} />
              <DemoButton variant="outlined" color="primary" label="Seleccionar Archivo" startIcon={<AttachFile />} />
              <DemoButton variant="outlined" color="primary" label="Limpiar" startIcon={<DeleteOutline />} />
            </Grid>
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-400 mb-8 font-geist">Iconos a la derecha</h4>
            <Grid container spacing={4}>
              <DemoButton variant="outlined" color="primary" label="Guardar" endIcon={<Save />} />
            </Grid>
          </div>
        </div>
      </ButtonSection>

      {/* --- NUEVA SECCIÓN: ACCIONES DE FORMULARIO --- */}
      <ButtonSection
        title="Acciones de Formulario"
        description="Botones utilizados para agregar nuevas entidades o registros dentro de una carga de datos."
      >
        <Grid container spacing={4}>
          <DemoButton variant="contained" label="AGREGAR EQUIPO" sx={{ bgcolor: '#29b6f6', '&:hover': { bgcolor: '#0288d1' } }} />
          <DemoButton variant="contained" label="AGREGAR JEFE DE SERVICIO" sx={{ bgcolor: '#29b6f6', '&:hover': { bgcolor: '#0288d1' } }} />
          <DemoButton variant="contained" label="AGREGAR PERSONAL" sx={{ bgcolor: '#29b6f6', '&:hover': { bgcolor: '#0288d1' } }} />

        </Grid>
      </ButtonSection>

      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 font-geist">
        Botones Flotantes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-[#f8fafc] rounded-2xl p-12 flex flex-col justify-center items-center border border-dashed border-zinc-200 relative min-h-[200px]">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-8">Speed Dial Standard</p>
          <SpeedDial
            ariaLabel="SpeedDial ClicSalud"
            sx={{
              position: 'absolute', bottom: 16, right: 16,
              '& .MuiSpeedDial-fab': {
                width: 50, height: 50, bgcolor: '#0B579F', borderRadius: '25px 4px 4px 4px',
                boxShadow: '0 3px 8px rgba(0,0,0,0.2)',
                '&:hover': { bgcolor: '#0B579F' }
              }
            }}
            icon={
              <SpeedDialIcon
                icon={<Add sx={{ color: 'white', fontSize: 26 }} />}
                openIcon={
                  <Box sx={{ bgcolor: 'white', borderRadius: '50%', width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Add sx={{ color: '#0B579F', fontSize: 20 }} />
                  </Box>
                }
              />
            }
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            direction="left"
          >
            {dialActions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                tooltipPlacement="top"
                sx={{ bgcolor: '#0B579F', color: 'white', width: 35, height: 35, '&:hover': { bgcolor: '#08457e' } }}
              />
            ))}
          </SpeedDial>
        </div>

        <div className="bg-blue-50/30 rounded-2xl p-12 flex flex-col justify-center items-center border border-blue-100 relative min-h-[200px]">
          <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-8">Botón Flotante de Guardado</p>

          <Tooltip title="Guardar Datos" placement="top">
            <Box
              sx={{
                width: 60,
                height: 60,
                bgcolor: '#0B579F',
                color: 'white',
                borderRadius: '30px 30px 30px 30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 10px 15px -3px rgba(11, 87, 159, 0.4)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  bgcolor: '#08457e',
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 20px 25px -5px rgba(11, 87, 159, 0.5)',
                },
                '&:active': {
                  transform: 'scale(0.95)',
                }
              }}
            >
              <Save size={28} strokeWidth={2.5} />
            </Box>
          </Tooltip>


        </div>
      </div>
    </div>
  );
}