import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "from player screen",
  },
});

export default app;
