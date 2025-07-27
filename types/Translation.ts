export interface TranslationFunction {
    (key: string, values?: Record<string, any>): string;
    raw: <T = unknown>(key: string) => T;
  }