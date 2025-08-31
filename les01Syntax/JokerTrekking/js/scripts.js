const AANTAL_SPELERS = 10000;

const MIN = 1000;
const MAX = 9999;

const EEN_JUIST = 2.5;
const TWEE_JUIST = 10;
const DRIE_JUIST = 100;
const ALLES_JUIST = 500;
const PRIJZEN = [0, EEN_JUIST, TWEE_JUIST, DRIE_JUIST, ALLES_JUIST];

let resultaten = [0, 0, 0, 0, 0];
let totaleWinst = 0;

function trekgetal() {
   return Math.floor(Math.random() * MAX - MIN + 1) + MIN;
}

function aantalJuiste(gok, trekking) {
   let juiste = 0;
   if (gok % 10 === trekking % 10) juiste = 1;
   if (gok % 100 === trekking % 100) juiste = 2;
   if (gok % 1000 === trekking % 1000) juiste = 3;
   if (gok === trekking) juiste = 4;

   return juiste
}

let randomGetal = trekgetal();

for (let i = 0; i < AANTAL_SPELERS; i++) {
   let gok = trekgetal();
   let juiste = aantalJuiste(gok, randomGetal);

   resultaten[juiste]++;
   totaleWinst += PRIJZEN[juiste];
}

const GEMIDDELDE = totaleWinst / AANTAL_SPELERS;

console.log(`// trekking:`);
console.log(`getrokken getal: ${randomGetal}\n`);

console.log(`// gokken`);
console.log(`aantal iteraties: ${AANTAL_SPELERS}\n`);

console.log(`// resultaten`)
console.log(`0 juist: ${resultaten[0]}`);
console.log(`1 juist: ${resultaten[1]}`);
console.log(`2 juist: ${resultaten[2]}`);
console.log(`3 juist: ${resultaten[3]}`);
console.log(`4 juist: ${resultaten[4]}\n`);

console.log(`gemiddelde winst: €${GEMIDDELDE.toFixed(3)}`);
