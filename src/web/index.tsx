import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WithSkiaWeb
      getComponent={() => import('./root')}
      fallback={null}
      opts={{ locateFile: () => '/libs/canvaskit.wasm' }}
    />
  </StrictMode>
)
