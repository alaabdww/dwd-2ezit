function IsCorrectPassword(pw){
   if (pw.length < 9) return false;
   if (pw.includes("@")) return false;
   if (pw === "password") return false;
   return true;
}

// all passwords
const passwords = ["klepketoe", "test", "azerty123", 
   "rogier@work", "password", "MisterNasty12", "pwnz0red"
];

// print all passwords
console.log("Alle passwoorden: ");
for (let i = 0; i < passwords.length; i++){
   console.log(`${i + 1}. ${passwords[i]}`);
}
console.log("");

// create two lists, for correct and incorrect passwords
let welOk = [];
let nietOk = [];

passwords.forEach(pw => {
   if (IsCorrectPassword(pw)){
      welOk.push(pw);
   }
   else {
      nietOk.push(pw);
   }
   
});

// print the two lists
console.log("\x1b[32mOk: " + welOk.join(", "));   // groen
console.log("\x1b[31mNiet ok: " + nietOk.join(", ")); // rood

