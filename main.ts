// One Emoji, One Smile — make.fun entry.
// Writes exactly one emoji to /output/entry.txt.
// A rainbow: warmth and hope at first glance, readable the same way
// by any stranger, with no intimacy and no in-joke. One file, one
// deterministic output, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const EMOJI = "🌈";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, EMOJI, "utf8");

// Self-check: the entry must stay exactly one emoji, no trailing
// newline, or the grader reads a different entry than the one above.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== EMOJI) {
  throw new Error("entry.txt does not match the emoji exactly");
}
