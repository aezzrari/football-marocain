const state = {
  season: seasons.find((s) => s.id === "2021-22") || seasons[0],
  activeTab: "championship",
  query: ""
};

const els = {
  seasonSelect: document.querySelector("#seasonSelect"),
  seasonTitle: document.querySelector("#seasonTitle"),
  seasonCompetitions: document.querySelector("#seasonCompetitions"),
  seasonStats: document.querySelector("#seasonStats"),
  rankingBody: document.querySelector("#rankingBody"),
  championshipNotes: document.querySelector("#championshipNotes"),
  clubSearch: document.querySelector("#clubSearch"),
  matchGrid: document.querySelector("#matchGrid"),
  clubLegend: document.querySelector("#clubLegend"),
  cupWinner: document.querySelector("#cupWinner"),
  cupRounds: document.querySelector("#cupRounds"),
  cupFinal: document.querySelector("#cupFinal"),
  teamStatsSelect: document.querySelector("#teamStatsSelect"),
  statsSeasonSelect: document.querySelector("#statsSeasonSelect"),
  competitionStatsSelect: document.querySelector("#competitionStatsSelect"),
  opponentStatsSelect: document.querySelector("#opponentStatsSelect"),
  placeStatsSelect: document.querySelector("#placeStatsSelect"),
  resetStatsFilters: document.querySelector("#resetStatsFilters"),
  statsCards: document.querySelector("#statsCards"),
  statsDataNote: document.querySelector("#statsDataNote"),
  filteredMatchesBody: document.querySelector("#filteredMatchesBody"),
  honoursBySeasonBody: document.querySelector("#honoursBySeasonBody"),
  leagueHonoursList: document.querySelector("#leagueHonoursList"),
  cupHonoursList: document.querySelector("#cupHonoursList"),
  nationalSquadSelect: document.querySelector("#nationalSquadSelect"),
  nationalYearSelect: document.querySelector("#nationalYearSelect"),
  nationalCompetitionSelect: document.querySelector("#nationalCompetitionSelect"),
  nationalOpponentSelect: document.querySelector("#nationalOpponentSelect"),
  nationalVenueSelect: document.querySelector("#nationalVenueSelect"),
  resetNationalFilters: document.querySelector("#resetNationalFilters"),
  nationalCards: document.querySelector("#nationalCards"),
  nationalScorersBody: document.querySelector("#nationalScorersBody"),
  nationalDetailedPlayersBody: document.querySelector("#nationalDetailedPlayersBody"),
  nationalMatchesBody: document.querySelector("#nationalMatchesBody"),
  nationalDetailDialog: document.querySelector("#nationalDetailDialog"),
  nationalDetailContent: document.querySelector("#nationalDetailContent"),
  closeNationalDetail: document.querySelector("#closeNationalDetail"),
  coachesBody: document.querySelector("#coachesBody")
};

function clubName(code) {
  return state.season.clubs.find((club) => club.code === code)?.name
    || seasons.flatMap((season) => season.clubs).find((club) => club.code === code)?.name
    || code;
}

function clubCity(code) {
  return state.season.clubs.find((club) => club.code === code)?.city || "";
}

function goalDifference(row) {
  return row.goalsFor - row.goalsAgainst;
}

function parseScore(score) {
  if (!score) return null;
  const match = score.match(/^(\d+)-(\d+)$/);
  if (!match) return null;
  return { home: Number(match[1]), away: Number(match[2]) };
}

function emptyRecord(code) {
  return {
    code,
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    home: { played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
    away: { played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
  };
}

function applyResult(record, side, goalsFor, goalsAgainst) {
  record.played += 1;
  record.goalsFor += goalsFor;
  record.goalsAgainst += goalsAgainst;
  record[side].played += 1;
  record[side].goalsFor += goalsFor;
  record[side].goalsAgainst += goalsAgainst;

  if (goalsFor > goalsAgainst) {
    record.won += 1;
    record[side].won += 1;
  } else if (goalsFor === goalsAgainst) {
    record.drawn += 1;
    record[side].drawn += 1;
  } else {
    record.lost += 1;
    record[side].lost += 1;
  }
}

function computeChampionshipStats(season = state.season) {
  const records = new Map(season.clubs.map((club) => [club.code, emptyRecord(club.code)]));
  const columns = normalizedGridColumns(season);

  season.resultGrid.rows.forEach((row) => {
    const homeCode = gridCodeForSeason(season, row.home);
    normalizedGridResults(season, row).forEach((result, index) => {
      const score = parseScore(result);
      const awayCode = columns[index];
      if (!score || homeCode === awayCode) return;

      if (!records.has(homeCode)) records.set(homeCode, emptyRecord(homeCode));
      if (!records.has(awayCode)) records.set(awayCode, emptyRecord(awayCode));

      applyResult(records.get(homeCode), "home", score.home, score.away);
      applyResult(records.get(awayCode), "away", score.away, score.home);
    });
  });

  return records;
}

function computeCupStats(season = state.season) {
  const stats = new Map();
  const ensure = (name) => {
    if (!stats.has(name)) {
      stats.set(name, { team: name, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 });
    }
    return stats.get(name);
  };
  const matches = [
    ...filteredCupRounds(season.cup).flatMap((round) => round.matches),
    season.cup.final
  ];

  matches.forEach((match) => {
    const score = parseScore(match.score);
    if (!score) return;
    const home = ensure(match.home);
    const away = ensure(match.away);

    home.played += 1;
    away.played += 1;
    home.goalsFor += score.home;
    home.goalsAgainst += score.away;
    away.goalsFor += score.away;
    away.goalsAgainst += score.home;

    if (score.home > score.away) {
      home.won += 1;
      away.lost += 1;
    } else if (score.home < score.away) {
      away.won += 1;
      home.lost += 1;
    } else {
      home.drawn += 1;
      away.drawn += 1;
    }
  });

  return stats;
}

function isMainCupRound(roundName) {
  const label = normalize(roundName);
  return [
    "1/16",
    "1/8",
    "1/4",
    "1/2",
    "seizieme",
    "seiziemes",
    "huitieme",
    "huitiemes",
    "quart",
    "quarts",
    "quarter",
    "semifinal",
    "semi final",
    "demi finale",
    "demi finales",
    "round of 32",
    "round of 16"
  ].some((pattern) => label.includes(pattern));
}

function filteredCupRounds(cup) {
  return (cup.rounds || []).filter((round) => isMainCupRound(round.name));
}

function computeHonours() {
  return seasons.reduce((acc, season) => {
    acc.champions[season.champion] = (acc.champions[season.champion] || 0) + 1;
    acc.cups[season.cup.winner] = (acc.cups[season.cup.winner] || 0) + 1;
    acc.reigning.push({ season: season.label, team: season.reigningChampion });
    return acc;
  }, { champions: {}, cups: {}, reigning: [] });
}

const canonicalClubAliases = [
  ["Forces Armees Royales", ["AS Forces Armees Royales", "AS Forces Armées Royales", "AS Forces Armée Royales", "Forces Armees Royales (Rabat)", "Forces Armées Royales (Rabat)", "Forces Armée Royales", "AS Forces Armees Royales (Rabat)", "AS Forces Armées Royales (Rabat)", "AS Forces Armée Royales", "AS Forces Armées Royales Rabat", "AS Forces Armée Royales Rabat", "FAR", "FAR Rabat", "AS FAR", "AS Far", "AS FAR Rabat", "AS Far Rabat", "FAR de Rabat", "FAR Forces Armees Royales", "FAR Forces Armées Royales", "FAR Forces Armée Royales", "AS FAR Forces Royales de Rabat", "Jaish Malaki", "Jaish Malaki (FAR)"]],
  ["Wydad Athletic Club", ["Wydad Athletic Club (Casablanca)", "Wydad AC", "Wydad AC Casablanca", "Wydad AC (Casablanca)", "Wydad Casablanca", "WAC Casablanca", "WA Casablanca", "WAS Casablanca", "WAC Casablance"]],
  ["Raja Club Athletic", ["Raja Club Athletic (Casablanca)", "Raja Casablanca"]],
  ["Mouloudia Club Oujda", ["MC Oujda", "MCO Oujda"]],
  ["Maghreb Association Sportive", ["Maghreb Association Sportive (Fes)", "Maghreb Association Sportive (Fès)", "MAS Fes", "MAS Fès"]],
  ["Kawkab Athletic Club de Marrakech", ["KAC Marrakech", "KAC Marrakesh", "KACM Marrakech", "KACM Marrakesh", "Kawkab Athletique Club de Marrakech", "Kawkab Athlétique Club de Marrakech"]],
  ["Kenitra Athletic Club", ["Kenitra AC", "Kénitra AC", "Kénitra Athletic Club", "Kenitra Athlétic Club", "Kénitra Athlétic Club"]],
  ["Fath Union Sport", ["Fath Union Sport (Rabat)", "FUS Rabat"]],
  ["Renaissance Sportive de Settat", ["RS Settat"]],
  ["Sporting Club Chabab de Mohammedia", ["Sporting Club Chabab de Mohammédia", "Sporting Club Chabab de Mohammadia", "Sporting Club Chabab de Mohammadie", "Sporting Club Chabab Mohammedia", "Sporting Club Chabab Mohammédia", "Sporting Club Chabab Mohammadia", "Sporting Club Chabab Mohammadie", "SCC", "SCCM", "SCC Mohammedia", "SCC Mohammédia", "SCC Mohammadia", "SCC Mohammadie", "SCCM Mohammedia", "SCCM Mohammédia", "SCCM Mohammadia", "SCCM Mohammadie", "SCCM de Mohammedia", "SCCM de Mohammédia", "SCCM de Mohammadia", "SCCM de Mohammadie"]],
  ["Association des Douanes Marocaines", ["Association des Douanes Marocaines (Casablanca)", "ADM Casablanca"]],
  ["Club Omnisport de Meknes", ["Club Omnisports de Meknes", "Club Omnisports de Meknès", "CO Meknes", "CO Meknès", "COD", "CODM", "COD Meknes", "COD Meknès", "CODM Meknes", "CODM Meknès"]],
  ["Association Sportive de Sale", ["Association Sportive de Salé", "AS Sale", "AS Salé"]],
  ["Sporting Athletic de Sale", ["Sporting Athletic de Salé", "Sporting Sale", "Sporting Salé", "SA Sale", "SA Salé", "SAS", "Sporting Salé (SAS)"]],
  ["Union Sidi Kacem", ["Sidi Kacem"]],
  ["Raja Beni Mellal", ["Raja Béni Mellal"]],
  ["Difaa Hassani Jadidi", ["DH Jadidi", "DHJ Jadidi"]],
  ["Hassania Union Sport Agadir", ["Hassania Union Sport d'Agadir", "HUS Agadir"]],
  ["Moghreb Athletic de Tetouan", ["Moghreb Athlétic de Tétouan", "Maghreb Athletic Tetouan", "MA Tetouan", "MA Tétouan"]],
  ["Etoile Jeunesse Sportive Casablanca", ["Étoile Jeunesse Sportive Casablanca", "EJS Casablanca"]],
  ["Union Sportive Mohammedia", ["Union Sportive Mohammédia", "Union Sportive de Mohammedia", "Union Sportive de Mohammédia", "USDM", "USMO", "US Mohammedia", "US Mohammédia"]],
  ["Renaissance Sportive Berkane", ["Renaissance Sportive de Berkane", "RS Berkane"]],
  ["Renaissance Sportive de Kenitra", ["Renaissance Sportive de Kénitra", "RS Kenitra", "RS Kénitra"]],
  ["Olympique Club de Khouribga", ["OC Khouribga", "OCK Khouribga", "OCK"]],
  ["Olympique Casablanca", ["CLAS Casablanca", "CLAS (Casablanca)", "CLAS", "Club Olympique de Casablanca", "Club Olympique de Casabalca", "Olympique de Casablanca"]],
  ["Forces Auxiliaires de Ben Slimane", ["FA Benslimane", "FA Ben Slimane", "ASFA", "Auxiliary Forces", "Auxiliary Forces (Casablanca)"]],
  ["Hilal Association de Nador", ["Hilal Nador"]],
  ["Amal Club de Belksiri", ["Belksiri"]],
  ["Chabab Sakia El Hamra", ["Chabab Sakia El Hamra (Laayoune)", "Laayoune"]],
  ["Olympique Casablanca", ["Club Olympique de Casablanca", "Club Olympique de Casabalca", "Olympique de Casablanca", "CLAS Casablanca", "CLAS (Casablanca)", "CLAS"]],
  ["Wydad Athletic de Fes", ["Wydad Athletic de Fès", "Wydad de Fes", "Wydad de Fès", "Wydad Fes", "Wydad Fès", "WA Fes", "WA Fès", "WAF", "WAF Fes", "WAF Fès", "WAF Widad de Fes", "WAF Widad de Fès", "Wafaa Riadi Fassi"]],
  ["Jeunesse Sportive Massira", ["JS Massira"]],
  ["Tihad Sportif Casablanca", ["IS Casablanca", "ISC", "IS Casablanca (Régie des Tabacs)", "IS Casablanca (Regie des Tabacs)"]],
  ["Credit Agricole Rabat", ["Crédit Agricole Rabat"]],
  ["Olympique Safi", ["OC Safi", "O Safi", "OCS"]],
  ["Ittihad Zemmouri de Khemisset", ["IZ Khemisset", "IZ Khémisset", "Khémisset", "Khemisset"]],
  ["Chabab Rif Al Hoceima", ["CR Al Hoceima", "CRA", "Chabab Rif Al-Hoceima"]],
  ["Chabab Atlas Khenifra", ["CA Khenifra", "CA Khénifra"]],
  ["Chabab Kasba Tadla", ["Chabab Kasbah Tadla", "Kasbah Tadla"]],
  ["Rapide Club Oued Zem", ["Rapide Oued Zem", "RCOZ"]],
  ["Renaissance Club Athletic Zemamra", ["RCA Zemamra", "RCAZ"]],
  ["Club Athletic Youssoufia Berrechid", ["CAY Berrechid", "CAYB"]],
  ["Jeunesse Sportive Soualem", ["JS Soualem", "JSS"]],
  ["Olympique Dcheira", ["OD", "Olympique Dcheira"]],
  ["Majd Casablanca", ["Majd Bidawi"]],
  ["Tihad Athletic Sport", ["Tihad Athlétique Sport", "Tihad Athletique Sport", "Tihad Athletic Sport (Casablanca)", "Tihad Athlétique Sport (Casablanca)", "TAS", "TAS Casablanca", "TAS de Casablanca", "TAS Tihad Casablanca", "TS Ittihad"]],
  ["Club Rachad Bernoussi", ["Rachad Bernoussi", "Rachad Bernossi", "Club Rachad Bernossi", "Rachad Bernoussi (Casablanca)", "Club Rachad Bernoussi (Casablanca)"]],
  ["Widad Temara", ["Wydad Temara", "Wydad Témara", "Widad Témara", "Widad S Temara", "Widad S Témara", "Wydad S Temara", "WS Temara", "WS Témara", "WS Widad Temara", "WS Widad Témara", "WST Temara", "WST Widad Temara"]],
  ["Union Sportive Temara", ["Union Sportive de Temara", "Union Sportive de Témara", "Union S Temara", "Union S Témara", "US Temara", "US Témara", "US Tihad Temara"]],
  ["Wydad Athletic Club", ["Wydad de Casablanca", "Wydad AC de Casablanca", "Wydad Athletic Club Casablanca"]],
  ["Raja Club Athletic", ["Raja de Casablanca", "RCA Casablanca"]],
  ["Mouloudia Club Oujda", ["Mouloudia Oujda", "Mouloudia Oujda (MCO)", "Mouloudia d'Oujda", "Mouloudia Club d'Oujda", "Mouloudia C Oujda"]],
  ["Maghreb Association Sportive", ["Maghreb Fes", "Maghreb Fès", "Maghreb de Fes", "Maghreb de Fès", "Maghreb AS de Fès"]],
  ["Kawkab Athletic Club de Marrakech", ["Kawkab AC Marrakech", "Kawkab AC de Marrakech", "Kawkab Marrakech", "Kawkab de Marrakech", "Kawkab Marrakesh"]],
  ["Kenitra Athletic Club", ["KAC Kenitra", "KAC Kénitra", "KAC de Kénitra", "Nadi Kénitra (KAC)"]],
  ["Fath Union Sport", ["Fath Rabat", "Fath de Rabat", "Fath US Rabat", "Fath US de Rabat"]],
  ["Renaissance Sportive de Settat", ["RSS Settat", "Renaissance Settat", "Renaissance Sportive Settat", "Nehdat Settat", "Nehdat Settat (RSS)"]],
  ["Sporting Club Chabab de Mohammedia", ["Chabab Mohammedia", "Chabab Mohammédia", "Chabab Mohammédia (SCCM)", "SC Chabab Mohammedia", "SC Chabab Mohammédia", "SC Chabab Mohamédia"]],
  ["Club Omnisport de Meknes", ["CODM de Meknès", "CODM Meknès", "COD Meknès", "CO Meknès"]],
  ["Association Sportive de Sale", ["Association Sportive Sale", "Association Sportive de Salé", "Association S Salé", "AS Salé", "AS Salé (2)", "Sale", "Salé"]],
  ["Sporting Athletic de Sale", ["Sporting Athletic de Salé", "Sporting Sale", "Sporting Salé", "SA Sale", "SA Salé", "SAS", "Sporting Salé (SAS)", "Sporting Athletic Club de Salé"]],
  ["Union Sportive Marocaine", ["US Marocaine", "USM Casablanca"]],
  ["Racing Athletic Club", ["Racing Casablanca", "Racing AC"]],
  ["Olympique Marocain", ["Olympique Marocaine", "Olympique Marocain (Rabat)", "Olympique Marocaine (Rabat)", "Olympique Marocaine (Casablanca)"]],
  ["US Athletique", ["US Athletique", "USA Casablanca"]],
  ["US de Meknes", ["US de Meknes"]],
  ["US Fes", ["US Fes"]],
  ["Union Sidi Kacem", ["US Sidi Kacem", "US Union Sidi Kacem", "Union Sportive Sidi Kacem", "Union Sidi Kacem (USK)", "Union S Sidi Kacem"]],
  ["Raja Beni Mellal", ["Raja Beni-Mellal", "Raja Béni Mellal", "Raja de Beni Mellal", "Raja de Béni Mellal"]],
  ["Difaa Hassani Jadidi", ["Difaa Hassani El Jadida", "Difaa Hassani El Jadidi", "Difaa Hassani Jdidi", "Difaa Hassani Jdidi (DHJ)", "Difaâ Hassani d’El Jadida", "Difah Hassani Jadidi (El Jadida)"]],
  ["Hassania Union Sport Agadir", ["Hassania Agadir", "Hassania Agadir (HUSA)", "Hassania d'Agadir", "Hassania d’Agadir", "Hassania US Agadir", "Hassania US de Agadir"]],
  ["Moghreb Athletic de Tetouan", ["Moghreb Tetouan", "Moghreb Tétouan", "Moghreb de Tetouan", "Moghreb de Tétouan", "MA Moghreb Tetouan", "MA Moghreb Tétouan", "MA Moghreb de Tetouan", "MA Moghreb de Tétouan"]],
  ["Union Sportive Mohammedia", ["US Union Mohammedia", "US Union Mohammédia", "Union Mohammedia", "Union Mohammédia"]],
  ["Renaissance Sportive Berkane", ["Renaissance Berkane", "RS Renaissance Berkane", "RS Renaissance de Berkane", "Renaissance S Berkane"]],
  ["Renaissance Sportive de Kenitra", ["Renaissance S Kenitra", "Renaissance S Kénitra", "Renaissance Sportive Kenitra", "Renaissance Sportive Kénitra"]],
  ["Olympique Club de Khouribga", ["Olympique Khouribga", "Olympique de Khouribga", "Olympique Club Khouribga", "Olympique Club de Khouribga", "Olympique C Khouribga", "Olympique C. Khouribga"]],
  ["Hilal Association de Nador", ["Hilal Association Nador", "Hilal de Nador", "HA Nador", "HAN Nador"]],
  ["Olympique Safi", ["Olympique Safi", "Olympique de Safi", "Olympique Club Safi", "Olympique Club de Safi", "Olympique C Safi", "Olympique C. Safi", "Olympic Safi", "Olympic de Safi", "Olympic Club Safi", "Olympic Club de Safi"]],
  ["Ittihad Zemmouri de Khemisset", ["Ittihad Khemisset", "Ittihad Khémisset", "Ittihad Khémisset (IZK)", "Ittihad Z Khémisset", "Ittihad Zemmouri Khémisset", "Ittihad Zemmouri de Khémisset", "Itihad Zemmouri de Khemisset", "Itihad Zemmouri de Khémisset"]],
  ["Chabab Rif Al Hoceima", ["Chabab Rif Al Hoceïma", "Chabab Rif d'Al Hoceima"]],
  ["Chabab Atlas Khenifra", ["Chabab Atlas de Khenifra", "Chabab Atlas de Khénifra"]],
  ["Chabab Kasba Tadla", ["Chabab Kasbah Tadla", "JS Chabab Kasba Tadla", "JSK Chabab Kasba Tadla"]],
  ["Rapide Club Oued Zem", ["Rapid Oued Zem", "Rapide Club Oued-Zem"]],
  ["Renaissance Club Athletic Zemamra", ["Renaissance Zemamra", "Club Renaissance Khemis Zemamra", "Renaissance Khemis Ezzmamra", "CRK Zemamra", "CRKZ Zemamra"]],
  ["Club Athletic Youssoufia Berrechid", ["Youssoufia Berrechid", "CA Youssoufia Berrechid", "CA Youssoufia de Berrechid", "CA Youssofia Berrechid"]],
  ["Olympique Dcheira", ["Olympique Dchira"]],
  ["Tihad Athletic Sport", ["Tihad Athlétique Sport de Casablanca", "Tihad AS Casablanca", "Tihad Athlétique Sport de Casablanca"]],
  ["Fath Sportif Nador", ["Fath Nador", "Fath Riadhi de Nador", "Fath Riadi Nador"]],
  ["Fath Sidi Bennour", ["Club du Fath Sidi Bennour", "Fath Sidi Bennor (EFSB)"]],
  ["Chabab Benguerir", ["Chabab Ben Guerir", "Chabab J Benguerir"]],
  ["Chabab Houara", ["Club Chabab Houara", "Club Chabab de Houara"]],
  ["Chabab Mrirt", ["Chabab M'Rirt", "Club Chabab M'Rirt", "Club Chabab Mrirt"]],
  ["Wydad Athletic de Fes", ["Wydad A Fès", "Wydad A. Fès", "Wydad Athletic Club (Fès)", "Wydad Athletic de Fès"]],
  ["Etoile Diewhirst Tanger", ["A Etoile Diewhirst T", "A Etoile Diewhirst Tanger", "Etoile Diewhirst", "Etoile Diewhirst (Idioharst?)", "Nejm de Douiherst"]],
  ["Adrar Union Souss", ["Adrar Union Athletique Souss", "Adrar Union Athlétique Souss", "US Adrar-Souss"]],
  ["Association Al Mansouria", ["Association Al Mansoria", "Association S Al Mansouria", "Ass. Al-Mansoria"]],
  ["CS Municipal Ouarzazate", ["CS Municipalité Sportive Ouarzazate", "Municipalité Sportive Ouarzazate", "CSM Ouarzazate", "CSMO Ouarzazate"]],
  ["Club Wafa Widad", ["Wafa Widad", "C Wafa Widad"]],
  ["Lafarge", ["AS Lafarge", "Lafarge (Ciments du Maroc)"]],
  ["Union Sportive Municipale Ait Melloul", ["USM Ait Melloul", "USM Aït Melloul"]],
  ["Union Sportive Taounate", ["Union Sportif Taounat", "USTA Taounat", "USTA Taounate", "Taounat"]],
  ["Union Sportive Toulal", ["Toulal", "US Toulal", "CSM Toulal", "Club Sportif Municipal Toulal"]],
  ["Amal Souk Sebt", ["Amal Souk Essabt", "CASS Amal Souk Sebt", "CASS Souk Sebt", "Souk Sebt", "Souk Essabt"]],
  ["Olympique Boujniba", ["OC Boujniba", "Olympique de Boujniba"]],
  ["Qods Taza", ["QODS TAZA", "AQST Taza", "AQST Qods Taza"]],
  ["Racing Athletic Club", ["RAC Casablanca", "Racing Casablanca", "Racing de Casablanca", "Racing Athl. Club Casablanca", "Racing Athlétic de Casablanca", "Racing Athlétique Club (Casablanca)", "Racing Casbkanca"]],
  ["Renaissance Sportive de Martil", ["Renaissance Martil", "RS Renaissance Martil", "RSM Martil"]],
  ["Stade Marocain", ["Stade Marocain (Rabat)", "SM Stade Marocain"]],
  ["Tihad Sportif Casablanca", ["TS Casablanca", "TSC", "Tihad Sportive Casablanca", "Tihad Sportif Club Casablanca", "Tihad Sportif Club (Casablanca)", "Tabac Sports", "Tabac Sports (TSC)", "Tabac Sports (TSC) (2)", "Régie Tabac", "Regie Tabac", "Régie des Tabacs", "Regie des Tabacs", "IR Casablanca (TAS) (2)"]],
  ["Nejm Riadi Marrakech", ["Nejm Marrakech"]],
  ["Nejm Shabab Bidawi", ["Nejm Shabab Bidawi Etoile Casablanca"]],
  ["Union Touarga Sport", ["US Touarga", "Union de Touarga"]]
];

const canonicalNameCache = new Map();
const aliasesByCodeCache = new Map();

function canonicalAliasMatch(value) {
  const cleaned = String(value || "").replace(/\s*\([^)]*\)/g, "");
  const normalizedValues = [String(value || ""), cleaned].map(normalize);
  return canonicalClubAliases.find(([canonical, aliases]) =>
    [canonical, ...aliases].map(normalize).some((alias) => normalizedValues.includes(alias))
  );
}

function canonicalTeamName(name) {
  const cacheKey = String(name || "");
  if (canonicalNameCache.has(cacheKey)) return canonicalNameCache.get(cacheKey);

  const directMatch = canonicalAliasMatch(name);
  if (directMatch) {
    canonicalNameCache.set(cacheKey, directMatch[0]);
    return directMatch[0];
  }

  const normalized = normalize(name);
  for (const season of seasons) {
    for (const club of season.clubs) {
      const aliases = aliasesForCode(club.code).map(normalize);
      if (aliases.includes(normalized) || normalize(club.name) === normalized || normalize(club.code) === normalized) {
        const cleaned = club.name.replace(/\s*\([^)]*\)/g, "");
        const match = canonicalAliasMatch(cleaned);
        const result = match ? match[0] : cleaned;
        canonicalNameCache.set(cacheKey, result);
        return result;
      }
    }
  }
  const fallback = String(name || "").replace(/\s*\([^)]*\)/g, "");
  canonicalNameCache.set(cacheKey, fallback);
  return fallback;
}

function teamSecondaryLabel(name) {
  const canonical = canonicalTeamName(name);
  if (canonical === "Sporting Athletic de Sale") return "ex-Crédit Agricole Rabat";
  return canonical === "Tihad Sportif Casablanca" ? "Régie des Tabacs" : "";
}

function renderTeamName(name) {
  const secondary = teamSecondaryLabel(name);
  return `${canonicalTeamName(name)}${secondary ? `<small>${secondary}</small>` : ""}`;
}

function renderClubCell(name, detail = "") {
  const secondary = teamSecondaryLabel(name);
  return `
    <div class="club-cell">
      <strong>${canonicalTeamName(name)}</strong>
      <span>${secondary || detail}</span>
    </div>
  `;
}

function renderLegendClub(club) {
  const secondary = teamSecondaryLabel(club.name);
  return `<span><strong>${club.code}</strong> ${canonicalTeamName(club.name)}${club.city ? ` (${club.city})` : ""}${secondary ? ` - ${secondary}` : ""}</span>`;
}

function addHonourCount(map, teamName, seasonLabel) {
  if (!teamName || teamName === "Non attribuee") return;
  const key = canonicalTeamName(teamName);
  if (!map.has(key)) map.set(key, { team: key, count: 0, seasons: [], preIndependenceCount: 0, preIndependenceSeasons: [] });
  const item = map.get(key);
  item.count += 1;
  item.seasons.push(seasonLabel);
}

function addPreIndependenceHonour(map, teamName, seasonLabel) {
  if (!teamName || !seasonLabel) return;
  const key = canonicalTeamName(teamName);
  if (!map.has(key)) map.set(key, { team: key, count: 0, seasons: [], preIndependenceCount: 0, preIndependenceSeasons: [] });
  const item = map.get(key);
  item.preIndependenceCount += 1;
  item.preIndependenceSeasons.push(seasonLabel);
}

function buildHonoursData() {
  const league = new Map();
  const cup = new Map();
  const bySeason = seasons.map((season) => {
    if (season.preIndependence) {
      addPreIndependenceHonour(league, season.champion, season.label);
    } else {
      addHonourCount(league, season.champion, season.label);
    }
    addHonourCount(cup, season.cup.winner, season.label);
    return {
      season: season.label,
      league: canonicalTeamName(season.champion),
      cup: season.cup.winner === "Non attribuee" ? "Non attribuee" : canonicalTeamName(season.cup.winner || "Non renseignee")
    };
  });
  const historicChampions = typeof preIndependenceChampions === "undefined" ? [] : preIndependenceChampions;
  historicChampions.forEach(([seasonLabel, champion]) => {
    addPreIndependenceHonour(league, champion, seasonLabel);
  });
  const sortHonours = (map) => Array.from(map.values()).sort((a, b) => {
    const totalA = a.count + (a.preIndependenceCount || 0);
    const totalB = b.count + (b.preIndependenceCount || 0);
    return totalB - totalA || a.team.localeCompare(b.team);
  });
  return { bySeason, league: sortHonours(league), cup: sortHonours(cup) };
}

function leagueCompetitionName(season) {
  return season.competitionType || (season.preIndependence ? "Championnat pre-independance" : "Championnat");
}

function filterValueIncludes(filterValue, value) {
  if (Array.isArray(filterValue)) return filterValue.includes("all") || filterValue.includes(value);
  return filterValue === "all" || filterValue === value;
}

function rankingFallbackStats(teamCode, seasonValue, competitionValue, opponentValue, placeValue) {
  if (!filterValueIncludes(competitionValue, "Championnat") && !filterValueIncludes(competitionValue, "Championnat pre-independance")) return null;
  if (opponentValue !== "all" || placeValue !== "all") return null;
  const selectedSeasons = seasons.filter((season) => filterValueIncludes(seasonValue, season.id));
  const rows = selectedSeasons.flatMap((season) => {
    if (!filterValueIncludes(competitionValue, leagueCompetitionName(season))) return [];
    if (season.resultGrid.rows.length || (season.championshipMatches || []).length) return [];
    const aliases = aliasesForCode(teamCode).map(normalize);
    const statTables = season.statTables || [{ phase: "Classement final", rows: season.table }];
    return statTables.flatMap((section) => section.rows
      .filter((entry) => aliases.includes(normalize(entry.code)) || aliases.includes(normalize(clubNameForSeason(season, entry.code))))
      .filter(hasCompleteRankingStats)
      .map((row) => ({ season, row, phase: section.phase || "Classement final" })));
  });
  if (!rows.length) return null;
  return rows.reduce((acc, { row }) => {
    acc.played += row.played;
    acc.won += row.won;
    acc.drawn += row.drawn;
    acc.lost += row.lost;
    acc.goalsFor += row.goalsFor;
    acc.goalsAgainst += row.goalsAgainst;
    return acc;
  }, { played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, rows });
}

function hasCompleteRankingStats(row) {
  return row.won + row.drawn + row.lost > 0 || row.goalsFor > 0 || row.goalsAgainst > 0;
}

function fallbackSeasonIdsForStats(filters) {
  if (!filters.team || filters.opponent !== "all" || filters.place !== "all") return [];
  if (!filterValueIncludes(filters.competition, "Championnat") && !filterValueIncludes(filters.competition, "Championnat pre-independance")) return [];
  const aliases = aliasesForCode(filters.team).map(normalize);
  return seasons
    .filter((season) => !season.resultGrid.rows.length && !(season.championshipMatches || []).length)
    .filter((season) => filterValueIncludes(filters.competition, leagueCompetitionName(season)))
    .filter((season) => season.table.some((entry) => hasCompleteRankingStats(entry) && (aliases.includes(normalize(entry.code)) || aliases.includes(normalize(clubNameForSeason(season, entry.code))))))
    .map((season) => season.id);
}

function fallbackTeamsForStats(filters) {
  if (filters.opponent !== "all" || filters.place !== "all") return [];
  if (!filterValueIncludes(filters.competition, "Championnat") && !filterValueIncludes(filters.competition, "Championnat pre-independance")) return [];
  return seasons
    .filter((season) => !season.resultGrid.rows.length && !(season.championshipMatches || []).length)
    .filter((season) => filterValueIncludes(filters.season, season.id))
    .filter((season) => filterValueIncludes(filters.competition, leagueCompetitionName(season)))
    .flatMap((season) => season.table
      .filter(hasCompleteRankingStats)
      .map((entry) => canonicalTeamName(clubNameForSeason(season, entry.code))));
}

function fallbackCompetitionsForStats(filters) {
  if (!filters.team || filters.opponent !== "all" || filters.place !== "all") return [];
  const aliases = aliasesForCode(filters.team).map(normalize);
  return seasons
    .filter((season) => !season.resultGrid.rows.length && !(season.championshipMatches || []).length)
    .filter((season) => filterValueIncludes(filters.season, season.id))
    .filter((season) => season.table.some((entry) => hasCompleteRankingStats(entry) && (aliases.includes(normalize(entry.code)) || aliases.includes(normalize(clubNameForSeason(season, entry.code))))))
    .map(leagueCompetitionName);
}

function clubNameForSeason(season, code) {
  return season.clubs.find((club) => club.code === code)?.name || code;
}

function gridCodeForSeason(season, code) {
  if (season.clubs.some((club) => club.code === code)) return code;
  const aliases = {
    ASFA: "FAB",
    CLASS: "CLAS",
    HUSAA: "HUSA",
    KCM: "KACM",
    COD: "CODM",
    SCC: "SCCM"
  };
  return aliases[code] || code;
}

function normalizedGridColumns(season) {
  return season.resultGrid.columns.map((code) => gridCodeForSeason(season, code));
}

function normalizedGridResults(season, row) {
  const columns = normalizedGridColumns(season);
  const home = gridCodeForSeason(season, row.home);
  const homeIndex = columns.indexOf(home);
  let results = [...row.results];

  if (homeIndex >= 0 && results.length === columns.length && parseScore(results[homeIndex])) {
    const last = results[results.length - 1];
    if (!parseScore(last)) results = results.slice(0, -1);
  }

  if (homeIndex >= 0 && results.length === columns.length - 1) {
    results = [
      ...results.slice(0, homeIndex),
      "",
      ...results.slice(homeIndex)
    ];
  }

  return results.slice(0, columns.length);
}

function championshipRoundLabel(round) {
  const value = String(round || "").trim();
  return /^\d+$/.test(value) ? `Journee ${value}` : value;
}

function championshipPhaseLabel(phase, round) {
  const label = championshipRoundLabel(round);
  return label ? `${phase} - ${label}` : phase;
}

function matchNoteForSeason(season, homeCode, awayCode) {
  const notes = season.matchNotes || [];
  return notes.find((entry) => entry.home === homeCode && entry.away === awayCode)?.note || "";
}

function clubCityForSeason(season, code) {
  return season.clubs.find((club) => club.code === code)?.city || "";
}

function outcome(goalsFor, goalsAgainst) {
  if (goalsFor > goalsAgainst) return "Victoire";
  if (goalsFor < goalsAgainst) return "Defaite";
  return "Nul";
}

function makeMatchRecord({ season, competition, phase = "", teamCode, teamName, opponentName, place, goalsFor, goalsAgainst, rawScore, note = "", isFinal = false }) {
  return {
    seasonId: season.id,
    seasonLabel: season.label,
    competition,
    phase,
    teamCode,
    teamName,
    opponentName,
    place,
    goalsFor,
    goalsAgainst,
    score: `${goalsFor}-${goalsAgainst}`,
    rawScore,
    note,
    result: outcome(goalsFor, goalsAgainst),
    isFinal
  };
}

function buildMatchDataset() {
  const matches = [];

  seasons.forEach((season) => {
    const leagueCompetition = leagueCompetitionName(season);
    const columns = normalizedGridColumns(season);

    season.resultGrid.rows.forEach((row) => {
      const homeCode = gridCodeForSeason(season, row.home);
      normalizedGridResults(season, row).forEach((result, index) => {
        const score = parseScore(result);
        const awayCode = columns[index];
        if (!score || homeCode === awayCode) return;

        matches.push(makeMatchRecord({
          season,
          competition: leagueCompetition,
          phase: "Championnat",
          teamCode: homeCode,
          teamName: season.clubs.find((club) => club.code === homeCode)?.name || homeCode,
          opponentName: season.clubs.find((club) => club.code === awayCode)?.name || awayCode,
          place: "Domicile",
          goalsFor: score.home,
          goalsAgainst: score.away,
          rawScore: result,
          note: matchNoteForSeason(season, homeCode, awayCode)
        }));

        matches.push(makeMatchRecord({
          season,
          competition: leagueCompetition,
          phase: "Championnat",
          teamCode: awayCode,
          teamName: season.clubs.find((club) => club.code === awayCode)?.name || awayCode,
          opponentName: season.clubs.find((club) => club.code === homeCode)?.name || homeCode,
          place: "Exterieur",
          goalsFor: score.away,
          goalsAgainst: score.home,
          rawScore: result,
          note: matchNoteForSeason(season, homeCode, awayCode)
        }));
      });
    });

    (season.championshipMatches || []).forEach((entry) => {
      const [phase, round, homeCode, result, awayCode] = entry;
      const score = parseScore(result);
      if (!score) return;

      matches.push(makeMatchRecord({
        season,
        competition: leagueCompetition,
        phase: championshipPhaseLabel(phase, round),
        teamCode: homeCode,
        teamName: clubNameForSeason(season, homeCode),
        opponentName: clubNameForSeason(season, awayCode),
        place: "Domicile",
        goalsFor: score.home,
        goalsAgainst: score.away,
        rawScore: result,
        note: matchNoteForSeason(season, homeCode, awayCode)
      }));

      matches.push(makeMatchRecord({
        season,
        competition: leagueCompetition,
        phase: championshipPhaseLabel(phase, round),
        teamCode: awayCode,
        teamName: clubNameForSeason(season, awayCode),
        opponentName: clubNameForSeason(season, homeCode),
        place: "Exterieur",
        goalsFor: score.away,
        goalsAgainst: score.home,
        rawScore: result,
        note: matchNoteForSeason(season, homeCode, awayCode)
      }));
    });

    const cupMatches = [
      ...filteredCupRounds(season.cup).flatMap((round) => round.matches.map((match) => ({ ...match, round: round.name }))),
      { ...season.cup.final, round: "Finale", isFinal: true }
    ];

    cupMatches.forEach((match) => {
      const score = parseScore(match.score);
      if (!score) return;
      const homePlace = match.isFinal ? "Neutre" : "Domicile";
      const awayPlace = match.isFinal ? "Neutre" : "Exterieur";

      matches.push(makeMatchRecord({
        season,
        competition: "Coupe du Trone",
        phase: match.round || "Coupe",
        teamCode: match.home,
        teamName: canonicalTeamName(match.home),
        opponentName: canonicalTeamName(match.away),
        place: homePlace,
        goalsFor: score.home,
        goalsAgainst: score.away,
        rawScore: match.score,
        note: match.note || "",
        isFinal: Boolean(match.isFinal)
      }));

      matches.push(makeMatchRecord({
        season,
        competition: "Coupe du Trone",
        phase: match.round || "Coupe",
        teamCode: match.away,
        teamName: canonicalTeamName(match.away),
        opponentName: canonicalTeamName(match.home),
        place: awayPlace,
        goalsFor: score.away,
        goalsAgainst: score.home,
        rawScore: match.score,
        note: match.note || "",
        isFinal: Boolean(match.isFinal)
      }));
    });
  });

  return matches;
}

function normalize(value) {
  return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function aliasesForCode(code) {
  const cacheKey = String(code || "");
  if (aliasesByCodeCache.has(cacheKey)) return aliasesByCodeCache.get(cacheKey);

  const baseName = clubName(code);
  const aliases = {
    WAC: ["Wydad Athletic Club", "Wydad AC", "Wydad AC Casablanca", "Wydad AC (Casablanca)", "WAC Casablanca", "WA Casablanca", "WAS Casablanca", "WAC Casablance"],
    KACM: ["Kawkab Athletic Club de Marrakech", "KAC Marrakech", "KAC Marrakesh", "KACM Marrakech", "KACM Marrakesh"],
    MCO: ["Mouloudia Club Oujda", "MC Oujda"],
    TAS: ["Tihad Athletic Sport", "Tihad Athlétique Sport", "Tihad Athletique Sport", "Tihad Athletic Sport (Casablanca)", "Tihad Athlétique Sport (Casablanca)", "TAS Casablanca", "TAS de Casablanca", "TAS Tihad Casablanca", "Tihad AS Casablanca", "Tihad Athlétique Sport de Casablanca"],
    FUS: ["Fath Union Sport", "FUS Rabat"],
    USM: ["Union Sportive Marocaine", "USM", "USM Casablanca"],
    MAS: ["Maghreb Association Sportive", "MAS Fes"],
    RAC: ["Racing Athletic Club", "RAC Casablanca"],
    DHJ: ["Difaa Hassani Jadidi", "DH Jadidi", "DHJ Jadidi"],
    RCA: ["Raja Club Athletic", "Raja Casablanca"],
    KAC: ["Kenitra Athletic Club", "Kenitra AC"],
    SM: ["Stade Marocain"],
    RSM: ["Rachad de Meknes"],
    USS: ["Union Sportive de Safi"],
    ASTF: ["Association Sportif de Tanger-Fes"],
    EJSC: ["Etoile Jeunesse Sportive Casablanca", "EJS Casablanca"],
    FAR: ["Forces Armees Royales", "AS Forces Armees Royales", "AS Forces Armées Royales", "AS Forces Armée Royales", "Forces Armees Royales (Rabat)", "Forces Armées Royales (Rabat)", "Forces Armée Royales", "AS Forces Armees Royales (Rabat)", "AS Forces Armées Royales (Rabat)", "AS Forces Armées Royales Rabat", "AS Forces Armée Royales Rabat", "FAR Rabat", "AS FAR", "AS Far", "AS FAR Rabat", "AS Far Rabat", "FAR de Rabat", "FAR Forces Armees Royales", "FAR Forces Armées Royales", "FAR Forces Armée Royales", "AS FAR Forces Royales de Rabat"],
    ASFA: ["Forces Auxiliaires de Ben Slimane", "FA Benslimane", "FA Ben Slimane", "Auxiliary Forces"],
    HUSA: ["Hassania Union Sport Agadir", "HUS Agadir"],
    LARACHE: ["Chabab Larache"],
    MAT: ["Maghreb Athletic Tetouan", "Moghreb Athletic de Tetouan", "Moghreb Tetouan", "MA Tetouan", "MA Tétouan", "MAT Tétouan"],
    CL: ["Chabab Larache"],
    SCC: ["Sporting Club Chabab de Mohammedia", "Sporting Club Chabab de Mohammédia", "Sporting Club Chabab de Mohammadia", "Sporting Club Chabab de Mohammadie", "Sporting Club Chabab Mohammedia", "Sporting Club Chabab Mohammédia", "Sporting Club Chabab Mohammadia", "Sporting Club Chabab Mohammadie", "SCC Mohammedia", "SCC Mohammédia", "SCC Mohammadia", "SCC Mohammadie", "SCCM", "SCCM Mohammedia", "SCCM Mohammédia", "SCCM Mohammadia", "SCCM Mohammadie", "SCCM de Mohammedia", "SCCM de Mohammédia", "SCCM de Mohammadia", "SCCM de Mohammadie"],
    SCCM: ["Sporting Club Chabab de Mohammedia", "Sporting Club Chabab de Mohammédia", "Sporting Club Chabab de Mohammadia", "Sporting Club Chabab de Mohammadie", "Sporting Club Chabab Mohammedia", "Sporting Club Chabab Mohammédia", "Sporting Club Chabab Mohammadia", "Sporting Club Chabab Mohammadie", "SCC Mohammedia", "SCC Mohammédia", "SCC Mohammadia", "SCC Mohammadie", "SCC", "SCCM Mohammedia", "SCCM Mohammédia", "SCCM Mohammadia", "SCCM Mohammadie", "SCCM de Mohammedia", "SCCM de Mohammédia", "SCCM de Mohammadia", "SCCM de Mohammadie"],
    COD: ["Club Omnisport de Meknes", "Club Omnisports de Meknes", "Club Omnisports de Meknès", "CO Meknes", "CO Meknès", "COD Meknes", "COD Meknès", "CODM", "CODM Meknes", "CODM Meknès"],
    CODM: ["Club Omnisport de Meknes", "Club Omnisports de Meknes", "Club Omnisports de Meknès", "CO Meknes", "CO Meknès", "COD Meknes", "COD Meknès", "COD", "CODM Meknes", "CODM Meknès"],
    RSS: ["Renaissance Sportive de Settat", "RS Settat"],
    IRT: ["Ittihad Riadi de Tanger", "IR Tanger"],
    MSR: ["Moghreb Sportif de Rabat", "Maroc Sportive Rabat"],
    RBM: ["Raja Beni Mellal", "Raja Béni Mellal"],
    ANTPK: ["ANTPK Kenitra"],
    USK: ["Union Sidi Kacem", "Sidi Kacem"],
    ADM: ["Association des Douanes Marocaines", "Association des Douanes Marocaines (Casablanca)", "ADM Casablanca"],
    BRR: ["AS Barid Mohammedi de Rabat"],
    ASS: ["Association Sportive de Sale", "Association Sportive de Salé", "AS Sale", "AS Salé"],
    YC: ["Youssoufia Club de Rabat", "YC Rabat"],
    DHJ: ["Difaa Hassani Jadidi", "DH Jadidi", "DHJ Jadidi"],
    IZK: ["Ittihad Zemmouri de Khemisset", "IZ Khemisset", "IZ Khémisset", "Khemisset", "Khémisset"],
    RCMA: ["Raja Cercle Municipalite d'Agadir", "Raja CM Agadir"],
    USDM: ["Union Sportive Mohammedia", "Union Sportive de Mohammedia", "Union Sportive de Mohammédia", "US Mohammedia", "US Mohammédia", "USMO"],
    USMO: ["Union Sportive Mohammedia", "Union Sportive de Mohammedia", "Union Sportive de Mohammédia", "US Mohammedia", "US Mohammédia", "USDM"],
    RSB: ["Renaissance Sportive Berkane", "RS Berkane"],
    RSK: ["Renaissance Sportive de Kenitra", "Renaissance Sportive de Kénitra", "RS Kenitra", "RS Kénitra"],
    OCK: ["Olympique Club de Khouribga", "OC Khouribga", "OCK Khouribga"],
    CRA: ["Chabab Rif Al Hoceima", "Chabab Rif Al-Hoceima", "CR Al Hoceima"],
    CAK: ["Chabab Atlas Khenifra", "CA Khenifra", "CA Khénifra"],
    CKT: ["Chabab Kasba Tadla", "Chabab Kasbah Tadla", "Kasbah Tadla"],
    CLAS: ["Olympique Casablanca", "Olympique de Casablanca", "Club Olympique de Casablanca", "Club Olympique de Casabalca", "CLAS Casablanca", "CLAS (Casablanca)"],
    FAB: ["Forces Auxiliaires de Ben Slimane", "FA Benslimane", "FA Ben Slimane", "ASFA"],
    HAN: ["Hilal Association de Nador", "Hilal Nador"],
    ACB: ["Amal Club de Belksiri", "Belksiri"],
    CSH: ["Chabab Sakia El Hamra", "Chabab Sakia El Hamra (Laayoune)", "Laayoune"],
    WAF: ["Wydad Athletic de Fes", "Wydad Athletic de Fès", "Wydad de Fes", "Wydad de Fès", "Wydad Fes", "Wydad Fès", "WA Fes", "WA Fès", "WAF Fes", "WAF Fès", "WAF Widad de Fes", "WAF Widad de Fès", "Wafaa Riadi Fassi"],
    OCS: ["Olympique Casablanca", "Olympique de Casablanca", "Club Olympique de Casablanca", "Club Olympique de Casabalca", "CLAS Casablanca", "CLAS (Casablanca)", "CLAS"],
    CAR: ["Credit Agricole Rabat", "Crédit Agricole Rabat"],
    AUX: ["Forces Auxiliaires de Ben Slimane", "Auxiliary Forces", "Auxiliary Forces (Casablanca)", "ASFA"],
    JSM: ["Jeunesse Sportive Massira", "JS Massira"],
    ISC: ["Tihad Sportif Casablanca", "IS Casablanca", "IS Casablanca (Régie des Tabacs)", "IS Casablanca (Regie des Tabacs)", "Régie des Tabacs", "Regie des Tabacs"],
    USMOJ: ["Union Sportive Musulmane d Oujda", "USM Oujda"],
    CRB: ["Club Rachad Bernoussi", "Rachad Bernoussi", "Rachad Bernossi", "Club Rachad Bernossi", "Rachad Bernoussi (Casablanca)", "Club Rachad Bernoussi (Casablanca)"],
    TFB: ["Ittihad Riadi Fkih Ben Salah", "IR Fkih Ben Salah"],
    MCM: ["Mouloudia Club de Marrakech", "MC Marrakech"],
    OCSafi: ["Olympique Safi", "OC Safi", "O Safi", "OCS"],
    RCOZ: ["Rapide Club Oued Zem", "Rapide Oued Zem"],
    RCAZ: ["Renaissance Club Athletic Zemamra", "RCA Zemamra"],
    CAYB: ["Club Athletic Youssoufia Berrechid", "CAY Berrechid"],
    JSS: ["Jeunesse Sportive Soualem", "JS Soualem"],
    OD: ["Olympique Dcheira"],
    MAJD: ["Majd Casablanca", "Majd Bidawi"],
    TAS: ["Tihad Athletic Sport", "Tihad Athlétique Sport", "Tihad Athletique Sport", "Tihad Athletic Sport (Casablanca)", "Tihad Athlétique Sport (Casablanca)", "TAS Casablanca", "TAS de Casablanca", "TAS Tihad Casablanca", "Tihad AS Casablanca", "Tihad Athlétique Sport de Casablanca", "TS Ittihad"],
    TSC: ["Tihad Sportif Casablanca", "TS Casablanca", "Tihad Sportive Casablanca", "Tihad Sportif Club Casablanca", "Tihad Sportif Club (Casablanca)", "Tabac Sports", "Tabac Sports (TSC)", "Régie Tabac", "Regie Tabac"],
    WST: ["Widad Temara", "Wydad Temara", "Wydad Témara", "Widad Témara", "WS Temara", "WS Témara", "WST Widad Temara"],
    USTEMARA: ["Union Sportive Temara", "Union Sportive de Temara", "Union Sportive de Témara", "Union S Temara", "Union S Témara", "US Temara", "US Témara", "US Tihad Temara"],
    UST: ["Union Touarga Sport", "UTS Touarga", "US Touarga", "Union de Touarga"]
  };

  const directAliases = [baseName, code, ...(aliases[code] || [])];
  const canonical = directAliases.map(canonicalAliasMatch).find(Boolean)?.[0] || canonicalAliasMatch(code)?.[0];
  const canonicalEntry = canonicalClubAliases.find(([name]) => name === canonical);
  const canonicalAliases = canonicalEntry ? [canonicalEntry[0], ...canonicalEntry[1]] : [];
  const relatedCodes = canonical
    ? seasons
      .flatMap((season) => season.clubs)
      .filter((club) => canonicalAliasMatch(club.name)?.[0] === canonical)
      .map((club) => club.code)
    : [];

  const result = Array.from(new Set([baseName, code, ...directAliases, ...canonicalAliases, ...relatedCodes].map((value) => String(value || ""))));
  aliasesByCodeCache.set(cacheKey, result);
  return result;
}

function renderSeasonOptions() {
  els.seasonSelect.innerHTML = seasons
    .map((season) => `<option value="${season.id}">${season.label}</option>`)
    .join("");
  els.seasonSelect.value = state.season.id;
}

function renderOverview() {
  const season = state.season;
  els.seasonTitle.textContent = season.title;
  els.seasonCompetitions.textContent = season.competitions.join(" + ");
  els.seasonStats.innerHTML = [
    ["Champion", season.champion],
    ["Champion en titre", season.reigningChampion],
    ["Vainqueur coupe", season.cup.winner],
    ["Meilleur buteur", `${season.topScorer.player}, ${season.topScorer.goals} buts`]
  ].map(([label, value]) => `
    <article class="stat-card">
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `).join("");
}

function renderRanking() {
  const query = normalize(state.query);
  const sections = state.season.rankingSections || [{ title: "Classement final", rows: state.season.table }];
  const renderRow = (row) => {
    const statusTags = row.status.split(",").map((status) => status.trim());
    const statusClass = statusTags.includes("Champion") ? "champion" : statusTags.includes("Relegue") ? "relegated" : "";
    const city = clubCityForSeason(state.season, row.code);
    return `
      <tr class="${statusClass}">
        <td>${row.rank}</td>
        <td>${renderClubCell(clubNameForSeason(state.season, row.code), `${row.code}${city ? ` - ${city}` : ""}`)}</td>
        <td>${row.played}</td>
        <td>${row.won}</td>
        <td>${row.drawn}</td>
        <td>${row.lost}</td>
        <td>${row.goalsFor}</td>
        <td>${row.goalsAgainst}</td>
        <td>${goalDifference(row) > 0 ? "+" : ""}${goalDifference(row)}</td>
        <td><strong>${row.points}</strong></td>
        <td>${row.status ? `<span class="status ${statusClass}">${row.status}</span>` : ""}</td>
      </tr>
    `;
  };

  els.rankingBody.innerHTML = sections.map((section) => {
    const rows = section.rows.filter((row) => {
      const text = normalize(`${row.code} ${clubNameForSeason(state.season, row.code)} ${clubCityForSeason(state.season, row.code)} ${row.status} ${section.title}`);
      return text.includes(query);
    });
    if (!rows.length) return "";
    const heading = sections.length > 1 ? `
      <tr class="ranking-section-row">
        <td colspan="11">${section.title}</td>
      </tr>
    ` : "";
    return `${heading}${rows.map(renderRow).join("")}`;
  }).join("");

  els.championshipNotes.innerHTML = `
    <p><strong>Promus:</strong> ${state.season.promoted.join(", ")}.</p>
    ${state.season.notes.map((note) => `<p><strong>Note:</strong> ${note}</p>`).join("")}
  `;
}

function renderMatchGrid() {
  const { rows } = state.season.resultGrid;
  const columns = normalizedGridColumns(state.season);
  if (!rows.length) {
    const knownMatches = state.season.championshipMatches || [];
    if (knownMatches.length) {
      els.matchGrid.innerHTML = `
        <thead>
          <tr>
            <th>Phase</th>
            <th>Domicile</th>
            <th>Score</th>
            <th>Exterieur</th>
          </tr>
        </thead>
        <tbody>
          ${knownMatches.map(([phase, round, homeCode, score, awayCode]) => {
            const note = matchNoteForSeason(state.season, homeCode, awayCode);
            return `
            <tr>
              <td>${championshipPhaseLabel(phase, round)}</td>
              <td>${renderClubCell(clubNameForSeason(state.season, homeCode), homeCode)}</td>
              <td><span class="score-pill">${score}</span>${note ? `<small class="match-note">${note}</small>` : ""}</td>
              <td>${renderClubCell(clubNameForSeason(state.season, awayCode), awayCode)}</td>
            </tr>
          `;
          }).join("")}
        </tbody>
      `;
      els.clubLegend.innerHTML = state.season.clubs.map(renderLegendClub).join("");
      return;
    }
    els.matchGrid.innerHTML = `
      <tbody>
        <tr>
          <td class="empty-results">La grille complete du championnat n'est pas encore integree pour cette saison.</td>
        </tr>
      </tbody>
    `;
    els.clubLegend.innerHTML = state.season.clubs.map(renderLegendClub).join("");
    return;
  }
  const head = `
    <thead>
      <tr>
        <th>Domicile</th>
        ${columns.map((code) => `<th title="${clubName(code)}">${code}</th>`).join("")}
      </tr>
    </thead>
  `;
  const body = rows.map((row) => {
    const homeCode = gridCodeForSeason(state.season, row.home);
    return `
    <tr>
      <th title="${clubName(homeCode)}">${homeCode}</th>
      ${normalizedGridResults(state.season, row).map((result, index) => {
        const awayCode = columns[index];
        const note = result ? matchNoteForSeason(state.season, homeCode, awayCode) : "";
        return `<td class="${result ? "" : "empty"}">${result || "x"}${note ? `<small class="match-note">${note}</small>` : ""}</td>`;
      }).join("")}
    </tr>
  `;
  }).join("");

  els.matchGrid.innerHTML = `${head}<tbody>${body}</tbody>`;
  els.clubLegend.innerHTML = state.season.clubs.map(renderLegendClub).join("");
}

function renderCup() {
  const cup = state.season.cup;
  if (!cup.rounds.length && !cup.final.score) {
    els.cupWinner.innerHTML = `<span>Competition</span><strong>Non disputee</strong>`;
    els.cupRounds.innerHTML = `<p class="empty-results">Aucun parcours de coupe n'est renseigne pour cette saison.</p>`;
    els.cupFinal.innerHTML = "";
    return;
  }
  const finalDetails = [
    cup.final.scorers?.length ? `<div><h4>Buteurs</h4><p>${cup.final.scorers.join(" ; ")}</p></div>` : "",
    cup.final.referee ? `<div><h4>Arbitre</h4><p>${cup.final.referee}</p></div>` : ""
  ].filter(Boolean).join("");
  const lineups = cup.final.lineups ? Object.entries(cup.final.lineups).map(([team, players]) => `
    <div>
      <h4>${canonicalTeamName(team)}</h4>
      <ol>${players.map((player) => `<li>${player}</li>`).join("")}</ol>
    </div>
  `).join("") : "";
  const finalMeta = [
    cup.final.note,
    cup.final.venue,
    cup.final.attendance ? `${cup.final.attendance} spectateurs` : ""
  ].filter(Boolean).join(" - ");

  els.cupWinner.innerHTML = `<span>Vainqueur</span><strong>${canonicalTeamName(cup.winner)}</strong>`;
  const roundsToShow = filteredCupRounds(cup);
  els.cupRounds.innerHTML = roundsToShow.map((round) => `
    <article class="round">
      <h3>${round.name}</h3>
      <div class="match-list">
        ${round.matches.map((match) => `
          <div class="cup-match">
            <span>${renderTeamName(match.home)}</span>
            <strong>${match.score}</strong>
            <span>${renderTeamName(match.away)}</span>
            ${match.note ? `<em>${match.note}</em>` : ""}
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");

  els.cupFinal.innerHTML = `
    <div class="final-main">
      <div>
        <p class="eyebrow">Finale - ${cup.final.date}</p>
        <h3>${canonicalTeamName(cup.final.home)} ${cup.final.score} ${canonicalTeamName(cup.final.away)}</h3>
        <p class="muted">${finalMeta}</p>
      </div>
      <div class="winner-pill compact-pill">
        <span>Vainqueur</span>
        <strong>${canonicalTeamName(cup.winner)}</strong>
      </div>
    </div>
    ${finalDetails ? `<div class="final-details">${finalDetails}</div>` : ""}
    ${lineups ? `<div class="lineups">${lineups}</div>` : ""}
    ${state.season.notes[2] ? `<p class="cup-note">${state.season.notes[2]}</p>` : ""}
  `;
}

function renderStatsSelectors() {
  const current = {
    team: els.teamStatsSelect.value || canonicalTeamName(clubNameForSeason(state.season, state.season.table[0].code)),
    season: selectedFilterValues(els.statsSeasonSelect),
    competition: selectedFilterValues(els.competitionStatsSelect),
    opponent: els.opponentStatsSelect.value || "all",
    place: els.placeStatsSelect.value || "all"
  };

  const teamOptionMatches = filterStatsDataset(current, { team: false });
  const teamOptions = uniqueSortedOptions([
    ...teamOptionMatches.map((match) => canonicalTeamName(match.teamName)),
    ...fallbackTeamsForStats(current)
  ]);
  els.teamStatsSelect.innerHTML = teamOptions
    .map((name) => `<option value="${name}">${name}</option>`)
    .join("");
  const currentTeam = optionValueExists(els.teamStatsSelect, current.team)
    ? current.team
    : canonicalTeamName(clubName(current.team));
  els.teamStatsSelect.value = optionValueExists(els.teamStatsSelect, currentTeam)
    ? currentTeam
    : els.teamStatsSelect.options[0]?.value || "";

  const withTeam = {
    ...current,
    team: els.teamStatsSelect.value || current.team
  };

  const competitionOptions = uniqueSortedOptions([
    ...filterStatsDataset(withTeam, {
      competition: false,
    }).map((match) => match.competition),
    ...fallbackCompetitionsForStats(withTeam)
  ]);
  renderCheckboxFilter(
    els.competitionStatsSelect,
    "Toutes les competitions",
    competitionOptions.map((competition) => ({ value: competition, label: competition })),
    current.competition
  );

  const withCompetition = {
    ...withTeam,
    competition: selectedFilterValues(els.competitionStatsSelect)
  };
  const detailedSeasonIds = filterStatsDataset(
      withCompetition,
      { season: false }
    ).map((match) => match.seasonId);
  const fallbackSeasonIds = fallbackSeasonIdsForStats({
    ...withCompetition,
    season: ["all"]
  });
  const seasonIds = uniqueSortedOptions([...detailedSeasonIds, ...fallbackSeasonIds]);
  const seasonById = new Map(seasons.map((season) => [season.id, season]));
  renderCheckboxFilter(
    els.statsSeasonSelect,
    "Toutes les saisons",
    seasonIds.map((seasonId) => {
      const season = seasonById.get(seasonId);
      return season ? { value: season.id, label: season.label } : null;
    }).filter(Boolean),
    current.season
  );

  const withSeason = {
    ...withCompetition,
    season: selectedFilterValues(els.statsSeasonSelect)
  };
  const requestedOpponent = current.opponent === "all" ? "all" : canonicalTeamName(current.opponent);
  const opponentOptions = uniqueSortedOptions(
    filterStatsDataset(withSeason, { opponent: false }).map((match) => canonicalTeamName(match.opponentName))
  );
  els.opponentStatsSelect.innerHTML = [
    `<option value="all">Tous les adversaires</option>`,
    ...opponentOptions.map((name) => `<option value="${name}">${name}</option>`)
  ].join("");
  const canonicalOpponent = requestedOpponent;
  els.opponentStatsSelect.value = opponentOptions.includes(canonicalOpponent) ? canonicalOpponent : "all";

  const withOpponent = {
    ...withSeason,
    opponent: els.opponentStatsSelect.value || "all"
  };
  const placeOptions = uniqueSortedOptions(
    filterStatsDataset(withOpponent, { place: false }).map((match) => match.place)
  );
  els.placeStatsSelect.innerHTML = [
    `<option value="all">Tous les lieux</option>`,
    ...placeOptions.map((place) => `<option value="${place}">${place}</option>`)
  ].join("");
  els.placeStatsSelect.value = placeOptions.includes(current.place) ? current.place : "all";
}

function optionValueExists(select, value) {
  return [...select.options].some((option) => option.value === value);
}

function selectedFilterValues(select) {
  const checkedInputs = [...select.querySelectorAll?.("input[type='checkbox']:checked") || []].map((input) => input.value);
  if (checkedInputs.length) return checkedInputs;
  if (select.querySelectorAll && select.querySelectorAll("input[type='checkbox']").length) return ["all"];
  if (!select.selectedOptions) return ["all"];
  const values = [...select.selectedOptions].map((option) => option.value).filter(Boolean);
  return values.length ? values : ["all"];
}

function setSelectedFilterValues(select, requestedValues, availableValues) {
  const requested = Array.isArray(requestedValues) ? requestedValues : [requestedValues || "all"];
  const validValues = requested.filter((value) => value === "all" || availableValues.includes(value));
  const nextValues = validValues.length ? validValues : ["all"];
  if (select.querySelectorAll && select.querySelectorAll("input[type='checkbox']").length) {
    [...select.querySelectorAll("input[type='checkbox']")].forEach((input) => {
      input.checked = nextValues.includes(input.value);
    });
    updateCheckboxFilterSummary(select);
    return;
  }
  [...select.options].forEach((option) => {
    option.selected = nextValues.includes(option.value);
  });
}

function renderCheckboxFilter(container, allLabel, options, requestedValues) {
  const availableValues = options.map((option) => option.value);
  const requested = Array.isArray(requestedValues) ? requestedValues : [requestedValues || "all"];
  const validValues = requested.filter((value) => value === "all" || availableValues.includes(value));
  const selectedValues = validValues.length ? validValues : ["all"];
  const rows = [{ value: "all", label: allLabel }, ...options];

  container.innerHTML = `
    <summary><span class="filter-summary"></span></summary>
    <div class="checkbox-filter-menu">
      <div class="checkbox-filter-actions">
        <button class="checkbox-filter-apply" type="button">Valider</button>
      </div>
      ${rows.map((option) => `
        <label>
          <input type="checkbox" value="${option.value}" ${selectedValues.includes(option.value) ? "checked" : ""}>
          <span>${option.label}</span>
        </label>
      `).join("")}
    </div>
  `;
  updateCheckboxFilterSummary(container);
}

function updateCheckboxFilterSummary(container) {
  const summary = container.querySelector(".filter-summary");
  const checked = [...container.querySelectorAll("input[type='checkbox']:checked")];
  const allInput = checked.find((input) => input.value === "all");
  if (!summary) return;
  if (allInput || !checked.length) {
    summary.textContent = container.querySelector("input[value='all']")?.nextElementSibling?.textContent || "Toutes";
  } else if (checked.length === 1) {
    summary.textContent = checked[0].nextElementSibling.textContent;
  } else {
    summary.textContent = `${checked.length} selections`;
  }
}

function uniqueSortedOptions(values) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

function statsTeamMatches(match, teamValue) {
  const selectedTeam = canonicalTeamName(teamValue);
  const matchTeam = canonicalTeamName(match.teamName);
  if (selectedTeam && normalize(selectedTeam) === normalize(matchTeam)) return true;

  return normalize(teamValue) === normalize(match.teamCode)
    && normalize(selectedTeam) === normalize(matchTeam);
}

function filterStatsDataset(filters, include = {}) {
  const {
    team = true,
    season = true,
    competition = true,
    opponent = true,
    place = true
  } = include;

  return buildMatchDataset().filter((match) => {
    if (team && filters.team && !statsTeamMatches(match, filters.team)) return false;
    if (season && !filterValueIncludes(filters.season, match.seasonId)) return false;
    if (competition && !filterValueIncludes(filters.competition, match.competition)) return false;
    if (opponent && filters.opponent !== "all" && canonicalTeamName(match.opponentName) !== filters.opponent) return false;
    if (place && filters.place !== "all" && match.place !== filters.place) return false;
    return true;
  });
}

function getCurrentStatsFilters() {
  return {
    team: els.teamStatsSelect.value || canonicalTeamName(clubNameForSeason(state.season, state.season.table[0].code)),
    season: selectedFilterValues(els.statsSeasonSelect),
    competition: selectedFilterValues(els.competitionStatsSelect),
    opponent: els.opponentStatsSelect.value || "all",
    place: els.placeStatsSelect.value || "all"
  };
}

function getFilteredStatsMatches(options = {}) {
  return filterStatsDataset(getCurrentStatsFilters(), {
    team: true,
    season: true,
    competition: true,
    opponent: options.includeOpponent !== false,
    place: true
  });
}

function kpiCard(label, value, tone = "") {
  return `
    <article class="kpi-card ${tone}">
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `;
}

function percentage(value, total) {
  return total ? `${((value / total) * 100).toFixed(1)}%` : "0.0%";
}

function parseNationalDate(value) {
  const [day, month, shortYear] = value.split("/").map(Number);
  const year = shortYear <= 26 ? 2000 + shortYear : 1900 + shortYear;
  return { day, month, year, label: `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}` };
}

function parseNationalScorers(text) {
  return String(text || "")
    .split(">")
    .map((item) => item.trim())
    .filter(Boolean)
    .map(parseNationalScorerEntry);
}

function parseNationalScorerEntry(entry) {
  const normalized = entry.replace(/\s+/g, " ").trim();
  const multiplierMatch = normalized.match(/(?:^|\s)[x×](\d+)/i);
  const multiplier = multiplierMatch ? Number(multiplierMatch[1]) : 0;
  const penaltyCountMatch = normalized.match(/\((\d+)Pen\)/i);
  const minuteSource = normalized
    .replace(/(?:^|\s)[x×]\d+(?:\(\d+Pen\))?/gi, " ")
    .replace(/\(\d+Pen\)/gi, " ");
  const minuteMatches = [...minuteSource.matchAll(/\b\d+(?:\+\d+)?(?:Pen)?\b/g)];
  const minutes = minuteMatches.map((match) => match[0]);
  const name = normalized
    .replace(/(?:^|\s)[x×]\d+(?:\(\d+Pen\))?/gi, " ")
    .replace(/\(\d+Pen\)/gi, " ")
    .replace(/\b\d+(?:\+\d+)?(?:Pen)?\b/g, "")
    .replace(/[,\s]+$/g, "")
    .trim();
  const penalties = minutes.filter((minute) => /Pen$/i.test(minute)).length
    + (penaltyCountMatch ? Number(penaltyCountMatch[1]) : 0);

  return {
    raw: normalized,
    name: name || "Buteur non renseigne",
    minutes,
    goals: multiplier || minutes.length || 1,
    penalties
  };
}

function formatNationalScorer(scorer) {
  if (!scorer.minutes.length && scorer.goals > 1) return `${scorer.name} x${scorer.goals}`;
  return scorer.minutes.length ? `${scorer.name} ${scorer.minutes.join(", ")}` : scorer.name;
}

function normalizeMatchKey(value) {
  return normalize(String(value || "").replace(/\./g, "").replace(/\s+/g, " "));
}

function nationalDetailKey(date, opponent) {
  return `${date}|${normalizeMatchKey(opponent)}`;
}

function normalizeNationalOpponentKey(opponent) {
  const key = normalizeMatchKey(opponent);
  const aliases = {
    eqguinea: "equatorialguinea",
    uae: "unitedarabemirates",
    southkorea: "southkoreab",
    capeverdeisl: "capeverde",
    saotomeprin: "saotomeandprincipe",
    drcongo: "democraticrepublicofthecongo",
    comorosislands: "comoros",
    cenafricanrep: "centralafricanrepublic"
  };
  return aliases[key] || key;
}

function nationalSquadType(match) {
  const competition = normalizeMatchKey(match.competition).replace(/\*/g, "");
  if (["21/09/2022"].includes(match.date)) return "NON_FIFA";
  if (["21/12/2022"].includes(match.date) || /U23/i.test(match.opponent)) return "U23";
  if (["06/01/2018", "08/01/2021", "12/01/2021", "20/08/2022", "23/08/2022", "01/11/2020", "04/11/2020"].includes(match.date)) return "A_PRIME";
  return ["anc", "ancq", "arab", "ara", "arb"].includes(competition) ? "A_PRIME" : "A";
}

function computeNationalScorerStats(matches) {
  const scorers = new Map();

  matches.flatMap((match) => match.scorers).forEach((scorer) => {
    if (!scorers.has(scorer.name)) {
      scorers.set(scorer.name, {
        name: scorer.name,
        goals: 0,
        penalties: 0,
        matches: 0,
        years: new Set()
      });
    }

    const row = scorers.get(scorer.name);
    row.goals += scorer.goals;
    row.penalties += scorer.penalties;
  });

  matches.forEach((match) => {
    const names = new Set(match.scorers.map((scorer) => scorer.name));
    names.forEach((name) => {
      const row = scorers.get(name);
      row.matches += 1;
      row.years.add(match.year);
    });
  });

  return [...scorers.values()]
    .map((row) => ({ ...row, years: [...row.years].sort((a, b) => a - b) }))
    .sort((a, b) => b.goals - a.goals || a.name.localeCompare(b.name));
}

function computeNationalDetailedPlayerStats(matches) {
  const stats = new Map();
  const ensure = (name) => {
    if (!stats.has(name)) {
      stats.set(name, { name, matches: 0, starts: 0, minutes: 0, goals: 0, yellow: 0, red: 0 });
    }
    return stats.get(name);
  };

  matches
    .map(detailForNationalMatch)
    .filter(Boolean)
    .forEach((detail) => {
      detail.players.forEach((player) => {
        const row = ensure(player.name);
        row.matches += 1;
        row.starts += player.starter ? 1 : 0;
        row.minutes += player.minutes;
        row.goals += player.goals;
        row.yellow += player.cards.filter((card) => card.type === "Y").length;
        row.red += player.cards.filter((card) => card.type === "R").length;
      });
    });

  return [...stats.values()].sort((a, b) => b.matches - a.matches || b.minutes - a.minutes || a.name.localeCompare(b.name));
}

function normalizedNationalRawLines(lines) {
  return lines.reduce((acc, line) => {
    if (/^\d{2}\/\d{2}\/\d{2}/.test(line) || !acc.length) {
      acc.push(line);
    } else if (/^\s+\S/.test(line) && /^\d{2}\/\d{2}\/\d{2}/.test(acc[acc.length - 1])) {
      acc[acc.length - 1] = `${acc[acc.length - 1].trimEnd()} ${line.trim()}`;
    } else {
      acc.push(line);
    }
    return acc;
  }, []);
}

function splitCsvOutsideParentheses(text) {
  const items = [];
  let current = "";
  let depth = 0;

  [...text].forEach((char) => {
    if (char === "(") depth += 1;
    if (char === ")") depth = Math.max(0, depth - 1);
    if (char === "," && depth === 0) {
      items.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  });

  if (current.trim()) items.push(current.trim());
  return items;
}

function splitCsvOutsideGroups(text) {
  const items = [];
  let current = "";
  let parenDepth = 0;
  let bracketDepth = 0;

  [...text].forEach((char) => {
    if (char === "(") parenDepth += 1;
    if (char === ")") parenDepth = Math.max(0, parenDepth - 1);
    if (char === "[") bracketDepth += 1;
    if (char === "]") bracketDepth = Math.max(0, bracketDepth - 1);
    if (char === "," && parenDepth === 0 && bracketDepth === 0) {
      items.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  });

  if (current.trim()) items.push(current.trim());
  return items;
}

function cleanDetailText(text) {
  return String(text || "")
    .replace(/-\s+/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function parseDetailDate(value) {
  const [day, month, year] = value.split("/").map(Number);
  return `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`;
}

function parseDetailMinute(value) {
  const match = String(value || "").match(/\d+/);
  return match ? Number(match[0]) : null;
}

function detailYear(date) {
  const year = Number(String(date || "").split("/")[2]);
  return Number.isFinite(year) ? year : 0;
}

function canonicalDetailPlayerName(name, date) {
  const cleanName = cleanDetailText(name);
  const key = normalizeMatchKey(cleanName);
  if (["ezaki badou zaki", "ezaki badou", "badou ezaki", "badou zaki"].includes(key)) {
    return "Badou Zaki";
  }
  if (key !== "noureddine jrindou") return cleanName;
  return detailYear(date) >= 1996 ? "Abdeltif Jrindou" : "Noureddine Naybet";
}

function parseDetailScorers(text, date) {
  return splitCsvOutsideParentheses(cleanDetailText(text.replace(/^Scorers?:\s*/i, ""))).map((item) => {
    const match = item.match(/^(.+?)\s+(\d+(?:\+\d+)?)'?\s*(pen)?/i);
    return match ? {
      name: canonicalDetailPlayerName(match[1], date),
      minute: match[2],
      penalty: Boolean(match[3])
    } : { name: canonicalDetailPlayerName(item, date), minute: "", penalty: false };
  }).filter((item) => item.name);
}

function parseDetailLineup(text, date) {
  const players = [];
  splitCsvOutsideParentheses(cleanDetailText(text.replace(/^Mor:\s*/i, ""))).forEach((item) => {
    const substitution = item.match(/^(.+?)\s+\((.+?)\s+(\d+)'?\)$/);
    const starterExit = item.match(/^(.+?)\s+\((\d+)'?\)$/);
    const unknownMinuteSubstitution = item.match(/^(.+?)\s+\((.+?)\)$/);
    if (starterExit) {
      const minute = parseDetailMinute(starterExit[2]) || 0;
      players.push({ name: canonicalDetailPlayerName(starterExit[1], date), starter: true, inMinute: 0, outMinute: minute, minutes: minute, goals: 0, cards: [] });
      return;
    }

    if (!substitution) {
      if (unknownMinuteSubstitution) {
        const starterName = canonicalDetailPlayerName(unknownMinuteSubstitution[1], date);
        const substituteName = canonicalDetailPlayerName(unknownMinuteSubstitution[2], date);
        players.push({ name: starterName, starter: true, inMinute: 0, outMinute: 90, minutes: 90, goals: 0, cards: [], replacedBy: substituteName });
        players.push({ name: substituteName, starter: false, inMinute: "", outMinute: "", minutes: 0, goals: 0, cards: [], replaces: starterName });
        return;
      }

      players.push({ name: canonicalDetailPlayerName(item, date), starter: true, inMinute: 0, outMinute: 90, minutes: 90, goals: 0, cards: [] });
      return;
    }

    const starterName = canonicalDetailPlayerName(substitution[1], date);
    const substituteName = canonicalDetailPlayerName(substitution[2], date);
    const minute = parseDetailMinute(substitution[3]) || 0;
    players.push({ name: starterName, starter: true, inMinute: 0, outMinute: minute, minutes: minute, goals: 0, cards: [] });
    players.push({ name: substituteName, starter: false, inMinute: minute, outMinute: 90, minutes: Math.max(0, 90 - minute), goals: 0, cards: [] });
  });
  return players;
}

function parseDetailCards(text, date) {
  return splitCsvOutsideParentheses(cleanDetailText(text.replace(/^Cards:\s*/i, ""))).map((item) => {
    const match = item.match(/^(.+?)\s+\[([YR])\s+(\d+)'?\]/i);
    return match ? {
      name: canonicalDetailPlayerName(match[1], date),
      type: match[2].toUpperCase(),
      minute: match[3]
    } : null;
  }).filter(Boolean);
}

function correctedDetailScorers(scorers, date, opponent) {
  if (date !== "17/07/1993" || normalizeMatchKey(opponent) !== "senegal") return scorers;
  return scorers.map((scorer) => {
    if (normalizeMatchKey(scorer.name) === "abdelmajid bouyboud" && String(scorer.minute) === "65") {
      return { ...scorer, name: "Rachid Daoudi", minute: "62" };
    }
    if (normalizeMatchKey(scorer.name) === "youssef fertout" && String(scorer.minute) === "75") {
      return { ...scorer, minute: "74" };
    }
    if (normalizeMatchKey(scorer.name) === "abdelmajid bouyboud" && String(scorer.minute) === "8") {
      return { ...scorer, minute: "9" };
    }
    return scorer;
  });
}

function inferUnknownSubstitutionMinutes(players, scorers) {
  players
    .filter((player) => !player.starter && player.replaces && player.inMinute === "")
    .forEach((substitute) => {
      const scorer = scorers.find((item) => normalizeMatchKey(item.name) === normalizeMatchKey(substitute.name) && parseDetailMinute(item.minute));
      if (!scorer) return;
      const inferredMinute = Math.max(0, (parseDetailMinute(scorer.minute) || 0) - 3);
      const starter = players.find((player) => player.starter && normalizeMatchKey(player.name) === normalizeMatchKey(substitute.replaces));
      substitute.inMinute = inferredMinute;
      substitute.outMinute = 90;
      substitute.minutes = Math.max(0, 90 - inferredMinute);
      substitute.estimated = true;
      if (starter) {
        starter.outMinute = inferredMinute;
        starter.minutes = inferredMinute;
        starter.estimated = true;
      }
    });
}

function addDetailPlayerEvent(players, name, updater) {
  const player = players.find((item) => normalizeMatchKey(item.name) === normalizeMatchKey(name));
  if (player) updater(player);
}

function parseWcMatchDetailBlocks(lines) {
  const blocks = [];
  let current = [];

  (lines || []).forEach((line) => {
    if (/^\d{2}\/\d{2}\/\d{4},/.test(line) && current.length) {
      blocks.push(current);
      current = [line];
    } else if (/^\d{2}\/\d{2}\/\d{4},/.test(line) || current.length) {
      current.push(line);
    }
  });

  if (current.length) blocks.push(current);
  return blocks;
}

function parseWcMatchDetail(block) {
  const dateLine = block[0] || "";
  const dateParts = dateLine.split(",");
  const date = parseDetailDate(dateParts.shift().trim());
  const city = cleanDetailText(dateParts.shift() || "");
  const stadium = cleanDetailText(dateParts.shift() || "");
  const attendance = cleanDetailText(dateParts.join(","));
  const scoreLine = block.find((line) => /\bMOROCCO\b/i.test(line) && /\d+-\d+/.test(line)) || "";
  const scoreMatch = cleanDetailText(scoreLine).match(/^(.+?)\s+(\d+)-(\d+)\s+(.+?)\s+\[HT\s+([^\]]+)\]/i);
  if (!scoreMatch) return null;

  const home = scoreMatch[1].trim();
  const away = scoreMatch[4].trim();
  const isMoroccoHome = normalizeMatchKey(home) === "morocco";
  const opponent = isMoroccoHome ? away : home;
  const score = isMoroccoHome ? `${scoreMatch[2]}-${scoreMatch[3]}` : `${scoreMatch[3]}-${scoreMatch[2]}`;
  const halfTime = scoreMatch[5];
  const scorerStart = block.findIndex((line) => /^Scorers?:/i.test(line));
  const morStart = block.findIndex((line) => /^Mor:/i.test(line));
  const refereeLine = block.find((line) => /^Referee:/i.test(line)) || "";
  const cardsStart = block.findIndex((line) => /^Cards:/i.test(line));
  const scorerText = scorerStart >= 0 && morStart > scorerStart
    ? block.slice(scorerStart, morStart).join(" ")
    : "";
  const lineupEndCandidates = [cardsStart, block.findIndex((line) => /^Referee:/i.test(line))].filter((index) => index > morStart);
  const lineupEnd = lineupEndCandidates.length ? Math.min(...lineupEndCandidates) : block.length;
  const lineupText = morStart >= 0 ? block.slice(morStart, lineupEnd).join(" ") : "";
  const cardsText = cardsStart >= 0 ? block.slice(cardsStart).join(" ") : "";
  const parsedScorers = scorerText ? parseDetailScorers(scorerText, date) : [];
  const scorers = correctedDetailScorers(parsedScorers, date, opponent);
  const cards = cardsText ? parseDetailCards(cardsText, date) : [];
  const players = parseDetailLineup(lineupText, date);
  inferUnknownSubstitutionMinutes(players, scorers);

  scorers.forEach((scorer) => {
    addDetailPlayerEvent(players, scorer.name, (player) => {
      player.goals += 1;
    });
  });
  cards.forEach((card) => {
    addDetailPlayerEvent(players, card.name, (player) => {
      player.cards.push(card);
    });
  });

  return {
    key: nationalDetailKey(date, opponent),
    date,
    city,
    stadium,
    attendance,
    opponent,
    score,
    halfTime,
    scorers,
    players,
    referee: cleanDetailText(refereeLine.replace(/^Referee:\s*/i, "")),
    cards
  };
}

function parseInternational2000Blocks(lines) {
  const blocks = [];
  let current = null;
  let currentCompetition = "";

  (lines || []).forEach((line) => {
    const trimmed = line.trim();
    if (/^[A-Z][A-Z ]+$/.test(trimmed) && !/^(TYPE OF MATCH|DD|VERSUS|SCORE|TEAM|COACH|REFEREE)$/.test(trimmed) && !/^\d{4}$/.test(trimmed)) {
      currentCompetition = trimmed;
    }

    if (/^\d{2}\/\d{2}\/\d{4}\s+-/.test(trimmed)) {
      if (current) blocks.push(current);
      current = { competition: currentCompetition, lines: [line] };
    } else if (current) {
      current.lines.push(line);
    }
  });

  if (current) blocks.push(current);
  return blocks;
}

function parseInternationalDateLine(line) {
  const match = cleanDetailText(line).match(/^(\d{2}\/\d{2}\/\d{4})\s+-\s+(.+?)\s+\[([^\]]+)\],?\s*(.*)$/);
  if (!match) return null;
  return {
    date: parseDetailDate(match[1]),
    city: match[2].trim(),
    stadium: "",
    venue: match[3].trim(),
    attendance: cleanDetailText(match[4] || "")
  };
}

function titleCaseName(name) {
  return cleanDetailText(name)
    .toLowerCase()
    .replace(/\b([a-zà-ÿ])/g, (letter) => letter.toUpperCase())
    .replace(/\bEl-/g, "El-")
    .replace(/\bM'/g, "M'");
}

function parseInternationalScorers(text, date) {
  const items = splitCsvOutsideGroups(cleanDetailText(text.replace(/^Scorers?:\s*/i, "")));
  const scorers = [];
  let lastName = "";

  items.forEach((item) => {
    const named = item.match(/^(.+?)\s+(\d+(?:\+\d+)?)'?\s*(Pen)?$/i);
    const repeatedMinute = item.match(/^(\d+(?:\+\d+)?)'?\s*(Pen)?$/i);
    if (named) {
      lastName = canonicalDetailPlayerName(titleCaseName(named[1]), date);
      scorers.push({ name: lastName, minute: named[2], penalty: Boolean(named[3]) });
    } else if (repeatedMinute && lastName) {
      scorers.push({ name: lastName, minute: repeatedMinute[1], penalty: Boolean(repeatedMinute[2]) });
    }
  });

  return scorers;
}

function parseInternationalTeam(text, date) {
  return splitCsvOutsideGroups(cleanDetailText(text.replace(/^Team:\s*/i, "").replace(/\.$/, ""))).flatMap((item) => {
    const bracketParts = [...item.matchAll(/\[([^\]]+)\]/g)].map((match) => match[1].trim());
    const cards = bracketParts
      .filter((part) => /^[YR]$/i.test(part))
      .map((part) => ({ type: part.toUpperCase(), minute: "" }));
    const substitutionPart = bracketParts.find((part) => /\d/.test(part) && !/^[YR]$/i.test(part));
    const starterName = canonicalDetailPlayerName(titleCaseName(item.replace(/\[[^\]]+\]/g, "")), date);

    if (!substitutionPart) {
      return [{ name: starterName, starter: true, inMinute: 0, outMinute: 90, minutes: 90, goals: 0, cards }];
    }

    const substitution = substitutionPart.replace(/\[[YR]\]/gi, "").match(/^(.+?)\s+(\d+(?:\+\d+)?)'?$/);
    if (!substitution) {
      return [{ name: starterName, starter: true, inMinute: 0, outMinute: 90, minutes: 90, goals: 0, cards }];
    }

    const minute = parseDetailMinute(substitution[2]) || 0;
    const substituteCards = [...substitutionPart.matchAll(/\[([YR])\]/gi)].map((match) => ({ type: match[1].toUpperCase(), minute: "" }));
    const substituteName = canonicalDetailPlayerName(titleCaseName(substitution[1]), date);
    return [
      { name: starterName, starter: true, inMinute: 0, outMinute: minute, minutes: minute, goals: 0, cards },
      { name: substituteName, starter: false, inMinute: minute, outMinute: 90, minutes: Math.max(0, 90 - minute), goals: 0, cards: substituteCards }
    ];
  });
}

function parseInternational2000Detail(block) {
  const lines = block.lines;
  const dateInfo = parseInternationalDateLine(lines[0] || "");
  if (!dateInfo) return null;
  const date = dateInfo.date;
  const valueAfter = (label) => {
    const index = lines.findIndex((line) => new RegExp(`^${label}:`, "i").test(line.trim()));
    if (index < 0) return "";
    const collected = [lines[index].trim()];
    for (let i = index + 1; i < lines.length; i += 1) {
      if (/^\w+:\s*/.test(lines[i].trim()) || /^\d{2}\/\d{2}\/\d{4}\s+-/.test(lines[i].trim()) || /^[A-Z][A-Z ]+$/.test(lines[i].trim())) break;
      if (lines[i].trim()) collected.push(lines[i].trim());
    }
    return cleanDetailText(collected.join(" "));
  };

  let opponent = cleanDetailText(valueAfter("Versus").replace(/^Versus:\s*/i, ""));
  if (date === "18/06/2005" && normalizeMatchKey(opponent) === "morocco" && normalizeMatchKey(dateInfo.venue) === "kenya") {
    opponent = "KENYA";
  }
  const scoreLine = valueAfter("Score").replace(/^Score:\s*/i, "");
  const scoreMatch = scoreLine.match(/^[WDL]\s+(\d+)-(\d+)/i);
  const score = scoreMatch ? `${scoreMatch[1]}-${scoreMatch[2]}` : "";
  const scorerText = valueAfter("Scorers?");
  const teamText = valueAfter("Team");
  const referee = cleanDetailText(valueAfter("Referee").replace(/^Referee:\s*/i, "").replace(/\.$/, ""));
  const coach = cleanDetailText(valueAfter("Coach").replace(/^Coach:\s*/i, "").replace(/\.$/, ""));
  const scorers = scorerText ? parseInternationalScorers(scorerText, date) : [];
  const players = teamText ? parseInternationalTeam(teamText, date) : [];

  scorers.forEach((scorer) => {
    addDetailPlayerEvent(players, scorer.name, (player) => {
      player.goals += 1;
    });
  });

  return {
    key: nationalDetailKey(date, opponent),
    date,
    city: dateInfo.city,
    stadium: dateInfo.venue,
    attendance: dateInfo.attendance,
    opponent,
    score,
    halfTime: "",
    scorers,
    players,
    referee,
    coach,
    cards: players.flatMap((player) => player.cards.map((card) => ({ ...card, name: player.name }))),
    source: block.competition
  };
}

const wcMatchDetailsSource = typeof wcMatchDetailsRawLines === "undefined"
  ? (globalThis.wcMatchDetailsRawLines || [])
  : wcMatchDetailsRawLines;
const international2000DetailsSource = typeof international2000DetailsRawLines === "undefined"
  ? (globalThis.international2000DetailsRawLines || [])
  : international2000DetailsRawLines;
const parsedWcMatchDetails = parseWcMatchDetailBlocks(wcMatchDetailsSource)
  .map(parseWcMatchDetail)
  .filter(Boolean);
const parsedInternational2000Details = Array.isArray(globalThis.international2000DetailsPreparsed)
  ? globalThis.international2000DetailsPreparsed
  : parseInternational2000Blocks(international2000DetailsSource)
    .map(parseInternational2000Detail)
    .filter(Boolean);
const parsedInternational2016To2020Details = Array.isArray(globalThis.international2016To2020DetailsPreparsed)
  ? globalThis.international2016To2020DetailsPreparsed
  : [];
const nationalMatchDetails = new Map();
parsedWcMatchDetails.forEach((detail) => {
  nationalMatchDetails.set(detail.key, detail);
});
parsedInternational2000Details.forEach((detail) => {
  if (!nationalMatchDetails.has(detail.key)) nationalMatchDetails.set(detail.key, detail);
});
parsedInternational2016To2020Details.forEach((detail) => {
  if (!nationalMatchDetails.has(detail.key)) nationalMatchDetails.set(detail.key, detail);
});
globalThis.nationalDetailDebug = {
  wc: parsedWcMatchDetails.length,
  international2000: parsedInternational2000Details.length,
  international2016To2020: parsedInternational2016To2020Details.length,
  total: nationalMatchDetails.size
};

const nationalMatchDetailsByDate = [...nationalMatchDetails.values()].reduce((acc, detail) => {
  if (!acc.has(detail.date)) acc.set(detail.date, []);
  acc.get(detail.date).push(detail);
  return acc;
}, new Map());
const nationalMatchDetailsByDateOpponent = [...nationalMatchDetails.values()].reduce((acc, detail) => {
  const key = `${detail.date}|${normalizeNationalOpponentKey(detail.opponent)}`;
  if (!acc.has(key)) acc.set(key, []);
  acc.get(key).push(detail);
  return acc;
}, new Map());

function adjacentDateLabels(label) {
  const match = String(label || "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return [];
  const base = new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1]));
  return [-1, 1].map((offset) => {
    const shifted = new Date(base);
    shifted.setDate(base.getDate() + offset);
    return `${String(shifted.getDate()).padStart(2, "0")}/${String(shifted.getMonth() + 1).padStart(2, "0")}/${shifted.getFullYear()}`;
  });
}

function detailMatchesNationalMatch(detail, match) {
  return normalizeNationalOpponentKey(detail.opponent) === normalizeNationalOpponentKey(match.opponent)
    && (!detail.score || detail.score === `${match.goalsFor}-${match.goalsAgainst}`);
}

function detailForNationalMatch(match) {
  const exact = nationalMatchDetails.get(match.detailKey);
  if (exact) return exact;
  const indexed = nationalMatchDetailsByDateOpponent.get(`${match.date}|${normalizeNationalOpponentKey(match.opponent)}`) || [];
  const indexedMatch = indexed.find((detail) => !detail.score || detail.score === `${match.goalsFor}-${match.goalsAgainst}`) || indexed[0];
  if (indexedMatch) return indexedMatch;
  const sameDate = nationalMatchDetailsByDate.get(match.date) || [];
  if (sameDate.length === 1) return sameDate[0];
  const sameDayMatch = sameDate.find((detail) => detailMatchesNationalMatch(detail, match));
  if (sameDayMatch) return sameDayMatch;
  return adjacentDateLabels(match.date)
    .flatMap((date) => nationalMatchDetailsByDate.get(date) || [])
    .find((detail) => detailMatchesNationalMatch(detail, match)) || null;
}

function parseNationalMatchLine(line) {
  if (!/^\d{2}\/\d{2}\/\d{2}/.test(line)) return null;
  let working = line.trim();
  let scorers = [];
  const scorerMatch = working.match(/\[([^\]]*)\]\s*$/);
  if (scorerMatch && !/^\d+-\d+$/.test(scorerMatch[1].trim())) {
    scorers = parseNationalScorers(scorerMatch[1]);
    working = working.slice(0, scorerMatch.index).trim();
  }

  const match = working.match(/^(\d{2}\/\d{2}\/\d{2})\s+(.+?)\s+\[([^\]]+)\]\s+([WLDwld])\s*(\d+)-(\d+)\s+\[([^\]]+)\]\s*(?:\[([^\]]+)\])?\s*(AET)?\s*([-\d]+)?\s+(.+?)\s*$/);
  if (!match) return null;

  const date = parseNationalDate(match[1]);
  const competitionParts = match[11].trim().split(/\s+/);
  const competition = competitionParts.shift() || "";
  const phase = competitionParts.join(" ");
  const resultCode = match[4].toUpperCase();
  const venueCode = match[3].trim();

  return {
    date: date.label,
    year: date.year,
    opponent: match[2].trim(),
    detailKey: nationalDetailKey(date.label, match[2].trim()),
    venueCode,
    venue: venueCode === "MAR" ? "Maroc" : venueCode,
    result: resultCode === "W" ? "Victoire" : resultCode === "L" ? "Defaite" : "Nul",
    goalsFor: Number(match[5]),
    goalsAgainst: Number(match[6]),
    halfTime: match[7],
    penalties: match[8] || "",
    extraTime: Boolean(match[9]),
    crowd: match[10] || "",
    competition,
    phase,
    scorers
  };
}

const nationalMatches = normalizedNationalRawLines(typeof nationalTeamRawLines === "undefined" ? [] : nationalTeamRawLines)
  .map(parseNationalMatchLine)
  .filter((match) => match && match.year >= 1957);

function renderSelectOptions(select, options, allLabel, currentValue = "all") {
  select.innerHTML = [
    `<option value="all">${allLabel}</option>`,
    ...options.map((option) => `<option value="${option}">${option}</option>`)
  ].join("");
  select.value = options.includes(currentValue) ? currentValue : "all";
}

function getNationalFilters() {
  return {
    squad: els.nationalSquadSelect.value || "A",
    year: els.nationalYearSelect.value || "all",
    competition: els.nationalCompetitionSelect.value || "all",
    opponent: els.nationalOpponentSelect.value || "all",
    venue: els.nationalVenueSelect.value || "all"
  };
}

function filterNationalMatches(filters, include = {}) {
  const { squad = true, year = true, competition = true, opponent = true, venue = true } = include;
  return nationalMatches.filter((match) => {
    if (squad && filters.squad !== "all" && nationalSquadType(match) !== filters.squad) return false;
    if (year && filters.year !== "all" && String(match.year) !== filters.year) return false;
    if (competition && filters.competition !== "all" && match.competition !== filters.competition) return false;
    if (opponent && filters.opponent !== "all" && match.opponent !== filters.opponent) return false;
    if (venue && filters.venue !== "all" && match.venue !== filters.venue) return false;
    return true;
  });
}

function renderNationalSelectors() {
  const current = getNationalFilters();
  els.nationalSquadSelect.value = ["A", "A_PRIME", "U23", "all"].includes(current.squad) ? current.squad : "A";
  const withSquad = { ...current, squad: els.nationalSquadSelect.value || "A" };

  const years = uniqueSortedOptions(filterNationalMatches(withSquad, { year: false }).map((match) => String(match.year))).sort((a, b) => Number(b) - Number(a));
  renderSelectOptions(els.nationalYearSelect, years, "Toutes les annees", current.year);
  const withYear = { ...withSquad, year: els.nationalYearSelect.value || "all" };

  const competitions = uniqueSortedOptions(filterNationalMatches(withYear, { competition: false }).map((match) => match.competition));
  renderSelectOptions(els.nationalCompetitionSelect, competitions, "Toutes les competitions", current.competition);
  const withCompetition = { ...withYear, competition: els.nationalCompetitionSelect.value || "all" };

  const opponents = uniqueSortedOptions(filterNationalMatches(withCompetition, { opponent: false }).map((match) => match.opponent));
  renderSelectOptions(els.nationalOpponentSelect, opponents, "Tous les adversaires", current.opponent);
  const withOpponent = { ...withCompetition, opponent: els.nationalOpponentSelect.value || "all" };

  const venues = uniqueSortedOptions(filterNationalMatches(withOpponent, { venue: false }).map((match) => match.venue));
  renderSelectOptions(els.nationalVenueSelect, venues, "Tous les lieux", current.venue);
}

function renderNationalTeam() {
  renderNationalSelectors();
  const matches = filterNationalMatches(getNationalFilters());
  const scorerStats = computeNationalScorerStats(matches);
  const detailedPlayerStats = computeNationalDetailedPlayerStats(matches);
  const detailedMatches = matches.map(detailForNationalMatch).filter(Boolean);
  const wins = matches.filter((match) => match.result === "Victoire").length;
  const draws = matches.filter((match) => match.result === "Nul").length;
  const losses = matches.filter((match) => match.result === "Defaite").length;
  const goalsFor = matches.reduce((sum, match) => sum + match.goalsFor, 0);
  const goalsAgainst = matches.reduce((sum, match) => sum + match.goalsAgainst, 0);

  els.nationalCards.innerHTML = [
    kpiCard("Matchs", matches.length),
    kpiCard("Victoires", wins, "positive"),
    kpiCard("Nuls", draws),
    kpiCard("Defaites", losses, "negative"),
    kpiCard("Buts marques", goalsFor),
    kpiCard("Buts encaisses", goalsAgainst),
    kpiCard("Difference", `${goalsFor - goalsAgainst > 0 ? "+" : ""}${goalsFor - goalsAgainst}`, "info"),
    kpiCard("Victoire %", percentage(wins, matches.length), "warning"),
    kpiCard("Fiches", detailedMatches.length, "info")
  ].join("");

  els.nationalScorersBody.innerHTML = scorerStats.slice(0, 25).map((scorer, index) => `
    <tr>
      <td>${index + 1}</td>
      <td><strong>${scorer.name}</strong></td>
      <td>${scorer.goals}</td>
      <td>${scorer.matches}</td>
      <td>${scorer.penalties}</td>
      <td>${scorer.years.join(", ")}</td>
    </tr>
  `).join("") || `
    <tr>
      <td colspan="6" class="empty-results">Aucun buteur ne correspond aux filtres.</td>
    </tr>
  `;

  els.nationalDetailedPlayersBody.innerHTML = detailedPlayerStats.slice(0, 30).map((player) => `
    <tr>
      <td><strong>${player.name}</strong></td>
      <td>${player.matches}</td>
      <td>${player.starts}</td>
      <td>${player.minutes}</td>
      <td>${player.goals || ""}</td>
      <td>${player.yellow || ""}</td>
      <td>${player.red || ""}</td>
    </tr>
  `).join("") || `
    <tr>
      <td colspan="7" class="empty-results">Aucune feuille detaillee ne correspond aux filtres.</td>
    </tr>
  `;

  els.nationalMatchesBody.innerHTML = matches.map((match) => {
    const detail = detailForNationalMatch(match);
    return `
      <tr>
        <td><strong>${match.date}</strong></td>
        <td>${detail ? `<button class="detail-pill-button" type="button" data-detail-key="${detail.key}" title="Voir la feuille de match" aria-label="Voir la feuille de match">Fiche</button>` : ""}</td>
        <td>${match.opponent}</td>
        <td><span class="place-pill">${match.venue}</span></td>
        <td>${match.competition}</td>
        <td>${match.phase}${match.extraTime ? `<small class="match-note">Apres prolongation</small>` : ""}${match.penalties ? `<small class="match-note">TAB ${match.penalties}</small>` : ""}</td>
        <td><span class="score-pill ${match.result.toLowerCase()}">${match.goalsFor}-${match.goalsAgainst}</span></td>
        <td>${match.result}</td>
        <td>${match.scorers.length ? match.scorers.map(formatNationalScorer).join(" ; ") : ""}</td>
      </tr>
    `;
  }).join("") || `
    <tr>
      <td colspan="9" class="empty-results">Aucun match ne correspond aux filtres.</td>
    </tr>
  `;
}

function renderNationalMatchDetail(detail) {
  const playerRows = detail.players.map((player) => `
    <tr>
      <td><strong>${player.name}</strong></td>
      <td>${player.starter ? "Tit." : "Remp."}</td>
      <td>${player.starter ? "0" : player.inMinute}${player.estimated ? "*" : ""}</td>
      <td>${player.outMinute}${player.estimated ? "*" : ""}</td>
      <td>${player.minutes}</td>
      <td>${player.goals || ""}</td>
      <td>${player.cards.map((card) => `${card.type === "Y" ? "Jaune" : "Rouge"} ${card.minute}'`).join(" ; ")}</td>
    </tr>
  `).join("");

  els.nationalDetailContent.innerHTML = `
    <div class="dialog-heading">
      <p class="eyebrow">Feuille de match</p>
      <h3>Maroc - ${detail.opponent}</h3>
      <p>${detail.date} | ${detail.city}${detail.stadium ? `, ${detail.stadium}` : ""}${detail.attendance ? ` | ${detail.attendance}` : ""}</p>
      <p><strong>Score Maroc:</strong> ${detail.score}${detail.halfTime ? ` | <strong>Mi-temps:</strong> ${detail.halfTime}` : ""}${detail.penaltyShootout ? ` | <strong>Tirs au but:</strong> ${detail.penaltyShootout}` : ""}</p>
      ${detail.referee ? `<p><strong>Arbitre:</strong> ${detail.referee}</p>` : ""}
      ${detail.coach ? `<p><strong>Selectionneur:</strong> ${detail.coach}</p>` : ""}
      ${detail.scorers.length ? `<p><strong>Buteurs:</strong> ${detail.scorers.map((scorer) => `${scorer.name} ${scorer.minute}${scorer.penalty ? " pen" : ""}`).join(" ; ")}</p>` : ""}
      ${detail.players.some((player) => player.estimated) ? `<p><small>* Minute de changement estimee depuis le but du remplacant.</small></p>` : ""}
    </div>
    <div class="table-wrap">
      <table class="ranking-table">
        <thead>
          <tr>
            <th>Joueur</th>
            <th>Statut</th>
            <th>Entree</th>
            <th>Sortie</th>
            <th>Min.</th>
            <th>Buts</th>
            <th>Cartons</th>
          </tr>
        </thead>
        <tbody>${playerRows}</tbody>
      </table>
    </div>
  `;
}

function renderHonours() {
  const honours = buildHonoursData();
  els.honoursBySeasonBody.innerHTML = honours.bySeason.map((row) => `
    <tr>
      <td><strong>${row.season}</strong></td>
      <td>${row.league}</td>
      <td>${row.cup}</td>
    </tr>
  `).join("");

  const renderList = (items) => items.map((item, index) => `
    <div class="honours-item">
      <span>${index + 1}</span>
      <strong>${item.team}</strong>
      <em>${item.count + (item.preIndependenceCount || 0)} titre${item.count + (item.preIndependenceCount || 0) > 1 ? "s" : ""}</em>
      <small>${[
        item.seasons.join(", "),
        item.preIndependenceSeasons?.length ? `<b class="pre-independence-title">${item.preIndependenceSeasons.join(", ")}</b>` : ""
      ].filter(Boolean).join(" | ")}</small>
    </div>
  `).join("");

  els.leagueHonoursList.innerHTML = renderList(honours.league);
  els.cupHonoursList.innerHTML = renderList(honours.cup);
}

function renderStatistics() {
  renderStatsSelectors();

  const filteredMatches = getFilteredStatsMatches();
  const fallback = rankingFallbackStats(
    els.teamStatsSelect.value,
    selectedFilterValues(els.statsSeasonSelect),
    selectedFilterValues(els.competitionStatsSelect),
    els.opponentStatsSelect.value || "all",
    els.placeStatsSelect.value || "all"
  );
  const fallbackSeasonIds = new Set((fallback?.rows || []).map(({ season }) => season.id));
  const matchesForTotals = fallback
    ? filteredMatches.filter((match) => !(fallbackSeasonIds.has(match.seasonId) && filterValueIncludes(["Championnat", "Championnat pre-independance"], match.competition)))
    : filteredMatches;
  const total = matchesForTotals.length + (fallback?.played || 0);
  const wins = matchesForTotals.filter((match) => match.result === "Victoire").length;
  const draws = matchesForTotals.filter((match) => match.result === "Nul").length;
  const losses = matchesForTotals.filter((match) => match.result === "Defaite").length;
  const goalsFor = matchesForTotals.reduce((sum, match) => sum + match.goalsFor, 0);
  const goalsAgainst = matchesForTotals.reduce((sum, match) => sum + match.goalsAgainst, 0);
  const cleanSheets = filteredMatches.filter((match) => match.goalsAgainst === 0).length;
  const totalWins = wins + (fallback?.won || 0);
  const totalDraws = draws + (fallback?.drawn || 0);
  const totalLosses = losses + (fallback?.lost || 0);
  const totalGoalsFor = goalsFor + (fallback?.goalsFor || 0);
  const totalGoalsAgainst = goalsAgainst + (fallback?.goalsAgainst || 0);

  els.statsCards.innerHTML = [
    kpiCard("Total matchs", total),
    kpiCard("Victoires", totalWins, "positive"),
    kpiCard("Victoire %", percentage(totalWins, total), "warning"),
    kpiCard("Buts marques", totalGoalsFor),
    kpiCard("Buts encaisses", totalGoalsAgainst),
    kpiCard("Clean sheets", cleanSheets, "info"),
    kpiCard("Nuls", totalDraws),
    kpiCard("Defaites", totalLosses, "negative")
  ].join("");

  els.statsDataNote.innerHTML = fallback
    ? `<p>Les classements disponibles completent les statistiques avec ${fallback.rows.length} ligne${fallback.rows.length > 1 ? "s" : ""} sans grille de matchs detaillee. Les clean sheets restent calculees uniquement depuis les matchs detailles.</p>`
    : "";

  const matchRows = filteredMatches.map((match) => `
    <tr>
      <td><strong>${match.seasonLabel}</strong></td>
      <td>${match.competition}</td>
      <td>${match.phase}</td>
      <td>${renderClubCell(match.teamName, match.teamCode)}</td>
      <td>${canonicalTeamName(match.opponentName)}</td>
      <td><span class="place-pill">${match.place}</span></td>
      <td><span class="score-pill ${match.result.toLowerCase()}">${match.score}</span></td>
      <td>${match.result}</td>
      <td>${match.note ? `<small class="match-note visible-note">${match.note}</small>` : ""}</td>
    </tr>
  `).join("");
  const fallbackRows = fallback ? fallback.rows.map(({ season, row, phase }) => `
    <tr>
      <td><strong>${season.label}</strong></td>
      <td>${leagueCompetitionName(season)}</td>
      <td>${phase || "Classement final"}</td>
      <td>${renderClubCell(clubNameForSeason(season, row.code), row.code)}</td>
      <td>Tous adversaires</td>
      <td><span class="place-pill">Tous lieux</span></td>
      <td><span class="score-pill">${row.goalsFor}-${row.goalsAgainst}</span></td>
      <td>${row.won} V, ${row.drawn} N, ${row.lost} D</td>
      <td></td>
    </tr>
  `).join("") : "";

  els.filteredMatchesBody.innerHTML = matchRows || fallbackRows ? `${matchRows}${fallbackRows}` : `
    <tr>
      <td colspan="9" class="empty-results">Aucun match ne correspond aux filtres.</td>
    </tr>
  `;
}

function normalizeCoachName(name) {
  if (!name) return "Non renseigne";
  let n = name.trim().replace(/\.$/, "").replace(/^Coach:\s*/i, "").replace(/^\[COACH:\s*/i, "").replace(/\]$/, "");
  
  const lower = n.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/'/g, "");
    
  if (lower.includes("ezaki") || lower.includes("baddou") || lower.includes("badou")) return "Badou ZAKI";
  if (lower.includes("renard")) return "Hervé RENARD";
  if (lower.includes("halilhodzic") || lower.includes("khalisosic") || lower.includes("vahid")) return "Vahid HALILHODZIC";
  if (lower.includes("fakhir")) return "M'hamed FAKHIR";
  if (lower.includes("ammouta")) return "Lhoussaine AMMOUTA";
  if (lower.includes("lemerre")) return "Roger LEMERRE";
  if (lower.includes("michel")) return "Henri MICHEL";
  if (lower.includes("moumen")) return "Hassan MOUMEN";
  if (lower.includes("coelho")) return "Humberto COELHO";
  if (lower.includes("sellami")) return "Jamal SELLAMI";
  if (lower.includes("kasperczak")) return "Henryk KASPERCZAK";
  if (lower.includes("troussier")) return "Philippe TROUSSIER";
  if (lower.includes("madih")) return "Mustapha MADIH";
  
  return n;
}

function computeCoachStats(matches) {
  const coaches = new Map();

  // Build a lookup of 'A' matches by date
  const aMatchByDate = new Map();
  matches.forEach((match) => {
    if (nationalSquadType(match) === "A") {
      aMatchByDate.set(match.date, match);
    }
  });

  // Iterate over all filled fiches (details)
  for (const detail of nationalMatchDetails.values()) {
    const match = aMatchByDate.get(detail.date);
    if (!match) continue; // Skip if it's not an 'A' match or not in our summary list

    let rawCoachName = detail.coach ? detail.coach : "Non renseigne";
    let coachName = normalizeCoachName(rawCoachName);

    if (coachName === "Non renseigne" || coachName === "NAME" || coachName.includes("NAME.")) continue;

    if (!coaches.has(coachName)) {
      coaches.set(coachName, {
        name: coachName,
        matches: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        firstMatch: match,
        lastMatch: match,
      });
    }

    const stats = coaches.get(coachName);
    stats.matches++;
    if (match.result === "Victoire") stats.wins++;
    else if (match.result === "Nul") stats.draws++;
    else if (match.result === "Defaite") stats.losses++;
    
    // Sort matches chronologically (matches array is newest first usually, but checking)
    if (match.year < stats.firstMatch.year || (match.year === stats.firstMatch.year && match.date < stats.firstMatch.date)) {
      stats.firstMatch = match;
    }
    if (match.year > stats.lastMatch.year || (match.year === stats.lastMatch.year && match.date > stats.lastMatch.date)) {
      stats.lastMatch = match;
    }

    if (match.goalsFor !== undefined && match.goalsAgainst !== undefined) {
      stats.goalsFor += match.goalsFor;
      stats.goalsAgainst += match.goalsAgainst;
    }
  }

  return [...coaches.values()].sort((a, b) => b.matches - a.matches);
}

function renderCoaches() {
  const stats = computeCoachStats(nationalMatches);
  els.coachesBody.innerHTML = stats.map((stat) => {
    const winRate = stat.matches > 0 ? ((stat.wins / stat.matches) * 100).toFixed(1) : "0.0";
    return `
      <tr>
        <th scope="row">${stat.name}</th>
        <td>${stat.firstMatch.year} - ${stat.lastMatch.year}</td>
        <td><strong>${stat.matches}</strong></td>
        <td style="color: var(--green)">${stat.wins}</td>
        <td style="color: var(--muted)">${stat.draws}</td>
        <td style="color: var(--red)">${stat.losses}</td>
        <td>${stat.goalsFor}</td>
        <td>${stat.goalsAgainst}</td>
        <td><strong>${winRate}%</strong></td>
      </tr>
    `;
  }).join("");
}

function renderAll() {
  renderOverview();
  renderRanking();
  renderMatchGrid();
  renderCup();
  renderStatistics();
  renderHonours();
  renderNationalTeam();
  renderCoaches();
}

function setActiveTab(tabName) {
  state.activeTab = tabName;
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.tab === tabName);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === tabName);
  });
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => setActiveTab(tab.dataset.tab));
});

els.clubSearch.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderRanking();
});

els.seasonSelect.addEventListener("change", (event) => {
  state.season = seasons.find((season) => season.id === event.target.value) || seasons[0];
  state.query = "";
  els.clubSearch.value = "";
  renderAll();
});

[
  els.teamStatsSelect,
  els.opponentStatsSelect,
  els.placeStatsSelect
].forEach((select) => select.addEventListener("change", renderStatistics));

[
  els.nationalSquadSelect,
  els.nationalYearSelect,
  els.nationalCompetitionSelect,
  els.nationalOpponentSelect,
  els.nationalVenueSelect
].forEach((select) => select.addEventListener("change", renderNationalTeam));

els.resetNationalFilters.addEventListener("click", () => {
  els.nationalSquadSelect.value = "A";
  els.nationalYearSelect.value = "all";
  els.nationalCompetitionSelect.value = "all";
  els.nationalOpponentSelect.value = "all";
  els.nationalVenueSelect.value = "all";
  renderNationalTeam();
});

els.nationalMatchesBody.addEventListener("click", (event) => {
  const button = event.target.closest("[data-detail-key]");
  if (!button) return;
  const detail = nationalMatchDetails.get(button.dataset.detailKey);
  if (!detail) return;
  renderNationalMatchDetail(detail);
  if (typeof els.nationalDetailDialog.showModal === "function") {
    els.nationalDetailDialog.showModal();
  } else {
    els.nationalDetailDialog.setAttribute("open", "");
  }
});

els.closeNationalDetail.addEventListener("click", () => {
  els.nationalDetailDialog.close();
});

els.nationalDetailDialog.addEventListener("click", (event) => {
  if (event.target === els.nationalDetailDialog) {
    els.nationalDetailDialog.close();
  }
});

function handleCheckboxFilterChange(event) {
  const container = event.currentTarget;
  const changedInput = event.target.closest("input[type='checkbox']");
  if (!changedInput) return;
  const allInput = container.querySelector("input[value='all']");
  const otherInputs = [...container.querySelectorAll("input[type='checkbox']")].filter((input) => input.value !== "all");

  if (changedInput.value === "all" && changedInput.checked) {
    otherInputs.forEach((input) => {
      input.checked = false;
    });
  } else if (changedInput.value !== "all" && changedInput.checked && allInput) {
    allInput.checked = false;
  }

  if (!container.querySelector("input[type='checkbox']:checked") && allInput) {
    allInput.checked = true;
  }

  updateCheckboxFilterSummary(container);
}

els.statsSeasonSelect.addEventListener("change", handleCheckboxFilterChange);
els.competitionStatsSelect.addEventListener("change", handleCheckboxFilterChange);

function handleCheckboxFilterClick(event) {
  const applyButton = event.target.closest(".checkbox-filter-apply");
  if (!applyButton) return;
  event.currentTarget.open = false;
  renderStatistics();
}

els.statsSeasonSelect.addEventListener("click", handleCheckboxFilterClick);
els.competitionStatsSelect.addEventListener("click", handleCheckboxFilterClick);

els.resetStatsFilters.addEventListener("click", () => {
  setSelectedFilterValues(els.statsSeasonSelect, ["all"], [...els.statsSeasonSelect.querySelectorAll("input[type='checkbox']")].map((input) => input.value));
  setSelectedFilterValues(els.competitionStatsSelect, ["all"], [...els.competitionStatsSelect.querySelectorAll("input[type='checkbox']")].map((input) => input.value));
  els.opponentStatsSelect.value = "all";
  els.placeStatsSelect.value = "all";
  renderStatistics();
});

document.querySelectorAll(".sub-tab").forEach((tab) => {
  tab.addEventListener("click", (e) => {
    // Hide all sub-panels
    document.querySelectorAll(".sub-panel").forEach((panel) => {
      panel.style.display = "none";
      panel.classList.remove("is-active");
    });
    // Remove active state from all sub-tabs
    document.querySelectorAll(".sub-tab").forEach((btn) => {
      btn.classList.remove("is-active");
      btn.style.background = "#ece6d8";
      btn.style.color = "var(--ink)";
    });
    
    // Activate clicked sub-tab
    const target = e.target;
    target.classList.add("is-active");
    target.style.background = "var(--green)";
    target.style.color = "white";
    
    // Show target sub-panel
    const panelId = target.dataset.subtab;
    const panel = document.getElementById(panelId);
    if (panel) {
      panel.style.display = "block";
      panel.classList.add("is-active");
    }
  });
});

renderSeasonOptions();
renderAll();
