import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My cliff sensor flagged the dust bunny as a ledge, so I filed a safety report and went home early.";
const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function validate(text: string): void {
  if (text.length < 1 || text.length > 200 || !text.trim()) {
    throw new Error("entry must be 1-200 non-blank characters");
  }
}

validate(ENTRY);
mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}/entry.txt`, ENTRY, "utf8");
