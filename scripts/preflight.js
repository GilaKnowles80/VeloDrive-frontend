// scripts/preflight.js
import fs from 'fs';
import path from 'path';

console.info('Running VeloDrive frontend pre-flight checks...');

// Check for required environment variables (e.g., API URL)
const requiredEnv = ['VITE_API_URL'];
const missingEnv = requiredEnv.filter((env) => !process.env[env]);

if (missingEnv.length > 0) {
  console.error(`❌ Pre-flight failed: Missing required environment variables: ${missingEnv.join(', ')}`);
  process.exit(1);
}

// Ensure build/asset directories exist
const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  console.info('📁 Creating missing public asset directory...');
  fs.mkdirSync(publicDir, { recursive: true });
}

console.info('✅ Pre-flight checks passed successfully!');