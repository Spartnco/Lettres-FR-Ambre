import { useMemo } from 'react';
import type { TSound } from '../data/sounds';
import { speak } from '../utils/speech';

function escapeRegExp(input: string): string {
  return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildHighlightRegex(patterns: string[]): RegExp {
  const ordered = [...patterns].sort((a, b) => b.length - a.length);
  const source = ordered.map(escapeRegExp).join('|');
  return new RegExp(`(${source})`, 'gi');
}

function HighlightedWord({ word, patterns, color }: { word: string; patterns: string[]; color: string }) {
  const regex = useMemo(() => buildHighlightRegex(patterns), [patterns]);
  const parts = useMemo(() => word.split(regex), [word, regex]);
  return (
    <span>
      {parts.filter(Boolean).map((part, idx) => {
        regex.lastIndex = 0;
        const isMatch = regex.test(part);
        return isMatch ? (
          <span key={idx} style={{ color, fontWeight: 800 }}>{part}</span>
        ) : (
          <span key={idx}>{part}</span>
        );
      })}
    </span>
  );
}

export function SoundCard({ sound, voice }: { sound: TSound; voice: SpeechSynthesisVoice | null }) {
  const handleSpeakSound = () => {
    speak(sound.pronunciation ?? sound.label, voice);
  };

  return (
    <div className="sound-card" style={{ borderColor: sound.color }}>
      <div className="sound-header" style={{ background: `linear-gradient(135deg, ${sound.color}22, ${sound.color}55)` }}>
        <span className="badge">{sound.category}</span>
        <div className="sound-label" style={{ color: sound.color }}>{sound.label}</div>
        <button className="btn primary" onClick={handleSpeakSound} aria-label={`Écouter le son ${sound.label}`}>Écouter</button>
      </div>
      <div className="examples">
        {sound.examples.map((ex, i) => (
          <button
            key={i}
            className="example"
            onClick={() => speak(ex.word, voice)}
            aria-label={`Écouter le mot ${ex.word}`}
          >
            <HighlightedWord word={ex.word} patterns={sound.patterns} color={sound.color} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default SoundCard;