import './app.css'
import App from './App.svelte'
import "@adorable.css"

const app = new App({
  target: document.getElementById('app') as HTMLElement,
})

export default app