// Alien Field Notes: The Two Day Earth Review.
// A one-line review of planet Earth, left by an alien tourist
// after a two-day visit: the locals carry their pets' mess home
// in little bags, like treasure — and the tourist gags. Rating sits
// early ("five stars") so the punch ("I gagged") lands as the final
// clause. v2 line, 87 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Visited Earth: five stars. Locals carry pet mess home in bags, like treasure. I gagged.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

writeEntry();
