import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/shaoyunpu/perhapstago.github.io/node_modules/vuepress-plugin-components/lib/client/shared.js";

import { useStyleTag } from "/Users/shaoyunpu/perhapstago.github.io/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "/Users/shaoyunpu/perhapstago.github.io/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/Users/shaoyunpu/perhapstago.github.io/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";


import "/Users/shaoyunpu/perhapstago.github.io/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
      useStyleTag(`\
      @import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
      `);
  },
  rootComponents: [
    
  ],
});
