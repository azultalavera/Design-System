import React from 'react';
import { Box, Typography } from '@mui/material';
import LogoCordobaBlanco from '../../../assets/logos/rectangulo-fondoblanco.png';

const Footer = () => {
  return (
    /* CAMBIO CLAVE: Quitamos 'fixed' y usamos 'relative' o simplemente un div de bloque.
       Le damos un margen superior para que no quede pegado al contenido.
    */
    <footer className="w-full h-[60px] bg-[#00519C] flex items-center justify-between px-8 rounded-t-2xl shadow-inner mt-auto">
      
      {/* Lado Izquierdo: Marca */}
      <div className="flex items-center gap-4 h-full">
        <img 
          src={LogoCordobaBlanco} 
          alt="Gobierno de Córdoba" 
          className="h-9 object-contain brightness-0 invert opacity-90" 
        />
        <div className="h-6 w-px bg-white/20 mx-2" />
        <p className="text-[9px] text-white/50 font-black uppercase tracking-[0.2em] hidden md:block font-geist">
          Ministerio de Salud
        </p>
      </div>

      {/* Lado Derecho: Versión */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
           <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
           <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">Sistema Activo</span>
        </div>
        <Typography 
          sx={{ 
            fontFamily: 'Geist', 
            fontSize: '12px', 
            fontWeight: 600, 
            color: 'white', 
            opacity: 0.8,
            letterSpacing: '0.05em'
          }}
        >
          V 2.0.0
        </Typography>
      </div>
      
    </footer>
  );
};

export default Footer;