import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const requiredDirectories = [
  'apps/web',
  'apps/mobile-app',
  'services/chat-service',
  'services/video-ingestion',
  'docs',
  'infrastructure/terraform',
  'packages/contracts'
];

const packageJsonFiles = [
  'package.json',
  'apps/web/package.json',
  'apps/mobile-app/package.json',
  'services/chat-service/package.json',
  'packages/contracts/package.json'
];

function log(message) {
  process.stdout.write(`${message}\n`);
}

async function ensureDirectoryExists(relativePath) {
  const fullPath = path.join(repoRoot, relativePath);
  try {
    const stat = await fs.stat(fullPath);
    if (!stat.isDirectory()) {
      throw new Error(`${relativePath} exists but is not a directory`);
    }
    log(`✓ Directory confirmed: ${relativePath}`);
  } catch (error) {
    throw new Error(`Missing required directory: ${relativePath} (${error.message})`);
  }
}

async function ensurePackageJsonValid(relativePath) {
  const fullPath = path.join(repoRoot, relativePath);
  try {
    const raw = await fs.readFile(fullPath, 'utf8');
    const parsed = JSON.parse(raw);
    if (typeof parsed.name !== 'string' || !parsed.name.trim()) {
      throw new Error('package.json missing valid "name" field');
    }
    log(`✓ package.json validated: ${relativePath}`);
  } catch (error) {
    throw new Error(`Invalid package.json at ${relativePath}: ${error.message}`);
  }
}

async function main() {
  log('Starting repository structure verification...');

  await Promise.all(requiredDirectories.map(ensureDirectoryExists));
  for (const pkg of packageJsonFiles) {
    await ensurePackageJsonValid(pkg);
  }

  log('All checks completed successfully.');
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
