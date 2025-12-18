import { promises as fs } from 'fs';
import path from 'path';

interface LegalDocumentProps {
  title: string;
  fileName: string;
}

export default async function LegalDocument({ title, fileName }: LegalDocumentProps) {
  let content = '';
  
  try {
    const filePath = path.join(process.cwd(), 'content', 'legal', fileName);
    content = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading legal document ${fileName}:`, error);
    content = '<p>Inhalt konnte nicht geladen werden.</p>';
  }

  return (
    <div className="bg-white dark:bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl mb-12">
            {title}
          </h1>
          <div 
            className="prose prose-zinc dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        </div>
      </div>
    </div>
  );
}
