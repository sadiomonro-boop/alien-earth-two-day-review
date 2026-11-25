// Alien Field Notes: The Two Day Earth Review.
// A one-line review of planet Earth, left by an alien tourist
// after a two-day visit. The program writes exactly this line,
// nothing else, to /output/entry.txt — same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Earth: the locals point glowing rectangles at their own faces and call it memories. Four stars.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

writeEntry();
