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

  export interface SpeechStreamOptions {
    text: string;
    engine?: string;
    language?: string;
    speed?: number;
    pitch?: number;
  }

  export interface SpeechStreamResult {
    id: string;
    cancel: () => void;
    onData: (callback: (data: string) => void) => void;
    onDone: (callback: () => void) => void;
    onError: (callback: (error: Error) => void) => void;
  }

  export class TTSEngine {
    constructor(options?: Record<string, unknown>);
    speak(text: string, options?: Record<string, unknown>): Promise<void>;
    stop(): void;
    release(): void;
  }

  export enum SupertonicLanguage {
    English = 'en',
    Chinese = 'zh',
    Japanese = 'ja',
    Korean = 'ko',
    French = 'fr',
    German = 'de',
    Spanish = 'es',
  }

  export function speak(options: TTSOptions): Promise<void>;
  export function stop(): void;
  export function getVoices(): Promise<TTSVoice[]>;
  export function isSpeaking(): Promise<boolean>;
  export function initialize(options?: Record<string, unknown>): Promise<void>;
  export function release(): Promise<void>;
  export function getAvailableVoices(): Promise<TTSVoice[]>;
  export function createSpeechStream(options: SpeechStreamOptions): SpeechStreamResult;
  export function setOnDone(callback: () => void): void;
  export function setOnError(callback: (error: Error) => void): void;

  export const TTS_EVENT_DONE = 'tts-done';
  export const TTS_EVENT_ERROR = 'tts-error';
  export const TTS_EVENT_START = 'tts-start';
  export const TTS_EVENT_STOP = 'tts-stop';
}
