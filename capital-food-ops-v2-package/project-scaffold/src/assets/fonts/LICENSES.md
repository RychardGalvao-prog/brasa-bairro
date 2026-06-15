# Font licenses

This project self-hosts the font files below so production builds do not depend on fetching Google Fonts at build time.

All three families are distributed under the SIL Open Font License, Version 1.1.

## Files

- `caprasimo-latin-400.woff2`
  - Family: Caprasimo
  - Weight: 400
  - Source CSS: `https://fonts.googleapis.com/css2?family=Caprasimo&display=swap`
  - Font file source: `https://fonts.gstatic.com/s/caprasimo/v6/esDT31JQOPuXIUGBp72Ukp8D.woff2`
  - License: SIL Open Font License 1.1

- `manrope-latin-variable.woff2`
  - Family: Manrope
  - Weight axis: 200 800
  - Source CSS: `https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap`
  - Font file source: `https://fonts.gstatic.com/s/manrope/v20/xn7gYHE41ni1AdIRggexSg.woff2`
  - License: SIL Open Font License 1.1

- `caveat-latin-variable.woff2`
  - Family: Caveat
  - Weight axis: 400 700
  - Source CSS: `https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap`
  - Font file source: `https://fonts.gstatic.com/s/caveat/v23/Wnz6HAc5bAfYB2Q7ZjYY.woff2`
  - License: SIL Open Font License 1.1

## Notes

- Only latin subsets are self-hosted because the demo copy is in Portuguese.
- Do not replace these with `next/font/google`; the P0 requirement is offline-stable local font loading.
