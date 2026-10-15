# FamilyFriends – statisk Next.js-opgave

Projektet indeholder to sider: `/` (liste) og `/detailview?id=1` (detaljer).
Hundene og deres oplysninger er gemt i `src/app/data/dogs.js`. **Der er ingen TheDogAPI-forespørgsler og ingen API-nøgle er nødvendig.**

## Start

```bash
npm install
npm run dev
```

Åbn http://localhost:3000.

## Byg statisk

```bash
npm run build
```

Siderne bruger statiske data. Detaljesiden vælger hund i browseren via `?id=`, så den kan præ-renderes. Hundebillederne har stadig faste **eksterne** CDN-adresser; det kræver internet at hente dem. Eksportér og gem billeder lokalt i `public/dogs/`, og ret stierne i datafilen, hvis projektet også skal virke helt offline.

Opgavens komponenter ligger i `src/app/components/`; globale Tailwind-farver og `.breed-card` findes i `src/app/globals.css`.
