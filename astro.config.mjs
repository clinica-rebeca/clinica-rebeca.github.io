import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// import unicons from "@iconscout/unicons";

// https://astro.build/config
export default defineConfig({
  site: 'https://carlosgalicloud.github.io',
  base: '/clinica-rebeca',
  integrations: [
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      config: { applyBaseStyles: false },
    })

  ]
});