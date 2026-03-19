import React from 'react';
import { 
  Paper, Typography, Box, Grid, 
  Accordion, AccordionSummary, AccordionDetails,
  Divider, Stack
} from '@mui/material';
import { 
  ExpandMore, Layers, WbShade, 
  DashboardCustomize, AspectRatio 
} from '@mui/icons-material';

const ElevationCard = ({ elevation, title, description, code }) => (
  <div className="mb-12">
    <div className="flex items-center gap-4 mb-6">
      <div className="px-3 py-1 bg-zinc-900 text-white text-[10px] font-black rounded-lg uppercase tracking-widest">
        Elevation {elevation}
      </div>
      <div className="h-px grow bg-zinc-100"></div>
    </div>

    <Grid container spacing={6} items="center">
      <Grid item xs={12} md={6}>
        <Paper 
          elevation={elevation} 
          sx={{ 
            p: 4, 
            borderRadius: '16px',
            bgcolor: 'white',
            border: elevation === 0 ? '1px solid #e4e4e7' : 'none'
          }}
        >
          <Typography variant="h6" sx={{ color: 'rgb(11, 133, 196)', fontWeight: 800, mb: 1, fontFamily: 'Geist' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgb(113, 113, 122)', lineHeight: 1.6, fontFamily: 'Roboto' }}>
            {description}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="bg-[#0a192f] p-6 rounded-2xl border border-white/5">
          <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-3 italic">Implementación MUI (RGB)</p>
          <pre className="text-[11px] text-blue-300 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
            {code}
          </pre>
        </div>
      </Grid>
    </Grid>
  </div>
);

export default function Contenedores() {
  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4 animate-in fade-in duration-700">
      <header className="mb-16">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-[10px]">
          Patrones / Layout
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4 leading-none italic">Contenedores y Sombras</h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-light">
          Definición de elevaciones, jerarquía de planos y superficies para la organización de la información.
        </p>
      </header>

      {/* --- SECCIÓN 1: PAPERS Y ELEVACIONES --- */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-12">
          <Layers className="text-blue-500" />
          <h2 className="text-xl font-bold tracking-tight text-zinc-900">Elevaciones Estándar</h2>
        </div>

        <ElevationCard 
          elevation={1}
          title="Contenedor Secundario"
          description="Utilizado para tarjetas internas, campos de búsqueda o agrupaciones de bajo nivel dentro de una sección principal."
          code={`<Paper \n  elevation={1} \n  sx={{ \n    bgcolor: 'rgb(255, 255, 255)',\n    borderRadius: '16px', \n    padding: 2 \n  }}\n/>`}
        />

        <ElevationCard 
          elevation={4}
          title="Contenedor de Sección"
          description="Superficie principal para agrupar formularios o bloques temáticos. Genera una sombra profunda que lo despega claramente del fondo."
          code={`<Paper \n  elevation={4} \n  sx={{ \n    bgcolor: 'rgb(255, 255, 255)',\n    borderRadius: '16px', \n    padding: 4 \n  }}\n/>`}
        />
      </section>

      {/* --- SECCIÓN 2: EJEMPLO DE COMPOSICIÓN (COMO EL SNIPPET) --- */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <DashboardCustomize className="text-blue-500" />
          <h2 className="text-xl font-bold tracking-tight text-zinc-900">Composición de Superficies</h2>
        </div>

        <div className="p-10 bg-zinc-50 rounded-[40px] border border-zinc-100 border-dashed">
          <Paper elevation={4} sx={{ p: 4, borderRadius: '24px', bgcolor: 'rgb(255, 255, 255)' }}>
            <Typography variant="h5" sx={{ color: 'rgb(0, 180, 236)', fontWeight: 900, mb: 4, fontFamily: 'Geist', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
              Establecimiento (Level 4)
            </Typography>

            <Paper elevation={1} sx={{ p: 3, borderRadius: '16px', mb: 3, border: '1px solid rgb(244, 244, 245)', bgcolor: 'rgb(255, 255, 255)' }}>
              <Typography variant="h6" sx={{ color: 'rgb(0, 180, 236)', fontWeight: 800, mb: 2, fontFamily: 'Geist' }}>
                Asunto (Level 1)
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgb(63, 63, 70)', fontFamily: 'Roboto', fontStyle: 'italic' }}>
                Composición de un Paper Elevation 1 dentro de un Paper Elevation 4.
              </Typography>
            </Paper>

            <Accordion expanded sx={{ boxShadow: 'none', border: '1px solid rgb(244, 244, 245)', borderRadius: '16px !important', overflow: 'hidden', bgcolor: 'rgb(255, 255, 255)' }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography sx={{ fontWeight: 700, color: 'rgb(0, 180, 236)', fontFamily: 'Roboto' }}>Acordión de Datos</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: 'rgb(250, 250, 250)' }}>
                <Typography variant="caption" sx={{ color: 'rgb(161, 161, 170)', fontWeight: 'bold', textTransform: 'uppercase' }}>Contenido colapsable con fondo gris tenue</Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </div>
      </section>

      {/* --- SECCIÓN 3: REGLAS DE NEGOCIO --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-zinc-900 rounded-3xl text-white font-geist">
          <div className="flex items-center gap-3 mb-6">
            <WbShade className="text-blue-400" />
            <h4 className="text-xs font-black uppercase tracking-widest italic">Uso de Sombras</h4>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed italic">
            No se deben usar sombras personalizadas en la mayoría de los casos. Material UI maneja el sistema de sombras institucional mediante el prop <strong>elevation</strong>.
          </p>
        </div>

        <div className="p-8 bg-blue-50 border border-blue-100 rounded-3xl font-geist">
          <div className="flex items-center gap-3 mb-6 text-blue-900">
            <AspectRatio />
            <h4 className="text-xs font-black uppercase tracking-widest italic">Bordes y Radios</h4>
          </div>
          <ul className="text-[11px] space-y-3 font-bold text-zinc-500 uppercase italic">
            <li>• Paper Principal: Border Radius 24px</li>
            <li>• Paper Interno: Border Radius 16px</li>
            <li>• Fondo Predeterminado: rgb(255, 255, 255)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
