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
    backgroundImage: "linear-gradient(135deg, #00B4EC 0%, #00519C 100%)",
    boxShadow: "0 10px 20px 0 rgba(0,81,156,0.3)",
    width: 66,
    height: 66,
    marginTop: "-8px",
  }),
  ...(ownerState.completed && {
    backgroundImage: "linear-gradient(135deg, #00B4EC 0%, #00519C 100%)",
  }),
  ...(ownerState.error && {
    backgroundImage: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    boxShadow: "0 10px 20px 0 rgba(217,119,6,0.2)",
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
      <IconComponent sx={{ fontSize: active ? "1.8rem" : "1.3rem" }} />
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
            <div className="p-8 bg-blue-50/30 border border-blue-100 rounded-2xl h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#00B4EC] to-[#00519C]" />
                <h4 className="text-[11px] font-black uppercase text-blue-900 tracking-widest">Azul (Degradado) - Completo</h4>
              </div>
              <p className="text-xs text-blue-700 leading-relaxed italic">Indica que la sección ha sido validada o es la etapa en la que el usuario opera actualmente.</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="p-8 bg-orange-50/30 border border-orange-100 rounded-2xl h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#D97706]" />
                <h4 className="text-[11px] font-black uppercase text-orange-900 tracking-widest">Naranja (Degradado) - Modificado</h4>
              </div>
              <p className="text-xs text-orange-700 leading-relaxed italic">Específico para Renovaciones. Indica que se detectaron cambios que requieren nueva auditoría.</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-2xl h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full bg-zinc-300" />
                <h4 className="text-[11px] font-black uppercase text-zinc-500 tracking-widest">Gris - Pendiente</h4>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed italic">Secciones futuras que aún no han sido habilitadas para la carga de datos.</p>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* SECCIÓN 3: IMPLEMENTACIÓN TÉCNICA (PARA DESARROLLADORES) */}
      <div className="mt-24 border-t border-zinc-50 pt-16 mb-20">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-[12px] font-black uppercase tracking-[0.2em] text-[#00519C] font-geist whitespace-nowrap italic">
            Implementación Material UI
          </h2>
          <div className="h-px grow bg-zinc-100"></div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-[#0a192f] p-8 rounded-3xl border border-white/5 overflow-hidden">
            <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-4 italic">Estilo de Iconos (Gradient definition)</p>
            <pre className="text-[11px] text-blue-300 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`const ColorlibStepIconRoot = styled("div")(({ ownerState }) => ({
  // Azul Institucional (RGB)
  ...(ownerState.active && {
    backgroundImage: "linear-gradient(135deg, rgb(0, 180, 236) 0%, rgb(0, 81, 156) 100%)",
    boxShadow: "0 10px 20px 0 rgba(0, 81, 156, 0.3)",
  }),
  // Naranja Auditoría (RGB)
  ...(ownerState.error && {
    backgroundImage: "linear-gradient(135deg, rgb(245, 158, 11) 0%, rgb(217, 119, 6) 100%)",
    boxShadow: "0 10px 20px 0 rgba(217, 119, 6, 0.2)",
  }),
}));`}
            </pre>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 italic">
          <p className="text-[11px] text-zinc-500 leading-relaxed font-geist">
            <strong className="text-zinc-900 uppercase text-[10px] tracking-wider block mb-1">Nota de Implementación:</strong>
            El Stepper debe ser fluido y ocupar el ancho total del contenedor. El uso de degradados es obligatorio para diferenciar estados de auditoría (Naranja) de estados de progreso estándar (Azul).
          </p>
        </div>
      </div>
    </div>
  );
}