import React from 'react';
import { 
  Box, Typography, Paper, Grid, Table, TableBody, 
  TableCell, TableContainer, TableHead, TableRow, 
  Divider, Stack, Chip
} from '@mui/material';
import { 
  CloudDownload, Print, ErrorOutline, 
  CheckCircle, AccessTime, InfoOutlined,
  Image as ImageIcon
} from '@mui/icons-material';

// --- COMPONENTES DE DISEÑO ---

const ReportSection = ({ title, children }) => (
  <Box sx={{ mb: 6 }}>
    <Typography 
      variant="h4" 
      sx={{ 
        color: 'rgb(0, 81, 155)', // #00519B
        fontWeight: 900, 
        mb: 2, 
        fontFamily: 'Geist',
        letterSpacing: '-0.03em'
      }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const SubTitle = ({ text }) => (
  <Typography 
    variant="h5" 
    sx={{ 
      color: 'rgb(37, 173, 230)', // #25ade6
      fontWeight: 'bold', 
      fontStyle: 'italic',
      textDecoration: 'underline',
      mb: 3, 
      fontFamily: 'Geist',
      mt: 4
    }}
  >
    {text}
  </Typography>
);

const ItemLabel = ({ label, value }) => (
  <Box sx={{ display: 'flex', gap: 1, mb: 1, flexWrap: 'wrap' }}>
    <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'rgb(39, 39, 42)', fontFamily: 'Roboto' }}>
      {label}:
    </Typography>
    <Typography variant="body2" sx={{ color: 'rgb(82, 82, 91)', fontFamily: 'Roboto' }}>
      {value || '-'}
    </Typography>
  </Box>
);

const DocTable = ({ rows }) => (
  <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid rgb(228, 228, 231)', borderRadius: '8px', overflow: 'hidden', mt: 2 }}>
    <Table size="small">
      <TableHead sx={{ bgcolor: 'rgb(0, 180, 236)' }}>
        <TableRow>
          <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '11px' }}>Fecha de subida</TableCell>
          <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '11px' }}>Nombre archivo</TableCell>
          <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '11px' }}>Estado</TableCell>
          {rows.some(r => r.vencimiento) && <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '11px' }}>Vencimiento</TableCell>}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index} sx={{ '&:nth-of-type(even)': { bgcolor: 'rgb(250, 250, 250)' } }}>
            <TableCell sx={{ fontSize: '11px', fontFamily: 'Roboto' }}>{row.fecha}</TableCell>
            <TableCell sx={{ fontSize: '11px', fontFamily: 'Roboto', color: 'rgb(11, 133, 196)', fontWeight: 500 }}>{row.archivo}</TableCell>
            <TableCell sx={{ fontSize: '11px' }}>
              <Chip 
                label={row.estado} 
                size="small" 
                variant="outlined"
                color={row.estado === 'Validado' ? 'success' : 'warning'}
                sx={{ fontSize: '9px', fontWeight: 'bold', height: '20px' }}
              />
            </TableCell>
            {row.vencimiento && <TableCell sx={{ fontSize: '11px', fontFamily: 'Roboto' }}>{row.vencimiento}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

// --- PÁGINA PRINCIPAL ---

export default function Reportes() {
  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4 animate-in fade-in duration-1000">
      <header className="mb-16 border-b border-zinc-100 pb-10">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-[10px]">
          Layout / Documentación
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4 leading-none italic">Sistema de Reportes</h1>
        <p className="text-zinc-500 text-lg max-w-3xl font-light">
          Especificaciones para la generación de reportes oficiales. Incluye jerarquía tipográfica, estados semánticos y reglas de negocio para la visualización de datos.
        </p>
      </header>

      {/* --- REGLAS GENERALES --- */}
      <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="p-8 bg-zinc-900 rounded-3xl text-white shadow-2xl">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-6 italic">Reglas de Negocio</h3>
          <ul className="space-y-4 text-xs font-medium text-zinc-400">
            <li className="flex gap-3">
              <span className="text-blue-400 shrink-0">•</span>
              <span><strong>Salto de Línea:</strong> Aplicar salto automático si el texto excede el ancho del renglón.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 shrink-0">•</span>
              <span><strong>Campos Opcionales:</strong> Si no contienen datos, mostrar un guion <strong>"-"</strong>.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 shrink-0">•</span>
              <span><strong>Representado:</strong> Formato obligatorio "Nombre Apellido --- CUIL: XX-XXXX-X".</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 shrink-0">•</span>
              <span><strong>Visibilidad:</strong> Documentos opcionales sin datos no deben aparecer en Director Técnico o Adjuntos.</span>
            </li>
          </ul>
        </div>

        <div className="p-8 bg-blue-50 border border-blue-100 rounded-3xl h-full flex flex-col justify-center">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-900 mb-6 italic">Especificación Visual</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-[rgb(0,81,155)] shadow-md" />
              <p className="text-[10px] font-bold text-zinc-600 uppercase">Títulos: #00519B (Geist Black)</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-[rgb(37,173,230)] shadow-md" />
              <p className="text-[10px] font-bold text-zinc-600 uppercase">Subtítulos: #25ADE6 (Geist Bold Italic + Underline)</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded border-2 border-dashed border-zinc-200" />
              <p className="text-[10px] font-bold text-zinc-600 uppercase">Item Titles: Bold (Roboto)</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISTA PREVIA DEL REPORTE (MOCKUP) --- */}
      <section className="relative group">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900">Vista Previa (PDF Layout)</h2>
          <Stack direction="row" spacing={2}>
            <Chip icon={<Print />} label="Imprimir" clickable />
            <Chip icon={<CloudDownload />} label="Descargar PDF" clickable color="primary" />
          </Stack>
        </div>

        <Paper elevation={12} sx={{ 
          p: { xs: 4, md: 8 }, 
          borderRadius: '4px', // Simulating paper
          bgcolor: 'white',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '800px',
          border: '1px solid rgb(244, 244, 245)'
        }}>
          {/* WATERMARK (Mockup) */}
          <Box sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%) rotate(0deg)',
            opacity: 0.05,
            userSelect: 'none',
            pointerEvents: 'none',
            textAlign: 'center',
            zIndex: 1
          }}>
            <Typography variant="h1" sx={{ fontWeight: 900, fontSize: '120px', letterSpacing: '20px' }}>
              INFORME PRELIMINAR
            </Typography>
          </Box>

          {/* HEADER (Logo area) */}
          <Grid container spacing={2} sx={{ mb: 2, position: 'relative', zIndex: 2 }}>
            <Grid item xs={12} md={4}>
               <Box sx={{ height: 60, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <ImageIcon sx={{ color: '#00519B', mr: 1, fontSize: 30 }} />
                  <Typography sx={{ fontWeight: 900, color: 'rgb(0, 81, 155)', fontSize: '10px', lineHeight: 1 }}>REGULACIÓN<br/>SANITARIA</Typography>
               </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
               <Box sx={{ height: 60, display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '10px' }}>Ministerio de SALUD</Typography>
               </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
               <Box sx={{ height: 60, display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 900, color: 'rgb(0, 81, 155)', fontSize: '14px' }}>CÓRDOBA</Typography>
               </Box>
            </Grid>
          </Grid>

          {/* DATA HEADER */}
          <Box sx={{ mb: 2, p: 1, position: 'relative', zIndex: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <ItemLabel label="Nº DE TRÁMITE" value="483" />
                <ItemLabel label="TIPOLOGÍA" value="ESTABLECIMIENTOS GERIÁTRICOS" />
                <ItemLabel label="TIPO DE TRÁMITE" value="HABILITACIÓN" />
                <ItemLabel label="REPRESENTADO" value="Tramite reporte hab geriatricos" />
              </Grid>
              <Grid item xs={12} md={6}>
                <ItemLabel label="Nº EXPEDIENTE" value="0425-381321/2026" />
                <ItemLabel label="ESTADO" value="ACEPTADO DOCUMENTACIÓN AUDITORÍA" />
                <ItemLabel label="FECHA DE INICIO" value="19/01/2026" />
                <ItemLabel label="CUIL/CUIT" value="20393264293" />
              </Grid>
            </Grid>
          </Box>

          {/* BLUE SEPARATOR */}
          <Box sx={{ height: '8px', bgcolor: 'rgb(0, 180, 236)', mb: 4, position: 'relative', zIndex: 2 }} />

          <Box sx={{ textAlign: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
            <Typography variant="h4" sx={{ color: 'rgb(0, 180, 236)', fontWeight: 800, fontFamily: 'Geist' }}>
              Reporte general del trámite
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h5" sx={{ color: 'rgb(0, 180, 236)', fontWeight: 800, mb: 1, fontFamily: 'Geist' }}>
              Arquitectura
            </Typography>
            
            <Typography sx={{ fontWeight: 900, fontStyle: 'italic', textDecoration: 'underline', color: 'black', mb: 2, fontSize: '16px' }}>
              Asunto
            </Typography>

            <Box sx={{ pl: 1, mb: 4 }}>
               <ItemLabel label="Asunto" value="Asunto de prueba" />
               <ItemLabel label="Descripción" value="Descripción de prueba" />
            </Box>

            <Typography sx={{ fontWeight: 900, fontStyle: 'italic', textDecoration: 'underline', color: 'black', mb: 2, fontSize: '16px' }}>
              Profesional del área constructiva
            </Typography>

            <Box sx={{ pl: 1, mb: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}><ItemLabel label="Nombre" value="Giovanna" /></Grid>
                <Grid item xs={4}><ItemLabel label="Apellido" value="Marandino" /></Grid>
                <Grid item xs={4}><ItemLabel label="CUIL" value="27-42258438-8" /></Grid>
              </Grid>
            </Box>

            <Typography sx={{ fontWeight: 900, fontStyle: 'italic', textDecoration: 'underline', color: 'black', mb: 2, fontSize: '16px' }}>
              Datos de contacto
            </Typography>

            <Box sx={{ pl: 1, mb: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}><ItemLabel label="Celular" value="3516761212" /></Grid>
                <Grid item xs={4}><ItemLabel label="Correo" value="g@gmail.com" /></Grid>
                <Grid item xs={4}><ItemLabel label="Teléfono" value="-" /></Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </section>

      {/* FOOTER TIPS */}
      <div className="mt-16 p-8 bg-zinc-50 rounded-3xl border border-zinc-100 italic">
        <Typography variant="caption" className="text-zinc-400 font-geist block mb-2 uppercase tracking-widest font-black">Nota Técnica:</Typography>
        <p className="text-[11px] text-zinc-500 leading-relaxed font-geist">
          La tipografía utilizada debe ser <strong>Roboto</strong> para el cuerpo y <strong>Geist</strong> para los títulos dinámicos. Es fundamental que todos los reportes sigan el esquema de colores institucional (RGB) para garantizar la coherencia en la impresión.
        </p>
      </div>
    </div>
  );
}
