
function printTicketPrice(visitorAge, isStudent) {

if (visitorAge  <= 6) {
  console.log("Biļetes ir bezmasas!")
}
else {
    console.log("Biļetes cena ir 10 EUR!")
}
 if (isStudent = true) {
    console.log("Biļetes cena ir 5 EUR!")
 }
else {
  console.log("Biļetes cena ir 10 EUR!")
}
    }

console.log(printTicketPrice(35, true))

console.log(printTicketPrice(12, false))

