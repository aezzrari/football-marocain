const cupFinalScorersByFinalYear = {
  1957: ["Brizate 42", "Mayt 60 pen"],
  1958: ["Jebbari 13", "Chellal 84", "El Khalfi 7"],
  1959: ["Zemmouri 18"],
  1960: ["Madani 13 pen"],
  1961: ["Abdeslam 65"],
  1962: ["Kaddour 36"],
  1963: ["Moulay Lahcen 40", "Krimou 97", "Krimou 119", "Chicha 10", "Hama 17"],
  1964: ["Krimou 35", "Lahcen 54 og", "Khaldi 87", "Bouzidi 56", "El Khalfi 66"],
  1965: ["Lachheb 46", "Chicha 87", "Khaldi 89", "Bhaija"],
  1966: ["Bouazza 10", "Hamidouch 62"],
  1967: ["Fettah 24", "Laaroussi 84", "Belfoul 60"],
  1968: ["Kala 116"],
  1969: ["Driss 49", "Maati 96", "Kala 32"],
  1970: ["Zahid 18"],
  1971: ["Bamous 118", "Larbi Mouissa 120"],
  1973: ["Blinda 39", "Blinda 61", "Sghir 72", "Bouzbouz 50", "My Haddou 89"],
  1974: ["Larabi 35"],
  1975: ["Faras 75", "Chane 78"],
  1976: ["Khaled Labied 75"],
  1977: ["Beggar 118"],
  1978: ["Abdelkhalek 12", "Abdelkhalek 50", "Abdelkhalek 55"],
  1979: ["Lachheb 47", "Abdelkhalek 76", "Faras 77"],
  1980: ["Hamid Khourrag 36"],
  1981: ["Brija 82", "Bouderbala 85", "Abbadi 14"],
  1982: ["Beggar 61"],
  1983: ["Fathi 80", "Lahcen 61"],
  1984: ["Chicha 66"],
  1985: ["Khairi 34", "Laghrissi 37", "Haidamou 80"],
  1986: ["Khairi 15", "Haidamou 37", "Haidamou 72", "Baba 63"],
  1987: ["Kiddi 3", "Kiddi 43", "Berk 16", "N.N."],
  1989: ["Moussa Ndaw 4", "Benabicha 82"],
  1991: ["Bahja 4", "Hamiddouch 74", "Laalam 87"],
  1992: ["Maybein 75"],
  1993: ["Ghazouani 74"],
  1994: ["Mastouri 52"],
  1995: ["Vassily 67", "Hammou 81"],
  1996: ["Jrindou 119"],
  1997: ["Rachid Daoudi 105"],
  1998: ["Boujemaa 26", "Allali 62", "Ouchella 41 pen"],
  1999: ["Mohamed Armoumen 109"],
  2000: ["Hicham Jouia 16", "Yahou 66"],
  2001: ["Mohamed Ansri 114"],
  2002: ["Moussa Soumleimane 7", "Bidoudane 52"],
  2003: ["Hafid Abdessadek 7"],
  2006: ["Mohamed Morsadi 15"],
  2007: ["El Alaoui Mostafa 74", "Chihab Atik 27 og"],
  2008: ["Jawad Ouaddouch 93"],
  2009: ["Jawad Ouaddouch 88", "Daniel Monchare 55"],
  2010: ["Alhassane Issoufou Dante 35", "Hicham El Fatihi 50", "Idriss Belamri 58"],
  2011: ["Luiz Jeferson Escher 74"],
  2014: ["Mohamed Nahiri 43", "Mourad Batna 49"],
  2016: ["Franck Guiza 3", "Franck Guiza 99", "Mehdi Namli 67 pen"],
  2017: ["Hamza Iajour 28", "Hamid Ahaddad 59 pen"],
  2018: ["Mohammed Farehane 57", "Al Najy Laarbi 90", "Mamadou Diouf 60", "Omar Jerrari 77"],
  2019: ["Osama Meleoi 17", "Osama Meleoi 75 pen", "Malick Cisse 14"],
  2020: ["Monteiro Borges 55", "Adam Ennafati 65", "Abdelilah Amimi 90"]
};

function seasonLabelForCupFinalYear(year) {
  const finalYear = Number(year);
  return `${finalYear - 1}/${String(finalYear).slice(-2).padStart(2, "0")}`;
}

Object.entries(cupFinalScorersByFinalYear).forEach(([year, scorers]) => {
  const season = seasons.find((item) => item.label === seasonLabelForCupFinalYear(year));
  const final = season?.cup?.final;
  if (!final || (Array.isArray(final.scorers) && final.scorers.length)) return;
  final.scorers = scorers;
});
