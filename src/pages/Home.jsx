import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Box } from '@mui/material';
import {
  Layers,
  Component,
  LayoutTemplate,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const CATEGORIES = [
  {
    title: 'Fundamentos',
    desc: 'Los pilares visuales del sistema: colores, tipografía, espaciado y elevación. La base técnica de todo el ecosistema ClicSalud.',
    icon: Layers,
    color: '#0B85C4',
    path: '/fundamentos/colores'
  },
  {
    title: 'Componentes UI',
    desc: 'Librería de elementos atómicos y moleculares. Botones, inputs, chips y modales listos para ser implementados en cualquier módulo.',
    icon: Component,
    color: '#6366f1',
    path: '/componentes/botones'
  },
  {
    title: 'Patrones y Layout',
    desc: 'Estructuras de alto nivel para flujos complejos: formularios, steppers, cabeceras y bandejas de trámites centralizadas.',
    icon: LayoutTemplate,
    color: '#8b5cf6',
    path: '/layout/cabeceras'
  },
  {
    title: 'Reglas de Negocio',
    desc: 'Lógica aplicada a la interfaz. Gestión de estados de auditoría, validaciones y comportamientos específicos del dominio de salud.',
    icon: Briefcase,
    color: '#f59e0b',
    path: '/negocio/estados'
  }
];

export function Home() {
  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">

      {/* --- HEADER SECCIÓN --- */}
      <header className="mb-20 pt-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">
            Versión 1.1.0-G
          </div>
          <div className="h-px w-8 bg-zinc-200"></div>
          <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
            <ShieldCheck size={14} className="text-blue-400" /> CIDS
          </div>
        </div>

        <h1 className="text-8xl font-black text-zinc-900 tracking-tighter mb-8 leading-[0.85]">
          Sistema de<br />
          <span className="text-blue-600">Diseño</span>
        </h1>

        <p className="text-zinc-500 text-xl max-w-2xl font-light leading-relaxed">
          Guía oficial de estilos, componentes y patrones para el sistema <strong>ClicSalud</strong>.
          Un lenguaje visual unificado para escalar la experiencia del Agente y el Efector.
        </p>
      </header>

      {/* --- GRID DE CATEGORÍAS --- */}
      <Grid container spacing={4}>
        {CATEGORIES.map((cat, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Link to={cat.path} className="group block h-full">
              <div className="relative p-10 bg-white border border-zinc-100 rounded-[40px] h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:border-blue-200 overflow-hidden">

                {/* Decoración de fondo sutil */}
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-zinc-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 opacity-50" />

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 text-white transition-all duration-500 group-hover:rotate-10 group-hover:scale-110 shadow-lg"
                  style={{
                    backgroundColor: cat.color,
                    boxShadow: `0 10px 20px -5px ${cat.color}44`
                  }}
                >
                  <cat.icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="text-3xl font-black text-zinc-900 mb-4 font-geist uppercase tracking-tighter italic group-hover:text-blue-600 transition-colors">
                  {cat.title}
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed mb-10 grow font-geist pr-4">
                  {cat.desc}
                </p>

                <div className="flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] group-hover:text-blue-600 transition-all">
                  Explorar Sección <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>

      {/* --- FOOTER --- */}
      <footer className="mt-40 pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-1">
          <p className="text-[11px] font-black text-zinc-900 uppercase tracking-widest">
            © 2026 ClicSalud
          </p>
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            Centro de Investigación y Desarrollo de Sistemas
          </p>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-black text-zinc-300 uppercase tracking-widest mb-1">Tecnologías</span>
            <div className="flex gap-4">
              <span className="text-[10px] font-bold text-zinc-400">React 19</span>
              <span className="text-[10px] font-bold text-zinc-400">MUI 6</span>
              <span className="text-[10px] font-bold text-zinc-400">Tailwind</span>
            </div>
          </div>
          <div className="h-10 w-px bg-zinc-100 hidden md:block"></div>
          <span className="text-[11px] font-black text-blue-600 uppercase italic tracking-tighter">
            Accesibilidad AA
          </span>
        </div>
      </footer>
    </div>
  );
}