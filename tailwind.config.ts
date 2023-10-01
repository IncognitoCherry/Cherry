import { myCustomTheme } from './theme';

import skeleton from '@skeletonlabs/tw-plugin';

  plugins: [
    skeleton({
      themes: {
        custom: [
          myCustomTheme
        ]
      }
    })
  ]
}
