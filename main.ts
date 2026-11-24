import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Slushford: snow flurries till eight, then blue sky — the 7:40 bus is warm, the seats are dry, and Monday has cancelled itself.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars} chars to /output/entry.txt`);
