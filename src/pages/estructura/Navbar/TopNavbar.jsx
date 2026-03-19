import React from 'react';
import { Menu as MenuIcon, Notifications as NotificationsIcon, AccountCircle } from '@mui/icons-material';
import { IconButton, Badge, Typography, Box, Grid } from '@mui/material';

// --- ACTIVOS ---
import LogoMinisterio from '../../../assets/logos/rectangulo-fondoceleste.png';
import LogoClicSalud from '../../../assets/logos/cuadrado-fondoblanco.png';

export const TopNavbar = ({ onMenuClick }) => {
  return (
    <div className="max-w-7xl mx-auto text-left font-geist pb-20 animate-in fade-in duration-700">

      {/* 1. COMPONENTE EN VIVO (PREVIEW) */}
      <section className="mb-12">
        <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-6 italic">Componente en Vivo</h3>
        <nav className="h-[64px] w-full bg-gradient-to-r from-[#00B4EC] via-[#00519C] to-[#082E5A] flex items-center justify-between px-4 text-white shadow-lg rounded-2xl overflow-hidden border border-white/10">
          <div className="flex items-center gap-4">
            <IconButton size="small" sx={{ color: 'white' }} onClick={onMenuClick}>
              <MenuIcon />
            </IconButton>
            <div className="flex items-center gap-6 ml-2">
              <img src={LogoMinisterio} alt="Ministerio" className="h-9 object-contain" />
              <div className="h-6 w-px bg-white/20" />
              <img src={LogoClicSalud} alt="ClicSalud" className="h-7 object-contain" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-bold uppercase tracking-wide font-geist">USUARIO</span>
              <AccountCircle sx={{ fontSize: 26, opacity: 0.9 }} />
            </div>
            <IconButton size="small" sx={{ color: 'white' }}>
              <Badge badgeContent={5} color="error" sx={{ '& .MuiBadge-badge': { fontSize: 9, height: 16, minWidth: 16 } }}>
                <NotificationsIcon sx={{ fontSize: 20 }} />
              </Badge>
            </IconButton>
          </div>
        </nav>
      </section>

      {/* 2. ESPECIFICACIONES TÉCNICAS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* COLORES Y DEGRADADO */}
        <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
          <h4 className="text-blue-400 text-[11px] font-black uppercase tracking-widest mb-6 italic">Definición de Color</h4>
          <div className="space-y-6">
            <div>
              <p className="text-xs text-zinc-400 mb-3 uppercase font-bold tracking-tighter">Degradado Lineal (CSS)</p>
              <div className="h-12 w-full rounded-lg bg-gradient-to-r from-[#00B4EC] via-[#00519C] to-[#082E5A] border border-white/10 mb-2" />
              <code className="text-[10px] text-zinc-500 block bg-black/30 p-2 rounded">
                linear-gradient(to right, #00B4EC, #00519C, #082E5A)
              </code>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col gap-1">
                <div className="w-full h-8 rounded bg-[#00B4EC]" />
                <span className="text-[9px] font-mono text-zinc-500">#00B4EC</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-full h-8 rounded bg-[#00519C]" />
                <span className="text-[9px] font-mono text-zinc-500">#00519C</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-full h-8 rounded bg-[#082E5A]" />
                <span className="text-[9px] font-mono text-zinc-500">#082E5A</span>
              </div>
            </div>
          </div>
        </div>

        {/* COMPORTAMIENTO Y LOGOTIPOS */}
        <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
          <h4 className="text-blue-600 text-[11px] font-black uppercase tracking-widest mb-6 italic">Estructura y Logotipos</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                <MenuIcon fontSize="small" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-tighter text-zinc-900 mb-1">Trigger del Menú</p>
                <p className="text-[11px] text-zinc-500 font-geist">Acciona el <strong>SidebarC</strong> (Drawer) para navegación en dispositivos con resolución menor a 1440px.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-zinc-200 rounded-lg flex items-center justify-center text-zinc-600 shrink-0 italic text-[10px] font-black">
                LOGO
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-tighter text-zinc-900 mb-1">Co-Branding</p>
                <p className="text-[11px] text-zinc-500 font-geist">Relación de aspecto 1:1 entre el Ministerio y ClicSalud, separados por una línea de cortesía (opacity 20%).</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 3. NOTA DE DISEÑO */}
      <div className="mt-8 p-6 border-l-4 border-blue-400 bg-blue-50/30 rounded-r-2xl">
        <p className="text-[11px] text-blue-900 font-geist leading-relaxed">
          <strong>TIP DE UI:</strong> La TopNavbar utiliza un degradado horizontal para guiar la vista desde el área de control (izquierda) hacia la información del usuario (derecha). El azul oscuro final ayuda a que el punto rojo de las notificaciones resalte por contraste cromático.
        </p>
      </div>

    </div>
  );
};