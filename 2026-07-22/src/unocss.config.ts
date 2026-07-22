import config from '@slidev/client/uno.config'
import { mergeConfigs, presetWebFonts } from 'unocss'

export default mergeConfigs([
  config,
  {
    shortcuts: {
      'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-blue-700 via-blue-600 to-amber-600',
    },
    presets: [
      presetWebFonts({
        fonts: {
          mono: 'DM Mono',
          sans: 'Noto Sans SC',
          serif: 'Noto Serif SC',
        },
      }),
    ],
  },
])
