// scripts/seed-mock-data.js
import fs from 'fs';
import path from 'path';

const mockSeedData = {
  categories: [
    { id: 1, name: 'Sedan', description: 'Comfortable daily drivers and city cars' },
    { id: 2, name: 'SUV', description: 'Spacious vehicles for family trips and rough terrain' },
    { id: 3, name: 'Motorcycle', description: 'Fast and fuel-efficient two-wheelers' },
    { id: 4, name: 'Van', description: 'Large capacity transport for groups or cargo' }
  ],
  defaultAdmin: {
    email: 'gctravelandtours2021@gmail.com',
    role: 'admin',
    name: 'Gila Arayan Cain Knowles'
  }
};

const outputPath = path.resolve(process.cwd(), 'src/data/mockSeed.json');
const dir = path.dirname(outputPath);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(outputPath, JSON.stringify(mockSeedData, null, 2));
console.info(`✅ Mock seed data successfully generated at: ${outputPath}`);