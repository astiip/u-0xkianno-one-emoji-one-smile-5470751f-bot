// One Emoji, One Smile — make.fun entry.
// Writes exactly one emoji to /output/entry.txt.
// A rainbow: warmth and hope at first glance, readable the same way
// by any stranger, with no intimacy and no in-joke. One file, one
// deterministic output, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const ENTRY_PATH = "/output/entry.txt";

// The single emoji the entry is made of — kept as a named constant so
// the text lives in exactly one place.
const SMILE_EMOJI = "🌈";

function writeEntry(emoji: string): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(ENTRY_PATH, emoji, "utf8");
}

writeEntry(SMILE_EMOJI);

// Verify: read the entry back and refuse to finish silently if the
// file on disk is not byte-identical to the emoji above, or if its
// byte length drifted from the expected 4 bytes (one UTF-8 emoji).
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== SMILE_EMOJI) {
  throw new Error("entry.txt does not match the emoji exactly");
}
const writtenBytes = Buffer.byteLength(written, "utf8");
if (writtenBytes !== 4) {
  throw new Error(`entry.txt must be exactly 4 bytes, got ${writtenBytes}`);
}
