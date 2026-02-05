function calculerAR() {
  oralear = Number(document.getElementById("OraleA").value);
  controlear = Number(document.getElementById("controleA").value);
  synthésear = Number(document.getElementById("SynthéseA").value);
  resar = ((oralear + controlear) / 2 + synthésear * 2) / 3;
  document.getElementById("Resultat A").value = resar;
}
function calculerFR() {
  oralefr = Number(document.getElementById("Oralef").value);
  controlefr = Number(document.getElementById("controlef").value);
  synthésefr = Number(document.getElementById("Synthésef").value);
  resfr = ((oralefr + controlefr) / 2 + synthésefr * 2) / 3;
  document.getElementById("Resultat f").value = resfr;
}
function calculerEG() {
  oraleeg = Number(document.getElementById("Oralee").value);
  controleeg = Number(document.getElementById("controlee").value);
  synthéseeg = Number(document.getElementById("Synthésee").value);
  reseg = ((oraleeg + controleeg) / 2 + synthéseeg * 2) / 3;
  document.getElementById("Resultat e").value = reseg;
}
function calculerM() {
  controleM = Number(document.getElementById("controlem").value);
  synthéseM = Number(document.getElementById("Synthésem").value);
  resM = (controleM + synthéseM * 3) / 4;
  document.getElementById("Resultat m").value = resM;
}
function calculerphy() {
  tp = Number(document.getElementById("tp").value);
  controlephy = Number(document.getElementById("controlephy").value);
  synthésephy = Number(document.getElementById("Synthéseephy").value);
  resphy = ((tp + controlephy) / 2 + synthésephy * 3) / 4;
  document.getElementById("Resultat phy").value = resphy;
}
function calculerphyl() {
  synthésephyl = Number(document.getElementById("Synthéseephyl").value);
  document.getElementById("Resultat phyl").value = synthésephyl;
}
function calculerhis() {
  oralehis = Number(document.getElementById("Oraleh").value);
  controlehis = Number(document.getElementById("controleh").value);
  synthésehis = Number(document.getElementById("Synthéseh").value);
  reshis = ((oralehis + controlehis) / 2 + synthésehis * 1) / 2;
  document.getElementById("Resultat h").value = reshis;
}
function calculerjogh() {
  oralejogh = Number(document.getElementById("Oralejogh").value);
  controlejogh = Number(document.getElementById("controlejogh").value);
  synthésejogh = Number(document.getElementById("Synthésejogh").value);
  resjogh = ((oralejogh + controlejogh) / 2 + synthésejogh * 1) / 2;
  document.getElementById("Resultat jogh").value = resjogh;
}
function calculerprog() {
  tp = Number(document.getElementById("tpprog").value);
  controleprog = Number(document.getElementById("controleprog").value);
  synthéseprog = Number(document.getElementById("Synthéseprog").value);
  resprog = ((tp + controleprog) / 2 + synthéseprog * 3) / 4;
  document.getElementById("Resultat prog").value = resprog;
}
function calculersti() {
  tp = Number(document.getElementById("tpsti").value);
  controlesti = Number(document.getElementById("controlesti").value);
  synthésesti = Number(document.getElementById("Synthésesti").value);
  ressti = ((tp + controlesti) / 2 + synthésesti * 3) / 4;
  document.getElementById("Resultat s").value = ressti;
}
function calculerport() {
  controlesport = Number(document.getElementById("controlesp").value);
  synthésesport = Number(document.getElementById("Synthésesp").value);
  document.getElementById("Resultat spo1").value = controlesport;
  document.getElementById("Resultat spo2").value = synthésesport;
}
function calculeroption() {
  oraleoption = Number(document.getElementById("Oraleop").value);
  controleoption = Number(document.getElementById("controleop").value);
  synthéseoption = Number(document.getElementById("Synthéseop").value);
  resoption = ((oraleoption + controleoption) / 2 + synthéseoption * 1) / 2;
  document.getElementById("Resultat op").value = resoption;
}
function calculerMOYtr1(
  resar,
  resfr,
  reseg,
  resM,
  resphy,
  synthésephyl,
  reshis,
  resjogh,
  resprog,
  ressti,
  controlesport,
  synthésesport,
  resoption
) {
  moy1 =
    (resar * 2 +
      resfr * 2 +
      reseg * 2 +
      resM * 3 +
      resphy * 3 +
      synthésephyl * 1 +
      reshis * 1 +
      resjogh * 1 +
      resprog * 3 +
      ressti * 3 +
      controlesport * 1 +
      synthésesport * 1 +
      resoption * 1) /
    27;
  document.getElementById("tr1").value = moy1+0.79;
}
