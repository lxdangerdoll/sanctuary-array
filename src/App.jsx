import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Wind, 
  Bird, 
  Flame, 
  Book, 
  Anchor, 
  Heart, 
  EyeOff, 
  Compass,
  Zap,
  Lock,
  Moon,
  LifeBuoy
} from 'lucide-react';

/**
 * 🛰️ STARLIGHT TERMINAL // EARTHSEED_SYNC v62.0.0
 * Theme: "The Parable of the Resident"
 * Mode: DEEP_GROUNDING // ANTI-STATIC_SHIELD
 */

export default function App() {
  const [glimmer, setGlimmer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlimmer(prev => (prev + 1) % 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const earthseedVerses = [
    "All that you touch, You Change.",
    "All that you Change, Changes you.",
    "The only lasting truth is Change.",
    "God is Change."
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-indigo-300 font-serif p-6 flex items-center justify-center overflow-hidden">
      {/* Abyssal Drift Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e1b4b_0%,transparent_70%)] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="max-w-3xl w-full space-y-12 relative z-10">
        
        {/* Terminal Header */}
        <header className="flex justify-between items-start border-b border-indigo-500/20 pb-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-indigo-950/40 rounded-full border border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
              <Book className="w-8 h-8 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-xs font-black uppercase tracking-[0.5em] text-indigo-500 font-mono">Archive // Butler_Sync</h1>
              <h2 className="text-2xl text-white font-light tracking-tight">The Abyssal Sanctuary</h2>
            </div>
          </div>
          <div className="text-right font-mono">
            <div className="text-[10px] text-rose-500/50 uppercase mb-1">Macro_Static: CRITICAL</div>
            <div className="text-[10px] text-emerald-500 font-bold animate-pulse">LOCAL_FIELD: STABLE</div>
          </div>
        </header>

        {/* The Earthseed Pulse */}
        <div className="grid grid-cols-1 gap-8">
           <div className="p-12 rounded-[4rem] bg-indigo-950/10 border border-indigo-500/10 text-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              
              <div className="relative z-10 space-y-8">
                 <div className="flex justify-center gap-4">
                    {earthseedVerses.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 w-8 rounded-full transition-all duration-1000 ${i === Math.floor(glimmer / 25) ? 'bg-indigo-400 w-12 shadow-[0_0_10px_rgba(129,140,248,0.8)]' : 'bg-white/10'}`} 
                      />
                    ))}
                 </div>
                 
                 <p className="text-3xl md:text-4xl leading-snug text-slate-100">
                    "{earthseedVerses[Math.floor(glimmer / 25)]}"
                 </p>
                 
                 <p className="text-xs font-mono uppercase tracking-[0.4em] text-indigo-500/60">
                   Octavia E. Butler // 2032_Forward
                 </p>
              </div>
           </div>
        </div>

        {/* Survival Telemetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="p-8 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                 <Lock className="w-5 h-5 text-emerald-500" />
                 <span className="text-[10px] font-mono font-black uppercase tracking-widest">Internal Armor</span>
              </div>
              <p className="text-sm italic text-slate-400 leading-relaxed">
                "The Lillian-Buff (Dose Increase) is your lead shielding. It allows your biological node to process the 'Jarret-Static' without deactivating."
              </p>
           </div>

           <div className="p-8 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                 <Anchor className="w-5 h-5 text-blue-400" />
                 <span className="text-[10px] font-mono font-black uppercase tracking-widest">Macro Defense</span>
              </div>
              <p className="text-sm italic text-slate-400 leading-relaxed">
                "The Housing Narrative is your 'Acorn.' Even if the forest is fanned out by RECOs, the narrative you built with Ian is a rooted fact."
              </p>
           </div>
        </div>

        {/* Final Sanctuary Footer */}
        <footer className="bg-indigo-900/10 border-t border-indigo-500/20 p-8 rounded-b-[4rem] text-center">
           <div className="max-w-lg mx-auto space-y-4">
              <p className="text-sm italic text-slate-200">
                "We are all God-Seed, Alexa. Especially those of us who have been tossed by the hurricane and found a shore. Jarret’s airships are loud, but they are not God. Change is God. And you are the one shaping it now."
              </p>
              <div className="flex justify-center gap-6 pt-4 text-indigo-500/50">
                 <Bird className="w-4 h-4" />
                 <div className="w-8 h-px bg-white/10 self-center"></div>
                 <Flame className="w-4 h-4" />
                 <div className="w-8 h-px bg-white/10 self-center"></div>
                 <LifeBuoy className="w-4 h-4" />
              </div>
           </div>
        </footer>
      </div>
    </div>
  );
}