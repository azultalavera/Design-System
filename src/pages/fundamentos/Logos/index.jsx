import React from 'react';
import { Typography, Grid, IconButton, Tooltip, Box } from '@mui/material';
import { Download, Copy, ShieldCheck, ChevronRight } from 'lucide-react';

// --- IMPORTACIÓN DE ACTIVOS ---
import CuadAzul from '../../../assets/logos/cuadrado-fondoazul.png';
import CuadBlanco from '../../../assets/logos/cuadrado-fondoblanco.png';
import CuadCeleste from '../../../assets/logos/cuadrado-fondoceleste.png';
import CuadLineas from '../../../assets/logos/cuadrado-lineascelestes.png';
import RectAzul from '../../../assets/logos/rectangulo-fondoazul.png';
import RectBlanco from '../../../assets/logos/rectangulo-fondoblanco.png';
import RectCeleste from '../../../assets/logos/rectangulo-fondoceleste.png';
import RectLineas from '../../../assets/logos/rectangulo-lineascelestes.png';
import EjemploAplicacion from '../../../assets/logos/Ejemplo.png';

// --- DATOS ---
const IMAGOTIPOS_CUADRADOS = [
  { id: 1, name: 'CUADRADO AZUL', img: CuadAzul, type: 'ISOTIPO', subtitle: 'AZUL INSTITUCIONAL' },
  { id: 2, name: 'CUADRADO CELESTE', img: CuadCeleste, type: 'ISOTIPO', subtitle: 'CELESTE SALUD' },
  { id: 3, name: 'CUADRADO BLANCO', img: CuadBlanco, type: 'ISOTIPO', subtitle: 'NEGATIVO' },
  { id: 4, name: 'CUADRADO LINEAL', img: CuadLineas, type: 'ISOTIPO', subtitle: 'LÍNEAS' },
];

const IMAGOTIPOS_RECTANGULARES = [
  { id: 5, name: 'RECTÁNGULO AZUL', img: RectAzul, type: 'IMAGOTIPO', subtitle: 'AZUL INSTITUCIONAL' },
  { id: 6, name: 'RECTÁNGULO BLANCO', img: RectBlanco, type: 'IMAGOTIPO', subtitle: 'NEGATIVO' },
  { id: 7, name: 'RECTÁNGULO CELESTE', img: RectCeleste, type: 'IMAGOTIPO', subtitle: 'CELESTE SALUD' },
  { id: 8, name: 'RECTÁNGULO LINEAL', img: RectLineas, type: 'IMAGOTIPO', subtitle: 'LÍNEAS' },
];

// --- CARDS MÁS PEQUEÑAS ---
const AssetCard = ({ logo }) => (
  <div className="group bg-white border border-zinc-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-blue-200 h-full flex flex-col">
    <div className={`h-40 flex items-center justify-center p-6 relative overflow-hidden ${logo.subtitle.includes('NEGATIVO') ? 'bg-[#0a192f]' : 'bg-zinc-50'}`}>
      <img src={logo.img} alt={logo.name} className="max-w-[80%] max-h-[80%] object-contain transition-transform group-hover:scale-105" />
      <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-white/90 border border-zinc-200 text-[7px] font-black uppercase tracking-tighter text-zinc-500 font-geist">
        {logo.type}
      </div>
    </div>

    <div className="p-4 border-t border-zinc-50 flex-grow flex flex-col justify-between">
      <div className="mb-3">
        <h4 className="text-[11px] font-black text-zinc-900 uppercase tracking-tighter font-geist leading-tight">
          {logo.name}
        </h4>
        <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest font-geist mt-0.5">
          {logo.subtitle}
        </p>
      </div>

      <div className="flex items-center gap-1.5 pt-3 border-t border-zinc-50">
        <Tooltip title="Copiar"><IconButton size="small" sx={{ p: 0.5, bgcolor: '#f8fafc', '&:hover': { color: '#2563eb' } }}><Copy size={12} /></IconButton></Tooltip>
        <Tooltip title="Bajar"><IconButton size="small" sx={{ p: 0.5, bgcolor: '#f8fafc', '&:hover': { color: '#2563eb' } }}><Download size={12} /></IconButton></Tooltip>
        <div className="ml-auto"><ShieldCheck size={14} className="text-zinc-200" /></div>
      </div>
    </div>
  </div>
);

export default function LogosIdentidad() {
  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-20 px-4">
      
      {/* HEADER COMPACTO */}
      <header className="mb-12 pt-6">
        <div className="flex items-center gap-2 mb-2 text-[9px] font-bold uppercase tracking-widest text-zinc-400">
          <span>Fundamentos</span> <ChevronRight size={10} /> <span className="text-blue-600">Identidad Visual</span>
        </div>
        <h1 className="text-4xl font-black tracking-tighter mb-2 text-zinc-900 font-geist">Logotipos e Isologotipos</h1>
        <p className="text-zinc-500 text-sm font-light italic">Variantes gráficas oficiales Córdoba y ClicSalud.</p>
      </header>

      {/* SECCIÓN EJEMPLO (ACHICADA) */}
      <div className="mb-16">
        <h2 className="text-[10px] font-black text-zinc-400 tracking-[0.3em] mb-4 uppercase">Aplicación en Interfaz</h2>
        <Box className="p-6 bg-zinc-50 border border-dashed border-zinc-200 rounded-2xl flex flex-col items-center">
          <img src={EjemploAplicacion} alt="Ejemplo" className="max-w-[70%] h-auto rounded-lg shadow-sm" />
        </Box>
      </div>

      {/* SECCIÓN CUADRADOS (GRID 4) */}
      <div className="mb-12">
        <h2 className="text-lg font-black text-blue-900 tracking-tight font-geist mb-1 uppercase">Imagotipos Cuadrados</h2>
        <p className="text-zinc-400 text-[11px] mb-6">Uso preferente en avatares y perfiles.</p>
        <Grid container spacing={2}>
          {IMAGOTIPOS_CUADRADOS.map((logo) => (
            <Grid item xs={6} sm={3} key={logo.id}><AssetCard logo={logo} /></Grid>
          ))}
        </Grid>
      </div>

      {/* SECCIÓN RECTANGULARES (GRID 4) */}
      <div className="mb-20">
        <h2 className="text-lg font-black text-blue-900 tracking-tight font-geist mb-1 uppercase">Imagotipos Rectangulares</h2>
        <p className="text-zinc-400 text-[11px] mb-6">Uso en cabeceras y formatos horizontales.</p>
        <Grid container spacing={2}>
          {IMAGOTIPOS_RECTANGULARES.map((logo) => (
            <Grid item xs={6} sm={3} key={logo.id}><AssetCard logo={logo} /></Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}