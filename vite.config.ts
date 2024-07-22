import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    VITE_API_TOKEN: JSON.stringify(process.env.VITE_API_TOKEN),
    VITE_APIKEY: JSON.stringify(process.env.VITE_APIKEY),
    VITE_AUTH_DOMAIN: JSON.stringify(process.env.VITE_AUTH_DOMAIN),
    VITE_PROJECT_ID: JSON.stringify(process.env.VITE_PROJECT_ID),
    VITE_STOREAGE_BUCKET: JSON.stringify(process.env.VITE_STOREAGE_BUCKET),
    VITE_MESSAGING_SENDER_ID: JSON.stringify(process.env.VITE_MESSAGING_SENDER_ID),
    VITE_APP_ID: JSON.stringify(process.env.VITE_APP_ID),
    VITE_MEASUREMENT_ID: JSON.stringify(process.env.VITE_MEASUREMENT_ID)
  }

})
