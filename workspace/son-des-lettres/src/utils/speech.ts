export function getFrenchVoice(): SpeechSynthesisVoice | null {
  const synth = window.speechSynthesis;
  // voices might be empty initially; caller can also listen to voiceschanged
  const voices = synth.getVoices();
  const fr = voices.find((v) => v.lang.toLowerCase().startsWith('fr')) ?? null;
  return fr;
}

export function speak(text: string, voice: SpeechSynthesisVoice | null, opts?: { rate?: number; pitch?: number; volume?: number }) {
  const u = new SpeechSynthesisUtterance(text);
  if (voice) u.voice = voice;
  u.lang = voice?.lang ?? 'fr-FR';
  u.rate = opts?.rate ?? 0.9; // slightly slower for kids
  u.pitch = opts?.pitch ?? 1.0;
  u.volume = opts?.volume ?? 1.0;
  window.speechSynthesis.cancel(); // stop any ongoing speech
  window.speechSynthesis.speak(u);
}

export function speakSequence(parts: string[], voice: SpeechSynthesisVoice | null, gapMs = 350) {
  // Queue each utterance with a small gap
  window.speechSynthesis.cancel();
  let totalDelay = 0;
  for (const part of parts) {
    setTimeout(() => speak(part, voice), totalDelay);
    totalDelay += Math.max(250, gapMs) + Math.floor(part.length * 10);
  }
}