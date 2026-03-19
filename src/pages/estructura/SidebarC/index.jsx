import React from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Box,
  Divider
} from '@mui/material';
import { 
  Home as HomeIcon, 
  Assignment as AssignmentIcon,
  Search as SearchIcon,
  BarChart as ReportsIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

// --- CONFIGURACIÓN DE MENÚ ---
const MENU_ITEMS = [
  { text: 'Inicio', icon: <HomeIcon />, path: '/' },
  { text: 'Mis Trámites', icon: <AssignmentIcon />, path: '/tramites' },
  { text: 'Búsqueda Avanzada', icon: <SearchIcon />, path: '/buscar' },
  { text: 'Reportes', icon: <ReportsIcon />, path: '/reportes' },
];

export default function SidebarC({ isOpen, onClose }) {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      // BackdropProps permite que el sombreado empiece debajo de la Navbar si es necesario
      sx={{
        '& .MuiDrawer-paper': { 
          width: 280, 
          top: '64px', // Ajuste exacto para que no tape la TopNavbar
          height: 'calc(100% - 64px)', 
          bgcolor: 'white',
          borderRight: '1px solid #E4E7EB',
          boxShadow: '4px 0px 10px rgba(0,0,0,0.05)',
        },
        '& .MuiBackdrop-root': { 
          top: '64px' 
        }
      }}
    >
      <Box 
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
        className="font-geist"
      >
        <List sx={{ py: 2 }}>
          {MENU_ITEMS.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              sx={{ 
                px: 3, 
                py: 1.5, 
                color: '#555555', // Gris de la captura
                transition: 'all 0.2s ease',
                '&:hover': { 
                  bgcolor: '#F4F7F9',
                  color: '#00519C' // Azul ClicSalud al hover
                } 
              }}
            >
              <ListItemIcon 
                sx={{ 
                  minWidth: '40px', 
                  color: 'inherit',
                  '& svg': { fontSize: '22px' }
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  fontSize: '14px', 
                  fontWeight: 600, // Semi-bold como en la captura
                  letterSpacing: '-0.01em'
                }} 
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ mx: 2, opacity: 0.5 }} />

        {/* Sección secundaria opcional */}
        <List sx={{ py: 2 }}>
          <ListItem 
            button 
            sx={{ px: 3, py: 1.2, color: '#999999' }}
          >
            <ListItemIcon sx={{ minWidth: '40px', color: 'inherit' }}>
              <SettingsIcon sx={{ fontSize: '20px' }} />
            </ListItemIcon>
            <ListItemText 
              primary="Configuración" 
              primaryTypographyProps={{ fontSize: '13px', fontWeight: 500 }} 
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}