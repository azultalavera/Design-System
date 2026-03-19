import React from "react";
import { UserCircle, Bell } from "lucide-react";
import {
  Typography,
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
  Stack,
} from "@mui/material";
import {
  Notifications as NotificationsIcon,
  Folder as FolderIcon,
  Mail as MailIcon,
} from "@mui/icons-material";

const CategoryHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-10 mt-16 first:mt-0 font-geist">
    <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900 whitespace-nowrap">
      {title}
    </h2>
    <div className="h-px grow bg-zinc-200"></div>
  </div>
);

export default function Avatares() {
  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4">
      <header className="mb-16">
        <Typography
          variant="overline"
          className="text-blue-600 font-bold tracking-widest uppercase text-[10px]"
        >
          Componentes UI / Identidad
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4">
          Avatares y Perfiles
        </h1>
        <p className="text-lg text-zinc-500 max-w-3xl leading-relaxed">
          Los avatares se utilizan para representar usuarios del sistema, ya
          sean agentes institucionales o efectores externos.
        </p>
      </header>

      {/* --- 01. PERFIL --- */}
      <CategoryHeader title="01. Mi Perfil" />
      <div className="p-10 bg-zinc-50 rounded-3xl border border-zinc-100 mb-12 font-geist">
        <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm max-w-md mx-auto">
          <Typography
            sx={{ fontSize: "10px", fontWeight: 800, color: "#94a3b8" }}
          >
            VISTA CABECERA (DERECHA)
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            <Badge
              badgeContent={4}
              color="primary"
              sx={{ "& .MuiBadge-badge": { fontSize: "10px", fontWeight: "bold" } }}
            >
              <NotificationsIcon color="action" />
            </Badge>
            <Avatar
              src="/broken-image.jpg"
              sx={{ width: 40, height: 40, border: "2px solid #e2e8f0" }}
            />
          </Stack>
        </div>
        <p className="mt-6 text-xs text-center text-zinc-400 max-w-md mx-auto leading-relaxed italic">
          El usuario logueado podra visualizar su avatar en la esquina superior
          derecha junto a sus notificaciones pendientes.
        </p>
      </div>

      {/* --- NUEVA SECCION: REPRESENTACION --- */}
      <CategoryHeader title="02. Identidad en Cabecera" />
      <div className="space-y-6 mb-16 font-geist">
        <p className="text-sm text-zinc-500 mb-8 max-w-2xl">
          Dependiendo del tipo de representacion legal del efector, la cabecera mostrara diferentes niveles de informacion detallando a quien se esta representando en el sistema.
        </p>

        {[
          { label: "1. Persona Fisica", text: "MARIA AZUL TALAVERA", badge: "10+" },
          { label: "2. Persona Juridica", text: "MARIA AZUL TALAVERA representando a HOSPITAL PRIVADO CENTRO MEDICO DE CORDOBA S.A.", badge: "10+" },
          { label: "3. Otra Persona Fisica", text: "MARIA AZUL TALAVERA representando a ARESU BARELLA BRUNO", badge: "" }
        ].map((variant, idx) => (
          <div key={idx} className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3">{variant.label}</p>
            <div className="bg-[#001e62] p-4 flex justify-between items-center rounded-lg shadow-inner overflow-hidden">
              <Typography sx={{
                color: 'white',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                fontFamily: 'Roboto',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                pr: 2
              }}>
                {variant.text}
              </Typography>
              <Stack direction="row" spacing={3} alignItems="center">
                <UserCircle color="white" size={24} style={{ opacity: 0.9 }} />
                <Badge
                  badgeContent={variant.badge}
                  color="error"
                  sx={{ "& .MuiBadge-badge": { fontSize: '9px', fontWeight: 900, height: 16, minWidth: 16 } }}
                >
                  <Bell color="white" size={20} style={{ opacity: 0.9 }} />
                </Badge>
              </Stack>
            </div>
          </div>
        ))}
      </div>


      {/* --- 03. NOTIFICACIONES --- */}
      <CategoryHeader title="03. Desglose de Notificaciones" />
      <div className="p-10 bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden font-geist">
        <Typography
          variant="overline"
          className="text-zinc-400 font-bold mb-6 block"
        >
          Variante: Notificaciones en Panel (Desglose)
        </Typography>
        <div className="max-w-[450px] bg-white border border-zinc-200 shadow-xl rounded-xl overflow-hidden relative">
          {/* Scrollbar Mock */}
          <div className="absolute right-1 top-4 bottom-4 w-2 bg-zinc-100 rounded-full">
            <div className="h-10 w-full bg-zinc-300 rounded-full mt-10"></div>
          </div>

          <List dense sx={{ p: 0 }}>
            {[
              {
                id: "#220",
                title: "HABILITACIÓN",
                date: "04-11-2024 10:00:55",
                msg: "Le informamos que su trámite 220 se encuentra en estado FINALIZADO.",
                unread: true
              },
              {
                id: "#11",
                title: "HABILITACIÓN PARA MODIFICAR",
                date: "28-10-2024 16:26:42",
                msg: "Le informamos que su trámite número 11 se encuentra en estado FINALIZADO.",
                unread: true
              },
              {
                id: "#11",
                title: "HABILITACIÓN PARA MODIFICAR",
                date: "28-10-2024 16:26:31",
                msg: "Le informamos que su trámite 11 se encuentra en estado EN PROTOCOLIZACIÓN.",
                unread: true
              },
              {
                id: "#30",
                title: "HABILITACIÓN 25/10",
                date: "25-10-2024 09:15:20",
                msg: "Se ha registrado un nuevo adjunto en su trámite.",
                unread: true
              }
            ].map((item, idx) => (
              <ListItem
                key={idx}
                sx={{
                  borderBottom: "1px solid #f1f5f9",
                  py: 2,
                  px: 3,
                  alignItems: 'flex-start',
                  '&:last-child': { borderBottom: 'none' }
                }}
              >
                <ListItemIcon sx={{ minWidth: 46, mt: 0.5 }}>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    variant="dot"
                    color="error"
                    invisible={!item.unread}
                  >
                    <MailIcon sx={{ color: '#333', fontSize: 26 }} />
                  </Badge>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography sx={{ fontSize: '14px', fontWeight: 800, color: '#1a1a1a', fontFamily: 'Roboto', mb: 0.5 }}>
                      [{item.id}] - {item.title}
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ fontSize: '13px', color: '#666', fontFamily: 'Roboto', lineHeight: 1.4 }}>
                      <span className="text-zinc-400">[{item.date}]:</span> {item.msg}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
        <p className="mt-8 text-sm text-zinc-600 leading-relaxed max-w-2xl">
          Al abrir el panel de notificaciones, los avisos se presentan de forma densa con un **icono de correo**,
          cabecera en negrita que incluye el **ID del tramite** y una breve descripcion del cambio de estado o novedad, precedida por la fecha y hora.
        </p>
      </div>
    </div>
  );
}
