import React from 'react';
import { 
  Typography, Tooltip, Button, IconButton, Stack 
} from '@mui/material';
import { 
  Delete as DeleteIcon,
  Info as InfoIcon,
  HelpCircle
} from 'lucide-react';

const CategoryHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-10 mt-16 first:mt-0 font-geist">
    <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900 whitespace-nowrap">
      {title}
    </h2>
    <div className="h-px grow bg-zinc-200"></div>
  </div>
);

export default function Tooltips() {
  return (
    <div className="max-w-6xl mx-auto text-left font-geist pb-32 px-4 italic-rules">
      <header className="mb-16">
        <Typography variant="overline" className="text-blue-600 font-bold tracking-widest uppercase text-[10px]">
          UI Components / Feedback
        </Typography>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter mb-4">Tooltips</h1>
        <p className="text-lg text-zinc-500 max-w-3xl leading-relaxed">
          Tooltips are used to provide brief contextual information about an element, especially action icons and buttons.
        </p>
      </header>

      {/* --- GENERAL RULE --- */}
      <section className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="text-zinc-400" size={20} />
          <h3 className="text-sm font-black text-zinc-900 uppercase tracking-widest">System Rule</h3>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed italic">
          The system will apply the use of a **tooltip for each icon**. Similarly, for disabled buttons, it must be indicated with a tooltip that the user does not have the necessary permissions.
        </p>
      </section>

      {/* --- 01. NO PERMISSION CASE --- */}
      <CategoryHeader title="01. No Permissions" />
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="p-10 bg-white rounded-3xl border border-zinc-200 shadow-sm flex justify-center">
          <Tooltip title="You don't have permission to do this" arrow placement="top">
            <span style={{ display: 'inline-block' }}>
              <Button 
                variant="contained" 
                disabled 
                sx={{ 
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5
                }}
              >
                A Disabled Button
              </Button>
            </span>
          </Tooltip>
        </div>
        <div>
          <p className="text-sm text-zinc-600 leading-relaxed mb-4">
            Example: No permissions scenario
          </p>
          <code className="block p-4 bg-zinc-900 text-zinc-400 rounded-xl text-[11px] overflow-x-auto">
            {`<Tooltip title="You don't have permission to do this">\n  <span>\n    <Button disabled>A Disabled Button</Button>\n  </span>\n</Tooltip>`}
          </code>
        </div>
      </div>

      {/* --- 02. ARROW CASE --- */}
      <CategoryHeader title="02. With Permissions - ARROW Variant" />
      <div className="grid md:grid-cols-2 gap-8 mb-16 font-geist items-center border border-zinc-100 p-8 rounded-3xl bg-zinc-50/20">
        <div className="flex justify-center">
          <Tooltip title="Add" arrow placement="top">
            <Button 
              variant="outlined" 
              sx={{ borderRadius: '12px', textTransform: 'none', fontWeight: 600, px: 6 }}
            >
              Arrow
            </Button>
          </Tooltip>
        </div>
        <div>
          <p className="text-sm text-zinc-600 leading-relaxed mb-4 italic">
            Standard use with the arrow property enabled for better visual guidance.
          </p>
           <code className="block p-4 bg-zinc-900 text-zinc-400 rounded-xl text-[11px] overflow-x-auto">
            {`<Tooltip title="Add" arrow>\n  <Button>Arrow</Button>\n</Tooltip>`}
          </code>
        </div>
      </div>

      {/* --- 03. ADDITIONAL EXAMPLES --- */}
      <CategoryHeader title="03. Best Practices" />
      <div className="grid md:grid-cols-2 gap-6 mb-16 font-geist">
        <div className="p-8 border border-zinc-100 rounded-3xl shadow-sm bg-zinc-50/30">
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">Indivual Icons (Mandatory)</p>
          <div className="flex items-center gap-4">
            <Tooltip title="Delete record" arrow>
              <IconButton sx={{ bgcolor: 'white', border: '1px solid #eee' }}>
                <DeleteIcon size={20} />
              </IconButton>
            </Tooltip>
            <p className="text-xs text-zinc-500 italic">Every action icon must have a descriptive label.</p>
          </div>
        </div>

        <div className="p-8 border border-zinc-100 rounded-3xl shadow-sm bg-zinc-50/30">
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">Informative Context</p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-zinc-700">Audit Status</span>
            <Tooltip title="This status updates automatically" arrow>
              <InfoIcon size={16} className="text-blue-500" />
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Implementation Note */}
      <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
        <p className="text-xs text-blue-800 leading-relaxed italic">
          <strong>Implementation Note:</strong> Default recommended placement is 'top' with the 'arrow' variant to ensure original content isn't covered and a clear visual connection is maintained.
        </p>
      </div>
    </div>
  );
}
