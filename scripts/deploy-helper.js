// scripts/deploy-helper.js
import { execSync } from 'child_process';

console.info('🚀 Starting VeloDrive deployment preparation...');

try {
  // Run tests or build check first
  console.info('📦 Running Vite build verification...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.info('✅ Build check passed! Ready for Vercel deployment.');
  console.info('💡 Tip: Push to your main branch or run `vercel --prod` to deploy live to www.gctravelandtour.com');
} catch (error) {
  console.error('❌ Deployment helper caught a build failure:', error.message);
  process.exit(1);
}