import fs from "fs";
import path from "path";
export function getCategories() {
  const filePath = path.join(process.cwd(), "categories.json");
  const fileContent =fs.readFileSync(filePath,'utf8');
  const categories=JSON.parse(fileContent)
  return categories;
}
