import React, { useState } from 'react';
import { 
  Box, Stepper, Step, StepLabel, StepButton, Typography, 
  styled, StepConnector, stepConnectorClasses, Grid, Snackbar, Alert
} from '@mui/material';
import { 
  Map, Apartment, Person4Outlined, MedicalServices, 
  Groups, AccountTreeOutlined, AddBox, CloudUpload 
} from '@mui/icons-material';

// --- ESTILOS DE COMPONENTE (MUI STYLED) ---

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 25,
  },
  [`&.${stepConnectorClasses.active}, &.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient(90deg, rgba(0,132,255,1) 0%, rgba(89,172,255,1) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ ownerState }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.4s ease",
  ...(ownerState.active && {
    backgroundImage: "linear-gradient(90deg, rgba(0,81,156,1) 0%, rgba(89,172,255,1) 100%)",
    boxShadow: "0 10px 10px 0 rgba(0,0,0,.25)",
    width: 70,
    height: 70,
    marginTop: "-10px",
  }),
  ...(ownerState.completed && {
    backgroundImage: "linear-gradient(90deg, rgba(0,81,156,1) 0%, rgba(89,172,255,1) 100%)",
  }),
  ...(ownerState.error && {
    backgroundImage: "linear-gradient(90deg, rgba(230,131,22,1) 0%, rgba(255,192,126,1) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, error, icon } = props;
  const iconComponents = {
    1: Map, 2: Apartment, 3: Person4Outlined, 4: MedicalServices,
    5: Groups, 6: AccountTreeOutlined, 7: AddBox, 8: CloudUpload,
  };
  const IconComponent = iconComponents[String(icon)];
  return (
    <ColorlibStepIconRoot ownerState={{ completed, active, error }}>
      <IconComponent sx={{ fontSize: active ? "2rem" : "1.5rem" }} />
    </ColorlibStepIconRoot>
  );
}

// --- COMPONENTE PRINCIPAL ---

export default function StepperFinal() {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    { id: 1, label: 'Arquitectura', isModified: true },
    { id: 2, label: 'Establecimiento', isModified: false },
    { id: 3, label: 'Director Técnico', isModified: false },
    { id: 4, label: 'Servicios', isModified: false },
    { id: 5, label: 'Recursos Humanos', isModified: false },
    { id: 6, label: 'Jefe De Servicio', isModified: false },
    { id: 7, label: 'Equipamientos', isModified: false },
    { id: 8, label: 'Documentos Adjuntos', isModified: false },
  ];

  return (
    <div className="max-w-7xl mx-auto text-left font-geist pb-32 px-4">
      <header className="mb-16">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-[10px]">
          Patrones / Layout
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4 leading-none">Stepper ClicSalud</h1>
      </header>

      {/* COMPONENTE STEPPER PRINCIPAL */}
      <Box className="p-20 bg-white border border-zinc-100 rounded-3xl shadow-sm overflow-x-auto mb-16">
        <Stepper activeStep={activeStep} alternativeLabel connector={<ColorlibConnector />}>
          {steps.map((step, index) => (
            <Step key={step.id}>
              <StepButton onClick={() => setActiveStep(index)}>
                <StepLabel StepIconComponent={(props) => (
                  <ColorlibStepIcon {...props} icon={step.id} error={step.isModified} />
                )}>
                  <Typography sx={{ 
                    fontFamily: 'Roboto', 
                    fontWeight: index === activeStep ? 700 : 500, 
                    fontSize: '13px', 
                    color: '#333 !important', 
                    textTransform: 'none', 
                    mt: 1 
                  }}>
                    {step.label}
                  </Typography>
                </StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* SECCIÓN 1: ESTADOS DE AUDITORÍA (3 CARDS HORIZONTALES) */}
      <div className="mb-12">
        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 font-geist mb-6">Estados de Auditoría</h3>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <div className="p-8 bg-blue-50 border border-blue-100 rounded-2xl h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-blue-600" />
                <h4 className="text-[11px] font-black uppercase text-blue-900 tracking-widest">Azul - Activo o completo</h4>
              </div>
              <p className="text-xs text-blue-700 leading-relaxed italic">Indica que la sección ha sido validada o es la etapa en la que el usuario se encuentra operando actualmente.</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="p-8 bg-orange-50 border border-orange-100 rounded-2xl h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <h4 className="text-[11px] font-black uppercase text-orange-900 tracking-widest">Naranja - Modificado</h4>
              </div>
              <p className="text-xs text-orange-700 leading-relaxed italic">Específico para Renovaciones y Modificaciones. Indica que se detectaron cambios que requieren nueva auditoría.</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-2xl h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                <h4 className="text-[11px] font-black uppercase text-zinc-500 tracking-widest">Gris - Pendiente</h4>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed italic">Secciones futuras que aún no han sido habilitadas para la carga de datos en el flujo secuencial del trámite.</p>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* SECCIÓN 2: JERARQUÍA VISUAL (2 CARDS HORIZONTALES) */}
      <div>
        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 font-geist mb-6">Jerarquía Visual</h3>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div className="p-8 bg-white border border-zinc-100 rounded-2xl flex items-center gap-8 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-black shadow-lg shadow-blue-500/30">70px</div>
              <div>
                <h4 className="text-[11px] font-black uppercase text-zinc-900 mb-1 tracking-widest italic">Tamaño Activo</h4>
                <p className="text-[11px] text-zinc-400 uppercase tracking-tighter">Escala de enfoque para la etapa actual.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="p-8 bg-white border border-zinc-100 rounded-2xl flex items-center gap-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-[10px] text-zinc-400 font-black">50px</div>
              <div>
                <h4 className="text-[11px] font-black uppercase text-zinc-900 mb-1 tracking-widest italic">Tamaño Estándar</h4>
                <p className="text-[11px] text-zinc-400 uppercase tracking-tighter">Dimensión base para pasos inactivos.</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}