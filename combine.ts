import { readdir } from "fs/promises";
import { join, resolve } from "path";

const readMarkdownFiles = async (dir: string) => {
  let files = await readdir(dir, { withFileTypes: true });
  let markdownFiles: string[] = [];

  for (let file of files) {
    let fullPath = join(dir, file.name);
    if (file.isDirectory()) {
      markdownFiles = markdownFiles.concat(await readMarkdownFiles(fullPath));
    } else if (file.isFile() && file.name.endsWith(".md")) {
      markdownFiles.push(fullPath);
    }
  }

  return markdownFiles;
};

const combineMarkdownFiles = async () => {
  const directory = ".";
  const outputFile = "OUT.md";
  let combinedContent = "";

  const markdownFiles = await readMarkdownFiles(directory);

  for (const filePath of markdownFiles) {
    const fileRef = Bun.file(filePath);
    const content = await fileRef.text();
    combinedContent += `# File: ${resolve(filePath)}\n\n${content}\n\n`;
  }

  await Bun.write(outputFile, combinedContent);
  console.log(`Combined Markdown files into ${outputFile}`);
};

combineMarkdownFiles();
