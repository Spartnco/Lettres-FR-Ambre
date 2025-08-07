import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { SOUNDS, type SoundCategory } from './data/sounds';
import SoundCard from './components/SoundCard';
import { getFrenchVoice } from './utils/speech';

const CATEGORIES: { key: SoundCategory | 'tous'; label: string }[] = [
  { key: 'tous', label: 'Tous' },
  { key: 'voyelles', label: 'Voyelles' },
  { key: 'consonnes', label: 'Consonnes' },
  { key: 'digrammes', label: 'Digrammes' },
];

function App() {
  const [category, setCategory] = useState<SoundCategory | 'tous'>('tous');
  const [query, setQuery] = useState('');
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    const initVoices = () => setVoice(getFrenchVoice());
    initVoices();
    window.speechSynthesis.addEventListener('voiceschanged', initVoices);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', initVoices);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SOUNDS.filter((s) =>
      (category === 'tous' || s.category === category) &&
      (
        q.length === 0 ||
        s.label.toLowerCase().includes(q) ||
        s.examples.some((e) => e.word.toLowerCase().includes(q))
      )
    );
  }, [category, query]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Les sons des lettres</h1>
        <p className="subtitle">Apprendre à lire en français avec des mots colorés et la prononciation.</p>
        <div className="toolbar">
          <div className="segmented">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                className={category === c.key ? 'active' : ''}
                onClick={() => setCategory(c.key as any)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <input
            className="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un son ou un mot..."
            aria-label="Rechercher"
          />
        </div>
      </header>

      <main className="grid">
        {filtered.map((sound) => (
          <SoundCard key={sound.id} sound={sound} voice={voice} />)
        )}
      </main>

      <footer className="footer">
        <span>Astuce: cliquez un mot pour l'entendre. Les lettres apprises sont en couleur.</span>
      </footer>
    </div>
  );
}

export default App;
