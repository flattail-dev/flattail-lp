/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIREBASE_FUNCTION_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
