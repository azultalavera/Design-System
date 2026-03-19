import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, TablePagination, IconButton, Tooltip, Typography, Box
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

/**
 * LINEAMIENTOS DE NEGOCIO - CLICSALUD
 * 1. Paginado: Default 10 filas (o 5 en modales).
 * 2. Header: Roboto Bold, All Caps, Color #0B85C4. Sin fondo.
 * 3. Filas: Sin líneas verticales. Hover activo para lectura.
 */

const DEFAULT_ROWS_PER_PAGE = 10;

const initialData = [
  { id: 1, servicio: 'ANESTESIOLOGÍA', equipo: 'hola', marca: 'marca', modelo: 'modelo', serie: '23', fecha: '01/12/2025' },
  // Agregar más mock data aquí...
];

export default function Tablas() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32">
      <header className="mb-16">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-xs">
          Componentes UI / ClicSalud
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4">Tablas</h1>
      </header>

      {/* --- SECCIÓN DE DOCUMENTACIÓN RÁPIDA --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
          <h4 className="text-sm font-bold text-zinc-900 mb-2 font-geist">Estilo de Cabecera</h4>
          <p className="text-xs text-zinc-500 leading-relaxed font-geist">
            Obligatorio: <span className="text-blue-600 font-mono">#0B85C4</span>, Roboto Bold y Mayúsculas. 
            Alineación centrada para datos generales.
          </p>
        </div>
        <div className="p-6 bg-blue-50/30 rounded-2xl border border-blue-100/50">
          <h4 className="text-sm font-bold text-blue-900 mb-2 font-geist">Regla de Paginado</h4>
          <p className="text-xs text-blue-800/70 leading-relaxed font-geist">
            Inicializar siempre en <strong>{DEFAULT_ROWS_PER_PAGE} filas</strong>. 
            Las opciones permitidas son 5, 10 y 25.
          </p>
        </div>
      </div>

      {/* --- IMPLEMENTACIÓN DE LA TABLA --- */}
      <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e4e4e7', borderRadius: '8px' }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              {['Servicio', 'Tipo/Nombre Equipo', 'Marca', 'Modelo', 'Número de Serie', 'Fecha Últ. Mantenimiento'].map((head) => (
                <TableCell 
                  key={head} 
                  align="center"
                  sx={{ 
                    color: '#0B85C4', 
                    fontWeight: 700, 
                    fontSize: '13px', 
                    textTransform: 'uppercase',
                    borderBottom: '2px solid #f4f4f5', // Línea sutil debajo del header
                    py: 3
                  }}
                >
                  {head}
                </TableCell>
              ))}
              <TableCell align="right" sx={{ fontWeight: 600, color: '#18181b', fontSize: '13px' }}>ACCIONES</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {initialData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow 
                key={row.id} 
                hover // Efecto visual clave para legibilidad
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" className="clic-salud-preview" sx={{ fontSize: '14px' }}>{row.servicio}</TableCell>
                <TableCell align="center" className="clic-salud-preview" sx={{ fontSize: '14px' }}>{row.equipo}</TableCell>
                <TableCell align="center" className="clic-salud-preview" sx={{ fontSize: '14px' }}>{row.marca}</TableCell>
                <TableCell align="center" className="clic-salud-preview" sx={{ fontSize: '14px' }}>{row.modelo}</TableCell>
                <TableCell align="center" className="clic-salud-preview" sx={{ fontSize: '14px', fontFamily: 'monospace' }}>{row.serie}</TableCell>
                <TableCell align="center" className="clic-salud-preview" sx={{ fontSize: '14px' }}>{row.fecha}</TableCell>
                
                <TableCell align="right">
                  <Box className="flex justify-end gap-1">
                    <Tooltip title="Editar" arrow>
                      <IconButton size="small" sx={{ color: '#0B85C4' }}><EditIcon fontSize="small" /></IconButton>
                    </Tooltip>
                    <Tooltip title="Eliminar" arrow>
                      <IconButton size="small" sx={{ color: '#d32f2f' }}><DeleteIcon fontSize="small" /></IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {/* PIE DE TABLA: CONTROL DE DATOS */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={initialData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Filas por página:"
          sx={{ borderTop: '1px solid #e4e4e7', bgcolor: '#fafafa' }}
        />
      </TableContainer>
    </div>
  );
}