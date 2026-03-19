import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { 
  Apartment, 
  Person4Outlined, 
  Groups, 
  BusinessCenter,
  AccessTime as ClockIcon, // Corregido el nombre del import
  CheckCircle 
} from '@mui/icons-material';

const CARD_DATA = [
  { id: 1, label: 'Infraestructura', icon: Apartment },
  { id: 2, label: 'Equipamientos', icon: BusinessCenter },
];

export default function Cards() {
  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4 animate-in fade-in duration-700">
      
      {/* HEADER COMPACTO */}
      <header className="mb-12 pt-10">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-[0.2em] uppercase text-[10px]">
          Fundamentos / Componentes Base
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4 leading-none font-geist">
          Cards
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-light font-geist italic">
          Tarjetas de acceso rápido con feedback visual (hover). Indican interactividad mediante elevación y cambio de color de borde.
        </p>
      </header>

      {/* GRILLA DE CARDS */}
      <Grid container spacing={3}>
        {CARD_DATA.map((item) => {
          const Icon = item.icon;
          return (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              {/* --- LA CARD --- */}
              <div className="group relative bg-white border border-zinc-200 rounded-2xl p-10 h-64 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-500 shadow-sm">
                
                {/* ICONO CON ESCALADO AL HOVER */}
                <div className="mb-6 text-blue-500 transition-transform duration-500 group-hover:scale-110">
                  <Icon sx={{ fontSize: '3rem' }} />
                </div>

                {/* TEXTO EN ROBOTO MEDIUM */}
                <Typography 
                  sx={{ 
                    fontFamily: 'Roboto', 
                    fontWeight: 700, 
                    fontSize: '1.25rem', 
                    color: '#00519C', // Azul Córdoba
                    textTransform: 'none',
                    lineHeight: 1.2
                  }}
                >
                  {item.label}
                </Typography>

              </div>
            </Grid>
          );
        })}
      </Grid>

      {/* DOCUMENTACIÓN DE USO */}
      <div className="mt-16 p-8 bg-zinc-50 border border-zinc-200 rounded-3xl">
        <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-400 mb-4 font-geist">Especificación de Feedback</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-[10px] font-bold text-zinc-900 uppercase mb-2 italic">1. Estado Reposo</p>
            <p className="text-[11px] text-zinc-500 font-geist leading-relaxed">Borde zinc-200, fondo blanco, sombra mínima. El icono se mantiene estático.</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-blue-600 uppercase mb-2 italic">2. Estado Hover</p>
            <p className="text-[11px] text-zinc-500 font-geist leading-relaxed">Borde azul-500, elevación de -8px en eje Y, sombra proyectada de 20px.</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-zinc-900 uppercase mb-2 italic">3. Tipografía</p>
            <p className="text-[11px] text-zinc-500 font-geist leading-relaxed">Roboto Bold 20px. Espaciado entre letras negativo para mayor impacto visual.</p>
          </div>
        </div>
      </div>

    </div>
  );
}