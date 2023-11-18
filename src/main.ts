import './app.css'
import App from './App.svelte'
import "@adorable.css"
import 'three';

const app = new App({
  target: document.getElementById('app') as HTMLElement,
})

export default app