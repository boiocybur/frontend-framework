## Kom i gang

### 1. Installer dependencies

Før du starter, skal du installere projektets dependencies med:

```bash
npm i
```

**Hvorfor?** `npm i` (forkortelse for `npm install`) læser `package.json`-filen og installerer alle de nødvendige pakker, som projektet afhænger af. Dette inkluderer Next.js, React og andre værktøjer. Du skal kun køre denne kommando én gang, når du kloner projektet.

### 2. Start udviklings-serveren

Kør derefter udviklings-serveren:

```bash
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000) i din browser for at se resultatet.

Du kan begynde at redigere listview ved at ændre i `app/page.js`. og detailview ved at ændre i `app/(routes)/detailview/page.js`. Siden opdateres automatisk, når du gemmer filen.

Projektet bruger [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) til automatisk at optimere og indlæse [Geist](https://vercel.com/font), en ny skrifttype fra Vercel.

## Lær mere

For at lære mere om Next.js, se følgende ressourcer:

- [Next.js Dokumentation](https://nextjs.org/docs) - læs om Next.js funktioner og API.
- [Next.js Link Component ](https://nextjs.org/docs) - læs om Next.js Link component.
- [Next.js Image Component ](https://nextjs.org/docs/app/getting-started/images#local-images) - læs om Next.js Image component.
- [Next.js Route groups ](https://nextjs.org/docs/app/api-reference/file-conventions/route-groups) - læs om Route groups.

## Ugeplan

Ugeplanen er et forslag til proces, ikke en kravspecifikation. De må gerne arbejde anderledes, så længe de når de specifikke mål og kan begrunde deres valg.

| Dag     | Fokus                               | Forslag til arbejde                                                                                                         |
| ------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Mandag  | Forstå opgaven og planlæg løsningen | Klargør projektet, opret API-adgang, læs Thinking in React – Step 1, analysér Figma og lav et forslag til komponenthierarki |
| Tirsdag | Fra analyse til komponenter         | Læs Thinking in React – Step 2: Build a static version in React. Opret projektets komponentstruktur og begynd at implementere genanvendelige UI-komponenter med Tailwind                     |
| Onsdag  | Opbyg ListView                      | Sammensæt komponenterne til List View og arbejd videre med layout, props og statiske billeder                               |
| Torsdag | Opbyg DetailView                    | Byg Detail View, genbrug relevante komponenter og tilpas løsningen til Figma                                                |
| Fredag  | Forbedring og kvalitetssikring      | Sammenlign med Figma, justér styling, refaktorér komponentstrukturen og gennemgå den samlede løsning                        |
