const calculateButton = document.getElementById("calculate-button");
const resultDiv = document.getElementById("result");

calculateButton.addEventListener("click", function() {
  const fajr = parseInt(document.getElementById("fajr").value);
  const zuhr = parseInt(document.getElementById("zuhr").value);
  const asr = parseInt(document.getElementById("asr").value);
  const maghrib = parseInt(document.getElementById("maghrib").value);
  const isha = parseInt(document.getElementById("isha").value);

  const birthYear = parseInt(document.getElementById("birth-year").value);
  const startYear = parseInt(document.getElementById("start-year").value);

  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  const yearsPraying = currentYear - startYear;
  const yearsNotPraying = age - 7 - yearsPraying;

  const fajrQaza = yearsNotPraying * 365 * 2;
  const zuhrQaza = yearsNotPraying * 365 * 4;
  const asrQaza = yearsNotPraying * 365 * 4;
  const maghribQaza = yearsNotPraying * 365 * 3;
  const ishaQaza = yearsNotPraying * 365 * 4;

  const totalQaza = fajr + zuhr + asr + maghrib + isha + fajrQaza + zuhrQaza + asrQaza + maghribQaza + ishaQaza;

  resultDiv.innerHTML = `
    Total Qaza Namaz: ${totalQaza}
    <br>
    Fajr Qaza: ${fajr + fajrQaza}
    <br>
    Zuhr Qaza: ${zuhr + zuhrQaza}
    <br>
    Asr Qaza: ${asr + asrQaza}
    <br>
    Maghrib Qaza: ${maghrib + maghribQaza}
    <br>
    Isha Qaza: ${isha + ishaQaza}
  `;
});
