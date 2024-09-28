import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/practice/',
  server: {
    proxy: {
      '/api': {
        target: 'https://example.com/',  // 실제 API 서버 주소
        changeOrigin: true,  // 대상 서버로부터 CORS 제약을 피하기 위해 호스트 헤더를 변경
        rewrite: (path) => path.replace(/^\/api/, '')  // 경로에서 '/api'를 제거
      }
    }
  }
});
