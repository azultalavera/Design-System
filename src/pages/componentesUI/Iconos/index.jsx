import React, { useState } from 'react';
import { Typography, Grid, Tooltip, Snackbar, Alert } from '@mui/material';
import { 
  // Iconos de Botones
  ArrowBack, Send, Search, Close, Clear, FilePresent, AddCircle,
  // Iconos de Acciones
  Save, DeleteForever, BorderColor, Check, Visibility, CloudDownload, Restore, NoteAdd, Backspace,
  // Iconos de Trámite
  Apartment, FamilyRestroom, Business, Vaccines, WheelchairPickup, MedicalServices, FaceRetouchingNatural, Biotech,
  // Iconos de Navegación
  Home, MoveToInbox, Add, RuleFolder, CreateNewFolder, Checklist,
  ContentCopy, Gavel, Assignment, Description
} from '@mui/icons-material';

// --- COMPONENTES DE ESTRUCTURA ---

// Títulos de Categoría Principal (Negro + Línea)
const CategoryHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-10 mt-16 first:mt-0 animate-in fade-in duration-500">
    <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900 font-geist whitespace-nowrap">
      {title}
    </h2>
    <div className="h-px grow bg-zinc-200"></div>
  </div>
);

// Subtítulos de Grupo (Gris + Línea)
const IconGroup = ({ title, children }) => (
  <div className="mb-12 animate-in fade-in duration-700">
    <div className="flex items-center gap-4 mb-8">
      <h4 className="text-[13px] font-bold text-zinc-400 font-geist whitespace-nowrap">{title}</h4>
      <div className="h-px grow bg-zinc-100"></div>
    </div>
    <Grid container spacing={2}>
      {children}
    </Grid>
  </div>
);

// Card de Icono Individual
const IconCard = ({ Icon, name, label, onCopy }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Tooltip title={`Copiar import de ${name}`} arrow>
      <div 
        onClick={() => onCopy(name)}
        className="group flex items-center p-3 bg-white border border-zinc-100 rounded-xl hover:border-blue-200 transition-all cursor-pointer active:scale-95"
      >
        <div className="p-2 rounded-lg text-zinc-400 group-hover:text-[#0B85C4] transition-colors">
          <Icon sx={{ fontSize: 24 }} />
        </div>
        <div className="ml-3 overflow-hidden text-left">
          <p className="text-[11px] font-black text-zinc-800 truncate leading-none mb-1 uppercase tracking-tighter font-geist">
            {label}
          </p>
          <p className="text-[10px] text-zinc-400 truncate font-geist uppercase tracking-tight">
            {name}
          </p>
        </div>
      </div>
    </Tooltip>
  </Grid>
);

// --- COMPONENTE PRINCIPAL ---

export default function Iconos() {
  const [snackbar, setSnackbar] = useState({ open: false, name: "" });

  const handleCopy = (name) => {
    const text = `import ${name}Icon from '@mui/icons-material/${name}';`;
    navigator.clipboard.writeText(text);
    setSnackbar({ open: true, name });
  };

  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4">
      <header className="mb-16">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-[10px]">
          Fundamentos / ClicSalud
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4 leading-none">Iconografía</h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-light">
          Catálogo de glifos normalizados para el sistema. Haz clic en cualquier celda para copiar su importación.
        </p>

        {/* Regla de Color */}
        <div className="mt-10 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col md:flex-row gap-8 items-center font-geist">
          <div className="flex-1">
            <h3 className="text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Color Iconografía</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Los iconos deberán estar de color siempre que sean <strong>clickeables</strong> (habilitados) 
              y encontrarse de <strong>color gris</strong> si no es posible interactuar con ellos (deshabilitado).
            </p>
          </div>
          <div className="flex gap-10 bg-white p-4 rounded-xl border border-zinc-200">
            <div className="text-center">
              <div className="p-3 bg-blue-50 rounded-lg text-blue-500 mb-2">
                <Check />
              </div>
              <p className="text-[9px] font-bold text-blue-600 uppercase tracking-tighter">Habilitado</p>
            </div>
            <div className="text-center opacity-40">
              <div className="p-3 bg-zinc-100 rounded-lg text-zinc-500 mb-2">
                <Check />
              </div>
              <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-tighter">Deshabilitado</p>
            </div>
          </div>
        </div>
      </header>

      {/* --- SECCIÓN 1: INTERFAZ --- */}
      <CategoryHeader title="Interfaz de Usuario" />
      
      <IconGroup title="Iconos de Botones">
        <IconCard Icon={ArrowBack} name="ArrowBack" label="Anterior" onCopy={handleCopy} />
        <IconCard Icon={Send} name="Send" label="Siguiente / Confirmar" onCopy={handleCopy} />
        <IconCard Icon={Search} name="Search" label="Buscar" onCopy={handleCopy} />
        <IconCard Icon={Close} name="Close" label="Limpiar" onCopy={handleCopy} />
        <IconCard Icon={Clear} name="Clear" label="Cancelar" onCopy={handleCopy} />
        <IconCard Icon={FilePresent} name="FilePresent" label="Adjuntar" onCopy={handleCopy} />
        <IconCard Icon={AddCircle} name="AddCircle" label="Añadir Nuevo" onCopy={handleCopy} />
      </IconGroup>

      <IconGroup title="Acciones de Gestión">
        <IconCard Icon={Save} name="Save" label="Guardar" onCopy={handleCopy} />
        <IconCard Icon={DeleteForever} name="DeleteForever" label="Eliminar / Rechazar" onCopy={handleCopy} />
        <IconCard Icon={BorderColor} name="BorderColor" label="Editar / Continuar" onCopy={handleCopy} />
        <IconCard Icon={Check} name="Check" label="Validar / Resolver" onCopy={handleCopy} />
        <IconCard Icon={Visibility} name="Visibility" label="Previsualizar" onCopy={handleCopy} />
        <IconCard Icon={CloudDownload} name="CloudDownload" label="Descargar" onCopy={handleCopy} />
        <IconCard Icon={Restore} name="Restore" label="Historial" onCopy={handleCopy} />
        <IconCard Icon={NoteAdd} name="NoteAdd" label="Generar" onCopy={handleCopy} />
        <IconCard Icon={Backspace} name="Backspace" label="Borrar" onCopy={handleCopy} />
      </IconGroup>

      {/* --- SECCIÓN 2: NEGOCIO --- */}
      <CategoryHeader title="Contexto de Negocio" />
      
      <IconGroup title="Tipologías de Trámite">
        <IconCard Icon={Apartment} name="Apartment" label="Clínicas / Hospitales" onCopy={handleCopy} />
        <IconCard Icon={FamilyRestroom} name="FamilyRestroom" label="Fertilidad" onCopy={handleCopy} />
        <IconCard Icon={Business} name="Business" label="Salud / Geriátricos" onCopy={handleCopy} />
        <IconCard Icon={Vaccines} name="Vaccines" label="Quirúrgicos" onCopy={handleCopy} />
        <IconCard Icon={WheelchairPickup} name="WheelchairPickup" label="Discapacidad" onCopy={handleCopy} />
        <IconCard Icon={MedicalServices} name="MedicalServices" label="Consultorios" onCopy={handleCopy} />
        <IconCard Icon={FaceRetouchingNatural} name="FaceRetouchingNatural" label="Cosmética" onCopy={handleCopy} />
        <IconCard Icon={Biotech} name="Biotech" label="Laboratorio" onCopy={handleCopy} />
      </IconGroup>

      <IconGroup title="Menú y Navegación">
        <IconCard Icon={Home} name="Home" label="Home / Inicio" onCopy={handleCopy} />
        <IconCard Icon={MoveToInbox} name="MoveToInbox" label="Bandeja de Trámites" onCopy={handleCopy} />
        <IconCard Icon={Add} name="Add" label="Nuevo Trámite" onCopy={handleCopy} />
        <IconCard Icon={RuleFolder} name="RuleFolder" label="Renovación" onCopy={handleCopy} />
        <IconCard Icon={CreateNewFolder} name="CreateNewFolder" label="Habilitación" onCopy={handleCopy} />
        <IconCard Icon={Checklist} name="Checklist" label="Adecuación" onCopy={handleCopy} />
      </IconGroup>

      <IconGroup title="Documentación Legal">
        <IconCard Icon={Gavel} name="Gavel" label="Resolución / Decisión" onCopy={handleCopy} />
        <IconCard Icon={Assignment} name="Assignment" label="Documento Oficial" onCopy={handleCopy} />
        <IconCard Icon={Description} name="Description" label="Archivo Resolución" onCopy={handleCopy} />
      </IconGroup>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={2000} 
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" sx={{ borderRadius: '8px', fontSize: '12px', bgcolor: '#0B85C4' }}>
          Import de {snackbar.name} copiado correctamente
        </Alert>
      </Snackbar>
    </div>
  );
}