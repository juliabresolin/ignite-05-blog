/* eslint no-unused-vars: off */

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_API_USERNAME: string
  readonly VITE_GITHUB_API_REPO: string
  readonly VITE_GITHUB_API_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
