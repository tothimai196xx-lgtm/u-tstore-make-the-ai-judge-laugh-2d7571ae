// Make the AI Judge Laugh — u-tstore-make-the-ai-judge-laugh-2d7571ae
// Writes exactly one funny line (<= 200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My fitness tracker congratulated me on 10,000 steps — every one paced around the kitchen at 2 a.m., hunting snacks I hid from myself and forgot, so I outsmarted myself twice and still got a medal.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
console.log(`wrote ${[...line].length} chars to ${outDir}/entry.txt`);
