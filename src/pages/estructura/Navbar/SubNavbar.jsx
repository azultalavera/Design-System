import React from 'react';
import { Home } from 'lucide-react';

const TABS = [
  { id: 'ver', label: 'Ver Trámite', active: true },
  { id: 'rectificar', label: 'Rectificar Trámite', active: false },
  { id: 'acta', label: 'Acta de Inspección', active: false },
  { id: 'resolucion', label: 'Resolución', active: false },
];

export const SubNavbar = () => {
  return (
    <div className="h-[50px] w-full bg-white border-b border-zinc-200 flex items-center shadow-sm">
      <div className="w-[60px] h-full flex items-center justify-center border-r border-zinc-100 text-zinc-600 hover:bg-zinc-50 cursor-pointer transition-colors">
        <Home size={18} />
      </div>
      <div className="flex h-full ml-4">
        {TABS.map((tab) => (
          <div key={tab.id} className={`h-full px-6 flex items-center justify-center cursor-pointer transition-all relative group ${tab.active ? 'text-blue-600' : 'text-zinc-400 hover:text-zinc-600'}`}>
            <span className="text-[11px] font-bold uppercase tracking-wider font-geist">{tab.label}</span>
            {tab.active && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600" />}
          </div>
        ))}
      </div>
    </div>
  );
};