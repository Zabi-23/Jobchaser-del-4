# Veckans uppgift 
#Jobchaser-del-4
## Vad är Redux Toolkit? 
Redux Toolkit är ett verktyg som förenklar användningen av Redux, 
vilket är ett bibliotek för att hantera tillstånd i JavaScript-applikationer.
Det minskar mängden kod du behöver skriva och ger färdiga inställningar och 
funktioner för att snabbt komma igång med att hantera tillstånd.


## När, i vilka situationer vill man använda Redux Toolkit?
Man vill använda Redux Toolkit när man bygger en JavaScript-applikation,
som till exempel med React, och behöver en enklare och mer strukturerad metod
för att hantera komplexa tillstånd och asynkrona operationer.


## Beskriv typiska områden hur man använder Typescript i React? (ex props, event, useReducer, etc)
I React används TypeScript typiskt för att:

- Props: Typa komponentens in- och utdata.
- State: Definiera typer för tillstånd i funktionella och klassbaserade komponenter.
- Events: Typa eventobjekt, som `onClick` och `onChange`.
- Hooks: Använda generiska typer med `useState`, `useEffect`, `useReducer`, etc.
- Context: Typa värden i React Context API.
- Refs: Typa referenser med `useRef`.






# Om Projektet

JobChaser är en React TypeScript-baserad applikation designad för att hjälpa användare att hitta jobb inom IT-branschen. Applikationen har en ren och användarvänlig design, som inkluderar en hero-sektion med dynamiska bilder, en sökfunktion för att filtrera jobb, detaljerade jobbannonser och en informativ footer med olika resurser och kontaktinformation. Här är en översikt över projektets huvudfunktioner och komponenter:

## Funktioner

1. **Hero-sektion**:
   - Visar dynamiska bakgrundsbilder som byts ut var 30:e sekund.
   - Innehåller en sökfunktion som låter användare söka efter jobbannonser.

2. **Jobbannonser**:
   - Listar olika IT-jobb.
   - Möjlighet att se detaljerade jobbannonser.
   - Sökfunktionen filtrerar jobbannonser baserat på användarens sökord.

3. **Användarautentisering**:
   - Registreringssida för nya användare.
   - Inloggningssida för befintliga användare.

4. **Footer**:
   - Innehåller information på olika språk.
   - Tillgänglighetsinformation.
   - Kontaktinformation inklusive e-post och telefon.
   - Länkar till sociala medier som Facebook, LinkedIn, YouTube och Instagram.

## Komponenter

- **App**:
  - Huvudkomponenten som hanterar routing och rendering av andra komponenter som `Header`, `Hero`, `JobItem`, `SignInPage`, `Register`, och `Footer`.

- **Header**:
  - Innehåller en sökfält för att filtrera jobbannonser.

- **Hero**:
  - Visar dynamiska bakgrundsbilder och innehåller animeringseffekter.

- **JobItem**:
  - Visar en lista med jobbannonser och filtrerar dessa baserat på sökord.

- **SignInPage**:
  - Sidan för användarinloggning.
  - Inkluderar en länk för att navigera till registreringssidan.

- **Register**:
  - Sidan för ny användarregistrering.

- **Footer**:
  - Innehåller diverse informationssektioner och länkar till sociala medier.

## Teknologier

- **React**: Används för att bygga användargränssnittet.
- **TypeScript**: Används för att lägga till statisk typkontroll.
- **Redux**: Används för att hantera applikationens tillstånd.
- **React Router**: Används för routing i applikationen.
- **CSS**: Används för styling av komponenter.

## Installation och körning

För att installera och köra projektet lokalt, följ dessa steg:

1. Klona detta repository.
2. Navigera till projektets rotkatalog och kör `npm install` för att installera alla beroenden.
3. Kör `npm start` för att starta utvecklingsservern.
4. Öppna din webbläsare och navigera till `http://localhost:3000` för att se applikationen.

## Kontakt

För frågor eller support, kontakta oss via e-post eller telefon. Följ oss på sociala medier för att hålla dig uppdaterad med de senaste nyheterna och uppdateringarna.

- **E-post**: info@jobchaser.com
- **Telefon**: +46 123 456 789
- **Facebook**: [JobChaser på Facebook](#)
- **LinkedIn**: [JobChaser på LinkedIn](#)
- **YouTube**: [JobChaser på YouTube](#)
- **Instagram**: [JobChaser på Instagram](#)


