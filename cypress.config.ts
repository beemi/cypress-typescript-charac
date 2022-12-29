import { defineConfig } from "cypress";

export default defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      config.baseUrl = "https://app.charac.co.uk/";
      return config;
    },
  },
});
