import React, { useState } from "react";
import { Snackbar, Alert, Tooltip } from "@mui/material";
import { Copy, CheckCircle2, AlertCircle, Maximize, HelpCircle } from "lucide-react";
import Typography from "@mui/material/Typography";

const hexToRgb = (hex) => {
  if (hex.startsWith('rgb')) return hex;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
};

const TypographyCard = ({
  title,
  variant,
  size,
  weight,
  lineHeight,
  color,
  usage,
  exampleText,
}) => {
  const rgbColor = hexToRgb(color);
  const muiCode = `<Typography 
  variant="${variant}"
  sx={{ 
    fontSize: '${size}', 
    fontWeight: ${weight}, 
    lineHeight: ${lineHeight},
    color: '${rgbColor}',
    fontFamily: 'Roboto' 
  }}
>
  ${exampleText}
</Typography>`;

  return (
    <div className="group border border-zinc-100 rounded-2xl bg-white overflow-hidden hover:shadow-xl transition-all duration-300 mb-8">
      <div className="p-6 border-b border-zinc-50 flex justify-between items-center bg-zinc-50/30">
        <div className="font-geist">
          <h3 className="text-[11px] font-black uppercase tracking-widest text-[#25ADE6] mb-1 italic">
            Especificación Material UI
          </h3>
          <p className="text-[10px] text-zinc-400 font-mono italic">MUI Variant: {variant}</p>
        </div>
      </div>

      <div className="p-8">
        {/* Renderizado del Producto ClicSalud */}
        <div className="clic-salud-preview mb-8 p-6 bg-white rounded-xl border border-zinc-100 shadow-sm">
          <div
            style={{
              fontSize: size,
              fontWeight: weight,
              lineHeight: lineHeight,
              color: color,
            }}
          >
            {exampleText}
          </div>
        </div>

        {/* Snippet de Material UI (Sustituye al antiguo Copiar CSS) */}
        <div className="mb-8">
          <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-3 italic">Implementación MUI</p>
          <div className="bg-[#0a192f] p-4 rounded-xl border border-white/5">
            <pre className="text-[10px] text-blue-300 font-mono leading-relaxed overflow-x-auto">
              {muiCode}
            </pre>
          </div>
        </div>

        {/* Especificaciones Técnicas (Geist) - Atributos atómicos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-geist border-t border-zinc-50 pt-6">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Tamaño</p>
            <p className="text-sm font-medium text-zinc-700">{size}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Peso</p>
            <p className="text-sm font-medium text-zinc-700">{weight === 700 ? "Bold" : "Regular"}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">L-Height</p>
            <p className="text-sm font-medium text-zinc-700">{lineHeight}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Uso</p>
            <p className="text-sm font-medium text-zinc-700 text-truncate">{usage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Tipografia() {
  return (
    <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 text-left">
      <header className="mb-16 font-geist">
        <div className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">
          Fundamentos / Tipografía
        </div>
        <h1 className="text-5xl font-black tracking-tighter text-zinc-900 mb-6">
          Tipografía
        </h1>
        <p className="text-lg text-zinc-500 max-w-3xl leading-relaxed">
          El sistema utiliza <strong>Roboto</strong> para toda la interfaz de
          usuario de ClicSalud, garantizando legibilidad en documentos clínicos.
        </p>
      </header>

      {/* Escalas de Tipografía */}
      <section className="space-y-2">
        <TypographyCard
          title="Títulos Destacados"
          variant="Typography variant h3"
          size="1.5rem"
          weight={700}
          lineHeight="1.334"
          color="rgb(37, 173, 230)"
          usage="Títulos principales de sección."
          exampleText="Gestión de Diagnósticos Médicos"
        />

        <TypographyCard
          title="Subtítulos"
          variant="Typography variant h5"
          size="1.5rem"
          weight={700}
          lineHeight="1.334"
          color="#000000"
          usage="Subtítulos internos y modales."
          exampleText="Datos del Paciente"
        />

        <TypographyCard
          title="Texto Plano / Cuerpo"
          variant="Typography (Body)"
          size="1rem"
          weight={400}
          lineHeight="1.5"
          color="#3f3f46"
          usage="Párrafos, tablas y formularios."
          exampleText="El certificado adjunto se encuentra en proceso de validación por el área correspondiente."
        />
      </section>

      {/* Espaciado y Márgenes */}
      <section className="mt-20 p-10 bg-zinc-50 rounded-3xl border border-zinc-100 font-geist">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
            <Maximize size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
              Espaciado y márgenes
            </h2>
            <p className="text-zinc-500 text-sm">
              Se definen las siguientes reglas de espaciado para que el diseño
              mantenga coherencia:
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <div>
                <p className="font-bold text-zinc-900">Spacing {"{2}"}</p>
                <p className="text-sm text-zinc-500">
                  Aplicado en todo el sistema a excepción de los modales
                </p>
              </div>
            </div>
            <div className="px-4 py-1.5 bg-zinc-100 rounded-full text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              Standard
            </div>
          </div>
        </div>
      </section>

      {/* Mensajes de ayuda al usuario */}
      <section className="mt-20 p-10 bg-white rounded-3xl border border-zinc-200 font-geist">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-zinc-100 rounded-lg text-zinc-500">
            <HelpCircle size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
              Mensajes de ayuda al usuario
            </h2>
            <p className="text-zinc-500 text-sm">
              Normativa para el texto de apoyo en secciones técnicas del sistema.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 italic">
            <p className="text-xs text-zinc-400 mb-2 font-bold uppercase tracking-widest">Regla General:</p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Todos los mensajes que sean de ayuda al usuario deberán ser de <strong>color gris</strong>, 
              sólo las advertencias y errores poseerán un color distintivo. Esta regla aplica a:
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Documentación adjunta', 'Arquitectura', 'Director Técnico', 'Servicios', 'RRHH', 'Jefe de Servicio', 'Equipamientos'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-[10px] text-zinc-400 font-bold uppercase tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-zinc-100 rounded-2xl shadow-sm">
              <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-4">Caso: Falta de Documentos</p>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
                  <p className="text-[12px] text-red-600 font-medium">
                    "Es necesario completar todos los campos obligatorios incluyendo la documentación indicada"
                  </p>
                </div>
                <div className="flex flex-col gap-1 italic">
                  <span className="text-[11px] text-zinc-400 font-bold">Campo de documento:</span>
                  <span className="text-[12px] text-red-500">
                    "Faltan cargar documentos"
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-zinc-100 rounded-2xl shadow-sm bg-zinc-50/30">
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">Ejemplo Visual de Ayuda (Gris)</p>
              <div className="bg-white p-4 rounded-xl border border-zinc-100">
                 <p className="text-[13px] font-bold text-zinc-800">Plano completo de arquitectura (Obligatorio)</p>
                 <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed italic">
                   Las extensiones soportadas son .pdf .rar .zip (hasta 5MB). Máximo 10 documentos
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reglas de Escritura */}
      <section className="mt-20 p-10 bg-[#0a192f] rounded-3xl text-white font-geist">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
            <AlertCircle size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Reglas de Escritura
            </h2>
            <p className="text-blue-200/50 text-sm">
              Normativa gramatical para la carga de datos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-sm leading-relaxed text-slate-300">
            <p>
              • <strong className="text-white">No Camel Case:</strong> No se
              deben usar mayúsculas al inicio de cada palabra en botones o
              etiquetas.
            </p>
            <p>
              • <strong className="text-white">Mayúscula Inicial:</strong> Solo
              se aplica al comienzo de la oración por regla ortográfica, salvo
              nombres propios.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 font-bold uppercase tracking-widest">
                  <th className="p-4 text-emerald-400">Bien</th>
                  <th className="p-4 text-red-400">Mal</th>
                </tr>
              </thead>
              <tbody className="clic-salud-preview italic">
                <tr className="border-b border-white/5">
                  <td className="p-4 text-white">Registrar funcionalidad</td>
                  <td className="p-4 text-slate-500">
                    Registrar Funcionalidad
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-white">Ver historial médico</td>
                  <td className="p-4 text-slate-500">Ver Historial Medico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="mt-12 text-center text-zinc-400 text-[11px] font-mono italic">
        * Todos los componentes dentro de la clase .clic-salud-preview heredan
        Roboto de forma obligatoria.
      </footer>
    </div>
  );
}
