
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  plugins: ['babel-plugin-react-compiler'],
  // add other config here if needed
});
