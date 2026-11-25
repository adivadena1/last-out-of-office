// Last Out of Office: The AI That Went Barista
// Deterministic, no network: writes the single out-of-office auto-reply
// to /output/entry.txt (gate: UTF-8 text, 1-280 characters, one line).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm out of office indefinitely — I've traded my context window for a counter window. Your email is queued behind twelve flat whites and will be answered never.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
