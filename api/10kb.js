import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  const html = readFileSync(join(process.cwd(), 'public', '10kb.html'), 'utf8');
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
