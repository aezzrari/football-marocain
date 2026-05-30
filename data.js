const seasons = [
  {
    id: "1956-57",
    label: "1956/57",
    title: "Saison 1956/57",
    competitions: ["Championnat National de 1ere Division", "Coupe du Trone"],
    reigningChampion: "Wydad Athletic Club",
    champion: "Wydad Athletic Club",
    notes: [
      "Systeme de points du championnat: victoire 3 pts, nul 2 pts, defaite 1 pt.",
      "Premiere edition de la Coupe du Trone.",
      "Le MC Oujda remporte la Coupe du Trone car il a marque le premier but en finale."
    ],
    promoted: [
      "Rachad de Meknes",
      "Union Sportive de Safi",
      "ASM",
      "Association Sportif de Tanger-Fes"
    ],
    topScorer: {
      player: "Krimou",
      club: "KAC Marrakech",
      goals: 18
    },
    clubs: [
      { code: "WAC", name: "Wydad Athletic Club", city: "Casablanca" },
      { code: "KACM", name: "Kawkab Athletic Club de Marrakech", city: "Marrakech" },
      { code: "MCO", name: "Mouloudia Club Oujda", city: "Oujda" },
      { code: "TAS", name: "Tihad Athletic Sport", city: "Casablanca" },
      { code: "FUS", name: "Fath Union Sport", city: "Rabat" },
      { code: "USM", name: "Union Sportive Marocaine", city: "Casablanca" },
      { code: "MAS", name: "Maghreb Association Sportive", city: "Fes" },
      { code: "RAC", name: "Racing Athletic Club", city: "Casablanca" },
      { code: "DHJ", name: "Difaa Hassani Jadidi", city: "El Jadida" },
      { code: "RCA", name: "Raja Club Athletic", city: "Casablanca" },
      { code: "KAC", name: "Kenitra Athletic Club", city: "Kenitra" },
      { code: "SM", name: "Stade Marocain", city: "Rabat" },
      { code: "MAT", name: "Maghreb Athletic Tetouan", city: "Tetouan" },
      { code: "ASC", name: "ASCOM", city: "" },
      { code: "SCC", name: "SC Club des Roches Noires", city: "Casablanca" },
      { code: "QI", name: "Quartier Industriel", city: "Casablanca" }
    ],
    table: [
      { rank: 1, code: "WAC", played: 30, won: 18, drawn: 7, lost: 5, goalsFor: 51, goalsAgainst: 23, points: 73, status: "Champion" },
      { rank: 2, code: "KACM", played: 30, won: 15, drawn: 9, lost: 6, goalsFor: 48, goalsAgainst: 31, points: 69, status: "" },
      { rank: 3, code: "MCO", played: 30, won: 14, drawn: 8, lost: 8, goalsFor: 53, goalsAgainst: 32, points: 66, status: "" },
      { rank: 4, code: "TAS", played: 30, won: 13, drawn: 10, lost: 7, goalsFor: 35, goalsAgainst: 24, points: 66, status: "" },
      { rank: 5, code: "FUS", played: 30, won: 13, drawn: 8, lost: 9, goalsFor: 42, goalsAgainst: 30, points: 64, status: "" },
      { rank: 6, code: "USM", played: 30, won: 11, drawn: 12, lost: 7, goalsFor: 39, goalsAgainst: 34, points: 64, status: "" },
      { rank: 7, code: "MAS", played: 30, won: 11, drawn: 11, lost: 8, goalsFor: 39, goalsAgainst: 39, points: 63, status: "" },
      { rank: 8, code: "RAC", played: 30, won: 13, drawn: 6, lost: 11, goalsFor: 44, goalsAgainst: 32, points: 62, status: "" },
      { rank: 9, code: "DHJ", played: 30, won: 8, drawn: 15, lost: 7, goalsFor: 38, goalsAgainst: 33, points: 61, status: "" },
      { rank: 10, code: "RCA", played: 30, won: 11, drawn: 8, lost: 11, goalsFor: 34, goalsAgainst: 38, points: 60, status: "" },
      { rank: 11, code: "KAC", played: 30, won: 10, drawn: 9, lost: 11, goalsFor: 34, goalsAgainst: 34, points: 59, status: "" },
      { rank: 12, code: "SM", played: 30, won: 8, drawn: 12, lost: 10, goalsFor: 35, goalsAgainst: 40, points: 58, status: "" },
      { rank: 13, code: "MAT", played: 30, won: 9, drawn: 9, lost: 12, goalsFor: 44, goalsAgainst: 52, points: 57, status: "Relegue" },
      { rank: 14, code: "ASC", played: 30, won: 6, drawn: 10, lost: 14, goalsFor: 33, goalsAgainst: 42, points: 52, status: "Relegue" },
      { rank: 15, code: "SCC", played: 30, won: 5, drawn: 5, lost: 20, goalsFor: 25, goalsAgainst: 56, points: 45, status: "Relegue" },
      { rank: 16, code: "QI", played: 30, won: 1, drawn: 9, lost: 20, goalsFor: 14, goalsAgainst: 68, points: 41, status: "Relegue" }
    ],
    resultGrid: {
      columns: ["WAC", "KACM", "MCO", "TAS", "FUS", "USM", "MAS", "RAC", "DHJ", "RCA", "KAC", "SM", "MAT", "ASC", "SCC", "QI"],
      rows: [
        { home: "WAC", results: ["", "0-0", "1-1", "1-1", "1-0", "3-1", "4-3", "2-1", "1-1", "3-0", "1-0", "2-0", "2-0", "3-1", "3-1", "7-1"] },
        { home: "KACM", results: ["0-0", "", "2-0", "2-2", "2-0", "1-1", "7-1", "3-2", "3-0", "1-1", "1-0", "3-1", "1-0", "1-0", "3-0", "1-0"] },
        { home: "MCO", results: ["1-0", "4-1", "", "2-1", "3-1", "2-4", "0-0", "2-1", "0-0", "6-0", "1-0", "2-0", "3-1", "4-1", "3-1", "1-1"] },
        { home: "TAS", results: ["0-1", "0-0", "0-3", "", "2-1", "1-1", "1-1", "1-0", "1-0", "1-0", "1-2", "1-0", "0-0", "1-0", "2-0", "3-0"] },
        { home: "FUS", results: ["3-2", "0-1", "3-2", "1-1", "", "3-3", "0-0", "3-0", "1-2", "2-0", "4-1", "2-0", "1-1", "1-0", "3-1", "0-0"] },
        { home: "USM", results: ["0-0", "2-2", "1-1", "0-0", "0-3", "", "2-0", "1-0", "3-2", "0-1", "1-0", "3-1", "2-2", "1-0", "4-1", "2-0"] },
        { home: "MAS", results: ["3-1", "0-1", "2-0", "1-0", "0-0", "2-2", "", "2-1", "1-1", "0-0", "3-0", "0-3", "4-0", "3-2", "2-1", "0-0"] },
        { home: "RAC", results: ["0-2", "2-1", "1-0", "2-1", "0-0", "2-1", "1-1", "", "2-1", "2-1", "0-0", "0-1", "3-0", "3-1", "1-0", "4-0"] },
        { home: "DHJ", results: ["1-1", "0-0", "0-0", "1-1", "2-2", "0-0", "2-0", "2-0", "", "2-3", "0-0", "1-1", "2-2", "2-1", "3-0", "3-1"] },
        { home: "RCA", results: ["1-0", "0-2", "2-1", "2-3", "0-0", "1-1", "1-1", "0-1", "0-2", "", "1-1", "1-2", "3-1", "3-1", "2-0", "2-2"] },
        { home: "KAC", results: ["0-1", "2-1", "2-1", "0-3", "3-0", "3-0", "1-2", "1-1", "3-1", "1-0", "", "1-1", "2-2", "1-1", "3-2", "2-0"] },
        { home: "SM", results: ["1-0", "3-3", "2-2", "1-2", "1-0", "0-0", "3-3", "0-0", "0-2", "1-1", "0-0", "", "4-0", "1-0", "0-3", "1-1"] },
        { home: "MAT", results: ["1-3", "4-0", "1-3", "0-3", "0-1", "1-0", "1-0", "3-2", "2-1", "1-2", "2-0", "4-4", "", "1-1", "2-0", "4-1"] },
        { home: "ASC", results: ["1-2", "4-1", "1-0", "0-0", "2-1", "0-1", "3-0", "0-0", "3-3", "0-2", "1-1", "1-1", "2-2", "", "2-0", "1-1"] },
        { home: "SCC", results: ["0-1", "2-3", "1-4", "2-1", "0-3", "1-2", "0-1", "0-1", "0-0", "0-2", "2-0", "2-1", "2-2", "2-2", "", "0-0"] },
        { home: "QI", results: ["0-3", "0-1", "1-1", "0-1", "0-3", "1-0", "1-3", "2-11", "1-1", "0-2", "0-4", "0-1", "0-4", "0-1", "0-1", ""] }
      ]
    },
    cup: {
      winner: "Mouloudia Club Oujda",
      runnerUp: "Wydad Athletic Club",
      rounds: [
        {
          name: "1/8 finale",
          matches: [
            { home: "DH Jadidi", score: "2-1", away: "Quartier Indu." },
            { home: "FUS Rabat", score: "2-1", away: "TAS Casablanca" },
            { home: "KAC Marrakech", score: "2-2", away: "Raja Casablanca", note: "KAC Marrakech aux penalties" },
            { home: "MA Tetouan", score: "0-2", away: "Stade Marocain" },
            { home: "MC Oujda", score: "4-3", away: "Kenitra AC" },
            { home: "NARC Casablanca", score: "0-1", away: "MAS Fes" },
            { home: "USM Casablanca", score: "1-0", away: "SCCRN" },
            { home: "Charaf Rabat", score: "1-4", away: "WAC Casablanca" }
          ]
        },
        {
          name: "1/4 finale",
          matches: [
            { home: "DH Jadidi", score: "0-3", away: "WAC Casablanca" },
            { home: "FUS Rabat", score: "1-2", away: "Stade Marocain" },
            { home: "KAC Marrakech", score: "2-1", away: "MAS Fes" },
            { home: "MC Oujda", score: "1-0", away: "USM Casablanca" }
          ]
        },
        {
          name: "Demi-finales",
          matches: [
            { home: "KAC Marrakech", score: "0-3", away: "WAC Casablanca" },
            { home: "MC Oujda", score: "4-2", away: "Stade Marocain" }
          ]
        }
      ],
      final: {
        date: "16 novembre 1957",
        venue: "Stade Marcel Cerdan, Casablanca",
        attendance: "30 000",
        home: "MC Oujda",
        away: "WAC Casablanca",
        score: "1-1",
        note: "apres prolongation",
        scorers: ["Braizat 42", "Mayet 60 pen"],
        referee: "Boubker Lazra",
        lineups: {
          "MC Oujda": ["Assaban", "Restoy", "Belkheir", "Boutaleb", "Larabi", "Kaouachi", "Madani", "Sabi", "Belaid", "Braizat", "Charef"],
          "WAC Casablanca": ["Benjilali", "Messaoud", "Tibari", "Lahbib", "Kadmiri", "Mustapha 1", "Bel Hassan", "Azhar", "Mustapha 2", "Gomez", "Mayet"]
        }
      }
    }
  },
  {
    id: "1957-58",
    label: "1957/58",
    title: "Saison 1957/58",
    competitions: ["Championnat National de 1ere Division", "Coupe du Trone"],
    reigningChampion: "Wydad Athletic Club",
    champion: "Kawkab Athletic Club de Marrakech",
    notes: [
      "Systeme de points du championnat: victoire 3 pts, nul 2 pts, defaite 1 pt.",
      "L'Union Sportive Marocaine declare forfait en championnat.",
      "Le MC Oujda conserve la Coupe du Trone en battant le WAC Casablanca en finale."
    ],
    promoted: [
      "Etoile Jeunesse Sportive Casablanca",
      "Hassania Union Sport Agadir"
    ],
    topScorer: {
      player: "Chtaini",
      club: "DHJ Jadidi",
      goals: 22
    },
    clubs: [
      { code: "KACM", name: "Kawkab Athletic Club de Marrakech", city: "Marrakech" },
      { code: "WAC", name: "Wydad Athletic Club", city: "Casablanca" },
      { code: "TAS", name: "Tihad Athletic Sport", city: "Casablanca" },
      { code: "RCA", name: "Raja Club Athletic", city: "Casablanca" },
      { code: "KAC", name: "Kenitra Athletic Club", city: "Kenitra" },
      { code: "MCO", name: "Mouloudia Club Oujda", city: "Oujda" },
      { code: "FUS", name: "Fath Union Sport", city: "Rabat" },
      { code: "DHJ", name: "Difaa Hassani Jadidi", city: "El Jadida" },
      { code: "RSM", name: "Rachad de Meknes", city: "Meknes" },
      { code: "RAC", name: "Racing Athletic Club", city: "Casablanca" },
      { code: "SM", name: "Stade Marocain", city: "Rabat" },
      { code: "MAS", name: "Maghreb Association Sportive", city: "Fes" },
      { code: "USS", name: "Union Sportive de Safi", city: "Safi" },
      { code: "ASM", name: "ASM", city: "" },
      { code: "ASTF", name: "Association Sportif de Tanger-Fes", city: "" },
      { code: "USM", name: "Union Sportive Marocaine", city: "Casablanca" }
    ],
    table: [
      { rank: 1, code: "KACM", played: 28, won: 16, drawn: 10, lost: 2, goalsFor: 38, goalsAgainst: 20, points: 70, status: "Champion" },
      { rank: 2, code: "WAC", played: 28, won: 15, drawn: 11, lost: 2, goalsFor: 34, goalsAgainst: 16, points: 69, status: "Champion en titre" },
      { rank: 3, code: "TAS", played: 28, won: 12, drawn: 10, lost: 6, goalsFor: 37, goalsAgainst: 27, points: 62, status: "" },
      { rank: 4, code: "RCA", played: 28, won: 10, drawn: 13, lost: 5, goalsFor: 33, goalsAgainst: 20, points: 61, status: "" },
      { rank: 5, code: "KAC", played: 28, won: 12, drawn: 8, lost: 8, goalsFor: 35, goalsAgainst: 27, points: 60, status: "" },
      { rank: 6, code: "MCO", played: 28, won: 11, drawn: 10, lost: 7, goalsFor: 38, goalsAgainst: 39, points: 60, status: "" },
      { rank: 7, code: "FUS", played: 28, won: 11, drawn: 9, lost: 8, goalsFor: 32, goalsAgainst: 31, points: 59, status: "" },
      { rank: 8, code: "DHJ", played: 28, won: 9, drawn: 11, lost: 8, goalsFor: 45, goalsAgainst: 40, points: 57, status: "" },
      { rank: 9, code: "RSM", played: 28, won: 9, drawn: 9, lost: 10, goalsFor: 42, goalsAgainst: 40, points: 55, status: "Promu" },
      { rank: 10, code: "RAC", played: 28, won: 9, drawn: 7, lost: 12, goalsFor: 35, goalsAgainst: 32, points: 53, status: "" },
      { rank: 11, code: "SM", played: 28, won: 6, drawn: 13, lost: 9, goalsFor: 33, goalsAgainst: 37, points: 53, status: "" },
      { rank: 12, code: "MAS", played: 28, won: 5, drawn: 13, lost: 10, goalsFor: 26, goalsAgainst: 28, points: 51, status: "" },
      { rank: 13, code: "USS", played: 28, won: 5, drawn: 10, lost: 13, goalsFor: 36, goalsAgainst: 51, points: 48, status: "Promu, Relegue" },
      { rank: 14, code: "ASM", played: 28, won: 4, drawn: 8, lost: 16, goalsFor: 25, goalsAgainst: 53, points: 44, status: "Promu, Relegue" },
      { rank: 15, code: "ASTF", played: 28, won: 2, drawn: 6, lost: 20, goalsFor: 22, goalsAgainst: 50, points: 38, status: "Promu, Relegue" },
      { rank: 16, code: "USM", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0, status: "Forfait, Relegue" }
    ],
    resultGrid: {
      columns: ["KACM", "WAC", "TAS", "RCA", "KAC", "MCO", "FUS", "DHJ", "RSM", "RAC", "SM", "MAS", "USS", "ASM", "ASTF"],
      rows: [
        { home: "KACM", results: ["", "0-1", "2-1", "1-0", "1-0", "4-1", "1-0", "2-3", "1-1", "2-1", "1-0", "1-0", "2-0", "2-0", "1-0"] },
        { home: "WAC", results: ["1-1", "", "0-0", "1-1", "1-0", "1-2", "1-0", "3-2", "1-0", "1-0", "2-2", "1-0", "3-0", "2-1", "1-0"] },
        { home: "TAS", results: ["0-0", "1-1", "", "1-0", "0-2", "2-2", "3-1", "1-2", "1-2", "2-0", "2-1", "1-1", "2-0", "1-1", "1-0"] },
        { home: "RCA", results: ["1-1", "0-0", "1-2", "", "0-1", "3-0", "0-0", "1-1", "1-0", "0-0", "0-0", "4-1", "2-0", "1-0", "2-1"] },
        { home: "KAC", results: ["1-1", "0-1", "0-2", "2-1", "", "1-0", "0-0", "4-1", "2-1", "2-1", "1-1", "0-2", "4-1", "3-1", "2-1"] },
        { home: "MCO", results: ["1-1", "0-0", "2-0", "0-0", "1-1", "", "3-2", "2-1", "1-4", "4-2", "1-1", "2-1", "2-1", "3-2", "1-1"] },
        { home: "FUS", results: ["1-2", "1-3", "4-3", "1-1", "2-0", "0-1", "", "0-0", "2-0", "2-0", "2-1", "1-0", "3-1", "1-0", "4-2"] },
        { home: "DHJ", results: ["2-0", "0-0", "0-0", "3-3", "2-1", "2-1", "0-0", "", "0-1", "0-0", "3-0", "0-0", "7-7", "4-1", "3-2"] },
        { home: "RSM", results: ["2-2", "0-0", "1-1", "2-2", "1-2", "0-1", "5-1", "1-2", "", "3-4", "2-2", "2-1", "5-2", "1-1", "3-2"] },
        { home: "RAC", results: ["0-3", "0-1", "0-0", "0-1", "0-0", "2-0", "1-1", "3-0", "4-0", "", "1-1", "1-0", "2-1", "5-2", "3-1"] },
        { home: "SM", results: ["1-1", "1-0", "0-2", "0-0", "3-3", "2-2", "0-1", "1-0", "2-0", "3-2", "", "2-0", "2-2", "1-1", "4-3"] },
        { home: "MAS", results: ["1-1", "1-1", "2-2", "1-1", "0-0", "3-2", "0-0", "2-2", "0-1", "0-1", "1-0", "", "5-2", "3-0", "0-0"] },
        { home: "USS", results: ["0-1", "1-3", "0-0", "0-1", "1-1", "0-0", "2-0", "1-1", "2-1", "0-0", "3-1", "0-0", "", "2-0", "3-0"] },
        { home: "ASM", results: ["1-3", "1-1", "2-4", "1-4", "0-2", "1-0", "1-1", "1-3", "0-0", "2-1", "1-0", "0-1", "1-2", "", "2-1"] },
        { home: "ASTF", results: ["0-0", "1-3", "0-2", "0-2", "1-0", "1-3", "0-1", "2-1", "0-3", "0-1", "0-1", "0-0", "2-2", "1-1", ""] }
      ]
    },
    cup: {
      winner: "Mouloudia Club Oujda",
      runnerUp: "Wydad Athletic Club",
      rounds: [
        {
          name: "1/8 finale",
          matches: [
            { home: "DH Jadidi", score: "1-0", away: "TAS Casablanca" },
            { home: "FUS Rabat", score: "1-2", away: "WAC Casablanca" },
            { home: "HUS Agadir", score: "1-0", away: "RS Settat" },
            { home: "KAC Marrakech", score: "2-2", away: "Nahda Renaissance Tanger" },
            { home: "KSNAC Casablanca", score: "0-1", away: "MAS Fes" },
            { home: "MC Oujda", score: "2-1", away: "Raja Casablanca" },
            { home: "RAC Casablanca", score: "1-1", away: "Rachad de Meknes" },
            { home: "Stade Marocain", score: "0-1", away: "USM" },
            { home: "Rachad de Meknes", score: "1-0", away: "RAC Casablanca", note: "replay match" }
          ]
        },
        {
          name: "1/4 finale",
          matches: [
            { home: "DH Jadidi", score: "0-2", away: "WAC Casablanca" },
            { home: "HUS Agadir", score: "1-2", away: "USM" },
            { home: "KAC Marrakech", score: "3-0", away: "MAS Fes" },
            { home: "Rachad de Meknes", score: "1-1", away: "MC Oujda" },
            { home: "MC Oujda", score: "2-0", away: "Rachad de Meknes", note: "replay match" }
          ]
        },
        {
          name: "Demi-finales",
          matches: [
            { home: "KAC Marrakech", score: "0-2", away: "WAC Casablanca" },
            { home: "MC Oujda", score: "4-2", away: "USM" }
          ]
        }
      ],
      final: {
        date: "25 mai 1958",
        venue: "Stade d'Honneur, Casablanca",
        home: "MC Oujda",
        away: "WAC Casablanca",
        score: "2-1"
      }
    }
  },
  {
    id: "1958-59",
    label: "1958/59",
    title: "Saison 1958/59",
    competitions: ["Championnat National de 1ere Division", "Coupe du Trone"],
    reigningChampion: "Kawkab Athletic Club de Marrakech",
    champion: "Etoile Jeunesse Sportive Casablanca",
    notes: [
      "Systeme de points du championnat: victoire 3 pts, nul 2 pts, defaite 1 pt.",
      "Etoile Jeunesse Sportive Casablanca remporte le championnat en tant que promu.",
      "Les FAR remportent la Coupe du Trone face au MC Oujda."
    ],
    promoted: ["Forces Armees Royales (Rabat)", "Chabab Larache"],
    topScorer: { player: "Khalfi", club: "WAC Casablanca", goals: 21 },
    clubs: [
      { code: "EJSC", name: "Etoile Jeunesse Sportive Casablanca", city: "Casablanca" },
      { code: "WAC", name: "Wydad Athletic Club", city: "Casablanca" },
      { code: "MCO", name: "Mouloudia Club Oujda", city: "Oujda" },
      { code: "RCA", name: "Raja Club Athletic", city: "Casablanca" },
      { code: "SM", name: "Stade Marocain", city: "Rabat" },
      { code: "KACM", name: "Kawkab Athletic Club de Marrakech", city: "Marrakech" },
      { code: "RAC", name: "Racing Athletic Club", city: "Casablanca" },
      { code: "FUS", name: "Fath Union Sport", city: "Rabat" },
      { code: "KAC", name: "Kenitra Athletic Club", city: "Kenitra" },
      { code: "DHJ", name: "Difaa Hassani Jadidi", city: "El Jadida" },
      { code: "MAS", name: "Maghreb Association Sportive", city: "Fes" },
      { code: "HUSA", name: "Hassania Union Sport Agadir", city: "Agadir" },
      { code: "TAS", name: "Tihad Athletic Sport", city: "Casablanca" },
      { code: "RSM", name: "Rachad de Meknes", city: "Meknes" }
    ],
    table: [
      { rank: 1, code: "EJSC", played: 26, won: 12, drawn: 11, lost: 3, goalsFor: 35, goalsAgainst: 20, points: 61, status: "Promu, Champion" },
      { rank: 2, code: "WAC", played: 26, won: 12, drawn: 8, lost: 6, goalsFor: 50, goalsAgainst: 22, points: 58, status: "" },
      { rank: 3, code: "MCO", played: 26, won: 13, drawn: 5, lost: 8, goalsFor: 43, goalsAgainst: 29, points: 57, status: "" },
      { rank: 4, code: "RCA", played: 26, won: 10, drawn: 11, lost: 5, goalsFor: 34, goalsAgainst: 25, points: 57, status: "" },
      { rank: 5, code: "SM", played: 26, won: 11, drawn: 8, lost: 7, goalsFor: 37, goalsAgainst: 35, points: 56, status: "" },
      { rank: 6, code: "KACM", played: 26, won: 10, drawn: 7, lost: 9, goalsFor: 41, goalsAgainst: 37, points: 53, status: "Champion en titre" },
      { rank: 7, code: "RAC", played: 26, won: 10, drawn: 7, lost: 9, goalsFor: 28, goalsAgainst: 29, points: 53, status: "" },
      { rank: 8, code: "FUS", played: 26, won: 8, drawn: 10, lost: 8, goalsFor: 28, goalsAgainst: 26, points: 52, status: "" },
      { rank: 9, code: "KAC", played: 26, won: 9, drawn: 8, lost: 9, goalsFor: 25, goalsAgainst: 30, points: 52, status: "" },
      { rank: 10, code: "DHJ", played: 26, won: 6, drawn: 11, lost: 9, goalsFor: 29, goalsAgainst: 31, points: 49, status: "" },
      { rank: 11, code: "MAS", played: 26, won: 6, drawn: 10, lost: 10, goalsFor: 27, goalsAgainst: 34, points: 48, status: "" },
      { rank: 12, code: "HUSA", played: 26, won: 5, drawn: 12, lost: 9, goalsFor: 24, goalsAgainst: 53, points: 48, status: "Promu" },
      { rank: 13, code: "TAS", played: 26, won: 5, drawn: 11, lost: 10, goalsFor: 30, goalsAgainst: 31, points: 47, status: "Relegue" },
      { rank: 14, code: "RSM", played: 26, won: 1, drawn: 9, lost: 16, goalsFor: 18, goalsAgainst: 47, points: 37, status: "Relegue" }
    ],
    resultGrid: {
      columns: ["EJSC", "WAC", "MCO", "RCA", "SM", "KACM", "RAC", "FUS", "KAC", "DHJ", "MAS", "HUSA", "TAS", "RSM"],
      rows: [
        { home: "EJSC", results: ["", "1-0", "1-0", "0-0", "3-2", "2-0", "2-0", "1-1", "1-1", "2-1", "1-1", "3-1", "3-1", "3-0"] },
        { home: "WAC", results: ["1-1", "", "1-0", "1-2", "1-0", "1-2", "0-0", "2-1", "3-0", "2-2", "5-0", "7-0", "2-0", "6-1"] },
        { home: "MCO", results: ["3-0", "2-1", "", "2-2", "2-0", "3-1", "2-0", "1-1", "2-0", "4-0", "2-0", "5-0", "1-1", "3-0"] },
        { home: "RCA", results: ["1-1", "0-2", "1-0", "", "0-2", "2-2", "3-1", "4-2", "0-0", "0-2", "1-1", "0-0", "1-1", "2-0"] },
        { home: "SM", results: ["1-1", "2-1", "5-2", "1-5", "", "2-3", "2-0", "1-1", "0-0", "0-4", "2-0", "6-0", "1-1", "1-0"] },
        { home: "KACM", results: ["0-0", "0-2", "2-2", "0-0", "7-0", "", "4-0", "0-0", "1-0", "2-1", "3-1", "0-0", "1-0", "2-0"] },
        { home: "RAC", results: ["2-1", "2-1", "0-0", "2-0", "1-1", "3-1", "", "2-0", "3-1", "0-0", "0-3", "2-2", "3-0", "2-1"] },
        { home: "FUS", results: ["2-3", "0-0", "2-0", "0-0", "0-0", "2-1", "0-1", "", "0-0", "0-0", "3-2", "8-0", "0-2", "1-0"] },
        { home: "KAC", results: ["0-2", "0-4", "4-1", "2-1", "0-1", "2-0", "0-0", "2-0", "", "1-0", "2-0", "1-0", "1-1", "2-0"] },
        { home: "DHJ", results: ["1-0", "1-1", "2-3", "0-1", "1-3", "3-3", "2-0", "0-1", "0-0", "", "2-0", "1-1", "0-3", "3-1"] },
        { home: "MAS", results: ["0-0", "1-1", "2-0", "0-2", "0-1", "2-0", "0-1", "1-0", "2-2", "1-1", "", "3-0", "1-1", "2-0"] },
        { home: "HUSA", results: ["0-0", "2-2", "0-1", "2-2", "0-1", "4-2", "2-2", "2-1", "2-0", "1-1", "1-1", "", "1-1", "1-0"] },
        { home: "TAS", results: ["0-2", "1-2", "2-0", "1-2", "1-1", "2-3", "1-0", "0-1", "4-0", "1-1", "1-1", "2-1", "", "2-2"] },
        { home: "RSM", results: ["1-1", "1-1", "1-2", "0-2", "1-1", "3-1", "0-1", "1-1", "2-4", "0-0", "2-2", "1-1", "0-0", ""] }
      ]
    },
    cup: {
      winner: "Forces Armees Royales (Rabat)",
      runnerUp: "Mouloudia Club Oujda",
      rounds: [
        { name: "1/8 finale", matches: [
          { home: "Chabab Larache", score: "1-2", away: "MC Oujda" },
          { home: "Chihab Oujda", score: "0-0", away: "EJS Casablanca" },
          { home: "FAR Rabat", score: "1-0", away: "WAC Casablanca" },
          { home: "Kenitra AC", score: "4-2", away: "COD Meknes" },
          { home: "RAC Casablanca", score: "0-2", away: "MAS Fes" },
          { home: "Raja Casablanca", score: "1-0", away: "OC Safi" },
          { home: "TAS Casablanca", score: "4-0", away: "DH Jadidi" },
          { home: "US Kacem", score: "0-5", away: "FUS Rabat" },
          { home: "EJS Casablanca", score: "1-0", away: "Chihab Oujda", note: "replay match" }
        ] },
        { name: "1/4 finale", matches: [
          { home: "FAR Rabat", score: "1-0", away: "EJS Casablanca" },
          { home: "Kenitra AC", score: "1-2", away: "FUS Rabat" },
          { home: "Raja Casablanca", score: "1-0", away: "MAS Fes" },
          { home: "TAS Casablanca", score: "0-2", away: "MC Oujda" }
        ] },
        { name: "Demi-finales", matches: [
          { home: "FAR Rabat", score: "3-1", away: "FUS Rabat" },
          { home: "Raja Casablanca", score: "1-1", away: "MC Oujda" }
        ] }
      ],
      final: { date: "14 decembre 1958", venue: "Stade d'Honneur, Casablanca", home: "FAR Rabat", away: "MC Oujda", score: "1-0" }
    }
  },
  {
    id: "1959-60",
    label: "1959/60",
    title: "Saison 1959/60",
    competitions: ["Championnat National de 1ere Division", "Coupe du Trone"],
    reigningChampion: "Etoile Jeunesse Sportive Casablanca",
    champion: "Kenitra Athletic Club",
    notes: [
      "Systeme de points du championnat: victoire 3 pts, nul 2 pts, defaite 1 pt.",
      "Un playoff devait departager RCA, FAR et KAC; le Raja refusa d'y participer.",
      "KAC Kenitra bat FAR Rabat 3-1 dans le match de playoff et remporte le championnat.",
      "HUS Agadir se retire apres le seisme du 29 fevrier 1960 et est readmis la saison suivante."
    ],
    promoted: ["Maghreb Athletic Tetouan", "Tihad Athletic Sport (Casablanca)"],
    topScorer: { player: "Moussa", club: "Raja de Casablanca", goals: 22 },
    clubs: [
      { code: "KAC", name: "Kenitra Athletic Club", city: "Kenitra" },
      { code: "FAR", name: "Forces Armees Royales", city: "Rabat" },
      { code: "RCA", name: "Raja Club Athletic", city: "Casablanca" },
      { code: "WAC", name: "Wydad Athletic Club", city: "Casablanca" },
      { code: "FUS", name: "Fath Union Sport", city: "Rabat" },
      { code: "MCO", name: "Mouloudia Club Oujda", city: "Oujda" },
      { code: "MAS", name: "Maghreb Association Sportive", city: "Fes" },
      { code: "RAC", name: "Racing Athletic Club", city: "Casablanca" },
      { code: "KACM", name: "Kawkab Athletic Club de Marrakech", city: "Marrakech" },
      { code: "LARACHE", name: "Chabab Larache", city: "Larache" },
      { code: "EJSC", name: "Etoile Jeunesse Sportive Casablanca", city: "Casablanca" },
      { code: "SM", name: "Stade Marocain", city: "Rabat" },
      { code: "DHJ", name: "Difaa Hassani Jadidi", city: "El Jadida" },
      { code: "HUSA", name: "Hassania Union Sport Agadir", city: "Agadir" }
    ],
    table: [
      { rank: 1, code: "KAC", played: 24, won: 11, drawn: 8, lost: 5, goalsFor: 37, goalsAgainst: 21, points: 54, status: "Champion, Playoff" },
      { rank: 2, code: "FAR", played: 24, won: 11, drawn: 8, lost: 5, goalsFor: 34, goalsAgainst: 18, points: 54, status: "Promu, Playoff" },
      { rank: 3, code: "RCA", played: 24, won: 11, drawn: 8, lost: 5, goalsFor: 32, goalsAgainst: 14, points: 54, status: "Playoff" },
      { rank: 4, code: "WAC", played: 24, won: 10, drawn: 9, lost: 5, goalsFor: 28, goalsAgainst: 20, points: 53, status: "" },
      { rank: 5, code: "FUS", played: 24, won: 7, drawn: 11, lost: 6, goalsFor: 24, goalsAgainst: 25, points: 49, status: "" },
      { rank: 6, code: "MCO", played: 24, won: 7, drawn: 10, lost: 7, goalsFor: 33, goalsAgainst: 32, points: 48, status: "" },
      { rank: 7, code: "MAS", played: 24, won: 9, drawn: 5, lost: 10, goalsFor: 30, goalsAgainst: 29, points: 47, status: "" },
      { rank: 8, code: "RAC", played: 24, won: 7, drawn: 9, lost: 8, goalsFor: 31, goalsAgainst: 33, points: 47, status: "" },
      { rank: 9, code: "KACM", played: 24, won: 7, drawn: 9, lost: 8, goalsFor: 30, goalsAgainst: 35, points: 47, status: "" },
      { rank: 10, code: "LARACHE", played: 24, won: 7, drawn: 8, lost: 9, goalsFor: 28, goalsAgainst: 35, points: 46, status: "Promu" },
      { rank: 11, code: "EJSC", played: 24, won: 7, drawn: 7, lost: 10, goalsFor: 30, goalsAgainst: 34, points: 45, status: "Champion en titre" },
      { rank: 12, code: "SM", played: 24, won: 7, drawn: 5, lost: 12, goalsFor: 23, goalsAgainst: 34, points: 43, status: "Relegue" },
      { rank: 13, code: "DHJ", played: 24, won: 2, drawn: 9, lost: 13, goalsFor: 24, goalsAgainst: 54, points: 37, status: "Relegue" },
      { rank: 14, code: "HUSA", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0, status: "Retire" }
    ],
    resultGrid: {
      columns: ["KAC", "FAR", "RCA", "WAC", "FUS", "MCO", "MAS", "RAC", "KACM", "LARACHE", "EJSC", "SM", "DHJ", "HUSA"],
      rows: [
        { home: "KAC", results: ["", "0-0", "2-2", "0-0", "1-1", "2-3", "4-1", "2-3", "4-0", "4-0", "0-1", "0-0", "2-1", "1-3"] },
        { home: "FAR", results: ["2-2", "", "0-1", "0-0", "2-0", "3-2", "1-0", "1-1", "2-1", "0-2", "3-1", "2-0", "3-0", "2-1"] },
        { home: "RCA", results: ["0-1", "1-0", "", "2-1", "0-0", "0-0", "1-1", "2-1", "3-0", "0-0", "1-0", "4-1", "6-0", "1-3"] },
        { home: "WAC", results: ["1-2", "1-1", "0-0", "", "1-1", "2-1", "2-1", "3-0", "1-1", "3-1", "3-1", "2-0", "3-0", ""] },
        { home: "FUS", results: ["0-1", "1-1", "1-0", "0-0", "", "1-1", "1-0", "2-2", "0-0", "1-0", "0-0", "2-1", "4-1", "2-0"] },
        { home: "MCO", results: ["2-0", "2-1", "0-2", "0-1", "1-1", "", "2-2", "2-2", "3-1", "2-0", "3-3", "1-0", "1-0", ""] },
        { home: "MAS", results: ["1-0", "1-2", "1-0", "0-0", "1-2", "3-1", "", "2-3", "2-1", "2-0", "2-0", "3-1", "2-2", "1-0"] },
        { home: "RAC", results: ["0-0", "0-0", "1-1", "2-0", "1-0", "1-0", "1-0", "", "0-1", "2-1", "1-3", "2-0", "2-2", ""] },
        { home: "KACM", results: ["1-2", "1-0", "1-0", "4-0", "1-0", "1-1", "2-1", "2-2", "", "1-1", "2-2", "1-2", "4-2", ""] },
        { home: "LARACHE", results: ["2-2", "0-3", "2-1", "3-2", "3-3", "2-1", "0-1", "2-1", "1-1", "", "1-1", "1-1", "3-0", ""] },
        { home: "EJSC", results: ["0-1", "0-2", "0-1", "0-1", "3-2", "2-2", "0-1", "3-1", "1-1", "1-1", "", "0-1", "3-1", ""] },
        { home: "SM", results: ["0-1", "0-4", "1-1", "0-1", "2-1", "1-1", "1-0", "3-1", "3-0", "2-0", "1-2", "", "2-2", ""] },
        { home: "DHJ", results: ["0-4", "1-1", "0-3", "0-0", "2-0", "1-1", "2-2", "1-1", "2-2", "0-2", "2-3", "2-0", "", "2-2"] },
        { home: "HUSA", results: ["", "", "", "1-2", "3-0", "0-4", "4-1", "1-1", "2-0", "", "1-1", "2-0", "", ""] }
      ]
    },
    cup: {
      winner: "Mouloudia Club Oujda",
      runnerUp: "Fath Union Sport",
      rounds: [
        { name: "1/8 finale", matches: [
          { home: "Essaouira", score: "0-1", away: "WAC Casablanca" },
          { home: "FAR Rabat", score: "0-3", away: "FUS Rabat" },
          { home: "KAC Marrakech", score: "3-3", away: "HUS Agadir" },
          { home: "Kenitra AC", score: "1-0", away: "Chabab Larache" },
          { home: "MC Oujda", score: "1-0", away: "TAS Casablanca" },
          { home: "RAC Casablanca", score: "0-2", away: "Raja Casablanca" },
          { home: "Stade Marocain", score: "3-0", away: "DH Jadidi" },
          { home: "EJS Casablanca", score: "3-3", away: "Takaddoum Rabat" },
          { home: "Takaddoum Rabat", score: "2-0", away: "EJS Casablanca", note: "replay match" },
          { home: "HUS Agadir", score: "0-1", away: "KAC Marrakech", note: "replay match" }
        ] },
        { name: "1/4 finale", matches: [
          { home: "MC Oujda", score: "1-0", away: "WAC Casablanca" },
          { home: "Kenitra AC", score: "1-2", away: "KAC Marrakech" },
          { home: "Stade Marocain", score: "0-1", away: "Raja Casablanca" },
          { home: "Takaddoum Rabat", score: "1-2", away: "FUS Rabat" }
        ] },
        { name: "Demi-finales", matches: [
          { home: "MC Oujda", score: "2-0", away: "KAC Marrakech" },
          { home: "Raja Casablanca", score: "0-0", away: "FUS Rabat" },
          { home: "FUS Rabat", score: "3-2", away: "Raja Casablanca", note: "replay match" }
        ] }
      ],
      final: { date: "24 avril 1960", venue: "Stade d'Honneur, Casablanca", home: "MC Oujda", away: "FUS Rabat", score: "1-0" }
    }
  },
  {
    id: "1960-61",
    label: "1960/61",
    title: "Saison 1960/61",
    competitions: ["Championnat National de 1ere Division", "Coupe du Trone"],
    reigningChampion: "Kenitra Athletic Club",
    champion: "Forces Armees Royales",
    notes: [
      "Systeme de points du championnat: victoire 3 pts, nul 2 pts, defaite 1 pt.",
      "La Coupe du Trone se joue sur plusieurs tours en matchs aller-retour.",
      "Kenitra AC remporte la Coupe du Trone face au WAC Casablanca."
    ],
    promoted: ["Stade Marocain (Rabat)", "Sporting Club Chabab de Mohammedia"],
    topScorer: { player: "Harchaoui", club: "Etoile de Casablanca", goals: 19 },
    clubs: [
      { code: "FAR", name: "Forces Armees Royales", city: "Rabat" },
      { code: "MAS", name: "Maghreb Association Sportive", city: "Fes" },
      { code: "KACM", name: "Kawkab Athletic Club de Marrakech", city: "Marrakech" },
      { code: "MCO", name: "Mouloudia Club Oujda", city: "Oujda" },
      { code: "RCA", name: "Raja Club Athletic", city: "Casablanca" },
      { code: "RAC", name: "Racing Athletic Club", city: "Casablanca" },
      { code: "WAC", name: "Wydad Athletic Club", city: "Casablanca" },
      { code: "MAT", name: "Maghreb Athletic Tetouan", city: "Tetouan" },
      { code: "EJSC", name: "Etoile Jeunesse Sportive Casablanca", city: "Casablanca" },
      { code: "KAC", name: "Kenitra Athletic Club", city: "Kenitra" },
      { code: "TAS", name: "Tihad Athletic Sport", city: "Casablanca" },
      { code: "HUSA", name: "Hassania Union Sport Agadir", city: "Agadir" },
      { code: "LARACHE", name: "Chabab Larache", city: "Larache" },
      { code: "FUS", name: "Fath Union Sport", city: "Rabat" }
    ],
    table: [
      { rank: 1, code: "FAR", played: 26, won: 13, drawn: 7, lost: 6, goalsFor: 42, goalsAgainst: 26, points: 59, status: "Champion" },
      { rank: 2, code: "MAS", played: 26, won: 11, drawn: 10, lost: 5, goalsFor: 32, goalsAgainst: 18, points: 58, status: "" },
      { rank: 3, code: "KACM", played: 26, won: 12, drawn: 7, lost: 7, goalsFor: 44, goalsAgainst: 32, points: 57, status: "" },
      { rank: 4, code: "MCO", played: 26, won: 11, drawn: 8, lost: 7, goalsFor: 32, goalsAgainst: 30, points: 56, status: "" },
      { rank: 5, code: "RCA", played: 26, won: 8, drawn: 12, lost: 6, goalsFor: 35, goalsAgainst: 35, points: 54, status: "" },
      { rank: 6, code: "RAC", played: 26, won: 9, drawn: 9, lost: 8, goalsFor: 33, goalsAgainst: 32, points: 53, status: "" },
      { rank: 7, code: "WAC", played: 26, won: 9, drawn: 9, lost: 8, goalsFor: 30, goalsAgainst: 25, points: 53, status: "" },
      { rank: 8, code: "MAT", played: 26, won: 11, drawn: 3, lost: 12, goalsFor: 33, goalsAgainst: 44, points: 51, status: "Promu" },
      { rank: 9, code: "EJSC", played: 26, won: 8, drawn: 9, lost: 9, goalsFor: 45, goalsAgainst: 37, points: 51, status: "" },
      { rank: 10, code: "KAC", played: 26, won: 10, drawn: 4, lost: 12, goalsFor: 31, goalsAgainst: 34, points: 50, status: "Champion en titre" },
      { rank: 11, code: "TAS", played: 26, won: 7, drawn: 10, lost: 9, goalsFor: 25, goalsAgainst: 29, points: 50, status: "Promu" },
      { rank: 12, code: "HUSA", played: 26, won: 7, drawn: 8, lost: 11, goalsFor: 26, goalsAgainst: 35, points: 48, status: "" },
      { rank: 13, code: "LARACHE", played: 26, won: 7, drawn: 6, lost: 13, goalsFor: 24, goalsAgainst: 39, points: 46, status: "Relegue" },
      { rank: 14, code: "FUS", played: 26, won: 4, drawn: 8, lost: 14, goalsFor: 26, goalsAgainst: 42, points: 42, status: "Relegue" }
    ],
    resultGrid: {
      columns: ["FAR", "MAS", "KACM", "MCO", "RCA", "RAC", "WAC", "MAT", "EJSC", "KAC", "TAS", "HUSA", "LARACHE", "FUS"],
      rows: [
        { home: "FAR", results: ["", "1-1", "3-1", "1-1", "2-3", "0-0", "1-0", "3-0", "2-1", "2-1", "1-0", "1-0", "1-0", "4-2"] },
        { home: "MAS", results: ["2-1", "", "1-1", "2-0", "2-0", "0-0", "0-0", "3-1", "2-0", "1-0", "4-0", "1-1", "2-2", "0-0"] },
        { home: "KACM", results: ["1-0", "1-0", "", "1-1", "4-1", "2-0", "1-0", "3-2", "1-0", "1-2", "2-1", "1-1", "4-0", "1-0"] },
        { home: "MCO", results: ["1-3", "1-0", "1-1", "", "1-1", "3-1", "0-1", "0-1", "2-0", "2-1", "1-0", "1-0", "3-0", "4-0"] },
        { home: "RCA", results: ["2-0", "1-1", "3-3", "1-1", "", "2-0", "2-0", "0-1", "2-4", "2-1", "0-0", "0-0", "3-0", "3-2"] },
        { home: "RAC", results: ["2-1", "1-3", "2-2", "0-1", "2-2", "", "2-1", "2-0", "1-1", "2-1", "0-0", "4-1", "1-2", "3-1"] },
        { home: "WAC", results: ["1-1", "2-0", "2-2", "0-0", "0-0", "1-2", "", "1-0", "1-1", "3-0", "0-1", "5-0", "2-0", "1-1"] },
        { home: "MAT", results: ["0-2", "1-1", "4-3", "3-2", "1-1", "2-1", "1-2", "", "0-3", "3-1", "1-0", "0-0", "1-0", "4-3"] },
        { home: "EJSC", results: ["2-4", "1-2", "1-2", "5-2", "1-2", "1-1", "2-2", "5-0", "", "1-0", "2-2", "2-0", "3-0", "1-0"] },
        { home: "KAC", results: ["1-0", "1-3", "3-0", "0-1", "4-2", "2-1", "0-1", "2-2", "1-1", "", "3-2", "1-0", "1-0", "0-0"] },
        { home: "TAS", results: ["1-1", "0-0", "1-1", "2-1", "3-1", "1-1", "0-1", "2-0", "2-2", "1-0", "", "1-0", "1-1", "1-0"] },
        { home: "HUSA", results: ["2-3", "0-1", "2-1", "1-1", "1-0", "1-1", "4-2", "3-1", "1-1", "2-2", "3-1", "", "2-0", "1-0"] },
        { home: "LARACHE", results: ["1-1", "1-0", "1-0", "1-1", "1-1", "1-2", "2-0", "0-1", "4-3", "0-1", "2-1", "3-0", "", "1-1"] },
        { home: "FUS", results: ["0-3", "1-0", "0-4", "4-0", "0-0", "0-1", "2-1", "1-3", "1-1", "1-2", "2-1", "1-1", "3-1", ""] }
      ]
    },
    cup: {
      winner: "Kenitra Athletic Club",
      runnerUp: "Wydad Athletic Club",
      rounds: [
        { name: "1/8 finale", matches: [
          { home: "MAS Fes", score: "0-1", away: "Kenitra AC", note: "First leg" },
          { home: "WAC Casablanca", score: "1-0", away: "Moghreb Sportif de Rabat", note: "First leg" },
          { home: "Mouloudia Marrakech", score: "2-1", away: "MC Oujda", note: "First leg" },
          { home: "MA Tetouan", score: "3-0", away: "KAC Marrakech", note: "First leg" },
          { home: "Raja Beni Mellal", score: "2-5", away: "FAR Rabat", note: "First leg" },
          { home: "EJS Casablanca", score: "1-1", away: "Raja Casablanca", note: "First leg" },
          { home: "Hassania Sidi Slimane", score: "1-2", away: "OC Safi", note: "First leg" },
          { home: "RAC Casablanca", score: "2-0", away: "FUS Rabat", note: "First leg" },
          { home: "Kenitra AC", score: "1-1", away: "MAS Fes", note: "Second leg, agg 2-1" },
          { home: "Maroc Sportive Rabat", score: "0-2", away: "WAC Casablanca", note: "Second leg, agg 0-3" },
          { home: "MC Oujda", score: "4-1", away: "Mouloudia Marrakech", note: "Second leg, agg 5-3" },
          { home: "KAC Marrakech", score: "4-2", away: "MA Tetouan", note: "Second leg, agg 4-5" },
          { home: "FAR Rabat", score: "1-0", away: "Raja Beni Mellal", note: "Second leg, agg 6-2" },
          { home: "Raja Casablanca", score: "1-2", away: "EJS Casablanca", note: "Second leg, agg 2-3" },
          { home: "OC Safi", score: "3-0", away: "Hassania Sidi Slimane", note: "Second leg, agg 5-1" },
          { home: "FUS Rabat", score: "2-2", away: "RAC Casablanca", note: "Second leg, agg 2-4" }
        ] },
        { name: "1/4 finale", matches: [
          { home: "EJS Casablanca", score: "2-1", away: "OC Safi", note: "First leg" },
          { home: "MA Tetouan", score: "3-1", away: "Kenitra AC", note: "First leg" },
          { home: "RAC Casablanca", score: "1-2", away: "FAR Rabat", note: "First leg" },
          { home: "WAC Casablanca", score: "1-1", away: "MC Oujda", note: "First leg" },
          { home: "OC Safi", score: "0-1", away: "EJS Casablanca", note: "Second leg, agg 1-3" },
          { home: "Kenitra AC", score: "4-1", away: "MA Tetouan", note: "Second leg, agg 5-4" },
          { home: "FAR Rabat", score: "1-0", away: "RAC Casablanca", note: "Second leg, agg 3-1" },
          { home: "MC Oujda", score: "0-0", away: "WAC Casablanca", note: "Second leg, agg 1-1" },
          { home: "WAC Casablanca", score: "2-0", away: "MC Oujda", note: "replay match" }
        ] },
        { name: "Demi-finales", matches: [
          { home: "Kenitra AC", score: "2-1", away: "EJS Casablanca", note: "First leg" },
          { home: "WAC Casablanca", score: "2-1", away: "FAR Rabat", note: "First leg" },
          { home: "EJS Casablanca", score: "0-0", away: "Kenitra AC", note: "Second leg, agg 1-2" },
          { home: "FAR Rabat", score: "0-0", away: "WAC Casablanca", note: "Second leg, agg 1-2" }
        ] }
      ],
      final: { date: "24 avril 1961", venue: "Stade d'Honneur, Casablanca", home: "Kenitra AC", away: "WAC Casablanca", score: "1-0" }
    }
  },
  {
    id: "1961-62",
    label: "1961/62",
    title: "Saison 1961/62",
    competitions: ["Championnat National de 1ere Division", "Coupe du Trone"],
    reigningChampion: "Forces Armees Royales",
    champion: "Forces Armees Royales",
    notes: [
      "Systeme de points du championnat: victoire 3 pts, nul 2 pts, defaite 1 pt.",
      "Les FAR conservent le titre de champion.",
      "Le MC Oujda remporte la Coupe du Trone face au KAC Marrakech."
    ],
    promoted: ["Fath Union Sport (Rabat)", "Ittihad Riadi de Tanger"],
    topScorer: { player: "M'jidou / Krimou / Harchaoui", club: "SCC Mohammedia / KACM / Etoile de Casablanca", goals: 13 },
    clubs: [
      { code: "FAR", name: "Forces Armees Royales", city: "Rabat" },
      { code: "RAC", name: "Racing Athletic Club", city: "Casablanca" },
      { code: "MCO", name: "Mouloudia Club Oujda", city: "Oujda" },
      { code: "MAS", name: "Maghreb Association Sportive", city: "Fes" },
      { code: "KACM", name: "Kawkab Athletic Club de Marrakech", city: "Marrakech" },
      { code: "WAC", name: "Wydad Athletic Club", city: "Casablanca" },
      { code: "RCA", name: "Raja Club Athletic", city: "Casablanca" },
      { code: "MAT", name: "Maghreb Athletic Tetouan", city: "Tetouan" },
      { code: "KAC", name: "Kenitra Athletic Club", city: "Kenitra" },
      { code: "SM", name: "Stade Marocain", city: "Rabat" },
      { code: "HUSA", name: "Hassania Union Sport Agadir", city: "Agadir" },
      { code: "SCCM", name: "Sporting Club Chabab de Mohammedia", city: "Mohammedia" },
      { code: "EJSC", name: "Etoile Jeunesse Sportive Casablanca", city: "Casablanca" },
      { code: "TAS", name: "Tihad Athletic Sport", city: "Casablanca" }
    ],
    table: [
      { rank: 1, code: "FAR", played: 26, won: 12, drawn: 7, lost: 7, goalsFor: 38, goalsAgainst: 25, points: 57, status: "Champion en titre, Champion" },
      { rank: 2, code: "RAC", played: 26, won: 8, drawn: 14, lost: 4, goalsFor: 26, goalsAgainst: 27, points: 56, status: "" },
      { rank: 3, code: "MCO", played: 26, won: 10, drawn: 9, lost: 7, goalsFor: 37, goalsAgainst: 26, points: 55, status: "" },
      { rank: 4, code: "MAS", played: 26, won: 10, drawn: 9, lost: 7, goalsFor: 34, goalsAgainst: 28, points: 55, status: "" },
      { rank: 5, code: "KACM", played: 26, won: 11, drawn: 7, lost: 8, goalsFor: 48, goalsAgainst: 45, points: 55, status: "" },
      { rank: 6, code: "WAC", played: 26, won: 10, drawn: 8, lost: 8, goalsFor: 29, goalsAgainst: 26, points: 54, status: "" },
      { rank: 7, code: "RCA", played: 26, won: 10, drawn: 7, lost: 9, goalsFor: 35, goalsAgainst: 28, points: 53, status: "" },
      { rank: 8, code: "MAT", played: 26, won: 8, drawn: 9, lost: 9, goalsFor: 30, goalsAgainst: 34, points: 51, status: "" },
      { rank: 9, code: "KAC", played: 26, won: 9, drawn: 7, lost: 10, goalsFor: 23, goalsAgainst: 28, points: 51, status: "" },
      { rank: 10, code: "SM", played: 26, won: 9, drawn: 7, lost: 10, goalsFor: 31, goalsAgainst: 37, points: 51, status: "Promu" },
      { rank: 11, code: "HUSA", played: 26, won: 9, drawn: 7, lost: 10, goalsFor: 24, goalsAgainst: 33, points: 51, status: "" },
      { rank: 12, code: "SCCM", played: 26, won: 6, drawn: 12, lost: 8, goalsFor: 33, goalsAgainst: 35, points: 50, status: "Promu" },
      { rank: 13, code: "EJSC", played: 26, won: 4, drawn: 12, lost: 10, goalsFor: 30, goalsAgainst: 36, points: 46, status: "Relegue" },
      { rank: 14, code: "TAS", played: 26, won: 3, drawn: 11, lost: 12, goalsFor: 25, goalsAgainst: 35, points: 43, status: "Relegue" }
    ],
    resultGrid: {
      columns: ["FAR", "RAC", "MCO", "MAS", "KACM", "WAC", "RCA", "MAT", "KAC", "SM", "HUSA", "SCCM", "EJSC", "TAS"],
      rows: [
        { home: "FAR", results: ["", "0-0", "1-1", "2-1", "1-3", "1-2", "1-1", "2-0", "0-1", "0-0", "1-2", "2-1", "3-1", "4-0"] },
        { home: "RAC", results: ["1-1", "", "0-0", "1-0", "0-0", "1-0", "2-1", "1-1", "2-1", "1-1", "2-0", "3-3", "1-1", "2-0"] },
        { home: "MCO", results: ["0-1", "0-1", "", "2-0", "5-3", "1-0", "1-1", "4-1", "0-1", "1-1", "4-0", "3-1", "1-0", "3-2"] },
        { home: "MAS", results: ["1-2", "3-0", "1-1", "", "2-1", "1-0", "1-0", "1-0", "1-1", "3-1", "1-0", "2-0", "2-2", "2-0"] },
        { home: "KACM", results: ["1-4", "2-2", "1-0", "2-2", "", "2-4", "2-2", "2-0", "2-0", "6-1", "2-0", "1-0", "2-4", "1-1"] },
        { home: "WAC", results: ["1-2", "2-0", "2-2", "0-0", "2-1", "", "0-1", "0-0", "2-1", "1-0", "1-3", "1-1", "2-1", "1-0"] },
        { home: "RCA", results: ["2-1", "0-0", "1-0", "3-1", "5-3", "0-1", "", "2-0", "0-1", "2-3", "4-0", "0-1", "1-0", "1-1"] },
        { home: "MAT", results: ["2-2", "1-1", "1-1", "2-2", "2-0", "0-0", "2-2", "", "2-1", "1-2", "2-1", "4-2", "1-1", "1-0"] },
        { home: "KAC", results: ["0-2", "1-0", "1-1", "2-1", "1-1", "0-1", "0-1", "1-0", "", "2-1", "2-1", "1-1", "0-0", "2-1"] },
        { home: "SM", results: ["1-0", "0-1", "1-3", "1-1", "0-1", "3-1", "3-1", "0-2", "3-2", "", "0-0", "1-0", "2-2", "1-1"] },
        { home: "HUSA", results: ["2-1", "0-0", "1-0", "2-2", "2-2", "1-0", "2-1", "2-1", "0-0", "1-2", "", "1-1", "1-1", "1-0"] },
        { home: "SCCM", results: ["1-2", "2-2", "4-2", "0-1", "2-2", "1-1", "0-0", "4-1", "2-0", "1-0", "0-0", "", "4-2", "0-0"] },
        { home: "EJSC", results: ["0-2", "2-2", "0-0", "1-1", "1-2", "1-2", "1-1", "0-2", "2-0", "1-2", "2-0", "2-0", "", "1-1"] },
        { home: "TAS", results: ["0-0", "5-0", "0-1", "2-1", "2-3", "2-2", "1-2", "0-1", "1-1", "2-1", "1-1", "1-1", "1-1", ""] }
      ]
    },
    cup: {
      winner: "Mouloudia Club Oujda",
      runnerUp: "Kawkab Athletic Club de Marrakech",
      rounds: [
        { name: "1/8 finale", matches: [
          { home: "Chabab Larache", score: "0-2", away: "TAS Casablanca" },
          { home: "MAS Fes", score: "3-1", away: "EJS Casablanca" },
          { home: "Mouloudia Club de Marrakech", score: "1-2", away: "KAC Marrakech" },
          { home: "MC Oujda", score: "2-0", away: "WAC Casablanca" },
          { home: "RAC Casablanca", score: "3-2", away: "MA Tetouan" },
          { home: "Raja Casablanca", score: "0-1", away: "Kenitra AC" },
          { home: "Stade Marocain", score: "1-6", away: "SCC Mohammedia" },
          { home: "Youssoufia Club de Rabat", score: "2-1", away: "HUS Agadir" }
        ] },
        { name: "1/4 finale", matches: [
          { home: "MAS Fes", score: "0-0", away: "Kenitra AC", note: "MAS Fes 7-6 aux penalties" },
          { home: "MC Oujda", score: "2-0", away: "SCC Mohammedia" },
          { home: "RAC Casablanca", score: "0-2", away: "KAC Marrakech" },
          { home: "Youssoufia Club de Rabat", score: "0-1", away: "TAS Casablanca" }
        ] },
        { name: "Demi-finales", matches: [
          { home: "MAS Fes", score: "1-1", away: "KAC Marrakech", note: "KAC Marrakech aux penalties" },
          { home: "MC Oujda", score: "3-0", away: "TAS Casablanca" }
        ] }
      ],
      final: { date: "20 mai 1962", venue: "Stade d'Honneur, Casablanca", home: "MC Oujda", away: "KAC Marrakech", score: "1-0" }
    }
  },
  {
    id: "1962-63",
    label: "1962/63",
    title: "Saison 1962/63",
    competitions: ["Championnat National de 1ere Division", "Coupe du Trone"],
    reigningChampion: "Forces Armees Royales",
    champion: "Forces Armees Royales",
    notes: [
      "Systeme de points du championnat: victoire 3 pts, nul 2 pts, defaite 1 pt.",
      "Les FAR remportent un troisieme championnat consecutif.",
      "KAC Marrakech remporte la Coupe du Trone face au HUS Agadir."
    ],
    promoted: ["Etoile Jeunesse Sportive Casablanca", "Moghreb Sportif de Rabat"],
    topScorer: { player: "Kebir", club: "FUS de Rabat", goals: 17 },
    clubs: [
      { code: "FAR", name: "Forces Armees Royales", city: "Rabat" },
      { code: "KACM", name: "Kawkab Athletic Club de Marrakech", city: "Marrakech" },
      { code: "RCA", name: "Raja Club Athletic", city: "Casablanca" },
      { code: "MAS", name: "Maghreb Association Sportive", city: "Fes" },
      { code: "KAC", name: "Kenitra Athletic Club", city: "Kenitra" },
      { code: "WAC", name: "Wydad Athletic Club", city: "Casablanca" },
      { code: "RAC", name: "Racing Athletic Club", city: "Casablanca" },
      { code: "SM", name: "Stade Marocain", city: "Rabat" },
      { code: "HUSA", name: "Hassania Union Sport Agadir", city: "Agadir" },
      { code: "SCCM", name: "Sporting Club Chabab de Mohammedia", city: "Mohammedia" },
      { code: "FUS", name: "Fath Union Sport", city: "Rabat" },
      { code: "MCO", name: "Mouloudia Club Oujda", city: "Oujda" },
      { code: "MAT", name: "Maghreb Athletic Tetouan", city: "Tetouan" },
      { code: "IRT", name: "Ittihad Riadi de Tanger", city: "Tanger" }
    ],
    table: [
      { rank: 1, code: "FAR", played: 26, won: 12, drawn: 12, lost: 2, goalsFor: 34, goalsAgainst: 17, points: 62, status: "Champion en titre, Champion" },
      { rank: 2, code: "KACM", played: 26, won: 10, drawn: 9, lost: 7, goalsFor: 32, goalsAgainst: 32, points: 55, status: "" },
      { rank: 3, code: "RCA", played: 26, won: 9, drawn: 10, lost: 7, goalsFor: 35, goalsAgainst: 28, points: 54, status: "" },
      { rank: 4, code: "MAS", played: 26, won: 9, drawn: 10, lost: 7, goalsFor: 34, goalsAgainst: 25, points: 54, status: "" },
      { rank: 5, code: "KAC", played: 26, won: 8, drawn: 11, lost: 7, goalsFor: 26, goalsAgainst: 25, points: 53, status: "" },
      { rank: 6, code: "WAC", played: 26, won: 8, drawn: 10, lost: 8, goalsFor: 26, goalsAgainst: 22, points: 52, status: "" },
      { rank: 7, code: "RAC", played: 26, won: 8, drawn: 10, lost: 8, goalsFor: 21, goalsAgainst: 22, points: 52, status: "" },
      { rank: 8, code: "SM", played: 26, won: 8, drawn: 10, lost: 8, goalsFor: 26, goalsAgainst: 27, points: 52, status: "" },
      { rank: 9, code: "HUSA", played: 26, won: 8, drawn: 10, lost: 8, goalsFor: 32, goalsAgainst: 30, points: 52, status: "" },
      { rank: 10, code: "SCCM", played: 26, won: 9, drawn: 7, lost: 10, goalsFor: 29, goalsAgainst: 34, points: 51, status: "" },
      { rank: 11, code: "FUS", played: 26, won: 8, drawn: 8, lost: 10, goalsFor: 31, goalsAgainst: 37, points: 50, status: "Promu" },
      { rank: 12, code: "MCO", played: 26, won: 7, drawn: 9, lost: 10, goalsFor: 18, goalsAgainst: 26, points: 49, status: "" },
      { rank: 13, code: "MAT", played: 26, won: 6, drawn: 9, lost: 11, goalsFor: 27, goalsAgainst: 31, points: 47, status: "Relegue" },
      { rank: 14, code: "IRT", played: 26, won: 5, drawn: 9, lost: 12, goalsFor: 29, goalsAgainst: 43, points: 45, status: "Promu, Relegue" }
    ],
    resultGrid: {
      columns: ["FAR", "KACM", "RCA", "MAS", "KAC", "WAC", "RAC", "SM", "HUSA", "SCCM", "FUS", "MCO", "MAT", "IRT"],
      rows: [
        { home: "FAR", results: ["", "0-1", "1-2", "2-2", "1-0", "0-0", "2-1", "2-0", "0-0", "5-1", "1-1", "0-0", "1-1", "2-1"] },
        { home: "KACM", results: ["1-1", "", "2-1", "2-1", "1-0", "1-0", "1-1", "1-1", "0-1", "1-0", "2-0", "1-1", "4-1", "1-0"] },
        { home: "RCA", results: ["0-1", "2-0", "", "3-2", "1-1", "1-1", "1-2", "1-0", "4-3", "0-1", "1-1", "2-0", "1-1", "5-1"] },
        { home: "MAS", results: ["0-1", "1-0", "1-1", "", "2-0", "1-0", "0-2", "0-1", "2-0", "1-0", "3-1", "2-0", "3-0", "3-0"] },
        { home: "KAC", results: ["1-1", "1-1", "2-2", "0-0", "", "0-0", "2-0", "1-2", "2-0", "1-2", "1-0", "0-0", "1-0", "3-2"] },
        { home: "WAC", results: ["1-1", "2-2", "0-1", "0-1", "2-0", "", "2-0", "1-0", "2-1", "0-1", "3-1", "2-1", "0-0", "2-1"] },
        { home: "RAC", results: ["0-2", "1-2", "1-1", "1-1", "0-0", "0-2", "", "2-0", "1-0", "2-0", "0-0", "2-0", "0-0", "1-0"] },
        { home: "SM", results: ["0-0", "1-1", "0-1", "2-2", "1-0", "1-0", "3-0", "", "1-0", "1-1", "1-2", "0-0", "2-0", "1-4"] },
        { home: "HUSA", results: ["0-2", "3-2", "0-0", "1-1", "2-2", "1-0", "1-1", "3-0", "", "0-0", "4-2", "4-2", "2-1", "4-1"] },
        { home: "SCCM", results: ["1-1", "2-0", "2-1", "1-0", "3-3", "1-2", "1-1", "1-5", "2-1", "", "4-1", "1-0", "1-1", "3-1"] },
        { home: "FUS", results: ["1-2", "4-2", "0-0", "3-1", "1-1", "2-1", "1-0", "1-1", "0-0", "1-0", "", "2-3", "3-0", "1-1"] },
        { home: "MCO", results: ["0-1", "1-1", "2-1", "0-0", "0-2", "2-1", "0-0", "2-1", "0-0", "1-0", "1-0", "", "2-0", "0-0"] },
        { home: "MAT", results: ["1-3", "1-1", "3-0", "2-2", "1-0", "1-1", "0-1", "0-0", "2-1", "2-0", "2-0", "3-0", "", "2-1"] },
        { home: "IRT", results: ["1-1", "5-1", "0-2", "2-2", "0-2", "1-1", "1-1", "1-1", "0-0", "2-0", "2-2", "0-0", "1-2", ""] }
      ]
    },
    cup: {
      winner: "Kawkab Athletic Club de Marrakech",
      runnerUp: "Hassania Union Sport Agadir",
      rounds: [
        { name: "1/8 finale", matches: [
          { home: "DH Jadidi", score: "1-1", away: "MA Tetouan" },
          { home: "FAR Rabat", score: "2-1", away: "MAS Fes" },
          { home: "KAC Marrakech", score: "1-0", away: "Stade Marocain" },
          { home: "MC Oujda", score: "0-0", away: "Raja Casablanca" },
          { home: "RAC Casablanca", score: "3-2", away: "RS Settat" },
          { home: "TAS Casablanca", score: "0-0", away: "HUS Agadir" },
          { home: "US Kacem", score: "1-2", away: "WAC Casablanca" },
          { home: "IR Tanger", score: "0-2", away: "Kenitra AC" },
          { home: "MA Tetouan", score: "3-2", away: "DH Jadidi", note: "replay match" },
          { home: "Raja Casablanca", score: "3-2", away: "MC Oujda", note: "replay match" },
          { home: "HUS Agadir", score: "3-1", away: "TAS Casablanca", note: "replay match" }
        ] },
        { name: "1/4 finale", matches: [
          { home: "FAR Rabat", score: "1-0", away: "Raja Casablanca" },
          { home: "KAC Marrakech", score: "2-0", away: "Kenitra AC" },
          { home: "MA Tetouan", score: "0-3", away: "HUS Agadir" },
          { home: "RAC Casablanca", score: "0-1", away: "WAC Casablanca" }
        ] },
        { name: "Demi-finales", matches: [
          { home: "FAR Rabat", score: "1-2", away: "HUS Agadir" },
          { home: "KAC Marrakech", score: "2-1", away: "WAC Casablanca" }
        ] }
      ],
      final: { date: "9 juin 1963", venue: "Stade d'Honneur, Casablanca", home: "KAC Marrakech", away: "HUS Agadir", score: "1-1", note: "2-2 apres prolongation; 3-2 golden goal" }
    }
  },
  {
    id: "1963-64",
    label: "1963/64",
    title: "Saison 1963/64",
    competitions: ["Championnat National de 1ere Division", "Coupe du Trone"],
    reigningChampion: "Forces Armees Royales",
    champion: "Forces Armees Royales",
    notes: [
      "Systeme de points du championnat: victoire 3 pts, nul 2 pts, defaite 1 pt.",
      "Les FAR conservent encore le titre de champion.",
      "KAC Marrakech remporte la Coupe du Trone face au WAC Casablanca."
    ],
    promoted: ["Club Omnisport de Meknes", "Tihad Athletic Sport (Casablanca)"],
    topScorer: { player: "Trava", club: "Chabab Mohammedia", goals: 23 },
    clubs: [
      { code: "FAR", name: "Forces Armees Royales", city: "Rabat" },
      { code: "SM", name: "Stade Marocain", city: "Rabat" },
      { code: "SCCM", name: "Sporting Club Chabab de Mohammedia", city: "Mohammedia" },
      { code: "MCO", name: "Mouloudia Club Oujda", city: "Oujda" },
      { code: "MAS", name: "Maghreb Association Sportive", city: "Fes" },
      { code: "WAC", name: "Wydad Athletic Club", city: "Casablanca" },
      { code: "FUS", name: "Fath Union Sport", city: "Rabat" },
      { code: "KAC", name: "Kenitra Athletic Club", city: "Kenitra" },
      { code: "RCA", name: "Raja Club Athletic", city: "Casablanca" },
      { code: "KACM", name: "Kawkab Athletic Club de Marrakech", city: "Marrakech" },
      { code: "HUSA", name: "Hassania Union Sport Agadir", city: "Agadir" },
      { code: "RAC", name: "Racing Athletic Club", city: "Casablanca" },
      { code: "EJSC", name: "Etoile Jeunesse Sportive Casablanca", city: "Casablanca" },
      { code: "MSR", name: "Moghreb Sportif de Rabat", city: "Rabat" }
    ],
    table: [
      { rank: 1, code: "FAR", played: 26, won: 15, drawn: 8, lost: 3, goalsFor: 42, goalsAgainst: 16, points: 64, status: "Champion en titre, Champion" },
      { rank: 2, code: "SM", played: 26, won: 12, drawn: 8, lost: 6, goalsFor: 41, goalsAgainst: 26, points: 58, status: "" },
      { rank: 3, code: "SCCM", played: 26, won: 8, drawn: 13, lost: 5, goalsFor: 47, goalsAgainst: 39, points: 55, status: "" },
      { rank: 4, code: "MCO", played: 26, won: 9, drawn: 10, lost: 7, goalsFor: 24, goalsAgainst: 22, points: 54, status: "" },
      { rank: 5, code: "MAS", played: 26, won: 9, drawn: 9, lost: 8, goalsFor: 25, goalsAgainst: 27, points: 53, status: "" },
      { rank: 6, code: "WAC", played: 26, won: 7, drawn: 12, lost: 7, goalsFor: 26, goalsAgainst: 26, points: 52, status: "" },
      { rank: 7, code: "FUS", played: 26, won: 7, drawn: 12, lost: 7, goalsFor: 23, goalsAgainst: 24, points: 52, status: "" },
      { rank: 8, code: "KAC", played: 26, won: 7, drawn: 12, lost: 7, goalsFor: 30, goalsAgainst: 32, points: 52, status: "" },
      { rank: 9, code: "RCA", played: 26, won: 8, drawn: 9, lost: 9, goalsFor: 29, goalsAgainst: 34, points: 51, status: "" },
      { rank: 10, code: "KACM", played: 26, won: 9, drawn: 7, lost: 10, goalsFor: 25, goalsAgainst: 26, points: 51, status: "" },
      { rank: 11, code: "HUSA", played: 26, won: 9, drawn: 6, lost: 11, goalsFor: 26, goalsAgainst: 23, points: 50, status: "" },
      { rank: 12, code: "RAC", played: 26, won: 8, drawn: 8, lost: 10, goalsFor: 24, goalsAgainst: 30, points: 50, status: "" },
      { rank: 13, code: "EJSC", played: 26, won: 5, drawn: 13, lost: 8, goalsFor: 21, goalsAgainst: 25, points: 49, status: "Promu, Relegue" },
      { rank: 14, code: "MSR", played: 26, won: 4, drawn: 3, lost: 19, goalsFor: 23, goalsAgainst: 56, points: 37, status: "Promu, Relegue" }
    ],
    resultGrid: {
      columns: ["FAR", "SM", "SCCM", "MCO", "MAS", "WAC", "FUS", "KAC", "RCA", "KACM", "HUSA", "RAC", "EJSC", "MSR"],
      rows: [
        { home: "FAR", results: ["", "3-0", "2-1", "0-1", "0-1", "0-0", "0-1", "3-1", "5-0", "0-0", "1-0", "3-0", "0-0", "1-0"] },
        { home: "SM", results: ["1-3", "", "5-3", "1-0", "4-1", "1-0", "2-0", "3-3", "3-1", "1-1", "2-0", "3-0", "0-0", "5-1"] },
        { home: "SCCM", results: ["3-3", "2-2", "", "1-1", "2-1", "3-1", "2-2", "1-1", "2-2", "3-1", "3-1", "1-1", "2-2", "8-0"] },
        { home: "MCO", results: ["1-3", "0-0", "0-2", "", "0-0", "1-2", "0-0", "3-0", "2-1", "2-1", "0-0", "1-1", "2-0", "2-1"] },
        { home: "MAS", results: ["0-3", "2-0", "1-1", "1-0", "", "1-0", "0-0", "1-1", "2-1", "0-0", "1-2", "1-2", "2-0", "1-0"] },
        { home: "WAC", results: ["1-1", "1-0", "1-1", "0-0", "1-1", "", "1-2", "1-1", "1-1", "2-0", "0-0", "1-1", "1-0", "3-1"] },
        { home: "FUS", results: ["2-3", "0-0", "1-2", "3-0", "0-0", "2-2", "", "1-2", "1-1", "1-1", "0-1", "1-0", "0-0", "2-1"] },
        { home: "KAC", results: ["1-3", "0-2", "0-0", "1-2", "1-0", "3-1", "0-0", "", "1-2", "1-1", "3-0", "1-0", "1-0", "2-2"] },
        { home: "RCA", results: ["1-1", "1-2", "1-1", "1-1", "2-2", "0-1", "2-0", "1-1", "", "1-0", "1-0", "1-4", "1-0", "4-0"] },
        { home: "KACM", results: ["0-1", "1-0", "2-0", "1-1", "0-1", "2-1", "2-0", "1-1", "0-1", "", "1-0", "1-0", "3-0", "1-0"] },
        { home: "HUSA", results: ["1-1", "0-0", "5-1", "0-1", "0-0", "1-2", "1-1", "1-0", "1-0", "2-1", "", "1-0", "2-0", "2-0"] },
        { home: "RAC", results: ["0-1", "0-0", "0-1", "0-3", "4-2", "2-1", "0-1", "0-0", "0-1", "4-2", "1-0", "", "0-0", "3-2"] },
        { home: "EJSC", results: ["0-0", "3-1", "0-0", "0-0", "2-1", "0-0", "0-0", "3-3", "0-0", "2-0", "3-2", "1-1", "", "5-1"] },
        { home: "MSR", results: ["0-1", "0-3", "3-1", "2-0", "1-2", "1-1", "1-2", "0-1", "3-1", "1-2", "0-3", "0-0", "2-0", ""] }
      ]
    },
    cup: {
      winner: "Kawkab Athletic Club de Marrakech",
      runnerUp: "Wydad Athletic Club",
      rounds: [
        { name: "1/8 finale", matches: [
          { home: "EJS Casablanca", score: "1-2", away: "Kenitra AC" },
          { home: "HUS Agadir", score: "1-2", away: "SCC Mohammedia" },
          { home: "KAC Marrakech", score: "2-1", away: "HUS Agadir" },
          { home: "KSNAC Casablanca", score: "4-2", away: "Moghreb Sportif de Rabat" },
          { home: "RAC Casablanca", score: "1-2", away: "WAC Casablanca" },
          { home: "Raja Casablanca", score: "1-0", away: "Union Sportive Musilman Oujda" },
          { home: "RS Berkane", score: "0-3", away: "FAR Rabat" },
          { home: "TAS Casablanca", score: "1-3", away: "MC Oujda" }
        ] },
        { name: "1/4 finale", matches: [
          { home: "KAC Marrakech", score: "1-0", away: "MC Oujda" },
          { home: "Kenitra AC", score: "0-0", away: "SCC Mohammedia", note: "SCC Mohammedia 5-2 aux penalties" },
          { home: "KSNAC Casablanca", score: "0-2", away: "WAC Casablanca" },
          { home: "Raja Casablanca", score: "2-0", away: "FAR Rabat" }
        ] },
        { name: "Demi-finales", matches: [
          { home: "KAC Marrakech", score: "1-1", away: "SCC Mohammedia", note: "KAC Marrakech 6-5 aux penalties" },
          { home: "Raja Casablanca", score: "0-0", away: "WAC Casablanca" },
          { home: "WAC Casablanca", score: "1-0", away: "Raja Casablanca", note: "replay match" }
        ] }
      ],
      final: { date: "28 juin 1964", venue: "Stade d'Honneur, Casablanca", home: "KAC Marrakech", away: "WAC Casablanca", score: "3-2" }
    }
  },
  {
    id: "1964-65",
    label: "1964/65",
    title: "Saison 1964/65",
    competitions: ["Championnat National de 1ere Division", "Coupe du Trone"],
    reigningChampion: "Forces Armees Royales",
    champion: "Maghreb Association Sportive",
    notes: [
      "Systeme de points du championnat: victoire 3 pts, nul 2 pts, defaite 1 pt.",
      "Les FAR sont suspendues par la federation a la fin de la saison.",
      "KAC Marrakech remporte la Coupe du Trone face au Raja Casablanca."
    ],
    promoted: ["Renaissance Sportive de Settat", "Maghreb Athletic Tetouan"],
    topScorer: { player: "Fettah", club: "FUS de Rabat", goals: 16 },
    clubs: [
      { code: "MAS", name: "Maghreb Association Sportive", city: "Fes" },
      { code: "RAC", name: "Racing Athletic Club", city: "Casablanca" },
      { code: "CODM", name: "Club Omnisport de Meknes", city: "Meknes" },
      { code: "FAR", name: "Forces Armees Royales", city: "Rabat" },
      { code: "WAC", name: "Wydad Athletic Club", city: "Casablanca" },
      { code: "KACM", name: "Kawkab Athletic Club de Marrakech", city: "Marrakech" },
      { code: "FUS", name: "Fath Union Sport", city: "Rabat" },
      { code: "TAS", name: "Tihad Athletic Sport", city: "Casablanca" },
      { code: "SM", name: "Stade Marocain", city: "Rabat" },
      { code: "SCCM", name: "Sporting Club Chabab de Mohammedia", city: "Mohammedia" },
      { code: "MCO", name: "Mouloudia Club Oujda", city: "Oujda" },
      { code: "RCA", name: "Raja Club Athletic", city: "Casablanca" },
      { code: "HUSA", name: "Hassania Union Sport Agadir", city: "Agadir" },
      { code: "KAC", name: "Kenitra Athletic Club", city: "Kenitra" }
    ],
    table: [
      { rank: 1, code: "MAS", played: 26, won: 14, drawn: 4, lost: 8, goalsFor: 27, goalsAgainst: 22, points: 58, status: "Champion" },
      { rank: 2, code: "RAC", played: 26, won: 9, drawn: 12, lost: 5, goalsFor: 31, goalsAgainst: 25, points: 56, status: "" },
      { rank: 3, code: "CODM", played: 26, won: 9, drawn: 11, lost: 6, goalsFor: 32, goalsAgainst: 29, points: 55, status: "Promu" },
      { rank: 4, code: "FAR", played: 26, won: 8, drawn: 12, lost: 6, goalsFor: 26, goalsAgainst: 18, points: 54, status: "Champion en titre, Suspendu" },
      { rank: 5, code: "WAC", played: 26, won: 9, drawn: 10, lost: 7, goalsFor: 27, goalsAgainst: 21, points: 54, status: "" },
      { rank: 6, code: "KACM", played: 26, won: 9, drawn: 10, lost: 7, goalsFor: 26, goalsAgainst: 24, points: 54, status: "" },
      { rank: 7, code: "FUS", played: 26, won: 9, drawn: 8, lost: 9, goalsFor: 36, goalsAgainst: 36, points: 52, status: "" },
      { rank: 8, code: "TAS", played: 26, won: 9, drawn: 8, lost: 9, goalsFor: 18, goalsAgainst: 22, points: 52, status: "Promu" },
      { rank: 9, code: "SM", played: 26, won: 6, drawn: 12, lost: 8, goalsFor: 29, goalsAgainst: 30, points: 50, status: "" },
      { rank: 10, code: "SCCM", played: 26, won: 9, drawn: 6, lost: 11, goalsFor: 25, goalsAgainst: 27, points: 50, status: "" },
      { rank: 11, code: "MCO", played: 26, won: 7, drawn: 10, lost: 9, goalsFor: 24, goalsAgainst: 30, points: 50, status: "" },
      { rank: 12, code: "RCA", played: 26, won: 6, drawn: 12, lost: 8, goalsFor: 25, goalsAgainst: 29, points: 50, status: "" },
      { rank: 13, code: "HUSA", played: 26, won: 6, drawn: 10, lost: 10, goalsFor: 37, goalsAgainst: 42, points: 48, status: "Maintenu" },
      { rank: 14, code: "KAC", played: 26, won: 5, drawn: 9, lost: 12, goalsFor: 21, goalsAgainst: 29, points: 45, status: "Relegue" }
    ],
    resultGrid: {
      columns: ["MAS", "RAC", "CODM", "FAR", "WAC", "KACM", "FUS", "TAS", "SM", "SCCM", "MCO", "RCA", "HUSA", "KAC"],
      rows: [
        { home: "MAS", results: ["", "2-0", "2-1", "1-0", "1-0", "0-1", "1-0", "1-0", "1-0", "1-0", "2-0", "1-0", "0-0", "2-1"] },
        { home: "RAC", results: ["3-0", "", "2-1", "1-1", "1-0", "2-1", "3-5", "1-0", "2-1", "1-1", "0-1", "2-0", "1-1", "0-0"] },
        { home: "CODM", results: ["2-1", "1-1", "", "1-2", "1-0", "0-1", "2-1", "0-0", "1-0", "0-1", "1-0", "2-2", "2-1", "0-0"] },
        { home: "FAR", results: ["0-3", "1-1", "0-0", "", "1-1", "1-0", "2-0", "3-0", "1-2", "0-0", "5-0", "0-0", "1-1", "2-0"] },
        { home: "WAC", results: ["0-1", "2-3", "2-0", "0-0", "", "1-1", "2-0", "0-0", "1-1", "1-0", "1-1", "2-1", "3-0", "1-0"] },
        { home: "KACM", results: ["2-2", "0-0", "2-2", "1-1", "1-0", "", "1-4", "2-0", "2-0", "2-0", "1-0", "1-1", "1-0", "1-1"] },
        { home: "FUS", results: ["1-1", "0-0", "1-1", "1-0", "2-1", "2-1", "", "3-2", "0-1", "1-2", "1-1", "1-1", "4-5", "2-1"] },
        { home: "TAS", results: ["1-0", "0-0", "0-0", "1-0", "0-0", "0-0", "1-1", "", "0-0", "0-1", "1-0", "1-0", "3-1", "2-0"] },
        { home: "SM", results: ["3-0", "1-1", "3-4", "0-1", "2-2", "0-0", "1-1", "1-2", "", "3-1", "1-1", "2-1", "2-2", "0-2"] },
        { home: "SCCM", results: ["1-2", "2-1", "1-2", "1-1", "0-1", "1-0", "0-1", "0-1", "0-1", "", "1-1", "0-0", "2-1", "5-2"] },
        { home: "MCO", results: ["3-1", "1-3", "1-1", "1-1", "0-1", "0-2", "1-0", "2-1", "0-0", "0-1", "", "3-0", "3-2", "2-1"] },
        { home: "RCA", results: ["1-0", "1-1", "3-3", "1-0", "1-1", "2-1", "2-0", "1-2", "1-1", "1-1", "1-1", "", "2-1", "1-0"] },
        { home: "HUSA", results: ["1-0", "2-1", "2-2", "1-1", "2-2", "1-1", "2-3", "3-0", "2-2", "2-1", "1-1", "2-1", "", "1-2"] },
        { home: "KAC", results: ["1-1", "0-0", "0-2", "0-1", "1-2", "3-0", "1-1", "2-0", "1-1", "1-2", "0-0", "0-0", "1-0", ""] }
      ]
    },
    cup: {
      winner: "Kawkab Athletic Club de Marrakech",
      runnerUp: "Raja Club Athletic",
      rounds: [
        { name: "1/8 finale", matches: [
          { home: "COD Meknes", score: "0-0", away: "MAS Fes" },
          { home: "HUS Agadir", score: "0-0", away: "RAC Casablanca" },
          { home: "KAC Marrakech", score: "0-0", away: "FAR Rabat" },
          { home: "Kenitra AC", score: "0-1", away: "Stade Marocain" },
          { home: "MA Tetouan", score: "2-0", away: "DH Jadidi" },
          { home: "Raja Beni Mellal", score: "2-1", away: "Union Sportive Musilman Oujda" },
          { home: "SCC Mohammedia", score: "0-2", away: "Raja Casablanca" },
          { home: "WAC Casablanca", score: "1-0", away: "TAS Casablanca" },
          { home: "MAS Fes", score: "1-0", away: "COD Meknes", note: "replay match" },
          { home: "RAC Casablanca", score: "2-0", away: "HUS Agadir", note: "replay match" },
          { home: "FAR Rabat", score: "0-1", away: "KAC Marrakech", note: "replay match" }
        ] },
        { name: "1/4 finale", matches: [
          { home: "KAC Marrakech", score: "1-0", away: "RAC Casablanca" },
          { home: "MA Tetouan", score: "1-2", away: "Stade Marocain" },
          { home: "Raja Beni Mellal", score: "2-1", away: "MAS Fes" },
          { home: "WAC Casablanca", score: "1-2", away: "Raja Casablanca" }
        ] },
        { name: "Demi-finales", matches: [
          { home: "KAC Marrakech", score: "1-0", away: "Stade Marocain" },
          { home: "Raja Beni Mellal", score: "0-1", away: "Raja Casablanca" }
        ] }
      ],
      final: { date: "13 juin 1965", venue: "Stade d'Honneur, Casablanca", home: "KAC Marrakech", away: "Raja Casablanca", score: "3-1" }
    }
  },
  {
    id: "1965-66",
    label: "1965/66",
    title: "Saison 1965/66",
    competitions: ["Championnat National de 1ere Division", "Coupe du Trone"],
    reigningChampion: "Maghreb Association Sportive",
    champion: "Wydad Athletic Club",
    notes: [
      "Systeme de points du championnat: victoire 3 pts, nul 2 pts, defaite 1 pt.",
      "Les FAR sont readmises apres leur suspension; HUSA reste en premiere division.",
      "COD Meknes remporte la Coupe du Trone face au MAS Fes."
    ],
    promoted: ["Difaa Hassani Jadidi", "Kenitra Athletic Club", "Raja Beni Mellal"],
    topScorer: { player: "Azaoui", club: "MCO Oujda", goals: 14 },
    clubs: [
      { code: "WAC", name: "Wydad Athletic Club", city: "Casablanca" },
      { code: "RCA", name: "Raja Club Athletic", city: "Casablanca" },
      { code: "RSS", name: "Renaissance Sportive de Settat", city: "Settat" },
      { code: "SCCM", name: "Sporting Club Chabab de Mohammedia", city: "Mohammedia" },
      { code: "KACM", name: "Kawkab Athletic Club de Marrakech", city: "Marrakech" },
      { code: "TAS", name: "Tihad Athletic Sport", city: "Casablanca" },
      { code: "HUSA", name: "Hassania Union Sport Agadir", city: "Agadir" },
      { code: "SM", name: "Stade Marocain", city: "Rabat" },
      { code: "MCO", name: "Mouloudia Club Oujda", city: "Oujda" },
      { code: "RAC", name: "Racing Athletic Club", city: "Casablanca" },
      { code: "MAS", name: "Maghreb Association Sportive", city: "Fes" },
      { code: "FUS", name: "Fath Union Sport", city: "Rabat" },
      { code: "CODM", name: "Club Omnisport de Meknes", city: "Meknes" },
      { code: "MAT", name: "Maghreb Athletic Tetouan", city: "Tetouan" }
    ],
    table: [
      { rank: 1, code: "WAC", played: 26, won: 11, drawn: 9, lost: 6, goalsFor: 26, goalsAgainst: 18, points: 57, status: "Champion" },
      { rank: 2, code: "RCA", played: 26, won: 9, drawn: 12, lost: 5, goalsFor: 27, goalsAgainst: 20, points: 56, status: "" },
      { rank: 3, code: "RSS", played: 26, won: 10, drawn: 8, lost: 8, goalsFor: 28, goalsAgainst: 15, points: 54, status: "Promu" },
      { rank: 4, code: "SCCM", played: 26, won: 8, drawn: 12, lost: 6, goalsFor: 19, goalsAgainst: 17, points: 54, status: "" },
      { rank: 5, code: "KACM", played: 26, won: 9, drawn: 9, lost: 8, goalsFor: 21, goalsAgainst: 21, points: 53, status: "" },
      { rank: 6, code: "TAS", played: 26, won: 8, drawn: 10, lost: 8, goalsFor: 21, goalsAgainst: 20, points: 52, status: "" },
      { rank: 7, code: "HUSA", played: 26, won: 6, drawn: 14, lost: 6, goalsFor: 32, goalsAgainst: 33, points: 52, status: "" },
      { rank: 8, code: "SM", played: 26, won: 8, drawn: 9, lost: 9, goalsFor: 27, goalsAgainst: 27, points: 51, status: "" },
      { rank: 9, code: "MCO", played: 26, won: 5, drawn: 15, lost: 6, goalsFor: 27, goalsAgainst: 28, points: 51, status: "" },
      { rank: 10, code: "RAC", played: 26, won: 7, drawn: 10, lost: 9, goalsFor: 17, goalsAgainst: 21, points: 50, status: "" },
      { rank: 11, code: "MAS", played: 26, won: 6, drawn: 12, lost: 8, goalsFor: 13, goalsAgainst: 16, points: 50, status: "Champion en titre" },
      { rank: 12, code: "FUS", played: 26, won: 7, drawn: 10, lost: 9, goalsFor: 25, goalsAgainst: 31, points: 50, status: "" },
      { rank: 13, code: "CODM", played: 26, won: 7, drawn: 9, lost: 10, goalsFor: 16, goalsAgainst: 23, points: 49, status: "Relegue" },
      { rank: 14, code: "MAT", played: 26, won: 7, drawn: 9, lost: 10, goalsFor: 21, goalsAgainst: 30, points: 49, status: "Promu, Relegue" }
    ],
    resultGrid: {
      columns: ["WAC", "RCA", "RSS", "SCCM", "KACM", "TAS", "HUSA", "SM", "MCO", "RAC", "MAS", "FUS", "CODM", "MAT"],
      rows: [
        { home: "WAC", results: ["", "0-0", "1-0", "1-0", "1-0", "1-0", "3-1", "0-0", "0-0", "2-1", "0-0", "2-1", "5-2", "0-1"] },
        { home: "RCA", results: ["0-0", "", "0-0", "2-1", "1-0", "1-0", "0-0", "2-2", "1-1", "1-1", "2-1", "1-2", "0-0", "3-1"] },
        { home: "RSS", results: ["0-1", "2-1", "", "3-0", "2-0", "2-1", "2-2", "1-0", "1-0", "1-0", "2-0", "1-0", "0-0", "7-0"] },
        { home: "SCCM", results: ["1-0", "0-2", "1-0", "", "2-0", "0-0", "3-1", "0-0", "1-1", "0-0", "1-1", "3-0", "1-0", "0-0"] },
        { home: "KACM", results: ["1-0", "1-0", "1-0", "1-0", "", "1-1", "4-0", "2-1", "1-0", "0-0", "2-0", "0-0", "1-1", "2-2"] },
        { home: "TAS", results: ["2-0", "0-2", "1-0", "0-0", "2-0", "", "2-1", "1-0", "1-1", "0-1", "1-0", "1-1", "2-0", "0-0"] },
        { home: "HUSA", results: ["2-2", "1-0", "1-1", "1-1", "1-1", "2-2", "", "1-0", "1-1", "1-1", "0-0", "4-1", "2-1", "3-0"] },
        { home: "SM", results: ["0-0", "1-2", "0-1", "0-0", "1-0", "2-1", "2-1", "", "5-5", "0-1", "1-1", "1-2", "1-0", "1-0"] },
        { home: "MCO", results: ["2-1", "1-1", "0-0", "1-1", "1-1", "1-1", "2-2", "1-2", "", "1-2", "0-0", "1-0", "1-1", "3-2"] },
        { home: "RAC", results: ["0-2", "0-0", "1-1", "0-1", "0-1", "1-2", "1-1", "1-1", "0-1", "", "1-0", "0-0", "0-1", "3-1"] },
        { home: "MAS", results: ["2-0", "2-1", "0-0", "0-0", "0-0", "0-0", "1-1", "2-1", "1-0", "1-0", "", "0-0", "1-0", "0-0"] },
        { home: "FUS", results: ["1-1", "2-2", "2-0", "1-1", "1-0", "0-0", "1-2", "2-4", "1-2", "2-1", "1-0", "", "1-1", "2-0"] },
        { home: "CODM", results: ["1-1", "0-1", "1-0", "0-1", "1-1", "1-0", "1-0", "0-0", "1-0", "0-1", "1-0", "1-1", "", "1-0"] },
        { home: "MAT", results: ["0-2", "1-1", "1-1", "2-0", "3-0", "2-0", "0-0", "0-1", "0-0", "0-0", "1-0", "2-0", "2-0", ""] }
      ]
    },
    cup: {
      winner: "Club Omnisport de Meknes",
      runnerUp: "Maghreb Association Sportive",
      rounds: [
        { name: "1/16 finale", matches: [
          { home: "MAS Fes", score: "2-1", away: "USM Mohammadia" }
        ] },
        { name: "1/8 finale", matches: [
          { home: "COD Meknes", score: "2-2", away: "Stade Marocain" },
          { home: "DH Jadidi", score: "0-2", away: "ANTPK Kenitra" },
          { home: "HUS Agadir", score: "2-1", away: "Youssoufia Club Rabat" },
          { home: "KSNAC Casablanca", score: "0-0", away: "KAC Marrakech" },
          { home: "MC Oujda", score: "2-2", away: "Alam Casablanca" },
          { home: "SCC Mohammedia", score: "2-1", away: "EJS Casablanca" },
          { home: "TAS Casablanca", score: "1-0", away: "Raja Casablanca" },
          { home: "WAC Casablanca", score: "1-1", away: "MAS Fes" },
          { home: "Stade Marocain", score: "0-1", away: "COD Meknes", note: "replay match" },
          { home: "KAC Marrakech", score: "2-1", away: "KSNAC Casablanca", note: "replay match" },
          { home: "Alam Casablanca", score: "2-1", away: "MC Oujda", note: "replay match" },
          { home: "MAS Fes", score: "2-0", away: "WAC Casablanca", note: "replay match" }
        ] },
        { name: "1/4 finale", matches: [
          { home: "COD Meknes", score: "3-1", away: "Alam Casablanca" },
          { home: "HUS Agadir", score: "0-0", away: "ANTPK Kenitra", note: "ANTPK Kenitra 4-3 aux penalties" },
          { home: "SCC Mohammedia", score: "1-0", away: "KAC Marrakech" },
          { home: "TAS Casablanca", score: "0-1", away: "MAS Fes" }
        ] },
        { name: "Demi-finales", matches: [
          { home: "COD Meknes", score: "2-1", away: "ANTPK Kenitra" },
          { home: "SCC Mohammedia", score: "0-0", away: "MAS Fes", note: "MAS Fes 6-5 aux penalties" }
        ] }
      ],
      final: { date: "12 juin 1966", venue: "Stade d'Honneur, Casablanca", home: "COD Meknes", away: "MAS Fes", score: "2-0" }
    }
  }
];
