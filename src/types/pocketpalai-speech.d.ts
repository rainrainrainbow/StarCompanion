declare module '@pocketpalai/react-native-speech' {
  export interface TTSOptions {
    text: string;
    engine?: string;
    language?: string;
    speed?: number;
    pitch?: number;
  }

  export interface TTSVoice {
    id: string;
    name: string;
    language?: string;
  }

  export function speak(options: TTSOptions): Promise<void>;
  export function stop(): void;
  export function getVoices(): Promise<TTSVoice[]>;
  export function isSpeaking(): Promise<boolean>;
  export function setOnDone(callback: () => void): void;
  export function setOnError(callback: (error: Error) => void): void;

  export const TTS_EVENT_DONE = 'tts-done';
  export const TTS_EVENT_ERROR = 'tts-error';
  export const TTS_EVENT_START = 'tts-start';
  export const TTS_EVENT_STOP = 'tts-stop';
}
