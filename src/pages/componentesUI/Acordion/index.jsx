import React from 'react';
import { 
  Typography, Accordion, AccordionSummary, AccordionDetails, Box, Stack, Divider 
} from '@mui/material';
import { 
  ChevronDown as ExpandMoreIcon,
  Info as InfoIcon,
  Settings as SettingsIcon,
  HelpCircle,
  Menu
} from 'lucide-react';

const CategoryHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-10 mt-16 first:mt-0 font-geist">
    <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900 whitespace-nowrap">
      {title}
    </h2>
    <div className="h-px grow bg-zinc-200"></div>
  </div>
);

export default function Acordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4 italic-rules">
      <header className="mb-16">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-[10px]">
          Componentes UI / Contenedores
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4">Acordiones</h1>
        <p className="text-lg text-zinc-500 max-w-3xl leading-relaxed">
          Los acordiones permiten organizar informacion densa en secciones expandibles, facilitando la lectura y el enfoque en contenidos especificos.
        </p>
      </header>

      {/* --- 01. ACORDION ESTANDAR --- */}
      <CategoryHeader title="01. Acordion Estandar" />
      <div className="mb-16 space-y-4">
        <Accordion sx={{ borderRadius: '12px !important', '&:before': { display: 'none' }, boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon size={20} />}>
            <Typography sx={{ fontWeight: 700, color: '#1a1a1a', fontSize: '14px' }}>Normas de Funcionamiento</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: '#666', fontSize: '13px', lineHeight: 1.6 }}>
              Este apartado detalla las reglas generales que rigen el uso del sistema ClicSalud. Toda informacion ingresada es bajo Declaracion Jurada.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ borderRadius: '12px !important', '&:before': { display: 'none' }, boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon size={20} />}>
            <Typography sx={{ fontWeight: 700, color: '#1a1a1a', fontSize: '14px' }}>Requisitos Técnicos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: '#666', fontSize: '13px', lineHeight: 1.6 }}>
              Para asegurar un desempeño óptimo, se recomienda utilizar navegadores modernos (Chrome, Firefox, Edge) con una conexion estable de al menos 2MB.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* --- 02. VARIANTES CON ICONO --- */}
      <CategoryHeader title="02. Uso de Iconografia" />
      <div className="mb-16 space-y-4 max-w-2xl">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ borderRadius: '16px !important', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: 'none' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon size={20} />} sx={{ bgcolor: expanded === 'panel1' ? '#f8fafc' : 'white' }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <SettingsIcon size={18} className="text-blue-500" />
              <Typography sx={{ fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', tracking: '0.05em' }}>Configuracion de Perfil</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 4 }}>
            <div className="space-y-4">
              <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100 italic text-[12px] text-zinc-500">
                Aqui puede modificar sus credenciales y datos institucionales.
              </div>
              <Typography sx={{ fontSize: '13px', color: '#666' }}>
                Los cambios se impactaran de forma inmediata en todos los tramites vigentes.
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ borderRadius: '16px !important', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: 'none' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon size={20} />} sx={{ bgcolor: expanded === 'panel2' ? '#f8fafc' : 'white' }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <HelpCircle size={18} className="text-zinc-400" />
              <Typography sx={{ fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', tracking: '0.05em' }}>Centro de Ayuda</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 4 }}>
            <Typography sx={{ fontSize: '13px', color: '#666' }}>
              Acceda a videos tutoriales y guias en PDF sobre la carga de documentacion digitalizada.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* --- 03. ESTADO DESHABILITADO --- */}
      <CategoryHeader title="03. Estados Especiales" />
      <div className="mb-16">
        <Accordion disabled sx={{ opacity: 0.6, borderRadius: '12px !important', '&:before': { display: 'none' }, bgcolor: '#f1f5f9' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon size={20} />}>
            <Typography sx={{ fontWeight: 600, color: '#94a3b8', fontSize: '14px' }}>Auditoria Retrospectiva (No disponible)</Typography>
          </AccordionSummary>
        </Accordion>
        <p className="mt-4 text-xs text-zinc-400 italic">
          El estado deshabilitado se utiliza cuando la seccion esta bloqueada por falta de permisos o estado de tramite.
        </p>
      </div>

      {/* REGLA DE DISENO */}
      <div className="p-10 bg-[#0a192f] rounded-3xl text-white font-geist relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Menu size={120} />
        </div>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <InfoIcon size={24} className="text-blue-400" />
          Mejores Prácticas
        </h3>
        <ul className="space-y-3 text-sm text-zinc-300 max-w-2xl leading-relaxed italic">
          <li>• Evite saturar un solo acordion con demasiada informacion; use sub-secciones si es necesario.</li>
          <li>• El icono de expansion (flecha) debe situarse siempre a la derecha.</li>
          <li>• Se recomienda el uso de bordes suaves (12px a 16px) para mantener la estética ClicSalud.</li>
        </ul>
      </div>
    </div>
  );
}
