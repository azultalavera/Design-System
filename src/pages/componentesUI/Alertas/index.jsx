import React from 'react';
import { 
  Typography, Alert, Stack, Box
} from '@mui/material';
import { 
  InfoOutlined
} from '@mui/icons-material';

const CategoryHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-10 mt-16 first:mt-0">
    <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900 font-geist whitespace-nowrap">
      {title}
    </h2>
    <div className="h-px grow bg-zinc-200"></div>
  </div>
);

export default function Alertas() {
  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4">
      <header className="mb-16">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-[10px]">
          Componentes UI / Mensajería
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4">Alertas Estándar</h1>
        <p className="text-lg text-zinc-500 max-w-3xl leading-relaxed">
          Las alertas se utilizan para mostrar mensajes de retroalimentación cortos y relevantes dentro de las páginas.
        </p>
      </header>

      {/* --- ALERTAS BÁSICAS --- */}
      <CategoryHeader title="Alertas (Standard Variant)" />
      
      <div className="p-10 bg-zinc-50 rounded-3xl border border-zinc-100 mb-8">
        <p className="text-sm text-zinc-500 mb-8">
          Utilizadas de forma predeterminada para avisos de sistema que no requieren una atención crítica inmediata pero son relevantes para el proceso.
        </p>
        
        <Stack spacing={3} className="max-w-xl">
          <Alert severity="success">
            This is a success Alert.
          </Alert>
          <Alert severity="info">
            This is an info Alert.
          </Alert>
          <Alert severity="warning">
            This is a warning Alert.
          </Alert>
          <Alert severity="error">
            This is an error Alert.
          </Alert>
        </Stack>
      </div>

      <div className="mt-16 p-8 bg-blue-50/50 rounded-3xl border border-blue-100">
        <div className="flex gap-4">
          <div className="p-2 bg-blue-500 rounded-lg text-white w-fit h-fit">
            <InfoOutlined />
          </div>
          <div>
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Uso Sugerido</h3>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl">
              Estas alertas son ideales para mostrar estados de validación en tiempo real o advertencias preventivas antes de que el usuario proceda con una acción. Se integran directamente en el flujo del contenido sin interrumpir la interacción del usuario.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
