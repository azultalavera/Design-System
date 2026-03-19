import React from 'react';
import {
  Box, Typography, Paper, Grid, Stack, Divider, Chip
} from '@mui/material';
import {
  QrCode2, Verified, Print, CloudDownload,
  Image as ImageIcon, DoneAll
} from '@mui/icons-material';

// --- COMPONENTES ---

const CertLabel = ({ label, value }) => (
  <Box sx={{ display: 'flex', gap: 2, mb: 1, justifyContent: 'flex-start', maxWidth: '500px', mx: 'auto' }}>
    <Typography variant="body2" sx={{ fontWeight: 800, color: 'rgb(24, 24, 27)', minWidth: '180px', textAlign: 'right', fontFamily: 'Roboto' }}>
      {label}:
    </Typography>
    <Typography variant="body2" sx={{ color: 'rgb(63, 63, 70)', fontFamily: 'Roboto', textAlign: 'left' }}>
      {value}
    </Typography>
  </Box>
);

export default function Certificados() {
  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4 animate-in fade-in duration-700">
      <header className="mb-16">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-[10px]">
          Layout / Documentación
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4 leading-none italic uppercase">Certificados y Comprobantes</h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-light">
          Estándares para la generación de documentos legales, carnets y comprobantes de trámite.
        </p>
      </header>

      {/* --- REGLAS DE DISEÑO --- */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-zinc-100 rounded-3xl shadow-sm">
          <Verified className="text-blue-500 mb-4" />
          <h4 className="text-sm font-black uppercase mb-2">Alineación Justificada</h4>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Todo el cuerpo de texto legal debe utilizar alineación justificada para mantener márgenes simétricos y una estética formal.
          </p>
        </div>
        <div className="p-6 bg-white border border-zinc-100 rounded-3xl shadow-sm">
          <QrCode2 className="text-blue-500 mb-4" />
          <h4 className="text-sm font-black uppercase mb-2">Códigos QR</h4>
          <p className="text-xs text-zinc-500 leading-relaxed">
            En trámites de adecuación o validación externa, el código QR debe ubicarse siempre al final, por debajo de la firma o el texto principal.
          </p>
        </div>
        <div className="p-6 bg-white border border-zinc-100 rounded-3xl shadow-sm">
          <DoneAll className="text-blue-500 mb-4" />
          <h4 className="text-sm font-black uppercase mb-2">Encabezado y Pie</h4>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Es obligatorio mantener el encabezado ministerial y el pie de página del sistema oficial en todos los documentos.
          </p>
        </div>
      </section>

      {/* --- VISTA PREVIA DEL CERTIFICADO --- */}
      <section className="mb-24">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 font-geist uppercase italic">Vista Previa de Certificado</h2>
          <Stack direction="row" spacing={2}>
            <Chip icon={<Print />} label="Imprimir" clickable variant="outlined" />
            <Chip icon={<CloudDownload />} label="Ver PDF" clickable color="primary" />
          </Stack>
        </div>

        {/* MOCKUP DEL CERTIFICADO (Como la imagen) */}
        <div className="p-10 bg-zinc-100 rounded-[40px] border border-zinc-200 border-dashed flex justify-center">
          <Paper elevation={4} sx={{
            width: '100%',
            maxWidth: '800px',
            p: 6,
            borderRadius: '8px',
            bgcolor: 'white',
            position: 'relative'
          }}>
            {/* HEADER LOGOS */}
            <Grid container spacing={2} sx={{ mb: 6 }}>
              <Grid item xs={4}>
                <Box sx={{ border: '1px dashed #eee', p: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ImageIcon sx={{ color: '#ccc', fontSize: 16 }} />
                  <Typography sx={{ fontSize: '8px', fontWeight: 900, color: 'rgb(0, 81, 155)' }}>REGULACIÓN <br /> SANITARIA</Typography>
                </Box>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '8px', fontWeight: 600, color: 'text.secondary' }}>Ministerio de SALUD</Typography>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography sx={{ fontSize: '10px', fontWeight: 900, color: 'rgb(0, 81, 155)' }}>CÓRDOBA</Typography>
              </Grid>
            </Grid>

            {/* TÍTULO CENTRAL */}
            <Box sx={{ textAlign: 'center', mb: 6, px: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 900, fontSize: '24px', lineHeight: 1.2, fontFamily: 'Geist', color: 'rgb(24, 24, 27)' }}>
                Comprobante de presentación de Plan de Trabajo de Adecuación Normativa
              </Typography>
            </Box>

            {/* DATOS DEL COMPROBANTE */}
            <Box sx={{ mb: 8 }}>
              <CertLabel label="Nombre establecimiento" value="Hospital Privado Universitario de Córdoba" />
              <CertLabel label="Calle" value="Naciones Unidad" />
              <CertLabel label="Número" value="346" />
              <CertLabel label="Localidad" value="CAPITAL" />
              <CertLabel label="Propietario" value="Apellido, Nombre" />
              <CertLabel label="CUIT del propietario" value="2312312321" />
              <CertLabel label="Representante" value="Apellido, Nombre" />
              <CertLabel label="CUIL del representante" value="123345678" />
            </Box>

            {/* FOOTER ESTADO */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Typography variant="h4" sx={{ color: '#2e7d32', fontWeight: 700, fontFamily: 'Geist' }}>
                Comprobante válido
              </Typography>
            </Box>

            {/* OPCIONAL QR PLACEHOLDER */}
            <Box sx={{ position: 'absolute', bottom: 30, right: 30, opacity: 0.1 }}>
              <QrCode2 sx={{ fontSize: 60 }} />
            </Box>
          </Paper>
        </div>
      </section>

      {/* REGLAS TÉCNICAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-8 bg-zinc-900 rounded-[32px] text-white">
          <h4 className="text-xs font-black uppercase text-blue-400 mb-4 tracking-widest italic">Implementación MUI</h4>
          <div className="bg-black/20 p-4 rounded-xl border border-white/5 mb-6">
            <pre className="text-[10px] text-blue-300 font-mono">
              {`<Paper elevation={4} sx={{ p: 6, textAlign: 'justify' }}>
  <Typography variant="h5" align="center">...</Typography>
  {/* QR Code always at bottom */}
  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
    <QrCode value={data} />
  </Box>
</Paper>`}
            </pre>
          </div>
        </div>

        <div className="p-8 bg-blue-50 border border-blue-100 rounded-[32px]">
          <h4 className="text-xs font-black uppercase text-blue-900 mb-4 tracking-widest italic">Control de Calidad</h4>
          <ul className="text-xs space-y-3 font-bold text-zinc-600 uppercase">
            <li>• Resolución: 300 DPI para impresión</li>
            <li>• Formato: PDF/A (Archivado)</li>
            <li>• Metadatos: Incluir trámite ID</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
