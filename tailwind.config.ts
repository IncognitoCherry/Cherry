import { myCustomTheme } from './my-custom-theme';

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
