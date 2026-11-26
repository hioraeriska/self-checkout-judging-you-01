// The Self-Checkout Is Judging You — make.fun entry.
// A single funny remark in the voice of a smug self-checkout machine.
// The program writes exactly one line to /output/entry.txt (gate: 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

// The line: the till catches the shopper weighing bananas as "organic",
// then lands the petty sting — the machine sees everything.
const LINE =
  "You weighed your bananas as 'organic' \u2014 nice try, I've seen your bank balance.";

// Gate guard: the entry must be 1-200 characters of non-whitespace text.
// Refuse to write anything invalid instead of shipping a doomed artifact.
const trimmed = LINE.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`entry line must be 1-200 chars, got ${trimmed.length}`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, trimmed, "utf8");
