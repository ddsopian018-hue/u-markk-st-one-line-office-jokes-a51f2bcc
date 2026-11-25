// One-Line Office Jokes — make.fun entry.
//
// Writes exactly one single-line joke about office life to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output). Pure Node.js stdlib,
// no dependencies, no network, no randomness: the same line every run.
//
// The joke turns on a real office detail (the printer that jams and
// throws a paper-tray error) and lands its laugh in the last few words:
// the escalation ends on "a reason to work from home", the final beat.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked the office printer for one page and got a jam, a paper tray error, and a reason to work from home.";

function writeEntry(outDir: string): void {
  // Gate: exactly one line, 1-199 characters, not only whitespace.
  if (LINE.length < 1 || LINE.length > 199) {
    throw new Error(`joke must be 1-199 characters, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("joke must be a single non-blank line");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

writeEntry(process.env.MAKEFUN_OUTPUT_DIR || "/output");
