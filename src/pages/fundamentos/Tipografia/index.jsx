import React, { useState } from "react";
import { Snackbar, Alert, Tooltip } from "@mui/material";
import { Copy, CheckCircle2, AlertCircle } from "lucide-react";
import Typography from "@mui/material/Typography";

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
  const [copied, setCopied] = useState(false);

  const cssCode = `font-family: 'Roboto', sans-serif;
font-size: ${size};
font-weight: ${weight};
line-height: ${lineHeight};
color: ${color};`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group border border-zinc-100 rounded-2xl bg-white overflow-hidden hover:shadow-xl transition-all duration-300 mb-8">
      <div className="p-6 border-b border-zinc-50 flex justify-between items-center bg-zinc-50/30">
        <div className="font-geist">
          <h3 className="text-sm font-bold text-zinc-900">{title}</h3>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#25ADE6"
            width="35%"
          >
            Equipamientos
          </Typography>
          <p className="text-[11px] text-zinc-400 font-mono">{variant}</p>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-bold bg-white border border-zinc-200 rounded-lg hover:bg-zinc-900 hover:text-white transition-all shadow-sm"
        >
          {copied ? <CheckCircle2 size={12} /> : <Copy size={12} />}
          {copied ? "Copiado" : "Copiar CSS"}
        </button>
      </div>

      <div className="p-8">
        {/* Renderizado del Producto ClicSalud */}
        <div className="clic-salud-preview mb-8 p-6 bg-zinc-50/50 rounded-xl border border-dashed border-zinc-200">
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

        {/* Especificaciones Técnicas (Geist) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-geist">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
              Tamaño
            </p>
            <p className="text-sm font-medium text-zinc-700">{size}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
              Peso
            </p>
            <p className="text-sm font-medium text-zinc-700">
              {weight === 700 ? "Bold" : "Regular"}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
              Line Height
            </p>
            <p className="text-sm font-medium text-zinc-700">{lineHeight}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
              Uso
            </p>
            <p className="text-sm font-medium text-zinc-700">{usage}</p>
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
