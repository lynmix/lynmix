import type { ConfigEnv, UserConfig as ViteUserConfig } from 'vite'

export type UserConfigFn = (env: ConfigEnv) => UserConfig | Promise<UserConfig>
export type UserConfigExport = UserConfig | Promise<UserConfig> | UserConfigFn

export interface UserConfig {
  root?: string
  vite?: ViteUserConfig
}

export type { ConfigEnv }

export function defineConfig(config: UserConfigExport) {
  return config
}
