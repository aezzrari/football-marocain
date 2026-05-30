const international2000DetailsRawLines = [
    "TYPE OF MATCH",
    "DD/MM/YYYY - Venue [Country], Attendence.",
    "Versus:   OPPONENT.",
    "Score:    W-Won, D-Drew, L-Lost.",
    "Team:     Team details.",
    "          [Substitute & Time']",
    "          [Y]-Yellow Card, [R]-Red Card",
    "Coach:    NAME.",
    "Referee:  NAME [COUNTRY].",
    "",
    "2009",
    "",
    "WORLD CUP QUALIFIER",
    "14/11/2009 - Fes [Morocco], 17.000",
    "Versus:   CAMEROON",
    "Score:    L 0-2",
    "Team:     Nadir LAMYAGHRI, Zakaria ZEROUALI[Y][Khalid SEKKAT 70'], Mohamed OULHAJ,",
    "          Issah EL-ADOUA, Abdeslam BEN JELLOUN [Mustapha ALLAOUI 58'], Adil HERMACH,",
    "          Mohamed CHIHANI, Mehdi EL-MOUTAQUI[Y], Nabil DIRAR [Nabil BAHA 54'],",
    "          Karim EL-AHMADI, Adel TAARABT.",
    "Coach:    Hassan MOUMEN.",
    "Referee:  Daniel BENNETT [SOUTH AFRICA].",
    "",
    "WORLD CUP QUALIFIER",
    "10/10/2009 - Libreville [Gabon], 14.000",
    "Versus:   GABON",
    "Score:    L 1-3",
    "Scorer:   Adel TAARABT 88'",
    "Team:     Nadir LAMYAGHRI, Amine ERBATE[Y], Hicham MAHDOUFI [Karim EL-AHMADI 82'],",
    "          Merouane ZEMMAMA [Jaouad ZAIRI 65'], Chakib BENZOUKANE[Y], Houssine KHARJA[Y],",
    "          Mounir EL-HAMDAOUI [Hicham ABOUCHAROUANE 45'], Mehdi EL-MOUTAQUI, Youssef SAFRI[Y],",
    "          Marouane CHAMAKH[Y], Adel TAARABT.",
    "Coach:    Hassan MOUMEN.",
    "Referee:  Noumandiez DOUÉ [IVORY COAST].",
    "",
    "WORLD CUP QUALIFIER",
    "06/09/2009 - Lomé [Togo], 24.651",
    "Versus:   TOGO",
    "Score:    D 1-1",
    "Scorer:   Adel TAARABT 90+2'",
    "Team:     Nadir LAMYAGHRI, Amine ERBATE, Jamal ALIOUI, Hicham MAHDOUFI,",
    "          Merouane ZEMMAMA, Houssine KHARJA [Abdeslam BEN JELLOUN 76'], Youssef HADJI",
    "          [Jaouad ZAIRI 87'], Mehdi EL-MOUTAQUI, Youssef SAFRI, Marouane CHAMAKH[Y],",
    "          M'Barek BOUSSOUFA [Adel TAARABT 64'].",
    "Coach:    Hassan MOUMEN.",
    "Referee:  Muhamed SSEGONGA [UGANDA].",
    "",
    "FRIENDLY INTERNATIONAL",
    "12/08/2009 - Rabat [Morocco], ",
    "Versus:   CONGO",
    "Score:    D 1-1",
    "Scorers:  Karim EL-AHMADI 44'",
    "Team:     Nadir LAMYAGHRI, Abdeslam OUADDOU, Amine ERBATE, Mehdi BENATIA,",
    "          Issah EL-ADOUA, Houssine KHARJA, Youssef SAFRI [Marouane CHAMAKH 78'],",
    "          Hicham ABOUCHAROUANE [Abderrahmane KABOUS 68'], M'Barek BOUSSOUFA [Jaouad ZAIRI 45'],",
    "          Karim EL-AHMADI [Adel TAARABT 45'], Mustapha ALLAOUI [Nabil BAHA 45'].",
    "Coach:    Hassan MOUMEN.",
    "Referee:  Mohamed BENOUZA [ALGERIA].",
    "",
    "WORLD CUP QUALIFIER",
    "20/06/2009 - Rabat [Morocco], 22.000",
    "Versus:   TOGO",
    "Score:    D 0-0",
    "Team:     Nadir LAMYAGHRI, Badr EL-KADDOURI, Amine ERBATE, Michael BASSER,",
    "          Merouane ZEMMAMA [Oualid REGRAGUI 87'], Houssine KHARJA, Youssef HADJI,",
    "          Kamel CHAFNI [Abdessamad RAFIK 69'], Mounir EL-HAMDAOUI [Nabil BAHA 62'],",
    "          Mehdi EL-MOUTAQUI, Karim EL-AHMADI.",
    "Coach:    Roger LEMERRE.",
    "Referee:  Wellington KAOMA [ZAMBIA].",
    "",
    "WORLD CUP QUALIFIER",
    "07/06/2009 - Yaoundé [Cameroon], 35.000",
    "Versus:   CAMEROON",
    "Score:    D 0-0",
    "Team:     Nadir LAMYAGHRI, Badr EL-KADDOURI, Amine ERBATE, Michael BASSER,",
    "          Merouane ZEMMANA [Abdessamad RAFIK 62'], Houssine KHARJA [Oualid REGRAGUI 85'],",
    "          Youssef HADJI, Kamel CHAFNI, Mounir EL-HAMDAOUI, Mehdi EL-MOUTAQUI,",
    "          Karim EL-AHMADI [Younes MANKARI 70'].",
    "Coach:    Roger LEMERRE.",
    "Referee:  Seechurn RAJINDRAPARSAD [MAURITIUS].",
    "",
    "FRIENDLY INTERNATIONAL",
    "31/03/2009 - Lisbon [Portugal], 2.500",
    "Versus:   ANGOLA",
    "Score:    W 2-0",
    "Scorers:  Adel TAARABT 9', Marouane CHAMAKH 50'",
    "Team:     Karim FEGROUCH, Hassan EL-MOUATAZ, Amine ERBATE, Mehdi BENATIA,",
    "          Merouane ZEMMAMA, Chemcedine EL-ARAICHI [Nabil DIRAR 69'], Kamel CHAFNI,",
    "          Marouane CHAMAKH [Youssef HADJI 76'], M'Barek BOUSSOUFA, Karim EL-AHMADI",
    "          [Houssine KHARJA 63'], Adel TAARABT.",
    "Coach:    Roger LEMERRE.",
    "Referee:  Lucilio BAPTISTA [PORTUGAL].",
    "",
    "WORLD CUP QUALIFIER",
    "28/03/2009 - Casablanca [Morocco], 38.000",
    "Versus:   GABON",
    "Score:    L 1-2",
    "Scorer:   Mounir EL-HAMDAOUI 84'",
    "Team:     Karim ZAZA, Badr EL-KADDOURI, Amine ERBATE, Chemcedine EL-ARAICHI,",
    "          Talal EL-KARKOURI, Houssine KHARJA, Youssef HADJI, Mounir EL-HAMDAOUI,",
    "          Youssef SAFRI[Y], Marouane CHAMAKH [M'Barek BOUSSOUFA 61'], Nabil DIRAR",
    "          [Adel TAARABT 56'].",
    "Coach:    Roger LEMERRE.",
    "Referee:  Badara DIATTA [SENEGAL].",
    "",
    "FRIENDLY INTERNATIONAL",
    "11/02/2009 - Casablanca [Morocco], 38.000",
    "Versus:   CZECH REPUBLIC",
    "Score:    D 0-0",
    "Team:     Karim ZAZA, Badr EL-KADDOURI, Amine ERBATE, Michael BASSER,",
    "          Talal EL-KARKOURI, Houssine KHARJA, Mounir EL-HAMDAOUI, Youssef SAFRI",
    "          [Karim EL-AHMADI 65'], Nabil BAHA [Adel TAARABT 65'], M'Barek BOUSSOUFA",
    "          [Youssef HADJI 81'], Nabil DIRAR.",
    "Coach:    Roger LEMERRE.",
    "Referee:  Makram LAKRAM [TUNISIA].",
    "",
    "2008",
    "",
    "FRIENDLY INTERNATIONAL",
    "19/11/2008 - Casablanca [Morocco], ",
    "Versus:   ZAMBIA",
    "Score:    W 3-0",
    "Scorers:  Houssine KHARJA 2', Tarik SEKTIOUI 24'Pen, Nabil BAHA 63'",
    "Team:     Karim ZAZA, Badr EL-KADDOURI [Youssef EL-AKCHAOUI 58'], Amine ERBATE,",
    "          Yacine ABDESSADKI [Adil SERRAJ 67'], Youssef RABEH [Mehdi BENATIA 66'],",
    "          Houssine KHARJA [Issam ERRAKI 86'], Youssef HADJI[Y][Hicham ABOUCHAROUANE 45'],",
    "          Youssef SAFRI, Tarik SEKTIOUI [Merouane ZEMMAMA 45'], Marouane CHAMAKH",
    "          [Nabil BAHA 45'], Nabil DIRAR [Karim EL-AHMADI 65'].",
    "Coach:    Roger LEMERRE.",
    "Referee:  Walid ATTAOUNI [LIBYA].",
    "",
    "WORLD CUP QUALIFIER",
    "11/10/2008 - Rabat [Morocco], 1.472",
    "Versus:   MAURITANIA",
    "Score:    W 4-1",
    "Scorers:  Youssef SAFRI 35', Youssef HADJI 55', 60', Merouane ZEMMAMA 65'",
    "Team:     Nadir LAMYAGHRI, Abdeslam OUADDOU, Amine ERBATE[Y][Youssef RABEH 71'],",
    "          Michael BASSER, Salaheddine SBAI, Houssine KHARJA, Youssef HADJI[Y]",
    "          [Merouane ZEMMAMA 65'], Youssef SAFRI, Marouane CHAMAKH, Nabil DIRAR,",
    "          Nabil EL-ZHAR [Moncef ZERKA 79'].",
    "Coach:    Roger LEMERRE.",
    "Referee:  Sharaf ABUBAKAR [IVORY COAST].",
    "",
    "FRIENDLY INTERNATIONAL",
    "06/09/2008 - Muscat [Oman], ",
    "Versus:   OMAN",
    "Score:    D 0-0",
    "Team:     Nadir LAMYAGHRI, Abdeslam OUADDOU, Badr EL-KADDOURI [Youssef TOURABI 79'],",
    "          Amine ERBATE, Michael BASSER, Houssine KHARJA [Mourad AINY 72'],",
    "          Abderrahman KABOUS [Bouchaib EL-MOUBARKI 45'], Adil HERMACH, Youssef SAFRI,",
    "          Moncef ZERKA [Hicham ABOUCHAROUANE 45'], Marouane CHAMAKH [Abdeslam BEN JELLOUN 66'].",
    "Coach:    Roger LEMERRE.",
    "Referee:  N/A.",
    "",
    "FRIENDLY INTERNATIONAL",
    "20/08/2008 - Rabat [Morocco], 4.000",
    "Versus:   BENIN",
    "Score:    W 3-1",
    "Scorers:  Houssine KHARJA 24', Youssef SAFRI 54'Pen, Moncef ZERKA 78'",
    "Team:     Karim FEGROUCH, Abdeslam OUADDOU, Badr EL-KADDOURI [Youssef EL-AKCHAOUI 55'], ",
    "          Amine ERBATE, Michael BASSER, Houssine KHARJA [Sofian BEN ZOUIEN 86'],",
    "          Youssef HADJI [M'Barek BOUSSOUFA[Y] 52'], Youssef SAFRI [Abderrahman KABOUS 65'],",
    "          Moncef ZERKA [Abdeslam BEN JELLOUN 85'], Nabil EL-ZHAR, Bouchaib EL-MOUBARKI",
    "          [Kamel CHAFNI 66'].",
    "Coach:    Roger LEMERRE.",
    "Referee:  Djamel HAIMOUDI [ALGERIA].",
    "",
    "WORLD CUP QUALIFIER",
    "21/06/2008 - Casablanca [Morocco], 2.500",
    "Versus:   RWANDA",
    "Score:    W 2-0",
    "Scorers:  Youssef SAFRI 12'Pen, Nabil EL-ZHAR 49'",
    "Team:     Nadir LAMYAGHRI, Badr EL-KADDOURI[Y], Amine ERBATE, Michael BASSER,",
    "          Houssine KHARJA, Ahmed AJEDDOU [Mohamed MADIHI 72'], Mourad AINY",
    "          [Adil HERMACH 89'], Abdeslam BEN JELLOUN, Youssef SAFRI, Hicham ABOUCHAROUANE",
    "          [Bouchaib EL-MOUBARKI 45'], Nabil EL-ZHAR.",
    "Coach:    Roger LEMERRE.",
    "Referee:  Mohamed BENOUZA [ALGERIA].",
    "",
    "WORLD CUP QUALIFIER",
    "14/06/2008 - Kigali [Rwanda], 12.000",
    "Versus:   RWANDA",
    "Score:    L 1-3",
    "Scorer:   Youssef SAFRI 78'",
    "Team:     Nadir LAMYAGHRI, Amine ERBATE, Michael BASSER [Badr EL-KADDOURI 57'],",
    "          Younes MANKARI[Y], Mohamed OULHAJ [Hicham ABOUCHAROUANE 36'], Houssine KHARJA,",
    "          Soufiane ALLOUDI[R], Mourad AINY, Abdeslam BEN JELLOUN [Brahim EL-BAHRI 83'],",
    "          Youssef SAFRI, Nabil EL-ZHAR[Y].",
    "Coach:    Roger LEMERRE.",
    "Referee:  Raphael EVEHE [CAMEROON].",
    "",
    "WORLD CUP QUALIFIER",
    "07/06/2008 - Nouakchott [Mauritania], 9.500",
    "Versus:   MAURITANIA",
    "Score:    W 4-1",
    "Scorers:  Tarik SEKTIOUI 9', Abdeslam BEN JELLOUN 37', Youssef SAFRI 58',",
    "          Houssine KHARJA 79'",
    "Team:     Nadir LAMYAGHRI, Amine ERBATE, Michael BASSER[Y], Younes MANKARI,",
    "          Houssine KHARJA, Soufiane ALLOUDI[Y], Mourad AINY, Abdeslam BEN JELLOUN",
    "          [Brahim EL-BAHRI[Y] 81'], Youssef SAFRI[Y], Tarik SEKTIOUI [Nabil EL-ZHAR 21'],",
    "          Hicham ABOUCHAROUANE [Rachid HAMDANI 78'].",
    "Coach:    Roger LEMERRE.",
    "Referee:  Joseph LAMPTEY [GHANA].",
    "",
    "WORLD CUP QUALIFIER",
    "31/05/2008 - Casablanca [Morocco], 5.000",
    "Versus:   ETHIOPIA",
    "Score:    W 3-0",
    "Scorers:  Abdeslam BEN JELLOUN 4', Hicham ABOUCHAROUANE 13', Houssine KHARJA 85'",
    "Team:     Nadir LAMYAGHRI, Badr EL-KADDOURI, Amine ERBATE, Michael BASSER,",
    "          Houssine KHARJA, Soufiane ALLOUDI, Mourad AINY, Abdeslam BEN JELLOUN",
    "          [Rachid HAMDANI 89'], Youssef SAFRI, Hicham ABOUCHAROUANE, Nabil EL-ZHAR",
    "          [M'Barek BOUSSOUFA[Y] 63'].",
    "Coach:    Roger LEMERRE.",
    "Referee:  Badara DIATTA [SENEGAL].",
    "",
    "FRIENDLY INTERNATIONAL",
    "26/03/2008 - Brussels [Belgium], 15.000",
    "Versus:   BELGIUM",
    "Score:    W 4-1",
    "Scorers:  Soufiane ALLOUDI 14', Tarik SEKTIOUI 34', Nabil EL-ZHAR 85',",
    "          Abdeslam BEN JELLOUN 89'",
    "Team:     Nadir LAMYAGHRI, Badr EL-KADDOURI, Amine ERBATE[Y], Michael BASSER,",
    "          Houssine KHARJA, Youssef HADJI [Nabil EL-ZHAR 45'], Soufiane ALLOUDI",
    "          [Hicham ABOUCHAROUANE 87'], Mourad AINY, Youssef SAFRI [Adil HERMACH 60'],",
    "          Tarik SEKTIOUI [M'Barek BOUSSOUFA 38'], Marouane CHAMAKH [Abdeslam BEN JELLOUN 88'].",
    "Coach:    Roger LEMERRE.",
    "Referee:  Bas NIJHUIS [NETHERLANDS].",
    "",
    "NATIONS CUP ROUND ONE",
    "28/01/2008 - Accra [Ghana], 40.000",
    "Versus:   GHANA",
    "Score:    L 0-2",
    "Team:     Nadir LAMYAGHRI, Abdeslam OUADDOU, Badr EL-KADDOURI, Amine ERBATE[Y],",
    "          Michael BASSER, Houssine KHARJA [Tarik SEKTIOUI 45'], Youssef HADJI,",
    "          Abderrahmane KABOUS [Abdelkrim KAISSI 89'], Youssef SAFRI, Hicham ABOUCHAROUANE",
    "          [Moncef ZERKA 55'], Marouane CHAMAKH.",
    "Coach:    Henri MICHEL.",
    "Referee:  Modou SOWE [GAMBIA].",
    "",
    "NATIONS CUP ROUND ONE",
    "24/01/2008 - Accra [Ghana], 15.000",
    "Versus:   GUINEA",
    "Score:    L 2-3",
    "Scorers:  Hicham ABOUCHAROUANE 60', Abdeslam OUADDOU 90'",
    "Team:     Khalid FOUHAMI, Abdeslam OUADDOU, Badr EL-KADDOURI, Amine ERBATE,",
    "          Michael BASSER, Abdelkrim KAISSI, Houssine KHARJA [Hicham ABOUCHAROUANE 55'],",
    "          Youssef HADJI, Youssef SAFRI[Y], Tarik SEKTIOUI [Marouane CHAMAKH 67'],",
    "          Moncef ZERKA [Bouchaib EL-MOUBARKI 80'].",
    "Coach:    Henri MICHEL.",
    "Referee:  Jerome DAMON [SOUTH AFRICA].",
    "",
    "NATIONS CUP ROUND ONE",
    "21/01/2008 - Accra [Ghana], 1.000",
    "Versus:   NAMIBIA",
    "Score:    W 5-1",
    "Scorers:  Soufiane ALLOUDI 2', 5', 28', Tarik SEKTIOUI 39'Pen, Moncef ZERKA 73'",
    "Team:     Khalid FOUHAMI, Abdeslam OUADDOU, Badr EL-KADDOURI[Y], Amine ERBATE,",
    "          Michael BASSER, Youssef HADJI [Moncef ZERKA 69'], Soufiane ALLOUDI",
    "          [Youssef MOKHTARI 61'], Abderrahmane KABOUS, Youssef SAFRI, Tarik SEKTIOUI",
    "          [Hicham ABOUCHAROUANE 66'], Marouane CHAMAKH.",
    "Coach:    Henri MICHEL.",
    "Referee:  Raphael EVEHE [CAMEROON].",
    "",
    "FRIENDLY INTERNATIONAL",
    "16/01/2008 - Rabat [Morocco], 25.000",
    "Versus:   ANGOLA",
    "Score:    W 2-1",
    "Scorers:  Marouane CHAMAKH 45', Hicham ABOUCHAROUANE 52'",
    "Team:     Nadir LAMYAGHRI, Badr EL-KADDOURI[Y], Amine ERBATE [Abdeslam OUADDOU[Y] 45'],",
    "          Jamal ALIOUI, Abdessamad CHAHIRI [Michael BASSER 79'], Houssine KHARJA",
    "          [Abderrahmane KABOUS 70'], Youssef HADJI [Youssef MOKHTARI 45'], Youssef SAFRI,",
    "          Tarik SEKTIOUI [Soufiane ALLOUDI 45'], Hicham ABOUCHAROUANE[Y], Marouane CHAMAKH",
    "          [Bouchaib EL-MOUBARKI 70'].",
    "Coach:    Henri MICHEL.",
    "Referee:  Mohamed AZZELLAOUI [LIBYA].",
    "",
    "FRIENDLY INTERNATIONAL",
    "12/01/2008 - Fes [Morocco], 45.000",
    "Versus:   ZAMBIA",
    "Score:    W 2-0",
    "Scorers:  Tarik SEKTIOUI 51'Pen, Soufiane ALLOUDI 60'",
    "Team:     Khalid FOUHAMI [Abdelilah BAGUI 45'], Badr EL-KADDOURI [Hicham MAHDOUFI 45'],",
    "          Amine ERBATE, Michael BASSER, Talal EL-KARKOURI, Abdelkrim KAISSI,",
    "          Houssine KHARJA[Y][Soufiane ALLOUDI 45'], Youssef HADJI [Youssef MOKHTARI 60'],",
    "          Abderrahmane KABOUS [Youssef SAFRI 71'], Tarik SEKTIOUI, Moncef ZERKA",
    "          [Bouchaib EL-MOUBARKI 61'].",
    "Coach:    Henri MICHEL.",
    "Referee:  N/A.",
    "",
    "2007",
    "",
    "FRIENDLY INTERNATIONAL",
    "21/11/2007 - Créteil [France], ",
    "Versus:   SENEGAL",
    "Score:    W 3-0",
    "Scorers:  Hicham ABOUCHAROUANE 36', Youssef MOKHTARI 66', Soufiane ALLOUDI 75'",
    "Team:     Tarik JARMOUNI, Abdeslam OUADDOU [Amine ERBATE 45'], Jamal ALIOUI,",
    "          Hicham MAHDOUFI [Badr EL-KADDOURI 73'], Abdessamad CHAHIRI, Abdelkrim KAISSI,",
    "          Houssine KHARJA, Youssef HADJI [Jaouad ZAIRI 45'], Abderrahmane KABOUS",
    "          [Youssef MOKHTARI 54'], Moncef ZERKA [Soufiane ALLOUDI[Y] 45'], Hicham ABOUCHAROUANE",
    "          [Yacine ABDESSADKI 82'].",
    "Coach:    Henri MICHEL.",
    "Referee:  Benoit MILLOT [FRANCE].",
    "",
    "FRIENDLY INTERNATIONAL",
    "16/11/2007 - St. Denis [France], 78.000",
    "Versus:   FRANCE",
    "Score:    D 2-2",
    "Scorers:  Tarik SEKTIOUI 9', Youssef MOKHTARI 85'",
    "Team:     Nadir LAMYAGHRI, Abdeslam OUADDOU, Badr EL-KADDOURI, Amine ERBATE,",
    "          Michael BASSER, Abdelkrim KAISSI [Abderrahmane KABOUS 45'], Houssine KHARJA",
    "          [Noureddine BOUKHARI 45'], Youssef HADJI [Jaouad ZAIRI 83'], Youssef SAFRI,",
    "          Tarik SEKTIOUI [Youssef MOKHTARI 74'], Marouane CHAMAKH [Soufiane ALLOUDI 66'].",
    "Coach:    Henri MICHEL.",
    "Referee:  Ruud BOSSEN [NETHERLANDS].",
    "",
    "FRIENDLY INTERNATIONAL",
    "17/10/2007 - Rabat [Morocco], 3.000",
    "Versus:   NAMIBIA",
    "Score:    W 2-0",
    "Scorers:  Soufiane ALLOUDI 71', Talal EL-KARKOURI 90'",
    "Team:     Nadir LAMYAGHRI, Abdeslam OUADDOU [Jamal ALIOUI 68'], Badr EL-KADDOURI,",
    "          Michael BASSER, Talal EL-KARKOURI, Noureddine BOUKHARI [Hicham ABOUCHAROUANE 59'],",
    "          Houssine KHARJA [Amine ERBATE 85'], Youssef HADJI [Soufiane ALLOUDI 67'],",
    "          Youssef SAFRI[Y][Abdelkrim KAISSI 77'], Nabil BAHA [Bouchaib EL-MOUBARKI 70'],",
    "          Marouane CHAMAKH.",
    "Coach:    Henri MICHEL.",
    "Referee:  Yasser SAADALLAH [TUNISIA].",
    "",
    "FRIENDLY INTERNATIONAL",
    "08/09/2007 - Rouen [France], 3.000",
    "Versus:   GHANA",
    "Score:    L 0-2",
    "Team:     Nadir LAMYAGHRI, Badr EL-KADDOURI, Jamal ALIOUI, Michael BASSER,",
    "          Abdelkrim KAISSI, Houssine KHARJA, Youssef HADJI [Mohamed EL-YAACOUBI 69'],",
    "          Youssef SAFRI, Marouane CHAMAKH [Soufiane ALLOUDI 82'], M'Barek BOUSSOUFA",
    "          [Yacine ABDESSADKI 45'], Bouchaib EL-MOUBARKI [Hicham ABOUCHAROUANE 45'].",
    "Coach:    Henri MICHEL.",
    "Referee:  Laurent DUHAMEL [FRANCE].",
    "",
    "NATIONS CUP QUALIFIER",
    "16/06/2007 - Blantyre [Malawi], 30.000",
    "Versus:   MALAWI",
    "Score:    W 1-0",
    "Scorer:   Bouchaib EL-MOUBARKI 9'",
    "Team:     Tarik JARMOUNI, Aziz BEN ASKAR, Michael BASSER, Hicham MAHDOUFI,",
    "          Talal EL-KARKOURI, Abdelkrim KAISSI[Y], Houssine KHARJA, Youssef HADJI",
    "          [Mohamed EL-YAACOUBI 45'], Soufiane ALLOUDI[Y][Amine ERBATE 82'], Marouane CHAMAKH,",
    "          Bouchaib EL-MOUBARKI [Jaouad ZAIRI 80'].",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  Eddy MAILLET [SEYCHELLES].",
    "",
    "NATIONS CUP QUALIFIER",
    "02/06/2007 - Casablanca [Morocco], 35.000",
    "Versus:   ZIMBABWE",
    "Score:    W 2-0",
    "Scorers:  Marouane CHAMAKH 3', Youssef HADJI 26'",
    "Team:     Tarik JARMOUNI, Aziz BEN ASKAR, Michael BASSER, Hicham MAHDOUFI,",
    "          Talal EL-KARKOURI, Abdelkrim KAISSI, Houssine KHARJA[Y], Youssef HADJI",
    "          [Amine ERBATE 88'], Soufiane ALLOUDI, Marouane CHAMKH [Bouchaib EL-MOUBARKI 70'],",
    "          Jaouad ZAIRI [Mohamed EL-YAACOUBI 68'].",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  Mourad DAAMI [TUNISIA].",
    "",
    "NATIONS CUP QUALIFIER",
    "25/03/2007 - Harare [Zimbabwe], 40.000",
    "Versus:   ZIMBABWE",
    "Score:    D 1-1",
    "Scorer:   Youssef HADJI 7'",
    "Team:     Tarik JARMOUNI[Y], Badr EL-KADDOURI [Amine ERBATE 17'], Mourad FALLAH[Y],",
    "          Aziz BEN ASKAR, Talal EL-KARKOURI, Noureddine BOUKHARI, Youssef HADJI,",
    "          Otman EL-ASSAS, Youssef SAFRI, Mohamed EL-YAACOUBI [Adil RAMZI 55'],",
    "          Bouchaib EL-MOUBARKI [Jaouad OUADOUCH 85'].",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  Jerome DAMON [SOUTH AFRICA].",
    "",
    "FRIENDLY INTERNATIONAL",
    "07/02/2007 - Rabat [Morocco], ",
    "Versus:   TUNISIA",
    "Score:    D 1-1",
    "Scorer:   Marouane CHAMAKH 29'",
    "Team:     Tarik JARMOUNI, Amine ERBATE[Y], Aziz BEN ASKAR, Michael BASSER,",
    "          Hicham MAHDOUFI [Yacine ABDESSADKI 65'], Talal EL-KAROURI, Youssef HADJI",
    "          [Jaouad OUADOUCH 80'], Otman EL-ASSAS, Youssef SAFRI [Zakaria ABOUB 85'],",
    "          Marouane CHAMAKH, M'Barek BOUSSOUFA [Bouchaib EL-MOUBARKI 70'].",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  Omar FAHIM [EGYPT].",
    "",
    "2006",
    "",
    "FRIENDLY INTERNATIONAL",
    "15/11/2006 - Rabat [Morocco], 5.000",
    "Versus:   GABON",
    "Score:    W 6-0",
    "Scorers:  Bouchaib EL-MOUBARKI 40', 64', Jaouad OUADOUCH 61', Noureddine BOUKHARI 68',",
    "          Hicham MAHDOUFI 71', Hassan SOUARI 85'",
    "Team:     Tarik JARMOUNI, Badr EL-KADDOURI, Amine ERBATE [Anouar DIBA 80'],",
    "          Aziz BEN ASKAR, Michael BASSER [Hicham MAHDOUFI 45'], Talal EL-KARKOURI,",
    "          Zakaria ABOUB [Faouzi EL-BRAZI 45'], Youssef SAFRI, Moncef ZERKA",
    "          [Jaouad OUADOUCH 54'], M'Barek BOUSSOUFA [Noureddine BOUKHARI 45'],",
    "          Bouchaib EL-MOUBARKI [Hassan SOUARI 69'].",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  Ousmane SIDIBÉ [MALI].",
    "",
    "NATIONS CUP QUALIFIER",
    "03/09/2006 - Rabat [Morocco], 15.000",
    "Versus:   MALAWI",
    "Score:    W 2-0",
    "Scorers:  Marouane CHAMAKH 53', M'Barek BOUSSOUFA 75'",
    "Team:     Tarik JARMOUNI, Oualid REGRAGUI[Y], Aziz BEN ASKAR, Hicham MAHDOUFI,",
    "          Talal EL-KARKOURI, Zakaria ABOUB [Abdelkrim KAISSI 70'], Youssef HADJI,",
    "          Youssef SAFRI [Amine ERBATE 79'], Tarik SEKTIOUI [Noureddine BOUKHARI 45'],",
    "          Marouane CHAMAKH, M'Barek BOUSSOUFA.",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  Coffi CODJIA [BENIN].",
    "",
    "FRIENDLY INTERNATIONAL",
    "16/08/2006 - Rabat [Morocco], ",
    "Versus:   BURKINA FASO",
    "Score:    W 1-0",
    "Scorer:   Youssef HADJI 44'",
    "Team:     Tarik JARMOUNI, Oualid REGRAGUI, Amine ERBATE, Aziz BEN ASKAR,",
    "          Hicham MAHDOUFI [Badr EL-KADDOURI 45'], Zakaria ABOUB [Houssine KHARJA 45'],",
    "          Youssef HADJI [Soufiane ALLOUDI 45'], Youssef SAFRI [Abdelkrim KAISSI 45'],",
    "          Tarik SEKTIOUI [Jaouad ZAIRI 45'], Marouane CHAMAKH, M'Barek BOUSSOUFA",
    "          [Bouchaib EL-MOUBARKI 45'].",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  N/A.",
    "",
    "FRIENDLY INTERNATIONAL",
    "04/06/2006 - Barcelona [Spain], 10.500",
    "Versus:   COLOMBIA",
    "Score:    L 0-2",
    "Team:     Tarik JARMOUNI, Oualid REGRAGUI [Mourad FALLAH 88'], Aziz BEN ASKAR,",
    "          Hicham MAHDOUFI, Talal EL-KARKOURI [Nabil MESLOUB 30'] [Hassan SOUARI 80'],",
    "          Zakaria ABOUB, Soufiane ALLOUDI, Hicham LOUISSI, Adil RAMZI",
    "          [Hassane ALLA 83'], M'Barek BOUSSOUFA [Mohamed MADIHI 62'], Bouchaib EL-MOUBARKI",
    "          [Jawad EL-HAJRI 65'].",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  Ricardo GARCÍA [SPAIN].",
    "",
    "FRIENDLY INTERNATIONAL",
    "28/05/2006 - Colombes [France], 1.500",
    "Versus:   MALI",
    "Score:    L 0-1",
    "Team:     Nadir LAMYAGHRI, Abdeslam OUADDOU, Oualid REGRAGUI [Hassane ALLA 75'],",
    "          Aziz BEN ASKAR, Hicham MAHDOUFI, Talal EL-KARKOURI, Zakaria ABOUB",
    "          [Mounir DIANE 86'], Mohamed MADIHI [Hassan SOUARI 45'], Nabil MESLOUB",
    "          [Adil RAMZI 59'], Tarik SEKTIOUI [Ahmed AJEDDOU 69'], Mohamed ARMOUMEN",
    "          [Bouchaib EL-MOUBARKI 59'].",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  Pascal GARIBIAN [FRANCE].",
    "",
    "FRIENDLY INTERNATIONAL",
    "23/05/2006 - Nashville [United States], 26.141",
    "Versus:   UNITED STATES",
    "Score:    W 1-0",
    "Scorer:   Mohamed MADIHI 90'",
    "Team:     Tarik JARMOUNI, Abdeslam OUADDOU[Y][Ahmed AJEDDOU 76'], Oualid REGRAGUI,",
    "          Aziz BEN ASKAR, Hicham MAHDOUFI[Y], Talal EL-KARKOURI, Zakaria ABOUB",
    "          [Hassane ALLA 87'], Soufiane ALLOUDI, Adil RAMZI[Y][Nabil MESLOUB 60'],",
    "          Tarik SEKTIOUI [Mohamed MADIHI 61'], M'Barek BOUSSOUFA [Bouchaib EL-MOUBARKI 70'].",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  Mauricio NAVARRO [CANADA].",
    "",
    "NATIONS CUP ROUND ONE",
    "28/01/2006 - Cairo [Egypt], 5.000",
    "Versus:   LIBYA",
    "Score:    D 0-0",
    "Team:     Tarik JARMOUNI, Oualid REGRAGUI, Badr EL-KADDOURI, Talal EL-KARKOURI,",
    "          Noureddine NAYBET, Houssine KHARJA, Youssef HADJI, Youssef SAFRI",
    "          [Amine ERBATE 86'], Hicham ABOUCHAROUANE [Abdelali BOUSSABOUN[Y] 58'], Marouane CHAMAKH,",
    "          Mohamed EL-YAACOUBI [Mohamed MADIHI 73'].",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  Mourad DAAMI [TUNISIA].",
    "",
    "NATIONS CUP ROUND ONE",
    "24/01/2006 - Cairo [Egypt], 75.000",
    "Versus:   EGYPT",
    "Score:    D 0-0",
    "Team:     Tarik JARMOUNI, Oualid REGRAGUI [Youssef CHIPPO 75'], Badr EL-KADDOURI,",
    "          Amine ERBATE, Talal EL-KARKOURI, Noureddine NAYBET, Houssine KHARJA,",
    "          Youssef HADJI [Abdelali BOUSSABOUN[Y] 65'], Youssef SAFRI, Marouane CHAMAKH",
    "          [Hicham ABOUCHAROUANE 84'], Mohamed EL-YAACOUBI[Y].",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  Coffi CODJIA [BENIN].",
    "",
    "NATIONS CUP ROUND ONE",
    "21/01/2006 - Cairo [Egypt], 8.000",
    "Versus:   IVORY COAST",
    "Score:    L 0-1",
    "Team:     Tarik JARMOUNI, Oualid REGRAGUI, Badr EL-KADDOURI, Talal EL-KARKOURI,",
    "          Noureddine NAYBET, Houssine KHARJA [Abdelali BOUSSABOUN 83'], Youssef HADJI,",
    "          Youssef SAFRI, Youssef CHIPPO, Marouane CHAMAKH, Mohamed EL-YAACOUBI",
    "          [Hicham ABOUCHAROUANE 85'].",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  Jerome DAMON [SOUTH AFRICA].",
    "",
    "FRIENDLY INTERNATIONAL",
    "17/01/2006 - Marrakech [Morocco], 5.000",
    "Versus:   ANGOLA",
    "Score:    D 2-2",
    "Scorers:  Marouane CHAMAKH 5', Youssef HADJI 7'",
    "Team:     Tarik JARMOUNI, Oualid REGRAGUI, Badr EL-KADDOURI [Noureddine KACEMI 66'],",
    "          Talal EL-KARKOURI [Mustapha OUSSALEH 60'], Noureddine NAYBET [Hafid ABDESSADEK 67'],",
    "          Houssine KHARJA, Youssef HADJI [Mohamed MADIHI 47'], Youssef CHIPPO,",
    "          Marouane CHAMAKH [Mohamed ARMOUMEN 79'], Mohamed EL-YAACOUBI [Hicham MAHDOUFI 83'],",
    "          Abdelali BOUSSABOUN.",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  Mohcine BOUKHTIR [TUNISIA].",
    "",
    "FRIENDLY INTERNATIONAL",
    "14/01/2006 - Marrakech [Morocco], 2.000",
    "Versus:   ZIMBABWE",
    "Score:    W 1-0",
    "Scorer:   Mohamed ARMOUMEN 89'",
    "Team:     Nadir LAMYAGHRI, Noureddine KACEMI[Y][Hicham MAHDOUFI 72'], Abdeslam OUADDOU",
    "          [Talal EL-KARKOURI 13'], Oualid REGRAGUI[Y], Noureddine NAYBET, Houssine KHARJA[R],",
    "          Youssef HADJI, Youssef CHIPPO [Hafid ABDESSADEK 84'], Hicham ABOUCHAROUANE",
    "          [Abdelali BOUSSABOUN 65'], Marouane CHAMAKH [Mohamed ARMOUMEN 74'], Jaouad ZAIRI",
    "          [Mohamed MADIHI 44'].",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  Abdellah EL-ACHIRI [MOROCCO].",
    "",
    "FRIENDLY INTERNATIONAL",
    "09/01/2006 - Rabat [Morocco], ",
    "Versus:   DR CONGO",
    "Score:    W 3-0",
    "Scorers:  Marouane CHAMAKH 32', Hicham ABOUCHAROUANE 52', Mohamed ARMOUMEN 67'",
    "Team:     Tarik JARMOUNI, Oualid REGRAGUI, Badr EL-KADDOURI, Talal EL-KARKOURI,",
    "          Noureddine NAYBET, Noureddine BOUKHARI [Mohamed MADIHI 58'], Houssine KHARJA",
    "          [Hafid ABDESSADEK 77'], Youssef SAFRI [Youssef CHIPPO 45'], Hicham ABOUCHAROUANE",
    "          [Mohamed ARMOUMEN 67'], Marouane CHAMAKH [Abdelali BOUSSABOUN 67'], Jaouad ZAIRI",
    "          [Gharib AMZINE 73'].",
    "Coach:    Mohamed FAKHIR.",
    "Referee:  Mohamed GUEZZAZ [MOROCCO].",
    "",
    "2005",
    "",
    "FRIENDLY INTERNATIONAL",
    "15/11/2005 - Clairfontaine [France], Closed Doors.",
    "Versus:   CAMEROON",
    "Score:    D 0-0",
    "Team:     Khalid FOUHAMI [Abdelilah BAGUI 45'], Abdeslam OUADDOU [Abdellah FAHMI 45'],",
    "          Oualid REGRAGUI[Y], Aziz BEN ASKAR, Abdelkrim KAISSI, Houssine KHARJA",
    "          [Mounir OBBADI 45'], Ahmed KANTARI, Tarik SEKTIOUI [Mohamed EL-YAACOUBI 45']",
    "          [Mohamed KHARBOUCH 67'], Hicham ABOUCHAROUANE [Noureddine KACEMI 45'], Marouane CHAMAKH",
    "          [Bouabid BOUDEN 60'], Jaouad ZAIRI [Abdelali BOUSSABOUN 45'].",
    "Coach:    Philippe TROUSSIER.",
    "Referee:  N/A.",
    "",
    "WORLD CUP QUALIFIER",
    "08/10/2005 - Rades [Tunisia], 60.000",
    "Versus:   TUNISIA",
    "Score:    D 2-2",
    "Scorers:  Marouane CHAMAKH 3', Talal EL-KARKOURI 42'",
    "Team:     Nadir LAMYAGHRI, Abdeslam OUADDOU, Oualid REGRAGUI, Badr EL-KADDOURI,",
    "          Aziz BEN ASKAR[Y][YR], Talal EL-KARKOURI[Y], Noureddine BOUKHARI [Mohamed EL-YAACOUBI 72'],",
    "          Houssine KHARJA[Y], Youssef HADJI [Abdelali BOUSSABOUN 88'], Youssef SAFRI[Y]",
    "          [Mourad HDIOUED 58'], Marouane CHAMAKH.",
    "Coach:    Ezaki BADOU.",
    "Referee:  Essam Abdul EL-FATAH [EGYPT].",
    "",
    "WORLD CUP QUALIFIER",
    "03/09/2005 - Rabat [Morocco], 25.000",
    "Versus:   BOTSWANA",
    "Score:    W 1-0",
    "Scorer:   Talal EL-KARKOURI 56'",
    "Team:     Nadir LAMYAGHRI, Oualid REGRAGUI, Badr EL-KADDOURI[Y], Aziz BEN ASKAR,",
    "          Talal EL-KARKOURI, Noureddine BOUKHARI, Houssine KHARJA [Tarik SEKTIOUI 66'],",
    "          Youssef MOKHTARI [Mohamed EL-YAACOUBI 83'], Youssef HADJI, Youssef SAFRI,",
    "          Abdelaziz AHANFOUF [Abdelali BOUSSABOUN 54'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Mohamed BENOUZA [ALGERIA].",
    "",
    "FRIENDLY INTERNATIONAL",
    "17/08/2005 - Rouen [France], 2.000",
    "Versus:   TOGO",
    "Score:    L 0-1",
    "Team:     Abdelilah BAGUI, Oualid REGRAGUI, Tarek CHIHAB, Badr EL-KADDOURI,",
    "          Jamal ALIOUI, Hafid ABDESSADEK [Houssine KHARJA 45'], Aziz BEN ASKAR,",
    "          Mourad HDIOUED, Marouane CHAMAKH [Jaouad ZAIRI 79'], Mohamed EL-YAACOUBI",
    "          [Tarik SEKTIOUI 64'], Abdelaziz AHANFOUF [Abdelali BOUSSABOUN 55'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  N/A.",
    "",
    "WORLD CUP QUALIFIER",
    "18/06/2005 - Nairobi [Kenya], 50.000",
    "Versus:   MOROCCO",
    "Score:    D 0-0",
    "Team:     Nadir LAMYAGHRI, Noureddine KACEMI, Abdeslam OUADDOU[Y], Oualid REGRAGUI,",
    "          Yacine ABDESSADKI [Amine ERBATE 83'], Talal EL-KARKOURI, Houssine KHARJA,",
    "          Youssef MOKHTARI, Mounir DIANE [Mohamed EL-YAACOUBI 15'], Youssef HADJI,",
    "          Jaouad ZAIRI [Abdelali BOUSSABOUN 76'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Badara DIATTA [SENEGAL].",
    "",
    "WORLD CUP QUALIFIER",
    "04/06/2005 - Rabat [Morocco], 48.000",
    "Versus:   MALAWI",
    "Score:    W 4-1",
    "Scorers:  Marouane CHAMAKH 16', Youssef HADJI 21', 75', Houssine KHARJA 72'",
    "Team:     Khalid SINOH, Noureddine KACEMI, Abdeslam OUADDOU[Y], Yacine ABDESSADKI,",
    "          Talal EL-KARKOURI, Noureddine NAYBET, Houssine KHARJA, Youssef HADJI",
    "          [Jaouad ZAIRI 87'], Youssef SAFRI, Marouane CHAMAKH[Y][Youssef MOKHTARI 81'],",
    "          Mohamed EL-YAACOUBI [Abdelali BOUSSABOUN 81'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Bisingu BUENKADILA [DR CONGO].",
    "",
    "WORLD CUP QUALIFIER",
    "26/03/2005 - Rabat [Morocco], 70.000",
    "Versus:   GUINEA",
    "Score:    W 1-0",
    "Scorer:   Youssef HADJI 62'",
    "Team:     Khalid SINOH, Abdeslam OUADDOU, Oualid REGRAGUI[Y], Talal EL-KARKOURI,",
    "          Noureddine NAYBET, Houssine KHARJA [Mohamed EL-YAACOUBI 89'], Mounir DIANE",
    "          [Abdelali BOUSSABOUN 65'], Youssef HADJI, Youssef SAFRI, Marouane CHAMAKH,",
    "          Jaouad ZAIRI [Tarik SEKTIOUI 68'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Koman COULIBALY [MALI].",
    "",
    "WORLD CUP QUALIFIER",
    "09/02/2005 - Rabat [Morocco], 40.000",
    "Versus:   KENYA",
    "Score:    W 5-1",
    "Scorers:  Jaouad ZAIRI 12', 39', 90', Mounir DIANE 46', Youssef HADJI 81'",
    "Team:     Khalid SINOH, Abdeslam OUADDOU, Oualid REGRAGUI, Badr EL-KADDOURI,",
    "          Yacine ABDESSADKI [Hicham ABOUCHAROUANE 63'], Noureddine NAYBET, Houssine KHARJA,",
    "          Mounir DIANE [Tarik SEKTIOUI 72'], Youssef HADJI, Marouane CHAMAKH",
    "          [Abdelaziz AHANFOUF 68'], Jaouad ZAIRI[Y].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Walid ATTAOUNI [LIBYA].",
    "",
    "2004",
    "",
    "FRIENDLY INTERNATIONAL",
    "17/11/2004 - Rabat [Morocco], 5.000",
    "Versus:   BURKINA FASO",
    "Score:    W 4-0",
    "Scorers:  Abdelmajid OULMERS 52', Noureddine BOUKHARI 68', Samir SARSAR 78',",
    "          Yacine ABDESSADKI 82'",
    "Team:     Khalid SINOH [Tarik JARMOUNI 76'], Tarek CHIHAB, Amine ERBATE,",
    "          Nasr EL-KASMI [Sami TAJEDDINE 73'], Zakaria ZEROUALI [Idrissi EL-KADDIOUI 45'],",
    "          Yacine ABDESSADKI, Noureddine BOUKHARI, Houssine KHARJA, Mounir DIANE,",
    "          Youssef SAFRI [Abdelmajid OULMERS 45'][Youssef MOKHTARI 53'], Marouane CHAMAKH",
    "          [Samir SARSAR 68'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Mamadou KÉITA [MALI].",
    "",
    "WORLD CUP QUALIFIER",
    "10/10/2004 - Conakry [Guinea], 25.000",
    "Versus:   GUINEA",
    "Score:    D 1-1",
    "Scorer:   Marouane CHAMAKH 5'",
    "Team:     Nadir LAMYAGHRI, Abdeslam OUADDOU [Tarek CHIHAB 45'], Talal EL-KARKOURI[Y],",
    "          Noureddine NAYBET, Houssine KHARJA, Youssef MOKHTARI, Mourad HDIOUED,",
    "          Youssef SAFRI[Y], Marouane CHAMAKH, Mohamed EL-YAACOUBI[Y][Mounir DIANE 63'],",
    "          Jaouad ZAIRI [Youssef HADJI 70'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Monteiro DUARTÉ [CAPE VERDE ISLANDS].",
    "",
    "WORLD CUP QUALIFIER",
    "04/09/2004 - Rabat [Morocco], 45.000",
    "Versus:   TUNISIA",
    "Score:    D 1-1",
    "Scorer:   Talal EL-KARKOURI 74'",
    "Team:     Nadir LAMYAGHRI, Abdeslam OUADDOU, Badr EL-KADDOURI [Mohamed EL-YAACOUBI 53'],",
    "          Talal EL-KARKOURI[Y], Noureddine NAYBET[Y], Abdelkrim KAISSI [Youssef HADJI 69'],",
    "          Houssine KHARJA[Y], Youssef MOKHTARI [Abdelaziz AHANFOUF 85'], Mourad HDIOUED[Y],",
    "          Maourane CHAMAKH, Jaouad ZAIRI.",
    "Coach:    Ezaki BADOU.",
    "Referee:  Ahmed AUDA [EGYPT].",
    "",
    "WORLD CUP QUALIFIER",
    "03/07/2004 - Gaborone [Botswana], 22.000",
    "Versus:   BOTSWANA",
    "Score:    W 1-0",
    "Scorer:   Youssef MOKHTARI 30'",
    "Team:     Nadir LAMYAGHRI, Noureddine KACEMI[Y], Abdeslam OUADDOU, Oualid REGRAGUI,",
    "          Tarek CHIHAB[Y], Talal EL-KARKOURI, Abdelkrim KAISSI, Houssine KHARJA,",
    "          Youssef MOKHTARI [Abdelaziz AHANFOUF 88'], Youssef HADJI [Mohamed EL-YAACOUBI 77'],",
    "          Nabil BAHA [Marouane CHAMAKH[Y] 66'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Gilbert DLAMINI [SWAZILAND].",
    "",
    "WORLD CUP QUALIFIER",
    "05/06/2004 - Blantyre [Malawi], 30.040",
    "Versus:   MALAWI",
    "Score:    D 1-1",
    "Scorer:   Youssef SAFRI 25'",
    "Team:     Khalid FOUHAMI, Noureddine KACEMI, Abdeslam OUADDOU, Oualid REGRAGUI[Y],",
    "          Talal EL-KARKOURI, Abdellah FAHMI [Tarek CHIHAB 63'], Abdelkrim KAISSI,",
    "          Youssef HADJI[Y], Youssef SAFRI [Houssine KHARJA 75'], Marouane CHAMAKH,",
    "          Mohamed EL-YAACOUBI[Y][Youssef MOKHTARI 45'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Joseph MUSUSA [ZIMBABWE].",
    "",
    "FRIENDLY INTERNATIONAL",
    "28/05/2004 - Bamako [Mali], 35.000",
    "Versus:   MALI",
    "Score:    D 0-0",
    "Team:     Khalid FOUHAMI, Noureddine KACEMI, Tarek CHIHAB, Amine ERBATE,",
    "          Nasr EL-KASMI [Mourad FALLAH 62'], Abdellah FAHMI [Abderrahim CHKILITTE 86'],",
    "          Abdelkrim KAISSI, Youssef HADJI [Hassane ALLA 51'], Youssef SAFRI",
    "          [Mehdi TAOUIL 86'], Marouane CHAMAKH [Abdelaziz AHANFOUF 51'], Mohamed EL-YAACOUBI",
    "          [Nabil BAHA 88'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Boubacar SIDIBÉ [MALI].",
    "",
    "FRIENDLY INTERNATIONAL",
    "28/04/2004 - Casablanca [Morocco], 65.000",
    "Versus:   ARGENTINA",
    "Score:    L 0-1",
    "Team:     Nadir LAMYAGHRI, Abdeslam OUADDOU, Talal EL-KARKOURI, Noureddine NAYBET",
    "          [Tarek CHIHAB 72'], Abdelkrim KAISSI, Houssine KHARJA, Youssef MOKHTARI",
    "          [Nabil BAHA 89'], Mourad HDIOUED [Noureddine KACEMI 45'], Marouane CHAMAKH,",
    "          Mohamed EL-YAACOUBI [Mounir DIANE 64'], Jaouad ZAIRI [Youssef HADJI 78'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Falla NDOYÉ [SENEGAL].",
    "",
    "FRIENDLY INTERNATIONAL",
    "31/03/2004 - Rabat [Morocco], 7.000",
    "Versus:   ANGOLA",
    "Score:    W 3-1",
    "Scorers:  Nabil BAHA 67', 74', Jaouad ZAIRI 77'",
    "Team:     Nadir LAMYAGHRI [Karim ZAZA 45'], Tarek CHIHAB, Jamal ALIOUI",
    "          [Amine ERBATE 81'], Talal EL-KARKOURI, Abdelkrim KAISSI [Mourad HDIOUED 29'],",
    "          Ali EL-OMARI [Noureddine KACEMI 69'], Houssine KHARJA, Mounir DIANE",
    "          [Ahmed AJEDDOU 75'], Youssef HADJI [Hassane ALLA 60'], Nabil BAHA,",
    "          Jaouad ZAIRI.",
    "Coach:    Ezaki BADOU.",
    "Referee:  Mohamed Kamel RISHA [EGYPT].",
    "",
    "NATIONS CUP FINAL",
    "14/02/2004 - Rades [Tunisia], 60.000",
    "Versus:   TUNISIA",
    "Score:    L 1-2",
    "Scorer:   Youssef MOKHTARI 38'",
    "Team:     Khalid FOUHAMI, Abdeslam OUADDOU, Oualid REGRAGUI[Y], Talal EL-KARKOURI,",
    "          Akram ROUMANI[Y][Jaouad ZAIRI 74'], Noureddine NAYBET[Y], Abdelkrim KAISSI,",
    "          Youssef MOKHTARI, Youssef HADJI [Nabil BAHA 87'], Youssef SAFRI",
    "          [Mohamed EL-YAACOUBI 63'], Marouane CHAMAKH.",
    "Coach:    Ezaki BADOU.",
    "Referee:  Falla NDOYÉ [SENEGAL].",
    "",
    "NATIONS CUP SEMI FINAL",
    "11/02/2004 - Sousse [Tunisia], 15.000",
    "Versus:   MALI",
    "Score:    W 4-0",
    "Scorers:  Youssef MOKHTARI 14', 58', Youssef HADJI 80', Nabil BAHA 90'",
    "Team:     Khalid FOUHAMI, Abdeslam OUADDOU, Oualid REGRAGUI [Mourad HDIOUED 68'],",
    "          Akram ROUMANI, Noureddine NAYBET[Y], Abdelkrim KAISSI, Youssef MOKHTARI,",
    "          Youssef HADJI [Nabil BAHA 86'], Youssef SAFRI, Marouane CHAMAKH,",
    "          Mohamed EL-YAACOUBI [Tarek CHIHAB 59'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Sharaf ABUBAKAR [IVORY COAST].",
    "",
    "NATIONS CUP QUARTER FINAL",
    "08/02/2004 - Sfax [Tunisia], 22.000",
    "Versus:   ALGERIA",
    "Score:    W 3-1 AET",
    "Scorers:  Marouane CHAMAKH 90', Youssef HADJI 113', Jaouad ZAIRI 120'",
    "Team:     Khalid FOUHAMI, Abdeslam OUADDOU[Y], Oualid REGRAGUI, Talal EL-KARKOURI",
    "          [Youssef HADJI 86'], Noureddine NAYBET, Abdelkrim KAISSI [Mohamed EL-YAACOUBI[Y] 69'],",
    "          Houssine KHARJA [Jamal ALIOUI 90'], Youssef MOKHTARI, Youssef SAFRI[Y],",
    "          Marouane CHAMAKH, Jaouad ZAIRI.",
    "Coach:    Ezaki BADOU.",
    "Referee:  Mohamed Abdelhakim SHELMANI [LIBYA].",
    "",
    "NATIONS CUP ROUND ONE",
    "04/02/2004 - Sousse [Tunisia], 6.000",
    "Versus:   SOUTH AFRICA",
    "Score:    D 1-1",
    "Scorer:   Youssef SAFRI 38'Pen",
    "Team:     Khalid FOUHAMI, Abdeslam OUADDOU, Oualid REGRAGUI, Talal EL-KARKOURI,",
    "          Noureddine NAYBET, Abdelkrim KAISSI, Houssine KHARJA[Y], Youssef MOKHTARI",
    "          [Mohamed EL-YAACOUBI 85'], Youssef HADJI[Y][Mourad HDIOUED 89'], Youssef SAFRI,",
    "          Marouane CHAMAKH.",
    "Coach:    Ezaki BADOU.",
    "Referee:  Hichem GUIRAT [TUNISIA].",
    "",
    "NATIONS CUP ROUND ONE",
    "31/01/2004 - Sfax [Tunisia], 20.000",
    "Versus:   BENIN",
    "Score:    W 4-0",
    "Scorers:  Marouane CHAMAKH 17', Youssef MOKHTARI 73', Abdeslam OUADDOU 75',",
    "          Talal EL-KARKOURI 80'",
    "Team:     Khalid FOUHAMI, Abdeslam OUADDOU, Oualid REGRAGUI, Talal EL-KARKOURI,",
    "          Noureddine NAYBET, Abdelkrim KAISSI [Youssef MOKHTARI 63'], Houssine KHARJA,",
    "          Youssef SAFRI, Marouane CHAMAKH, Mohamed EL-YAACOUBI [Hassane ALLA 78'],",
    "          Jaouad ZAIRI [Youssef HADJI 48'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Eddy MAILLET [SEYCHELLES].",
    "",
    "NATIONS CUP ROUND ONE",
    "27/01/2004 - Monastir [Tunisia], 15.000",
    "Versus:   NIGERIA",
    "Score:    W 1-0",
    "Scorer:   Youssef HADJI 77'",
    "Team:     Khalid FOUHAMI[Y], Abdeslam OUADDOU, Oualid REGRAGUI[Y], Talal EL-KARKOURI,",
    "          Noureddine NAYBET, Abdelkrim KAISSI, Houssine KHARJA, Youssef MOKHTARI",
    "          [Mohamed EL-YAACOUBI 71'], Youssef SAFRI, Marouane CHAMAKH, Jaouad ZAIRI",
    "          [Youssef HADJI 58'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Falla NDOYÉ [SENEGAL].",
    "",
    "2003",
    "",
    "FRIENDLY INTERNATIONAL",
    "19/11/2003 - Casablanca [Morocco], 6.000",
    "Versus:   MALI",
    "Score:    L 0-1",
    "Team:     Khalid FOUHAMI, Abdeslam OUADDOU, Oualid REGRAGUI, Jamal ALIOUI,",
    "          Talal EL-KARKOURI, Akram ROUMANI, Houssine KHARJA, Youssef SAFRI",
    "          [Samir BOUGHANEM], Marouane CHAMAKH, Mohamed EL-YAACOUBI [Ali EL-OMARI],",
    "          Jaouad ZAIRI.",
    "Coach:    Ezaki BADOU.",
    "Referee:  Mohamed Abdelhakim SHELMANI [LIBYA].",
    "",
    "FRIENDLY INTERNATIONAL",
    "15/11/2003 - Meknes [Morocco], 25.000",
    "Versus:   BURKINA FASO",
    "Score:    W 1-0",
    "Scorer:   Abdeslam OUADDOU 24'",
    "Team:     Khalid FOUHAMI, Abdeslam OUADDOU, Oualid REGRAGUI, Jamal ALIOUI,",
    "          Talal EL-KARKOURI, Akram ROUMANI, Youssef MOKHTARI, Youssef SAFRI,",
    "          Marouane CHAMAKH, Mohamed EL-YAACOUBI, Jaouad ZAIRI.",
    "Coach:    Ezaki BADOU.",
    "Referee:  Mohcine BOUKHTIR [TUNISIA].",
    "",
    "FRIENDLY INTERNATIONAL",
    "11/10/2003 - Tunis [Tunisia], 13.000",
    "Versus:   TUNISIA",
    "Score:    D 0-0",
    "Team:     Khalid FOUHAMI, Abdeslam OUADDOU, Oualid REGRAGUI, Talal EL-KARKOURI,",
    "          Akram ROUMANI, Noureddine NAYBET, Youssef MOKHTARI [Samir BOUGHANEM 83'],",
    "          Youssef HADJI, Youssef SAFRI, Marouane CHAMAKH, Mohamed EL-YAACOUBI",
    "          [Houssine KHARJA 71'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Bertrand LAYEC [FRANCE].",
    "",
    "FRIENDLY INTERNATIONAL",
    "10/09/2003 - Marrakech [Morocco], ",
    "Versus:   TRINIDAD & TOBAGO",
    "Score:    W 2-0",
    "Scorers:  Marouane CHAMAKH 38', 49'",
    "Team:     Khalid FOUHAMI[Y][Abdelilah BAGUI 74'], Abdeslam OUADDOU[Y][Tarek CHIHAB 45'],",
    "          Oualid REGRAGUI, Talal EL-KARKOURI, Akram ROUMANI [Mustapha OUSSALEH 80'],",
    "          Noureddine NAYBET [Houssine KHARJA 74'], Youssef MOKHTARI [Youssef HADJI 63'],",
    "          Youssef SAFRI, Marouane CHAMAKH [Nabil BAHA 69'], Mohamed EL-YAACOUBI",
    "          [Abdelkrim KAISSI 66'], Jaouad ZAIRI.",
    "Coach:    Ezaki BADOU.",
    "Referee:  Atef YAACOUBI [TUNISIA].",
    "",
    "NATIONS CUP QUALIFIER",
    "06/07/2003 - Bata [Equatorial Guinea], ",
    "Versus:   EQUATORIAL GUINEA",
    "Score:    W 1-0",
    "Scorer:   Jawad AKADAR 61'",
    "Team:     Nadir LAMYAGHRI, Noureddine KACEMI, Abdeslam OUADDOU, Oualid REGRAGUI,",
    "          Tarek CHIHAB, Talal EL-KARKOURI, Abdelkrim KAISSI, Mourad HDIOUED",
    "          [Houssine KHARJA 56'], Nabil BAHA [Jawad AKADAR 56'], Mohamed EL-YAACOUBI,",
    "          Jaouad ZAIRI.",
    "Coach:    Ezaki BADOU.",
    "Referee:  N/A.",
    "",
    "NATIONS CUP QUALIFIER",
    "20/06/2003 - Rabat [Morocco], 15.000",
    "Versus:   GABON",
    "Score:    W 2-0",
    "Scorers:  Mohamed EL-YAACOUBI 22', Jaouad ZAIRI 75'",
    "Team:     Nadir LAMYAGHRI, Noureddine KACEMI, Abdeslam OUADDOU, Oualid REGRAGUI,",
    "          Talal EL-KARKOURI, Noureddine NAYBET, Mourad HDIOUED[Y], Youssef CHIPPO,",
    "          Nabil BAHA [Marouane CHAMAKH 64'], Mohamed EL-YAACOUBI [Houssine KHARJA 88'],",
    "          Jaouad ZAIRI [Hicham ABOUCHAROUANE 81'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Mohamed Abdelhakim SHELMANI [LIBYA].",
    "",
    "NATIONS CUP QUALIFIER",
    "08/06/2003 - Casablanca [Morocco], 25.000",
    "Versus:   SIERRA LEONE",
    "Score:    W 1-0",
    "Scorer:   Youssef CHIPPO 26'",
    "Team:     Abdelilah BAGUI, Noureddine KACEMI, Abdeslam OUADDOU[Y], Oualid REGRAGUI,",
    "          Talal EL-KARKOURI, Noureddine NAYBET, Samir BOUGHANEM [Mohamed EL-YAACOUBI],",
    "          Mourad HDIOUED [Abdelkrim KAISSI], Youssef CHIPPO [Marouane CHAMAKH],",
    "          Nabil BAHA, Jaouad ZAIRI.",
    "Coach:    Ezaki BADOU.",
    "Referee:  Essam Abdul EL-FATAH [EGYPT].",
    "",
    "FRIENDLY INTERNATIONAL",
    "30/04/2003 - Rabat [Morocco], 20.000",
    "Versus:   IVORY COAST",
    "Score:    L 0-1",
    "Team:     Driss ASMAR [Nadir LAMYAGHRI 75'], Abdeslam OUADDOU, Faouzi EL-BRAZI,",
    "          Talal EL-KARKOURI, Abdelilah SABER[R], Abdelkrim KAISSI [Noureddine BOUKHARI 45'],",
    "          Mourad HDIOUED [Samir BOUGHANEM 45'][Tarek CHIHAB 85'], Youssef CHIPPO",
    "          [Oualid REGRAGUI 65'], Nabil BAHA [Mustapha BIDODANE 86'], Mohamed EL-YAACOUBI",
    "          [Noureddine KACEMI 45'], Jaouad ZAIRI [Ali EL-OMARI 55'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Abderrahim EL-ARJOUNE [MOROCCO].",
    "",
    "NATIONS CUP QUALIFIER",
    "29/03/2003 - Freetown [Sierra Leone], 35.000",
    "Versus:   SIERRA LEONE",
    "Score:    D 0-0",
    "Team:     Abdelilah BAGUI [Driss ASMAR 61'], Abdeslam OUADDOU, Talal EL-KARKOURI,",
    "          Noureddine NAYBET, Abdelilah SABER[Y], Abdelkrim KAISSI, Samir BOUGHANEM[Y],",
    "          Youssef CHIPPO, Nabil BAHA[Y], Mohamed EL-YAACOUBI [Tarek CHIHAB],",
    "          Jaouad ZAIRI [Oualid REGRAGUI].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Idrissa KABU [LIBERIA].",
    "",
    "FRIENDLY INTERNATIONAL",
    "12/02/2003 - Paris [France], 8.000",
    "Versus:   SENEGAL",
    "Score:    W 1-0",
    "Scorer:   Abdelilah SABER 63'",
    "Team:     Nadir LAMYAGHRI, Abdeslam OUADDOU, Talal EL-KARKOURI, Noureddine NAYBET",
    "          [Abdellah FAHMI 81'], Abdelilah SABER, Abdelkrim KAISSI[Y][Faouzi EL-BRAZI 88'],",
    "          Samir BOUGHANEM[Y], Mourad HDIOUED, Nabil BAHA [Hicham ABOUCHAROUANE 88'],",
    "          Mohamed EL-YAACOUBI, Jaouad ZAIRI [Mustapha BIDODANE[Y] 90+1'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Hervé PICCIRILLO [FRANCE].",
    "",
    "FRIENDLY INTERNATIONAL",
    "20/11/2002 - Rabat [Morocco], 15.000",
    "Versus:   MALI",
    "Score:    L 1-3",
    "Scorer:   Rachid ROKKI 5'",
    "Team:     Abdelilah BAGUI, Abdeslam OUADDOU, Tarek CHIHAB, Badr EL-KADDOURI",
    "          [Noureddine KACEMI 62'], Talal EL-KARKOURI [Amine ERBATE 45'], Youssef SAFRI,",
    "          Mustapha HADJI [Otman EL-ASSAS 72'], Youssef CHIPPO, Adil RAMZI,",
    "          Mustapha BIDODANE [Hicham ABOUCHAROUANE 45'], Rachid ROKKI [Rabei LAFOUI 73'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Said TAHIRI [MOROCCO].",
    "",
    "NATIONS CUP QUALIFIER",
    "13/10/2002 - Rabat [Morocco], 25.000",
    "Versus:   EQUATORIAL GUINEA",
    "Score:    W 5-0",
    "Scorers:  Adil RAMZI 8', Mustapha BIDODANE 24', Youssef SAFRI 27',",
    "          Rachid ROKKI 45', Noureddine KACEMI 70'",
    "Team:     Abdelilah BAGUI[R], Noureddine KACEMI [Badr EL-KADDOURI 85'], Abdeslam OUADDOU,",
    "          Talal EL-KARKOURI, Noureddine NAYBET, Abdelilah SABER, Youssef SAFRI,",
    "          Youssef CHIPPO [Abderafi GASSI 85'], Adil RAMZI, Mustapha BIDODANE,",
    "          Rachid ROKKI [Rabei LAFOUI 65'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Mohcine BOUKHTIR [TUNISIA].",
    "",
    "FRIENDLY INTERNATIONAL",
    "03/10/2002 - Rabat [Morocco], 4.300",
    "Versus:   NIGER",
    "Score:    W 6-1",
    "Scorers:  Mustapha BIDODANE 9', Bouabid BOUDEN 29'Pen, Otman EL-ASSAS 50',",
    "          Mohamed JEBRANE 70', Omar HASSI 78', Hicham ZEROUALI 83'",
    "Team:     Abdelilah BAGUI, Ali BOUAB, Tarek CHIHAB, Abdelilah SABER",
    "          [Mourad FALLAH], Abderahim CHKILITTE [Abderrahmane RAFIQ[R]], Tarek MIRI,",
    "          Youssef MOKHTARI [Hassan EL-MOUATAZ], Otman EL-ASSAS, Bouabid BOUDEN",
    "          [Omar HASSI], Mustapha BIDODANE [Hicham ZEROUALI], Rachid ROKKI",
    "          [Mohamed JEBRANE].",
    "Coach:    Ezaki BADOU.",
    "Referee:  ? ROUAISSI [MOROCCO].",
    "",
    "NATIONS CUP QUALIFIER",
    "07/09/2002 - Libreville [Gabon], 30.000",
    "Versus:   GABON",
    "Score:    W 1-0",
    "Scorer:   Youssef CHIPPO 19'",
    "Team:     Abdelilah BAGUI, Noureddine KACEMI, Abdeslam OUADDOU, Tarek CHIHAB[Y],",
    "          Talal EL-KARKOURI, Noureddine NAYBET, Abdelkrim KAISSI[Y][Mourad HDIOUED 76'],",
    "          Youssef SAFRI, Youssef CHIPPO, Adil RAMZI[Y][Oualid REGRAGUI 86'],",
    "          Mustapha BIDODANE[Y][Rabei LAFOUI 56'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Raphael EVEHE [CAMEROON].",
    "",
    "FRIENDLY INTERNATIONAL",
    "21/08/2002 - Luxembourg City [Luxembourg], 1.654",
    "Versus:   LUXEMBOURG",
    "Score:    W 2-0",
    "Scorers:  Mohamed JEBRANE 72', Noureddine KACEMI 84'",
    "Team:     Abdelilah BAGUI, Abdeslam OUADDOU, Tarek CHIHAB, Badr EL-KADDOURI,",
    "          Talal EL-KARKOURI [Noureddine KACEMI 75'], Noureddine NAYBET, Mourad HDIOUED",
    "          [Abderahim CHKILITTE 56'], Youssef SAFRI [Abdelkrim KAISSI 45'], Youssef CHIPPO,",
    "          Adil RAMZI [Lotfi BENBOUBKER 88'], Rafei LAFOUI [Mohamed JEBRANE 57'].",
    "Coach:    Ezaki BADOU.",
    "Referee:  Edgar STEINBORN [GERMANY].",
    "",
    "NATIONS CUP ROUND ONE",
    "30/01/2002 - Segou [Mali], 3.000",
    "Versus:   SOUTH AFRICA",
    "Score:    L 1-3",
    "Scorer:   Rachid BENMAHMOUD 80'Pen",
    "Team:     Driss BENZEKRI, Faouzi EL-BRAZI, Abdellah FAHMI, Akram ROUMANI,",
    "          Noureddine NAYBET, Noureddine BOUKHARI [Abdejalil HADDA 50'], Youssef SAFRI,",
    "          Youssef CHIPPO [Rachid BENMAHMOUD 59'], Adil RAMZI, Salaheddine BASSIR",
    "          [Rachid ROKKI 85'], Hicham ZEROUALI.",
    "Coach:    Humberto COELHO.",
    "Referee:  Gamal EL-HAWARI [LIBYA].",
    "",
    "NATIONS CUP ROUND ONE",
    "26/01/2002 - Segou [Mali], 4.000",
    "Versus:   BURKINA FASO",
    "Score:    W 2-1",
    "Scorers:  Hicham ZEROUALI 23', 85'",
    "Team:     Driss BENZEKRI, Abdellah FAHMI, Akram ROUMANI, Noureddine NAYBET,",
    "          Noureddine BOUKHARI [Rabei LAFOUI 74'], Youssef SAFRI [Rachid BENMAHMOUD[Y] 66'],",
    "          Youssef CHIPPO, Gharib AMZINE [Faouzi EL-BRAZI 32'], Adil RAMZI,",
    "          Salaheddine BASSIR, Hicham ZEROUALI.",
    "Coach:    Humberto COELHO.",
    "Referee:  Lim Kee CHONG [MAURITIUS].",
    "",
    "NATIONS CUP ROUND ONE",
    "21/01/2002 - Segou [Mali], 4.000",
    "Versus:   GHANA",
    "Score:    D 0-0",
    "Team:     Driss BENZEKRI, Abdellah FAHMI, Akram ROUMANI, Noureddine NAYBET[Y],",
    "          Youssef SAFRI, Youssef CHIPPO, Gharib AMZINE[Y], Adil RAMZI,",
    "          Salaheddine BASSIR [Rachid ROKKI 59'], Abdejalil HADDA [Faouzi EL-BRAZI 89'],",
    "          Hicham ZEROUALI [Rabei LAFOUI 70'].",
    "Coach:    Humberto COELHO.",
    "Referee:  Domenico MESSINA [ITALY].",
    "",
    "FRIENDLY INTERNATIONAL",
    "16/01/2002 - Banjul [Gambia], ",
    "Versus:   GAMBIA",
    "Score:    W 2-0",
    "Scorers:  Adil RAMZI 15', Abdejalil HADDA 28'",
    "Team:     Driss BENZEKRI, Abdeslam OUADDOU, Faouzi EL-BRAZI, Abdellah FAHMI,",
    "          Akram ROUMANI, Noureddine NAYBET, Youssef SAFRI, Youssef CHIPPO,",
    "          Adil RAMZI, Abdejalil HADDA, Hicham ZEROUALI.",
    "Coach:    Humberto COELHO.",
    "Referee:  N/A.",
    "",
    "FRIENDLY INTERNATIONAL",
    "13/01/2002 - Rabat [Morocco], ",
    "Versus:   GUINEA",
    "Score:    W 2-1",
    "Scorers:  Abdejalil HADDA 10', Adil RAMZI 49'",
    "Team:     Driss BENZEKRI, Abdeslam OUADDOU [Salaheddine BASSIR 45'], Faouzi EL-BRAZI,",
    "          Abdellah FAHMI, Akram ROUMANI, Noureddine NAYBET [Tarek CHIHAB 80'],",
    "          Youssef SAFRI [Rachid BENMAHMOUD 67'], Youssef CHIPPO [Otman EL-ASSAS 45'],",
    "          Adil RAMZI [Noureddine BOUKHARI 75'], Abdejalil HADDA, Hicham ZEROUALI",
    "          [Rabei LAFOUI 75'].",
    "Coach:    Humberto COELHO.",
    "Referee:  Abderrahim EL-ARJOUNE [MOROCCO].",
    "",
    "2001",
    "",
    "FRIENDLY INTERNATIONAL",
    "12/12/2001 - Settat [Morocco], 40.000",
    "Versus:   MALI",
    "Score:    D 1-1",
    "Scorer:   Youssef CHIPPO 9'Pen",
    "Team:     Abdelilah BAGUI, Abdellah FAHMI, Noureddine NAYBET, Tarek CHIHAB,",
    "          Youssef SAFRI, Youssef CHIPPO, Gharib AMZINE, Salaheddine BASSIR,",
    "          Abdejalil HADDA, Rachid ROKKI, Hicham ZEROUALI.",
    "Coach:    Humberto COELHO.",
    "Referee:  N/A.",
    "",
    "FRIENDLY INTERNATIONAL",
    "14/11/2001 - Rabat [Morocco], 2.000",
    "Versus:   ZAMBIA",
    "Score:    W 1-0",
    "Scorer:   Rachid ROKKI 86'Pen",
    "Team:     Khalid FOUHAMI [Abdelilah BAGUI], Adil BEKKARI, Abdellah FAHMI,",
    "          Akram ROUMANI, Noureddine NAYBET [Abdejalil HADDA], Otman EL-ASSAS,",
    "          Youssef SAFRI, Adil RAMZI, Moncef ZERKA [Mustapha OUCHRIF],",
    "          Salaheddine BASSIR [Rachid ROKKI], Hicham ZEROUALI [Noureddine BOUKHARI].",
    "Coach:    Humberto COELHO.",
    "Referee:  Abderrahim EL-ARJOUNE [MOROCCO].",
    "",
    "FRIENDLY INTERNATIONAL",
    "14/10/2001 - Bamako [Mali], 35.000",
    "Versus:   MALI",
    "Score:    L 1-2",
    "Scorer:   Rachid ROKKI 10'",
    "Team:     Abdelilah BAGUI [Driss BENZEKRI], Adil BEKKARI, Ali BOUAB,",
    "          Akram ROUMANI, Idriss BOULETTA, Omar GASSIMI [Driss BOUCETTA[R]],",
    "          Abdelkrim KAISSI [Hassan MOUATRY 59'], Rachid BENMAHMOUD, Mohamed KHARBOUCH,",
    "          Rachid ROKKI, Hicham ZEROUALI.",
    "Coach:    Humberto COELHO.",
    "Referee:  Seydou KÉITA [MALI].",
    "",
    "FRIENDLY INTERNATIONAL",
    "12/10/2001 - Bamako [Mali], 50.000",
    "Versus:   GAMBIA",
    "Score:    W 2-0",
    "Scorers:  Hicham ZEROUALI 25', 55'",
    "Team:     N/A.",
    "Coach:    Humberto COELHO.",
    "Referee:  N/A.",
    "",
    "FRIENDLY INTERNATIONAL",
    "05/09/2001 - Piacenza [Italy], 18.740",
    "Versus:   ITALY",
    "Score:    L 0-1",
    "Team:     Driss BENZEKRI, Abdeslam OUADDOU, Abdellah FAHMI [Youssef ROSSI 89'],",
    "          Akram ROUMANI, Noureddine NAYBET, Youssef SAFRI[Y], Rachid BENMAHMOUD",
    "          [Abdelkrim KAISSI 65'], Youssef CHIPPO [Otman EL-ASSAS 72'], Mohamed KHARBOUCH,",
    "          Salaheddine BASSIR, Hicham ZEROUALI [Adil RAMZI 79'].",
    "Coach:    Humberto COELHO.",
    "Referee:  Juan Ansuategui ROCA [SPAIN].",
    "",
    "WORLD CUP QUALIFIER",
    "14/07/2001 - Dakar [Senegal], 60.000",
    "Versus:   SENEGAL",
    "Score:    L 0-1",
    "Team:     Khalid FOUHAMI, Abdeslam OUADDOU, Noureddine NAYBET[Y], Abdelkrim EL-HADRIOUI,",
    "          Youssef SAFRI[Y], Rachid BENMAHMOUD [Oualid REGRAGUI 45'], Mustapha HADJI",
    "          [Hassan NADER 76'], Youssef CHIPPO, Gharib AMZINE, Adil RAMZI[Y],",
    "          Abdejalil HADDA [Salaheddine BASSIR 67'].",
    "Coach:    Humberto COELHO.",
    "Referee:  Petros MATHABELA [SOUTH AFRICA].",
    "",
    "WORLD CUP QUALIFIER",
    "30/06/2001 - Rabat [Morocco], 70.000",
    "Versus:   EGYPT",
    "Score:    W 1-0",
    "Scorer:   Mustapha HADJI 32'",
    "Team:     Driss BENZEKRI[Y], Abdeslam OUADDOU, Noureddine NAYBET, Abdelkrim EL-HADRIOUI,",
    "          Youssef ROSSI, Rachid BENMAHMOUD [Jamal SELLAMI 85'], Mustapha HADJI",
    "          [Faouzi EL-BRAZI 75'], Hassan KACHLOUL[Y], Gharib AMZINE, Adil RAMZI,",
    "          Abdejalil HADDA [Salaheddine BASSIR 67'].",
    "Coach:    Humberto COELHO.",
    "Referee:  Edwin SENAI [BOTSWANA].",
    "",
    "NATIONS CUP QUALIFIER",
    "16/06/2001 - Fes [Morocco], 12.000",
    "Versus:   GABON",
    "Score:    L 0-1",
    "Team:     Khalid FOUHAMI, Faouzi EL-BRAZI, Abdellatif JRINDOU, Youssef BELKHOUJA,",
    "          Abdelkrim KAISSI[Y], Rachid BENMAHMOUD, Gharib AMZINE, Adil RAMZI,",
    "          Salaheddine BASSIR [Oualid REGRAGUI 57'], Abdejalil HADDA[Y][Hassan NADER 45'],",
    "          Rachid ROKKI [Bouchaib EL-MOUBARKI 74'].",
    "Coach:    Humberto COELHO.",
    "Referee:  Mohamed ABDELLAH [LIBYA].",
    "",
    "NATIONS CUP QUALIFIER",
    "02/06/2001 - Nairobi [Kenya], 17.000",
    "Versus:   KENYA",
    "Score:    D 1-1",
    "Scorer:   Salaheddine BASSIR 43'",
    "Team:     Driss BENZEKRI, Abdeslam OUADDOU, Oualid REGRAGUI, Faouzi EL-BRAZI,",
    "          Youssef BELKHOUJA, Youssef SAFRI, Youssef CHIPPO, Gharib AMZINE,",
    "          Adil RAMZI [Abdelkrim KAISSI 89'], Bouchaib EL-MOUBARKI [Rabei LAFOUI 73'],",
    "          Salaheddine BASSIR[Y][Rachid ROKKI 84'].",
    "Coach:    Humberto COELHO.",
    "Referee:  Robin WILLIAMS [SOUTH AFRICA].",
    "",
    "WORLD CUP QUALIFIER",
    "04/05/2001 - Alger [Algeria], 15.000",
    "Versus:   ALGERIA",
    "Score:    W 2-1",
    "Scorers:  Rachid BENMAHMOUD 17', Gharib AMZINE 48'",
    "Team:     Driss BENZEKRI, Abdeslam OUADDOU, Oualid REGRAGUI, Noureddine NAYBET,",
    "          Abdelkrim EL-HADRIOUI, Youssef SAFRI[Y], Rachid BENMAHMOUD [Faouzi EL-BRAZI 85'],",
    "          Youssef CHIPPO[Y][Youssef ROSSI 89'], Gharib AMZINE, Adil RAMZI,",
    "          Abdejalil HADDA [Rachid ROKKI 85'].",
    "Coach:    Humberto COELHO.",
    "Referee:  Hichem GUIRAT [TUNISIA].",
    "",
    "WORLD CUP QUALIFIER",
    "21/04/2001 - Rabat [Morocco], 15.000",
    "Versus:   NAMIBIA",
    "Score:    W 3-0",
    "Scorers:  Rachid ROKKI 48', Abdejalil HADDA 75', 90'",
    "Team:     Driss BENZEKRI, Abdeslam OUADDOU, Noureddine NAYBET, Abdelkrim EL-HADRIOUI,",
    "          Rachid BENMAHMOUD, Mustapha HADJI, Youssef CHIPPO[Y][Youssef SAFRI 84'],",
    "          Gharib AMZINE, Adil RAMZI, Bouchaib EL-MOUBARKI [Rachid ROKKI 39'],",
    "          Abdejalil HADDA.",
    "Coach:    Humberto COELHO.",
    "Referee:  Koman COULIBALY [MALI].",
    "",
    "NATIONS CUP QUALIFIER",
    "24/03/2001 - Rabat [Morocco], 25.000",
    "Versus:   TUNISIA",
    "Score:    W 2-0",
    "Scorers:  Youssef CHIPPO 20', Abdejalil HADDA 60'",
    "Team:     Driss BENZEKRI, Noureddine KACEMI[Y], Abdeslam OUADDOU, Oualid REGRAGUI,",
    "          Youssef ROSSI[Y], Youssef SAFRI [Rachid BENMAHMOUD 45'], Mustapha HADJI",
    "          [Rachid ROKKI 89'], Youssef CHIPPO [Faouzi EL-BRAZI 78'], Gharib AMZINE,",
    "          Adil RAMZI[Y], Abdejalil HADDA.",
    "Coach:    Humberto COELHO.",
    "Referee:  Coffi CODJIA [BENIN].",
    "",
    "WORLD CUP QUALIFIER",
    "24/02/2001 - Rabat [Morocco], 60.000",
    "Versus:   SENEGAL",
    "Score:    D 0-0",
    "Team:     Driss BENZEKRI, Abdeslam OUADDOU, Noureddine NAYBET, Abdelkrim EL-HADRIOUI[Y],",
    "          Abdelilah SABER [Gharib AMZINE 57'], Otman EL-ASSAS[Y], Youssef SAFRI,",
    "          Mustapha HADJI [Hassan NADER 88'], Adil RAMZI, Tarik SEKTIOUI",
    "          [Oualid REGRAGUI[Y] 45'], Abdejalil HADDA.",
    "Coach:    Humberto COELHO.",
    "Referee:  Felix TANGAWARIMA [ZIMBABWE].",
    "",
    "FRIENDSHIP TOURNAMENT",
    "14/02/2001 - Dubai [United Arab Emirates], ",
    "Versus:   UNITED ARAB EMIRATES",
    "Score:    D 1-1",
    "Scorer:   Tarik SEKTIOUI 75'",
    "Team:     N/A.",
    "Coach:    Humberto COELHO.",
    "Referee:  N/A.",
    "",
    "FRIENDSHIP TOURNAMENT",
    "08/02/2001 - Dubai [United Arab Emirates], 500",
    "Versus:   SOUTH KOREA B",
    "Score:    D 1-1",
    "Scorer:   Otman EL-ASSAS 10'",
    "Team:     Driss BENZEKRI, Noureddine KACEMI[Y][Rachid REGADI 42'], Faouzi EL-BRAZI",
    "          [Abdellatif JRINDOU[Y] 24'], Lahcen ABRAMI, Otman EL-ASSAS[Y], Youssef SAFRI,",
    "          Jamal SELLAMI, Said CHIBA [Tarik SEKTIOUI 66'], Bouchaib EL-MOUBARKI,",
    "          Salaheddine BASSIR [Rachid BENMAHMOUD 89'], Rachid ROKKI [Rachid DAOUDI 81'].",
    "Coach:    Humberto COELHO.",
    "Referee:  Mohamed Ali BUJSAIM [UAE].",
    "",
    "WORLD CUP QUALIFIER",
    "28/01/2001 - Cairo [Egypt], 60.000",
    "Versus:   EGYPT",
    "Score:    D 0-0",
    "Team:     Driss BENZEKRI[Y], Oualid REGRAGUI[Y], Noureddine NAYBET, Abdelkrim EL-HADRIOUI,",
    "          Youssef ROSSI, Tahar EL-KHALEJ [Youssef SAFRI[Y] 31'], Mustapha HADJI,",
    "          Youssef CHIPPO[Y], Gharib AMZINE, Adil RAMZI [Abdeslam OUADDOU 87'],",
    "          Abdejalil HADDA [Hassan NADER 59'].",
    "Coach:    Humberto COELHO.",
    "Referee:  Mohamed Abdelhakim SHELMANI [LIBYA].",
    "",
    "NATIONS CUP QUALIFIER",
    "13/01/2001 - Tunis [Tunisia], 35.000",
    "Versus:   TUNISIA",
    "Score:    W 1-0",
    "Scorer:   Abdejalil HADDA 49'",
    "Team:     Driss BENZEKRI[Y], Abdeslam OUADDOU, Noureddine NAYBET[Y], Youssef ROSSI,",
    "          Youssef SAFRI, Tahar EL-KHALEJ[Y], Mustapha HADJI [Bouchaib EL-MOUBARKI 71'],",
    "          Youssef CHIPPO [Jamal SELLAMI 81'], Gharib AMZINE, Adil RAMZI,",
    "          Abdejalil HADDA [Said CHIBA 89'].",
    "Coach:    Humberto COELHO.",
    "Referee:  Gamal EL-GHANDOUR [EGYPT].",
    "",
    "2000",
    "",
    "NATIONS CUP QUALIFIER",
    "08/10/2000 - Casablanca [Morocco], ",
    "Versus:   KENYA",
    "Score:    W 1-0",
    "Scorer:   Youssef CHIPPO 43'",
    "Team:     Abderafi GASSI, Faouzi EL-BRAZI, Noureddine NAYBET[Y], Abdelkrim EL-HADRIOUI,",
    "          Abdelilah SABER, Youssef SAFRI[Y], Mustapha HADJI [Abdelfattah EL-KHATTARI 72'],",
    "          Hassan KACHLOUL, Youssef CHIPPO, Said CHIBA [Redouane EL-ALLALY[Y] 45'],",
    "          Salaheddine BASSIR [Bouchaib EL-MOUBARKI 80'].",
    "Coach:    Mustapha MADIH.",
    "Referee:  Alex QUARTEY [GHANA].",
    "",
    "NATIONS CUP QUALIFIER",
    "02/09/2000 - Libreville [Gabon], 4.000",
    "Versus:   GABON",
    "Score:    L 0-2",
    "Team:     Khalid FOUHAMI, Abdellah FAHMI, Noureddine NAYBET [Jamal SELLAMI 75'],",
    "          Abdelilah SABER, Youssef SAFRI [Lahcen ABRAMI 69'], Mustapha HADJI,",
    "          Youssef CHIPPO[Y], Youssef MERIANA, Mustapha BIDODANE, Jaouad ZAIRI",
    "          [Mourad HADDOU[Y] 67'], Abdejalil HADDA.",
    "Coach:    Henryk KASPERCZAK.",
    "Referee:  Sidi Bekaye MAGASSA [MALI].",
    "",
    "WORLD CUP QUALIFIER",
    "09/07/2000 - Fes [Morocco], 10.000",
    "Versus:   ALGERIA",
    "Score:    W 2-1",
    "Scorers:  Abdejalil HADDA 51', 75'",
    "Team:     Abderafi GASSI, Noureddine NAYBET, Rachid NEQROUZ, Abdelilah SABER[Y],",
    "          Youssef SAFRI, Youssef CHIPPO[Y][Mourad HDIOUED 82'], Said CHIBA,",
    "          Youssef MERIANA, Bouchaib EL-MOUBARKI [Abdelfattah EL-KHATTARI 45'], Salaheddine BASSIR",
    "          [Jamal SELLAMI 89'], Abdejalil HADDA.",
    "Coach:    Henryk KASPERCZAK.",
    "Referee:  Ferid SAHLI [TUNISIA].",
    "",
    "WORLD CUP QUALIFIER",
    "17/06/2000 - Windhoek [Namibia], 5.000",
    "Versus:   NAMIBIA",
    "Score:    D 0-0",
    "Team:     Abderafi GASSI, Mohamed BENCHRIFA, Talal EL-KARKOURI, Lahcen ABRAMI,",
    "          Otman EL-ASSAS, Mourad HDIOUED, Youssef SAFRI, Jamal SELLAMI[Y],",
    "          Youssef MERIANA, Bouchaib EL-MOUBARKI [Mustapha BIDODANE 77'], Salaheddine BASSIR[Y]",
    "          [Hicham ZEROUALI 45'].",
    "Coach:    Henryk KASPERCZAK.",
    "Referee:  Edwin SENAI [BOTSWANA].",
    "",
    "HASSAN II TOURNAMENT",
    "06/06/2000 - Casablanca [Morocco], 55.000",
    "Versus:   FRANCE",
    "Score:    L 1-5",
    "Scorer:   Noureddine NAYBET 66'",
    "Team:     Khalid FOUHAMI, Talal EL-KARKOURI [Mohamed BENCHRIFA 90+1'], Noureddine NAYBET",
    "          [Jamal SELLAMI 75'], Lahcen ABRAMI[Y][Mohamed KHARBOUCH 59'], Youssef MERIANA,",
    "          Mourad HDIOUED [Adil RAMZI 59'], Youssef SAFRI, Othman EL-ASSAS,",
    "          Bouchaib EL-MOUBARKI [Abdelfattah EL-KHATTARI 63'], Salaheddine BASSIR, Hicham ZEROUALI.",
    "Coach:    Henryk KASPERCZAK.",
    "Referee:  Mohamed Ali BUJSAIM [UAE].",
    "",
    "HASSAN II TOURNAMENT",
    "04/06/2000 - Casablanca [Morocco], 40.000",
    "Versus:   JAMAICA",
    "Score:    W 1-0",
    "Scorer:   Hicham ZEROUALI 61'",
    "Team:     Karim ZAZA, Mohamed BENCHRIFA, Talal EL-KARKOURI, Lahcen ABRAMI,",
    "          Otman EL-ASSAS, Mourad HDIOUED [Akram ROUMANI '], Jamal SELLAMI",
    "          [Hicham ZEROUALI 45'], Adil RAMZI, Youssef MERIANA, Salaheddine BASSIR,",
    "          Abdejalil HADDA.",
    "Coach:    Henryk KASPERCZAK.",
    "Referee:  N/A.",
    "",
    "WORLD CUP QUALIFIER",
    "22/04/2000 - Casablanca [Morocco], 10.800",
    "Versus:   GAMBIA",
    "Score:    W 2-0",
    "Scorer:   Abdelfattah EL-KHATTARI 17', 31'",
    "Team:     Khalid FOUHAMI[Y], Noureddine NAYBET, Abdellatif JRINDOU[Y], Abdelilah SABER,",
    "          Youssef SAFRI, Mustapha HADJI, Youssef CHIPPO [Otman EL-ASSAS 45'],",
    "          Jamal SELLAMI, Youssef MERIANA[Y], Abdelfattah EL-KHATTARI, Bouchaib EL-MOUBARKI",
    "          [Mustpha BIDODANE 77'].",
    "Coach:    Henryk KASPERCZAK.",
    "Referee:  Mohamed AL-HABIB [LIBYA].",
    "",
    "WORLD CUP QUALIFIER",
    "09/04/2000 - Banjul [Gambia], 20.000",
    "Versus:   GAMBIA",
    "Score:    W 1-0",
    "Scorer:   Bouchaib EL-MOUBARKI 63'",
    "Team:     Khalid FOUHAMI, Talal EL-KARKOURI, Noureddine NAYBET, Abdelilah SABER[Y],",
    "          Youssef SAFRI, Mustapha HADJI [Adil RAMZI 88'], Youssef CHIPPO",
    "          [Otman EL-ASSAS 88'], Jamal SELLAMI, Youssef MERIANA, Abdelfattah EL-KHATTARI,",
    "          Bouchaib EL-MOUBARKI.",
    "Coach:    Henryk KASPERCZAK.",
    "Referee:  Mamadouba CAMARA [GUINEA].",
    "",
    "NATIONS CUP ROUND ONE",
    "03/02/2000 - Lagos [Nigeria], 40.000",
    "Versus:   NIGERIA",
    "Score:    L 0-2",
    "Team:     Khalid FOUHAMI, Lahcen ABRAMI, Rachid NEQROUZ, Abdelilah SABER,",
    "          Tahar EL-KHALEJ[Y][Rachid BENMAHMOUD 77'], Mustapha HADJI, Jamal SELLAMI,",
    "          Said CHIBA[Y], Youssef MERIANA, Ahmed BAHJA [Adil RAMZI 70'],",
    "          Salaheddine BASSIR [Mohamed EL-BADRAOUI 45'].",
    "Coach:    Henri MICHEL.",
    "Referee:  Coffi CODJIA [BENIN].",
    "",
    "NATIONS CUP ROUND ONE",
    "29/01/2000 - Lagos [Nigeria], 5.000",
    "Versus:   TUNISIA",
    "Score:    D 0-0",
    "Team:     Khalid FOUHAMI, Noureddine NAYBET[Y], Abdelkrim EL-HADRIOUI, Abdelilah SABER,",
    "          Tahar EL-KHALEJ, Mustapha HADJI [Hassan KACHLOUL 88'], Youssef CHIPPO",
    "          [Rachid BENMAHMOUD 11'], Jamal SELLAMI[Y], Said CHIBA, Adil RAMZI",
    "          [Salaheddine BASSIR 67'], Abdejalil HADDA.",
    "Coach:    Henri MICHEL.",
    "Referee:  Falla NDOYÉ [SENEGAL].",
    "",
    "NATIONS CUP ROUND ONE",
    "25/01/2000 - Lagos [Nigeria], 8.000",
    "Versus:   CONGO",
    "Score:    W 1-0",
    "Scorer:   Salaheddine BASSIR 85'",
    "Team:     Khalid FOUHAMI, Noureddine NAYBET[Y], Rachid NEQROUZ, Abdelilah SABER[Y],",
    "          Taher EL-KHALEJ [Rachid BENMAHMOUD 76'], Mustapha HADJI, Youssef CHIPPO,",
    "          Said CHIBA, Youssef MERIANA, Ahmed BAHJA[Y][Adil RAMZI 76'],",
    "          Abdejalil HADDA [Salaheddine BASSIR 83'].",
    "Coach:    Henri MICHEL.",
    "Referee:  Alex QUARTEY [GHANA].",
    "",
    "FRIENDLY INTERNATIONAL",
    "18/01/2000 - El Jadida [Morocco], 10.000",
    "Versus:   TRINIDAD & TOBAGO",
    "Score:    W 1-0",
    "Scorer:   Mustapha HADJI 34'",
    "Team:     N/A.",
    "Coach:    Henri MICHEL.",
    "Referee:  N/A."
];
globalThis.international2000DetailsRawLines = international2000DetailsRawLines;
globalThis.international2000DetailsPreparsed = [
    {
        "key": "14/11/2009|cameroon",
        "date": "14/11/2009",
        "city": "Fes",
        "stadium": "Morocco",
        "attendance": "17.000",
        "opponent": "CAMEROON",
        "score": "0-2",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Zakaria Zerouali",
                "starter": true,
                "inMinute": 0,
                "outMinute": 70,
                "minutes": 70,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Khalid Sekkat",
                "starter": false,
                "inMinute": 70,
                "outMinute": 90,
                "minutes": 20,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Oulhaj",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Issah El-Adoua",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ben Jelloun",
                "starter": true,
                "inMinute": 0,
                "outMinute": 58,
                "minutes": 58,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Allaoui",
                "starter": false,
                "inMinute": 58,
                "outMinute": 90,
                "minutes": 32,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Hermach",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Chihani",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mehdi El-Moutaqui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Nabil Dirar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 54,
                "minutes": 54,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": false,
                "inMinute": 54,
                "outMinute": 90,
                "minutes": 36,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Karim El-Ahmadi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adel Taarabt",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Daniel BENNETT [SOUTH AFRICA]",
        "coach": "Hassan MOUMEN",
        "cards": [
            {
                "name": "Zakaria Zerouali",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Mehdi El-Moutaqui",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "10/10/2009|gabon",
        "date": "10/10/2009",
        "city": "Libreville",
        "stadium": "Gabon",
        "attendance": "14.000",
        "opponent": "GABON",
        "score": "1-3",
        "halfTime": "",
        "scorers": [
            {
                "name": "Adel Taarabt",
                "minute": "88",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Hicham Mahdoufi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 82,
                "minutes": 82,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Karim El-Ahmadi",
                "starter": false,
                "inMinute": 82,
                "outMinute": 90,
                "minutes": 8,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Merouane Zemmama",
                "starter": true,
                "inMinute": 0,
                "outMinute": 65,
                "minutes": 65,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": false,
                "inMinute": 65,
                "outMinute": 90,
                "minutes": 25,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Chakib Benzoukane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Mounir El-Hamdaoui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mehdi El-Moutaqui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Adel Taarabt",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Noumandiez DOUÉ [IVORY COAST]",
        "coach": "Hassan MOUMEN",
        "cards": [
            {
                "name": "Amine Erbate",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Chakib Benzoukane",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Houssine Kharja",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Youssef Safri",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Marouane Chamakh",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "06/09/2009|togo",
        "date": "06/09/2009",
        "city": "Lomé",
        "stadium": "Togo",
        "attendance": "24.651",
        "opponent": "TOGO",
        "score": "1-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Adel Taarabt",
                "minute": "90+2",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Alioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Mahdoufi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Merouane Zemmama",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 76,
                "minutes": 76,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ben Jelloun",
                "starter": false,
                "inMinute": 76,
                "outMinute": 90,
                "minutes": 14,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 87,
                "minutes": 87,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": false,
                "inMinute": 87,
                "outMinute": 90,
                "minutes": 3,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mehdi El-Moutaqui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "M'barek Boussoufa",
                "starter": true,
                "inMinute": 0,
                "outMinute": 64,
                "minutes": 64,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adel Taarabt",
                "starter": false,
                "inMinute": 64,
                "outMinute": 90,
                "minutes": 26,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Muhamed SSEGONGA [UGANDA]",
        "coach": "Hassan MOUMEN",
        "cards": [
            {
                "name": "Marouane Chamakh",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "12/08/2009|congo",
        "date": "12/08/2009",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "",
        "opponent": "CONGO",
        "score": "1-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Karim El-Ahmadi",
                "minute": "44",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mehdi Benatia",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Issah El-Adoua",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 78,
                "minutes": 78,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": false,
                "inMinute": 78,
                "outMinute": 90,
                "minutes": 12,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 68,
                "minutes": 68,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abderrahmane Kabous",
                "starter": false,
                "inMinute": 68,
                "outMinute": 90,
                "minutes": 22,
                "goals": 0,
                "cards": []
            },
            {
                "name": "M'barek Boussoufa",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Karim El-Ahmadi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Adel Taarabt",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Allaoui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mohamed BENOUZA [ALGERIA]",
        "coach": "Hassan MOUMEN",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "20/06/2009|togo",
        "date": "20/06/2009",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "22.000",
        "opponent": "TOGO",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Merouane Zemmama",
                "starter": true,
                "inMinute": 0,
                "outMinute": 87,
                "minutes": 87,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": false,
                "inMinute": 87,
                "outMinute": 90,
                "minutes": 3,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Kamel Chafni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 69,
                "minutes": 69,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdessamad Rafik",
                "starter": false,
                "inMinute": 69,
                "outMinute": 90,
                "minutes": 21,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mounir El-Hamdaoui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 62,
                "minutes": 62,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": false,
                "inMinute": 62,
                "outMinute": 90,
                "minutes": 28,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mehdi El-Moutaqui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Karim El-Ahmadi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Wellington KAOMA [ZAMBIA]",
        "coach": "Roger LEMERRE",
        "cards": [],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "07/06/2009|cameroon",
        "date": "07/06/2009",
        "city": "Yaoundé",
        "stadium": "Cameroon",
        "attendance": "35.000",
        "opponent": "CAMEROON",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Merouane Zemmana",
                "starter": true,
                "inMinute": 0,
                "outMinute": 62,
                "minutes": 62,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdessamad Rafik",
                "starter": false,
                "inMinute": 62,
                "outMinute": 90,
                "minutes": 28,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 85,
                "minutes": 85,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": false,
                "inMinute": 85,
                "outMinute": 90,
                "minutes": 5,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Kamel Chafni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mounir El-Hamdaoui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mehdi El-Moutaqui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Karim El-Ahmadi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 70,
                "minutes": 70,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Younes Mankari",
                "starter": false,
                "inMinute": 70,
                "outMinute": 90,
                "minutes": 20,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Seechurn RAJINDRAPARSAD [MAURITIUS]",
        "coach": "Roger LEMERRE",
        "cards": [],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "31/03/2009|angola",
        "date": "31/03/2009",
        "city": "Lisbon",
        "stadium": "Portugal",
        "attendance": "2.500",
        "opponent": "ANGOLA",
        "score": "2-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Adel Taarabt",
                "minute": "9",
                "penalty": false
            },
            {
                "name": "Marouane Chamakh",
                "minute": "50",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Karim Fegrouch",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hassan El-Mouataz",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mehdi Benatia",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Merouane Zemmama",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Chemcedine El-Araichi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 69,
                "minutes": 69,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Dirar",
                "starter": false,
                "inMinute": 69,
                "outMinute": 90,
                "minutes": 21,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Kamel Chafni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 76,
                "minutes": 76,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": false,
                "inMinute": 76,
                "outMinute": 90,
                "minutes": 14,
                "goals": 0,
                "cards": []
            },
            {
                "name": "M'barek Boussoufa",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Karim El-Ahmadi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 63,
                "minutes": 63,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": false,
                "inMinute": 63,
                "outMinute": 90,
                "minutes": 27,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adel Taarabt",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Lucilio BAPTISTA [PORTUGAL]",
        "coach": "Roger LEMERRE",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "28/03/2009|gabon",
        "date": "28/03/2009",
        "city": "Casablanca",
        "stadium": "Morocco",
        "attendance": "38.000",
        "opponent": "GABON",
        "score": "1-2",
        "halfTime": "",
        "scorers": [
            {
                "name": "Mounir El-Hamdaoui",
                "minute": "84",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Karim Zaza",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Chemcedine El-Araichi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mounir El-Hamdaoui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 61,
                "minutes": 61,
                "goals": 0,
                "cards": []
            },
            {
                "name": "M'barek Boussoufa",
                "starter": false,
                "inMinute": 61,
                "outMinute": 90,
                "minutes": 29,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Dirar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 56,
                "minutes": 56,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adel Taarabt",
                "starter": false,
                "inMinute": 56,
                "outMinute": 90,
                "minutes": 34,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Badara DIATTA [SENEGAL]",
        "coach": "Roger LEMERRE",
        "cards": [
            {
                "name": "Youssef Safri",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "11/02/2009|czechrepublic",
        "date": "11/02/2009",
        "city": "Casablanca",
        "stadium": "Morocco",
        "attendance": "38.000",
        "opponent": "CZECH REPUBLIC",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Karim Zaza",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mounir El-Hamdaoui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 65,
                "minutes": 65,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Karim El-Ahmadi",
                "starter": false,
                "inMinute": 65,
                "outMinute": 90,
                "minutes": 25,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": true,
                "inMinute": 0,
                "outMinute": 65,
                "minutes": 65,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adel Taarabt",
                "starter": false,
                "inMinute": 65,
                "outMinute": 90,
                "minutes": 25,
                "goals": 0,
                "cards": []
            },
            {
                "name": "M'barek Boussoufa",
                "starter": true,
                "inMinute": 0,
                "outMinute": 81,
                "minutes": 81,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": false,
                "inMinute": 81,
                "outMinute": 90,
                "minutes": 9,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Dirar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Makram LAKRAM [TUNISIA]. 2008",
        "coach": "Roger LEMERRE",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "19/11/2008|zambia",
        "date": "19/11/2008",
        "city": "Casablanca",
        "stadium": "Morocco",
        "attendance": "",
        "opponent": "ZAMBIA",
        "score": "3-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Houssine Kharja",
                "minute": "2",
                "penalty": false
            },
            {
                "name": "Tarik Sektioui",
                "minute": "24",
                "penalty": true
            },
            {
                "name": "Nabil Baha",
                "minute": "63",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Karim Zaza",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 58,
                "minutes": 58,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef El-Akchaoui",
                "starter": false,
                "inMinute": 58,
                "outMinute": 90,
                "minutes": 32,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Yacine Abdessadki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 67,
                "minutes": 67,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Serraj",
                "starter": false,
                "inMinute": 67,
                "outMinute": 90,
                "minutes": 23,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Rabeh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 66,
                "minutes": 66,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mehdi Benatia",
                "starter": false,
                "inMinute": 66,
                "outMinute": 90,
                "minutes": 24,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 86,
                "minutes": 86,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Issam Erraki",
                "starter": false,
                "inMinute": 86,
                "outMinute": 90,
                "minutes": 4,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Merouane Zemmama",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Nabil Dirar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 65,
                "minutes": 65,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Karim El-Ahmadi",
                "starter": false,
                "inMinute": 65,
                "outMinute": 90,
                "minutes": 25,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Walid ATTAOUNI [LIBYA]",
        "coach": "Roger LEMERRE",
        "cards": [
            {
                "name": "Youssef Hadji",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "11/10/2008|mauritania",
        "date": "11/10/2008",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "1.472",
        "opponent": "MAURITANIA",
        "score": "4-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Safri",
                "minute": "35",
                "penalty": false
            },
            {
                "name": "Youssef Hadji",
                "minute": "55",
                "penalty": false
            },
            {
                "name": "Youssef Hadji",
                "minute": "60",
                "penalty": false
            },
            {
                "name": "Merouane Zemmama",
                "minute": "65",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 71,
                "minutes": 71,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Rabeh",
                "starter": false,
                "inMinute": 71,
                "outMinute": 90,
                "minutes": 19,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Sbai",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 65,
                "minutes": 65,
                "goals": 2,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Merouane Zemmama",
                "starter": false,
                "inMinute": 65,
                "outMinute": 90,
                "minutes": 25,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Dirar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil El-Zhar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 79,
                "minutes": 79,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Moncef Zerka",
                "starter": false,
                "inMinute": 79,
                "outMinute": 90,
                "minutes": 11,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Sharaf ABUBAKAR [IVORY COAST]",
        "coach": "Roger LEMERRE",
        "cards": [
            {
                "name": "Amine Erbate",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Youssef Hadji",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "06/09/2008|oman",
        "date": "06/09/2008",
        "city": "Muscat",
        "stadium": "Oman",
        "attendance": "",
        "opponent": "OMAN",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 79,
                "minutes": 79,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Tourabi",
                "starter": false,
                "inMinute": 79,
                "outMinute": 90,
                "minutes": 11,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 72,
                "minutes": 72,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Ainy",
                "starter": false,
                "inMinute": 72,
                "outMinute": 90,
                "minutes": 18,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abderrahman Kabous",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Hermach",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Moncef Zerka",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 66,
                "minutes": 66,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ben Jelloun",
                "starter": false,
                "inMinute": 66,
                "outMinute": 90,
                "minutes": 24,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "N/A",
        "coach": "Roger LEMERRE",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "20/08/2008|benin",
        "date": "20/08/2008",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "4.000",
        "opponent": "BENIN",
        "score": "3-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Houssine Kharja",
                "minute": "24",
                "penalty": false
            },
            {
                "name": "Youssef Safri",
                "minute": "54",
                "penalty": true
            },
            {
                "name": "Moncef Zerka",
                "minute": "78",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Karim Fegrouch",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 55,
                "minutes": 55,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef El-Akchaoui",
                "starter": false,
                "inMinute": 55,
                "outMinute": 90,
                "minutes": 35,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 86,
                "minutes": 86,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Sofian Ben Zouien",
                "starter": false,
                "inMinute": 86,
                "outMinute": 90,
                "minutes": 4,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji 52']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 65,
                "minutes": 65,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Abderrahman Kabous",
                "starter": false,
                "inMinute": 65,
                "outMinute": 90,
                "minutes": 25,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Moncef Zerka",
                "starter": true,
                "inMinute": 0,
                "outMinute": 85,
                "minutes": 85,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Abdeslam Ben Jelloun",
                "starter": false,
                "inMinute": 85,
                "outMinute": 90,
                "minutes": 5,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil El-Zhar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 66,
                "minutes": 66,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Kamel Chafni",
                "starter": false,
                "inMinute": 66,
                "outMinute": 90,
                "minutes": 24,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Djamel HAIMOUDI [ALGERIA]",
        "coach": "Roger LEMERRE",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "21/06/2008|rwanda",
        "date": "21/06/2008",
        "city": "Casablanca",
        "stadium": "Morocco",
        "attendance": "2.500",
        "opponent": "RWANDA",
        "score": "2-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Safri",
                "minute": "12",
                "penalty": true
            },
            {
                "name": "Nabil El-Zhar",
                "minute": "49",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Ahmed Ajeddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 72,
                "minutes": 72,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Madihi",
                "starter": false,
                "inMinute": 72,
                "outMinute": 90,
                "minutes": 18,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Ainy",
                "starter": true,
                "inMinute": 0,
                "outMinute": 89,
                "minutes": 89,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Hermach",
                "starter": false,
                "inMinute": 89,
                "outMinute": 90,
                "minutes": 1,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ben Jelloun",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil El-Zhar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Mohamed BENOUZA [ALGERIA]",
        "coach": "Roger LEMERRE",
        "cards": [
            {
                "name": "Badr El-Kaddouri",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "14/06/2008|rwanda",
        "date": "14/06/2008",
        "city": "Kigali",
        "stadium": "Rwanda",
        "attendance": "12.000",
        "opponent": "RWANDA",
        "score": "1-3",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Safri",
                "minute": "78",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 57,
                "minutes": 57,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": false,
                "inMinute": 57,
                "outMinute": 90,
                "minutes": 33,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Younes Mankari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Mohamed Oulhaj",
                "starter": true,
                "inMinute": 0,
                "outMinute": 36,
                "minutes": 36,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": false,
                "inMinute": 36,
                "outMinute": 90,
                "minutes": 54,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Soufiane Alloudi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "R",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Mourad Ainy",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ben Jelloun",
                "starter": true,
                "inMinute": 0,
                "outMinute": 83,
                "minutes": 83,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Brahim El-Bahri",
                "starter": false,
                "inMinute": 83,
                "outMinute": 90,
                "minutes": 7,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Nabil El-Zhar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            }
        ],
        "referee": "Raphael EVEHE [CAMEROON]",
        "coach": "Roger LEMERRE",
        "cards": [
            {
                "name": "Younes Mankari",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Soufiane Alloudi",
                "type": "R",
                "minute": ""
            },
            {
                "name": "Nabil El-Zhar",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "07/06/2008|mauritania",
        "date": "07/06/2008",
        "city": "Nouakchott",
        "stadium": "Mauritania",
        "attendance": "9.500",
        "opponent": "MAURITANIA",
        "score": "4-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Tarik Sektioui",
                "minute": "9",
                "penalty": false
            },
            {
                "name": "Abdeslam Ben Jelloun",
                "minute": "37",
                "penalty": false
            },
            {
                "name": "Youssef Safri",
                "minute": "58",
                "penalty": false
            },
            {
                "name": "Houssine Kharja",
                "minute": "79",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Younes Mankari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Soufiane Alloudi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Mourad Ainy",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ben Jelloun 81']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Tarik Sektioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 21,
                "minutes": 21,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Nabil El-Zhar",
                "starter": false,
                "inMinute": 21,
                "outMinute": 90,
                "minutes": 69,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 78,
                "minutes": 78,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Hamdani",
                "starter": false,
                "inMinute": 78,
                "outMinute": 90,
                "minutes": 12,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ben Jelloun",
                "starter": false,
                "inMinute": 0,
                "outMinute": 0,
                "minutes": 0,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Joseph LAMPTEY [GHANA]",
        "coach": "Roger LEMERRE",
        "cards": [
            {
                "name": "Michael Basser",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Soufiane Alloudi",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Youssef Safri",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "31/05/2008|ethiopia",
        "date": "31/05/2008",
        "city": "Casablanca",
        "stadium": "Morocco",
        "attendance": "5.000",
        "opponent": "ETHIOPIA",
        "score": "3-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Abdeslam Ben Jelloun",
                "minute": "4",
                "penalty": false
            },
            {
                "name": "Hicham Aboucharouane",
                "minute": "13",
                "penalty": false
            },
            {
                "name": "Houssine Kharja",
                "minute": "85",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Soufiane Alloudi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Ainy",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ben Jelloun",
                "starter": true,
                "inMinute": 0,
                "outMinute": 89,
                "minutes": 89,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Rachid Hamdani",
                "starter": false,
                "inMinute": 89,
                "outMinute": 90,
                "minutes": 1,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Nabil El-Zhar 63']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Badara DIATTA [SENEGAL]",
        "coach": "Roger LEMERRE",
        "cards": [],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "26/03/2008|belgium",
        "date": "26/03/2008",
        "city": "Brussels",
        "stadium": "Belgium",
        "attendance": "15.000",
        "opponent": "BELGIUM",
        "score": "4-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Soufiane Alloudi",
                "minute": "14",
                "penalty": false
            },
            {
                "name": "Tarik Sektioui",
                "minute": "34",
                "penalty": false
            },
            {
                "name": "Nabil El-Zhar",
                "minute": "85",
                "penalty": false
            },
            {
                "name": "Abdeslam Ben Jelloun",
                "minute": "89",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil El-Zhar",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Soufiane Alloudi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 87,
                "minutes": 87,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": false,
                "inMinute": 87,
                "outMinute": 90,
                "minutes": 3,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Ainy",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 60,
                "minutes": 60,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Hermach",
                "starter": false,
                "inMinute": 60,
                "outMinute": 90,
                "minutes": 30,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 38,
                "minutes": 38,
                "goals": 1,
                "cards": []
            },
            {
                "name": "M'barek Boussoufa",
                "starter": false,
                "inMinute": 38,
                "outMinute": 90,
                "minutes": 52,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 88,
                "minutes": 88,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ben Jelloun",
                "starter": false,
                "inMinute": 88,
                "outMinute": 90,
                "minutes": 2,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Bas NIJHUIS [NETHERLANDS]",
        "coach": "Roger LEMERRE",
        "cards": [
            {
                "name": "Amine Erbate",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "28/01/2008|ghana",
        "date": "28/01/2008",
        "city": "Accra",
        "stadium": "Ghana",
        "attendance": "40.000",
        "opponent": "GHANA",
        "score": "0-2",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abderrahmane Kabous",
                "starter": true,
                "inMinute": 0,
                "outMinute": 89,
                "minutes": 89,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": false,
                "inMinute": 89,
                "outMinute": 90,
                "minutes": 1,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 55,
                "minutes": 55,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Moncef Zerka",
                "starter": false,
                "inMinute": 55,
                "outMinute": 90,
                "minutes": 35,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Modou SOWE [GAMBIA]",
        "coach": "Henri MICHEL",
        "cards": [
            {
                "name": "Amine Erbate",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP ROUND ONE"
    },
    {
        "key": "24/01/2008|guinea",
        "date": "24/01/2008",
        "city": "Accra",
        "stadium": "Ghana",
        "attendance": "15.000",
        "opponent": "GUINEA",
        "score": "2-3",
        "halfTime": "",
        "scorers": [
            {
                "name": "Hicham Aboucharouane",
                "minute": "60",
                "penalty": false
            },
            {
                "name": "Abdeslam Ouaddou",
                "minute": "90",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 55,
                "minutes": 55,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": false,
                "inMinute": 55,
                "outMinute": 90,
                "minutes": 35,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Tarik Sektioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 67,
                "minutes": 67,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": false,
                "inMinute": 67,
                "outMinute": 90,
                "minutes": 23,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Moncef Zerka",
                "starter": true,
                "inMinute": 0,
                "outMinute": 80,
                "minutes": 80,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": false,
                "inMinute": 80,
                "outMinute": 90,
                "minutes": 10,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Jerome DAMON [SOUTH AFRICA]",
        "coach": "Henri MICHEL",
        "cards": [
            {
                "name": "Youssef Safri",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP ROUND ONE"
    },
    {
        "key": "21/01/2008|namibia",
        "date": "21/01/2008",
        "city": "Accra",
        "stadium": "Ghana",
        "attendance": "1.000",
        "opponent": "NAMIBIA",
        "score": "5-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Soufiane Alloudi",
                "minute": "2",
                "penalty": false
            },
            {
                "name": "Soufiane Alloudi",
                "minute": "5",
                "penalty": false
            },
            {
                "name": "Soufiane Alloudi",
                "minute": "28",
                "penalty": false
            },
            {
                "name": "Tarik Sektioui",
                "minute": "39",
                "penalty": true
            },
            {
                "name": "Moncef Zerka",
                "minute": "73",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 69,
                "minutes": 69,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Moncef Zerka",
                "starter": false,
                "inMinute": 69,
                "outMinute": 90,
                "minutes": 21,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Soufiane Alloudi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 61,
                "minutes": 61,
                "goals": 3,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": false,
                "inMinute": 61,
                "outMinute": 90,
                "minutes": 29,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abderrahmane Kabous",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 66,
                "minutes": 66,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": false,
                "inMinute": 66,
                "outMinute": 90,
                "minutes": 24,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Raphael EVEHE [CAMEROON]",
        "coach": "Henri MICHEL",
        "cards": [
            {
                "name": "Badr El-Kaddouri",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP ROUND ONE"
    },
    {
        "key": "16/01/2008|angola",
        "date": "16/01/2008",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "25.000",
        "opponent": "ANGOLA",
        "score": "2-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Marouane Chamakh",
                "minute": "45",
                "penalty": false
            },
            {
                "name": "Hicham Aboucharouane",
                "minute": "52",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Amine Erbate 45']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Alioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdessamad Chahiri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 79,
                "minutes": 79,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": false,
                "inMinute": 79,
                "outMinute": 90,
                "minutes": 11,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 70,
                "minutes": 70,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abderrahmane Kabous",
                "starter": false,
                "inMinute": 70,
                "outMinute": 90,
                "minutes": 20,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Soufiane Alloudi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 70,
                "minutes": 70,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": false,
                "inMinute": 70,
                "outMinute": 90,
                "minutes": 20,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mohamed AZZELLAOUI [LIBYA]",
        "coach": "Henri MICHEL",
        "cards": [
            {
                "name": "Badr El-Kaddouri",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Hicham Aboucharouane",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "12/01/2008|zambia",
        "date": "12/01/2008",
        "city": "Fes",
        "stadium": "Morocco",
        "attendance": "45.000",
        "opponent": "ZAMBIA",
        "score": "2-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Tarik Sektioui",
                "minute": "51",
                "penalty": true
            },
            {
                "name": "Soufiane Alloudi",
                "minute": "60",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelilah Bagui",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Mahdoufi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Soufiane Alloudi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 60,
                "minutes": 60,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": false,
                "inMinute": 60,
                "outMinute": 90,
                "minutes": 30,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abderrahmane Kabous",
                "starter": true,
                "inMinute": 0,
                "outMinute": 71,
                "minutes": 71,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": false,
                "inMinute": 71,
                "outMinute": 90,
                "minutes": 19,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Moncef Zerka",
                "starter": true,
                "inMinute": 0,
                "outMinute": 61,
                "minutes": 61,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": false,
                "inMinute": 61,
                "outMinute": 90,
                "minutes": 29,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "N/A. 2007",
        "coach": "Henri MICHEL",
        "cards": [
            {
                "name": "Houssine Kharja",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "21/11/2007|senegal",
        "date": "21/11/2007",
        "city": "Créteil",
        "stadium": "France",
        "attendance": "",
        "opponent": "SENEGAL",
        "score": "3-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Hicham Aboucharouane",
                "minute": "36",
                "penalty": false
            },
            {
                "name": "Youssef Mokhtari",
                "minute": "66",
                "penalty": false
            },
            {
                "name": "Soufiane Alloudi",
                "minute": "75",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Tarik Jarmouni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Alioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Mahdoufi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 73,
                "minutes": 73,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": false,
                "inMinute": 73,
                "outMinute": 90,
                "minutes": 17,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdessamad Chahiri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abderrahmane Kabous",
                "starter": true,
                "inMinute": 0,
                "outMinute": 54,
                "minutes": 54,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": false,
                "inMinute": 54,
                "outMinute": 90,
                "minutes": 36,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Moncef Zerka 45']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 82,
                "minutes": 82,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Yacine Abdessadki",
                "starter": false,
                "inMinute": 82,
                "outMinute": 90,
                "minutes": 8,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Soufiane Alloudi",
                "starter": false,
                "inMinute": 0,
                "outMinute": 0,
                "minutes": 0,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Benoit MILLOT [FRANCE]",
        "coach": "Henri MICHEL",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "16/11/2007|france",
        "date": "16/11/2007",
        "city": "St. Denis",
        "stadium": "France",
        "attendance": "78.000",
        "opponent": "FRANCE",
        "score": "2-2",
        "halfTime": "",
        "scorers": [
            {
                "name": "Tarik Sektioui",
                "minute": "9",
                "penalty": false
            },
            {
                "name": "Youssef Mokhtari",
                "minute": "85",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abderrahmane Kabous",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Boukhari",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 83,
                "minutes": 83,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": false,
                "inMinute": 83,
                "outMinute": 90,
                "minutes": 7,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 74,
                "minutes": 74,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": false,
                "inMinute": 74,
                "outMinute": 90,
                "minutes": 16,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 66,
                "minutes": 66,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Soufiane Alloudi",
                "starter": false,
                "inMinute": 66,
                "outMinute": 90,
                "minutes": 24,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Ruud BOSSEN [NETHERLANDS]",
        "coach": "Henri MICHEL",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "17/10/2007|namibia",
        "date": "17/10/2007",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "3.000",
        "opponent": "NAMIBIA",
        "score": "2-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Soufiane Alloudi",
                "minute": "71",
                "penalty": false
            },
            {
                "name": "Talal El-Karkouri",
                "minute": "90",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 68,
                "minutes": 68,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Alioui",
                "starter": false,
                "inMinute": 68,
                "outMinute": 90,
                "minutes": 22,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Noureddine Boukhari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 59,
                "minutes": 59,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": false,
                "inMinute": 59,
                "outMinute": 90,
                "minutes": 31,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 85,
                "minutes": 85,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": false,
                "inMinute": 85,
                "outMinute": 90,
                "minutes": 5,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 67,
                "minutes": 67,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Soufiane Alloudi",
                "starter": false,
                "inMinute": 67,
                "outMinute": 90,
                "minutes": 23,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 77,
                "minutes": 77,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": false,
                "inMinute": 77,
                "outMinute": 90,
                "minutes": 13,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": true,
                "inMinute": 0,
                "outMinute": 70,
                "minutes": 70,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": false,
                "inMinute": 70,
                "outMinute": 90,
                "minutes": 20,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Yasser SAADALLAH [TUNISIA]",
        "coach": "Henri MICHEL",
        "cards": [
            {
                "name": "Youssef Safri",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "08/09/2007|ghana",
        "date": "08/09/2007",
        "city": "Rouen",
        "stadium": "France",
        "attendance": "3.000",
        "opponent": "GHANA",
        "score": "0-2",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Alioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 69,
                "minutes": 69,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": false,
                "inMinute": 69,
                "outMinute": 90,
                "minutes": 21,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 82,
                "minutes": 82,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Soufiane Alloudi",
                "starter": false,
                "inMinute": 82,
                "outMinute": 90,
                "minutes": 8,
                "goals": 0,
                "cards": []
            },
            {
                "name": "M'barek Boussoufa",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Yacine Abdessadki",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Laurent DUHAMEL [FRANCE]",
        "coach": "Henri MICHEL",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "16/06/2007|malawi",
        "date": "16/06/2007",
        "city": "Blantyre",
        "stadium": "Malawi",
        "attendance": "30.000",
        "opponent": "MALAWI",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Bouchaib El-Moubarki",
                "minute": "9",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Tarik Jarmouni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Aziz Ben Askar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Mahdoufi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Soufiane Alloudi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 82,
                "minutes": 82,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Amine Erbate",
                "starter": false,
                "inMinute": 82,
                "outMinute": 90,
                "minutes": 8,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 80,
                "minutes": 80,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": false,
                "inMinute": 80,
                "outMinute": 90,
                "minutes": 10,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Eddy MAILLET [SEYCHELLES]",
        "coach": "Mohamed FAKHIR",
        "cards": [
            {
                "name": "Abdelkrim Kaissi",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Soufiane Alloudi",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "02/06/2007|zimbabwe",
        "date": "02/06/2007",
        "city": "Casablanca",
        "stadium": "Morocco",
        "attendance": "35.000",
        "opponent": "ZIMBABWE",
        "score": "2-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Marouane Chamakh",
                "minute": "3",
                "penalty": false
            },
            {
                "name": "Youssef Hadji",
                "minute": "26",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Tarik Jarmouni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Aziz Ben Askar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Mahdoufi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 88,
                "minutes": 88,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": false,
                "inMinute": 88,
                "outMinute": 90,
                "minutes": 2,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Soufiane Alloudi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamkh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 70,
                "minutes": 70,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": false,
                "inMinute": 70,
                "outMinute": 90,
                "minutes": 20,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 68,
                "minutes": 68,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": false,
                "inMinute": 68,
                "outMinute": 90,
                "minutes": 22,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": false,
                "inMinute": 0,
                "outMinute": 0,
                "minutes": 0,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Mourad DAAMI [TUNISIA]",
        "coach": "Mohamed FAKHIR",
        "cards": [
            {
                "name": "Houssine Kharja",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "25/03/2007|zimbabwe",
        "date": "25/03/2007",
        "city": "Harare",
        "stadium": "Zimbabwe",
        "attendance": "40.000",
        "opponent": "ZIMBABWE",
        "score": "1-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Hadji",
                "minute": "7",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Tarik Jarmouni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 17,
                "minutes": 17,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": false,
                "inMinute": 17,
                "outMinute": 90,
                "minutes": 73,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Fallah",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Aziz Ben Askar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Boukhari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Otman El-Assas",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 55,
                "minutes": 55,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": false,
                "inMinute": 55,
                "outMinute": 90,
                "minutes": 35,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 85,
                "minutes": 85,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Ouadouch",
                "starter": false,
                "inMinute": 85,
                "outMinute": 90,
                "minutes": 5,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Jerome DAMON [SOUTH AFRICA]",
        "coach": "Mohamed FAKHIR",
        "cards": [
            {
                "name": "Tarik Jarmouni",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Mourad Fallah",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "07/02/2007|tunisia",
        "date": "07/02/2007",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "",
        "opponent": "TUNISIA",
        "score": "1-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Marouane Chamakh",
                "minute": "29",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Tarik Jarmouni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Aziz Ben Askar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Mahdoufi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 65,
                "minutes": 65,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Yacine Abdessadki",
                "starter": false,
                "inMinute": 65,
                "outMinute": 90,
                "minutes": 25,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 80,
                "minutes": 80,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Ouadouch",
                "starter": false,
                "inMinute": 80,
                "outMinute": 90,
                "minutes": 10,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Otman El-Assas",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 85,
                "minutes": 85,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Zakaria Aboub",
                "starter": false,
                "inMinute": 85,
                "outMinute": 90,
                "minutes": 5,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "M'barek Boussoufa",
                "starter": true,
                "inMinute": 0,
                "outMinute": 70,
                "minutes": 70,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": false,
                "inMinute": 70,
                "outMinute": 90,
                "minutes": 20,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Omar FAHIM [EGYPT]. 2006",
        "coach": "Mohamed FAKHIR",
        "cards": [
            {
                "name": "Amine Erbate",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "15/11/2006|gabon",
        "date": "15/11/2006",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "5.000",
        "opponent": "GABON",
        "score": "6-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Bouchaib El-Moubarki",
                "minute": "40",
                "penalty": false
            },
            {
                "name": "Bouchaib El-Moubarki",
                "minute": "64",
                "penalty": false
            },
            {
                "name": "Jaouad Ouadouch",
                "minute": "61",
                "penalty": false
            },
            {
                "name": "Noureddine Boukhari",
                "minute": "68",
                "penalty": false
            },
            {
                "name": "Hicham Mahdoufi",
                "minute": "71",
                "penalty": false
            },
            {
                "name": "Hassan Souari",
                "minute": "85",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Tarik Jarmouni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 80,
                "minutes": 80,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Anouar Diba",
                "starter": false,
                "inMinute": 80,
                "outMinute": 90,
                "minutes": 10,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Aziz Ben Askar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Michael Basser",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Mahdoufi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Zakaria Aboub",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Faouzi El-Brazi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Moncef Zerka",
                "starter": true,
                "inMinute": 0,
                "outMinute": 54,
                "minutes": 54,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Ouadouch",
                "starter": false,
                "inMinute": 54,
                "outMinute": 90,
                "minutes": 36,
                "goals": 1,
                "cards": []
            },
            {
                "name": "M'barek Boussoufa",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Boukhari",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 69,
                "minutes": 69,
                "goals": 2,
                "cards": []
            },
            {
                "name": "Hassan Souari",
                "starter": false,
                "inMinute": 69,
                "outMinute": 90,
                "minutes": 21,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Ousmane SIDIBÉ [MALI]",
        "coach": "Mohamed FAKHIR",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "03/09/2006|malawi",
        "date": "03/09/2006",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "15.000",
        "opponent": "MALAWI",
        "score": "2-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Marouane Chamakh",
                "minute": "53",
                "penalty": false
            },
            {
                "name": "M'barek Boussoufa",
                "minute": "75",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Tarik Jarmouni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Aziz Ben Askar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Mahdoufi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Zakaria Aboub",
                "starter": true,
                "inMinute": 0,
                "outMinute": 70,
                "minutes": 70,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": false,
                "inMinute": 70,
                "outMinute": 90,
                "minutes": 20,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 79,
                "minutes": 79,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": false,
                "inMinute": 79,
                "outMinute": 90,
                "minutes": 11,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Boukhari",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "M'barek Boussoufa",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Coffi CODJIA [BENIN]",
        "coach": "Mohamed FAKHIR",
        "cards": [
            {
                "name": "Oualid Regragui",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "16/08/2006|burkinafaso",
        "date": "16/08/2006",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "",
        "opponent": "BURKINA FASO",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Hadji",
                "minute": "44",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Tarik Jarmouni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Aziz Ben Askar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Mahdoufi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Zakaria Aboub",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Soufiane Alloudi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "M'barek Boussoufa",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "N/A",
        "coach": "Mohamed FAKHIR",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "04/06/2006|colombia",
        "date": "04/06/2006",
        "city": "Barcelona",
        "stadium": "Spain",
        "attendance": "10.500",
        "opponent": "COLOMBIA",
        "score": "0-2",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Tarik Jarmouni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 88,
                "minutes": 88,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Fallah",
                "starter": false,
                "inMinute": 88,
                "outMinute": 90,
                "minutes": 2,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Aziz Ben Askar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Mahdoufi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 30,
                "minutes": 30,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Mesloub",
                "starter": false,
                "inMinute": 30,
                "outMinute": 90,
                "minutes": 60,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Zakaria Aboub",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Soufiane Alloudi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Louissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 83,
                "minutes": 83,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hassane Alla",
                "starter": false,
                "inMinute": 83,
                "outMinute": 90,
                "minutes": 7,
                "goals": 0,
                "cards": []
            },
            {
                "name": "M'barek Boussoufa",
                "starter": true,
                "inMinute": 0,
                "outMinute": 62,
                "minutes": 62,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Madihi",
                "starter": false,
                "inMinute": 62,
                "outMinute": 90,
                "minutes": 28,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 65,
                "minutes": 65,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jawad El-Hajri",
                "starter": false,
                "inMinute": 65,
                "outMinute": 90,
                "minutes": 25,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Ricardo GARCÍA [SPAIN]",
        "coach": "Mohamed FAKHIR",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "28/05/2006|mali",
        "date": "28/05/2006",
        "city": "Colombes",
        "stadium": "France",
        "attendance": "1.500",
        "opponent": "MALI",
        "score": "0-1",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 75,
                "minutes": 75,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hassane Alla",
                "starter": false,
                "inMinute": 75,
                "outMinute": 90,
                "minutes": 15,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Aziz Ben Askar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Mahdoufi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Zakaria Aboub",
                "starter": true,
                "inMinute": 0,
                "outMinute": 86,
                "minutes": 86,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mounir Diane",
                "starter": false,
                "inMinute": 86,
                "outMinute": 90,
                "minutes": 4,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Madihi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hassan Souari",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Mesloub",
                "starter": true,
                "inMinute": 0,
                "outMinute": 59,
                "minutes": 59,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": false,
                "inMinute": 59,
                "outMinute": 90,
                "minutes": 31,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 69,
                "minutes": 69,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Ahmed Ajeddou",
                "starter": false,
                "inMinute": 69,
                "outMinute": 90,
                "minutes": 21,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Armoumen",
                "starter": true,
                "inMinute": 0,
                "outMinute": 59,
                "minutes": 59,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": false,
                "inMinute": 59,
                "outMinute": 90,
                "minutes": 31,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Pascal GARIBIAN [FRANCE]",
        "coach": "Mohamed FAKHIR",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "23/05/2006|unitedstates",
        "date": "23/05/2006",
        "city": "Nashville",
        "stadium": "United States",
        "attendance": "26.141",
        "opponent": "UNITED STATES",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Mohamed Madihi",
                "minute": "90",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Tarik Jarmouni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 76,
                "minutes": 76,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Ahmed Ajeddou",
                "starter": false,
                "inMinute": 76,
                "outMinute": 90,
                "minutes": 14,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Aziz Ben Askar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Mahdoufi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Zakaria Aboub",
                "starter": true,
                "inMinute": 0,
                "outMinute": 87,
                "minutes": 87,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hassane Alla",
                "starter": false,
                "inMinute": 87,
                "outMinute": 90,
                "minutes": 3,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Soufiane Alloudi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 60,
                "minutes": 60,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Nabil Mesloub",
                "starter": false,
                "inMinute": 60,
                "outMinute": 90,
                "minutes": 30,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 61,
                "minutes": 61,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Madihi",
                "starter": false,
                "inMinute": 61,
                "outMinute": 90,
                "minutes": 29,
                "goals": 1,
                "cards": []
            },
            {
                "name": "M'barek Boussoufa",
                "starter": true,
                "inMinute": 0,
                "outMinute": 70,
                "minutes": 70,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": false,
                "inMinute": 70,
                "outMinute": 90,
                "minutes": 20,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mauricio NAVARRO [CANADA]",
        "coach": "Mohamed FAKHIR",
        "cards": [
            {
                "name": "Abdeslam Ouaddou",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Hicham Mahdoufi",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Adil Ramzi",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "28/01/2006|libya",
        "date": "28/01/2006",
        "city": "Cairo",
        "stadium": "Egypt",
        "attendance": "5.000",
        "opponent": "LIBYA",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Tarik Jarmouni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 86,
                "minutes": 86,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": false,
                "inMinute": 86,
                "outMinute": 90,
                "minutes": 4,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane 58']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 73,
                "minutes": 73,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Madihi",
                "starter": false,
                "inMinute": 73,
                "outMinute": 90,
                "minutes": 17,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mourad DAAMI [TUNISIA]",
        "coach": "Mohamed FAKHIR",
        "cards": [],
        "source": "NATIONS CUP ROUND ONE"
    },
    {
        "key": "24/01/2006|egypt",
        "date": "24/01/2006",
        "city": "Cairo",
        "stadium": "Egypt",
        "attendance": "75.000",
        "opponent": "EGYPT",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Tarik Jarmouni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 75,
                "minutes": 75,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": false,
                "inMinute": 75,
                "outMinute": 90,
                "minutes": 15,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji 65']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 84,
                "minutes": 84,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": false,
                "inMinute": 84,
                "outMinute": 90,
                "minutes": 6,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            }
        ],
        "referee": "Coffi CODJIA [BENIN]",
        "coach": "Mohamed FAKHIR",
        "cards": [
            {
                "name": "Mohamed El-Yaacoubi",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP ROUND ONE"
    },
    {
        "key": "21/01/2006|ivorycoast",
        "date": "21/01/2006",
        "city": "Cairo",
        "stadium": "Egypt",
        "attendance": "8.000",
        "opponent": "IVORY COAST",
        "score": "0-1",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Tarik Jarmouni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 83,
                "minutes": 83,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelali Boussaboun",
                "starter": false,
                "inMinute": 83,
                "outMinute": 90,
                "minutes": 7,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 85,
                "minutes": 85,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": false,
                "inMinute": 85,
                "outMinute": 90,
                "minutes": 5,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Jerome DAMON [SOUTH AFRICA]",
        "coach": "Mohamed FAKHIR",
        "cards": [],
        "source": "NATIONS CUP ROUND ONE"
    },
    {
        "key": "17/01/2006|angola",
        "date": "17/01/2006",
        "city": "Marrakech",
        "stadium": "Morocco",
        "attendance": "5.000",
        "opponent": "ANGOLA",
        "score": "2-2",
        "halfTime": "",
        "scorers": [
            {
                "name": "Marouane Chamakh",
                "minute": "5",
                "penalty": false
            },
            {
                "name": "Youssef Hadji",
                "minute": "7",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Tarik Jarmouni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 66,
                "minutes": 66,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": false,
                "inMinute": 66,
                "outMinute": 90,
                "minutes": 24,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 60,
                "minutes": 60,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Oussaleh",
                "starter": false,
                "inMinute": 60,
                "outMinute": 90,
                "minutes": 30,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 67,
                "minutes": 67,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hafid Abdessadek",
                "starter": false,
                "inMinute": 67,
                "outMinute": 90,
                "minutes": 23,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 47,
                "minutes": 47,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Mohamed Madihi",
                "starter": false,
                "inMinute": 47,
                "outMinute": 90,
                "minutes": 43,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 79,
                "minutes": 79,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Mohamed Armoumen",
                "starter": false,
                "inMinute": 79,
                "outMinute": 90,
                "minutes": 11,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 83,
                "minutes": 83,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Mahdoufi",
                "starter": false,
                "inMinute": 83,
                "outMinute": 90,
                "minutes": 7,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelali Boussaboun",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mohcine BOUKHTIR [TUNISIA]",
        "coach": "Mohamed FAKHIR",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "14/01/2006|zimbabwe",
        "date": "14/01/2006",
        "city": "Marrakech",
        "stadium": "Morocco",
        "attendance": "2.000",
        "opponent": "ZIMBABWE",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Mohamed Armoumen",
                "minute": "89",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 72,
                "minutes": 72,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Hicham Mahdoufi",
                "starter": false,
                "inMinute": 72,
                "outMinute": 90,
                "minutes": 18,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 13,
                "minutes": 13,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": false,
                "inMinute": 13,
                "outMinute": 90,
                "minutes": 77,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "R",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 84,
                "minutes": 84,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hafid Abdessadek",
                "starter": false,
                "inMinute": 84,
                "outMinute": 90,
                "minutes": 6,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 65,
                "minutes": 65,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelali Boussaboun",
                "starter": false,
                "inMinute": 65,
                "outMinute": 90,
                "minutes": 25,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 74,
                "minutes": 74,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Armoumen",
                "starter": false,
                "inMinute": 74,
                "outMinute": 90,
                "minutes": 16,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 44,
                "minutes": 44,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Madihi",
                "starter": false,
                "inMinute": 44,
                "outMinute": 90,
                "minutes": 46,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Abdellah EL-ACHIRI [MOROCCO]",
        "coach": "Mohamed FAKHIR",
        "cards": [
            {
                "name": "Noureddine Kacemi",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Oualid Regragui",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Houssine Kharja",
                "type": "R",
                "minute": ""
            }
        ],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "09/01/2006|drcongo",
        "date": "09/01/2006",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "",
        "opponent": "DR CONGO",
        "score": "3-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Marouane Chamakh",
                "minute": "32",
                "penalty": false
            },
            {
                "name": "Hicham Aboucharouane",
                "minute": "52",
                "penalty": false
            },
            {
                "name": "Mohamed Armoumen",
                "minute": "67",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Tarik Jarmouni",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Boukhari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 58,
                "minutes": 58,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Madihi",
                "starter": false,
                "inMinute": 58,
                "outMinute": 90,
                "minutes": 32,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 77,
                "minutes": 77,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hafid Abdessadek",
                "starter": false,
                "inMinute": 77,
                "outMinute": 90,
                "minutes": 13,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 67,
                "minutes": 67,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Mohamed Armoumen",
                "starter": false,
                "inMinute": 67,
                "outMinute": 90,
                "minutes": 23,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 67,
                "minutes": 67,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Abdelali Boussaboun",
                "starter": false,
                "inMinute": 67,
                "outMinute": 90,
                "minutes": 23,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 73,
                "minutes": 73,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Gharib Amzine",
                "starter": false,
                "inMinute": 73,
                "outMinute": 90,
                "minutes": 17,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mohamed GUEZZAZ [MOROCCO]. 2005",
        "coach": "Mohamed FAKHIR",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "15/11/2005|cameroon",
        "date": "15/11/2005",
        "city": "Clairfontaine",
        "stadium": "France",
        "attendance": "Closed Doors.",
        "opponent": "CAMEROON",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelilah Bagui",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdellah Fahmi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Aziz Ben Askar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mounir Obbadi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Ahmed Kantari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 60,
                "minutes": 60,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouabid Bouden",
                "starter": false,
                "inMinute": 60,
                "outMinute": 90,
                "minutes": 30,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelali Boussaboun",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "N/A",
        "coach": "Philippe TROUSSIER",
        "cards": [
            {
                "name": "Oualid Regragui",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "08/10/2005|tunisia",
        "date": "08/10/2005",
        "city": "Rades",
        "stadium": "Tunisia",
        "attendance": "60.000",
        "opponent": "TUNISIA",
        "score": "2-2",
        "halfTime": "",
        "scorers": [
            {
                "name": "Marouane Chamakh",
                "minute": "3",
                "penalty": false
            },
            {
                "name": "Talal El-Karkouri",
                "minute": "42",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Aziz Ben Askar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Noureddine Boukhari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 72,
                "minutes": 72,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": false,
                "inMinute": 72,
                "outMinute": 90,
                "minutes": 18,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 88,
                "minutes": 88,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelali Boussaboun",
                "starter": false,
                "inMinute": 88,
                "outMinute": 90,
                "minutes": 2,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 58,
                "minutes": 58,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Mourad Hdioued",
                "starter": false,
                "inMinute": 58,
                "outMinute": 90,
                "minutes": 32,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Essam Abdul EL-FATAH [EGYPT]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Aziz Ben Askar",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Talal El-Karkouri",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Houssine Kharja",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Youssef Safri",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "03/09/2005|botswana",
        "date": "03/09/2005",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "25.000",
        "opponent": "BOTSWANA",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Talal El-Karkouri",
                "minute": "56",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Aziz Ben Askar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Noureddine Boukhari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 66,
                "minutes": 66,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": false,
                "inMinute": 66,
                "outMinute": 90,
                "minutes": 24,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 83,
                "minutes": 83,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": false,
                "inMinute": 83,
                "outMinute": 90,
                "minutes": 7,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelaziz Ahanfouf",
                "starter": true,
                "inMinute": 0,
                "outMinute": 54,
                "minutes": 54,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelali Boussaboun",
                "starter": false,
                "inMinute": 54,
                "outMinute": 90,
                "minutes": 36,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mohamed BENOUZA [ALGERIA]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Badr El-Kaddouri",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "17/08/2005|togo",
        "date": "17/08/2005",
        "city": "Rouen",
        "stadium": "France",
        "attendance": "2.000",
        "opponent": "TOGO",
        "score": "0-1",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Abdelilah Bagui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Alioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hafid Abdessadek",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Aziz Ben Askar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Hdioued",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 79,
                "minutes": 79,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": false,
                "inMinute": 79,
                "outMinute": 90,
                "minutes": 11,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 64,
                "minutes": 64,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": false,
                "inMinute": 64,
                "outMinute": 90,
                "minutes": 26,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelaziz Ahanfouf",
                "starter": true,
                "inMinute": 0,
                "outMinute": 55,
                "minutes": 55,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelali Boussaboun",
                "starter": false,
                "inMinute": 55,
                "outMinute": 90,
                "minutes": 35,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "N/A",
        "coach": "Ezaki BADOU",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "18/06/2005|kenya",
        "date": "18/06/2005",
        "city": "Nairobi",
        "stadium": "Kenya",
        "attendance": "50.000",
        "opponent": "KENYA",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Yacine Abdessadki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 83,
                "minutes": 83,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": false,
                "inMinute": 83,
                "outMinute": 90,
                "minutes": 7,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mounir Diane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 15,
                "minutes": 15,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": false,
                "inMinute": 15,
                "outMinute": 90,
                "minutes": 75,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 76,
                "minutes": 76,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelali Boussaboun",
                "starter": false,
                "inMinute": 76,
                "outMinute": 90,
                "minutes": 14,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Badara DIATTA [SENEGAL]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Abdeslam Ouaddou",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "04/06/2005|malawi",
        "date": "04/06/2005",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "48.000",
        "opponent": "MALAWI",
        "score": "4-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Marouane Chamakh",
                "minute": "16",
                "penalty": false
            },
            {
                "name": "Youssef Hadji",
                "minute": "21",
                "penalty": false
            },
            {
                "name": "Youssef Hadji",
                "minute": "75",
                "penalty": false
            },
            {
                "name": "Houssine Kharja",
                "minute": "72",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Sinoh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Yacine Abdessadki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 87,
                "minutes": 87,
                "goals": 2,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": false,
                "inMinute": 87,
                "outMinute": 90,
                "minutes": 3,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 81,
                "minutes": 81,
                "goals": 1,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Mokhtari",
                "starter": false,
                "inMinute": 81,
                "outMinute": 90,
                "minutes": 9,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 81,
                "minutes": 81,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelali Boussaboun",
                "starter": false,
                "inMinute": 81,
                "outMinute": 90,
                "minutes": 9,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Bisingu BUENKADILA [DR CONGO]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Abdeslam Ouaddou",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Marouane Chamakh",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "26/03/2005|guinea",
        "date": "26/03/2005",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "70.000",
        "opponent": "GUINEA",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Hadji",
                "minute": "62",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Sinoh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 89,
                "minutes": 89,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": false,
                "inMinute": 89,
                "outMinute": 90,
                "minutes": 1,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mounir Diane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 65,
                "minutes": 65,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelali Boussaboun",
                "starter": false,
                "inMinute": 65,
                "outMinute": 90,
                "minutes": 25,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 68,
                "minutes": 68,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": false,
                "inMinute": 68,
                "outMinute": 90,
                "minutes": 22,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Koman COULIBALY [MALI]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Oualid Regragui",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "09/02/2005|kenya",
        "date": "09/02/2005",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "40.000",
        "opponent": "KENYA",
        "score": "5-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Jaouad Zairi",
                "minute": "12",
                "penalty": false
            },
            {
                "name": "Jaouad Zairi",
                "minute": "39",
                "penalty": false
            },
            {
                "name": "Jaouad Zairi",
                "minute": "90",
                "penalty": false
            },
            {
                "name": "Mounir Diane",
                "minute": "46",
                "penalty": false
            },
            {
                "name": "Youssef Hadji",
                "minute": "81",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Sinoh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Yacine Abdessadki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 63,
                "minutes": 63,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": false,
                "inMinute": 63,
                "outMinute": 90,
                "minutes": 27,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mounir Diane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 72,
                "minutes": 72,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": false,
                "inMinute": 72,
                "outMinute": 90,
                "minutes": 18,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 68,
                "minutes": 68,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelaziz Ahanfouf",
                "starter": false,
                "inMinute": 68,
                "outMinute": 90,
                "minutes": 22,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 3,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            }
        ],
        "referee": "Walid ATTAOUNI [LIBYA]. 2004",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Jaouad Zairi",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "17/11/2004|burkinafaso",
        "date": "17/11/2004",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "5.000",
        "opponent": "BURKINA FASO",
        "score": "4-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Abdelmajid Oulmers",
                "minute": "52",
                "penalty": false
            },
            {
                "name": "Noureddine Boukhari",
                "minute": "68",
                "penalty": false
            },
            {
                "name": "Samir Sarsar",
                "minute": "78",
                "penalty": false
            },
            {
                "name": "Yacine Abdessadki",
                "minute": "82",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Sinoh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 76,
                "minutes": 76,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Jarmouni",
                "starter": false,
                "inMinute": 76,
                "outMinute": 90,
                "minutes": 14,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nasr El-Kasmi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 73,
                "minutes": 73,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Sami Tajeddine",
                "starter": false,
                "inMinute": 73,
                "outMinute": 90,
                "minutes": 17,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Zakaria Zerouali",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Idrissi El-Kaddioui",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Yacine Abdessadki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Noureddine Boukhari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mounir Diane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelmajid Oulmers",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 68,
                "minutes": 68,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Samir Sarsar",
                "starter": false,
                "inMinute": 68,
                "outMinute": 90,
                "minutes": 22,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Mamadou KÉITA [MALI]",
        "coach": "Ezaki BADOU",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "10/10/2004|guinea",
        "date": "10/10/2004",
        "city": "Conakry",
        "stadium": "Guinea",
        "attendance": "25.000",
        "opponent": "GUINEA",
        "score": "1-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Marouane Chamakh",
                "minute": "5",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Hdioued",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 63,
                "minutes": 63,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Mounir Diane",
                "starter": false,
                "inMinute": 63,
                "outMinute": 90,
                "minutes": 27,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 70,
                "minutes": 70,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": false,
                "inMinute": 70,
                "outMinute": 90,
                "minutes": 20,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Monteiro DUARTÉ [CAPE VERDE ISLANDS]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Talal El-Karkouri",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Youssef Safri",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "04/09/2004|tunisia",
        "date": "04/09/2004",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "45.000",
        "opponent": "TUNISIA",
        "score": "1-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Talal El-Karkouri",
                "minute": "74",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 53,
                "minutes": 53,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": false,
                "inMinute": 53,
                "outMinute": 90,
                "minutes": 37,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 69,
                "minutes": 69,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": false,
                "inMinute": 69,
                "outMinute": 90,
                "minutes": 21,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Mokhtari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 85,
                "minutes": 85,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelaziz Ahanfouf",
                "starter": false,
                "inMinute": 85,
                "outMinute": 90,
                "minutes": 5,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Hdioued",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Maourane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Ahmed AUDA [EGYPT]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Talal El-Karkouri",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Noureddine Naybet",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Houssine Kharja",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Mourad Hdioued",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "03/07/2004|botswana",
        "date": "03/07/2004",
        "city": "Gaborone",
        "stadium": "Botswana",
        "attendance": "22.000",
        "opponent": "BOTSWANA",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Mokhtari",
                "minute": "30",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 88,
                "minutes": 88,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Abdelaziz Ahanfouf",
                "starter": false,
                "inMinute": 88,
                "outMinute": 90,
                "minutes": 2,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 77,
                "minutes": 77,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": false,
                "inMinute": 77,
                "outMinute": 90,
                "minutes": 13,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha 66']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Gilbert DLAMINI [SWAZILAND]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Noureddine Kacemi",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Tarek Chihab",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "05/06/2004|malawi",
        "date": "05/06/2004",
        "city": "Blantyre",
        "stadium": "Malawi",
        "attendance": "30.040",
        "opponent": "MALAWI",
        "score": "1-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Safri",
                "minute": "25",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdellah Fahmi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 63,
                "minutes": 63,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": false,
                "inMinute": 63,
                "outMinute": 90,
                "minutes": 27,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 75,
                "minutes": 75,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": false,
                "inMinute": 75,
                "outMinute": 90,
                "minutes": 15,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Mokhtari",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Joseph MUSUSA [ZIMBABWE]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Oualid Regragui",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Youssef Hadji",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "28/05/2004|mali",
        "date": "28/05/2004",
        "city": "Bamako",
        "stadium": "Mali",
        "attendance": "35.000",
        "opponent": "MALI",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nasr El-Kasmi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 62,
                "minutes": 62,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Fallah",
                "starter": false,
                "inMinute": 62,
                "outMinute": 90,
                "minutes": 28,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdellah Fahmi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 86,
                "minutes": 86,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abderrahim Chkilitte",
                "starter": false,
                "inMinute": 86,
                "outMinute": 90,
                "minutes": 4,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 51,
                "minutes": 51,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hassane Alla",
                "starter": false,
                "inMinute": 51,
                "outMinute": 90,
                "minutes": 39,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 86,
                "minutes": 86,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mehdi Taouil",
                "starter": false,
                "inMinute": 86,
                "outMinute": 90,
                "minutes": 4,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 51,
                "minutes": 51,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelaziz Ahanfouf",
                "starter": false,
                "inMinute": 51,
                "outMinute": 90,
                "minutes": 39,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 88,
                "minutes": 88,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": false,
                "inMinute": 88,
                "outMinute": 90,
                "minutes": 2,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Boubacar SIDIBÉ [MALI]",
        "coach": "Ezaki BADOU",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "28/04/2004|argentina",
        "date": "28/04/2004",
        "city": "Casablanca",
        "stadium": "Morocco",
        "attendance": "65.000",
        "opponent": "ARGENTINA",
        "score": "0-1",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 72,
                "minutes": 72,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": false,
                "inMinute": 72,
                "outMinute": 90,
                "minutes": 18,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 89,
                "minutes": 89,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": false,
                "inMinute": 89,
                "outMinute": 90,
                "minutes": 1,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Hdioued",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 64,
                "minutes": 64,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mounir Diane",
                "starter": false,
                "inMinute": 64,
                "outMinute": 90,
                "minutes": 26,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 78,
                "minutes": 78,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": false,
                "inMinute": 78,
                "outMinute": 90,
                "minutes": 12,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Falla NDOYÉ [SENEGAL]",
        "coach": "Ezaki BADOU",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "31/03/2004|angola",
        "date": "31/03/2004",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "7.000",
        "opponent": "ANGOLA",
        "score": "3-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Nabil Baha",
                "minute": "67",
                "penalty": false
            },
            {
                "name": "Nabil Baha",
                "minute": "74",
                "penalty": false
            },
            {
                "name": "Jaouad Zairi",
                "minute": "77",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Karim Zaza",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Alioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 81,
                "minutes": 81,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": false,
                "inMinute": 81,
                "outMinute": 90,
                "minutes": 9,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 29,
                "minutes": 29,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Hdioued",
                "starter": false,
                "inMinute": 29,
                "outMinute": 90,
                "minutes": 61,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Ali El-Omari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 69,
                "minutes": 69,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": false,
                "inMinute": 69,
                "outMinute": 90,
                "minutes": 21,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mounir Diane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 75,
                "minutes": 75,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Ahmed Ajeddou",
                "starter": false,
                "inMinute": 75,
                "outMinute": 90,
                "minutes": 15,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 60,
                "minutes": 60,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hassane Alla",
                "starter": false,
                "inMinute": 60,
                "outMinute": 90,
                "minutes": 30,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 2,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Mohamed Kamel RISHA [EGYPT]",
        "coach": "Ezaki BADOU",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "14/02/2004|tunisia",
        "date": "14/02/2004",
        "city": "Rades",
        "stadium": "Tunisia",
        "attendance": "60.000",
        "opponent": "TUNISIA",
        "score": "1-2",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Mokhtari",
                "minute": "38",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Akram Roumani",
                "starter": true,
                "inMinute": 0,
                "outMinute": 74,
                "minutes": 74,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Jaouad Zairi",
                "starter": false,
                "inMinute": 74,
                "outMinute": 90,
                "minutes": 16,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 87,
                "minutes": 87,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": false,
                "inMinute": 87,
                "outMinute": 90,
                "minutes": 3,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 63,
                "minutes": 63,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": false,
                "inMinute": 63,
                "outMinute": 90,
                "minutes": 27,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Falla NDOYÉ [SENEGAL]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Oualid Regragui",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Akram Roumani",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Noureddine Naybet",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP FINAL"
    },
    {
        "key": "11/02/2004|mali",
        "date": "11/02/2004",
        "city": "Sousse",
        "stadium": "Tunisia",
        "attendance": "15.000",
        "opponent": "MALI",
        "score": "4-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Mokhtari",
                "minute": "14",
                "penalty": false
            },
            {
                "name": "Youssef Mokhtari",
                "minute": "58",
                "penalty": false
            },
            {
                "name": "Youssef Hadji",
                "minute": "80",
                "penalty": false
            },
            {
                "name": "Nabil Baha",
                "minute": "90",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 68,
                "minutes": 68,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Hdioued",
                "starter": false,
                "inMinute": 68,
                "outMinute": 90,
                "minutes": 22,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Akram Roumani",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 2,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 86,
                "minutes": 86,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": false,
                "inMinute": 86,
                "outMinute": 90,
                "minutes": 4,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 59,
                "minutes": 59,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": false,
                "inMinute": 59,
                "outMinute": 90,
                "minutes": 31,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Sharaf ABUBAKAR [IVORY COAST]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Noureddine Naybet",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP SEMI FINAL"
    },
    {
        "key": "08/02/2004|algeria",
        "date": "08/02/2004",
        "city": "Sfax",
        "stadium": "Tunisia",
        "attendance": "22.000",
        "opponent": "ALGERIA",
        "score": "3-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Marouane Chamakh",
                "minute": "90",
                "penalty": false
            },
            {
                "name": "Youssef Hadji",
                "minute": "113",
                "penalty": false
            },
            {
                "name": "Jaouad Zairi",
                "minute": "120",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 86,
                "minutes": 86,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": false,
                "inMinute": 86,
                "outMinute": 90,
                "minutes": 4,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi 69']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Alioui",
                "starter": false,
                "inMinute": 90,
                "outMinute": 90,
                "minutes": 0,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Mohamed Abdelhakim SHELMANI [LIBYA]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Abdeslam Ouaddou",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Youssef Safri",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUARTER FINAL"
    },
    {
        "key": "04/02/2004|southafrica",
        "date": "04/02/2004",
        "city": "Sousse",
        "stadium": "Tunisia",
        "attendance": "6.000",
        "opponent": "SOUTH AFRICA",
        "score": "1-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Safri",
                "minute": "38",
                "penalty": true
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Mokhtari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 85,
                "minutes": 85,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": false,
                "inMinute": 85,
                "outMinute": 90,
                "minutes": 5,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 89,
                "minutes": 89,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Mourad Hdioued",
                "starter": false,
                "inMinute": 89,
                "outMinute": 90,
                "minutes": 1,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Hichem GUIRAT [TUNISIA]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Houssine Kharja",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Youssef Hadji",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP ROUND ONE"
    },
    {
        "key": "31/01/2004|benin",
        "date": "31/01/2004",
        "city": "Sfax",
        "stadium": "Tunisia",
        "attendance": "20.000",
        "opponent": "BENIN",
        "score": "4-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Marouane Chamakh",
                "minute": "17",
                "penalty": false
            },
            {
                "name": "Youssef Mokhtari",
                "minute": "73",
                "penalty": false
            },
            {
                "name": "Abdeslam Ouaddou",
                "minute": "75",
                "penalty": false
            },
            {
                "name": "Talal El-Karkouri",
                "minute": "80",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 63,
                "minutes": 63,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": false,
                "inMinute": 63,
                "outMinute": 90,
                "minutes": 27,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 78,
                "minutes": 78,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hassane Alla",
                "starter": false,
                "inMinute": 78,
                "outMinute": 90,
                "minutes": 12,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 48,
                "minutes": 48,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": false,
                "inMinute": 48,
                "outMinute": 90,
                "minutes": 42,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Eddy MAILLET [SEYCHELLES]",
        "coach": "Ezaki BADOU",
        "cards": [],
        "source": "NATIONS CUP ROUND ONE"
    },
    {
        "key": "27/01/2004|nigeria",
        "date": "27/01/2004",
        "city": "Monastir",
        "stadium": "Tunisia",
        "attendance": "15.000",
        "opponent": "NIGERIA",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Hadji",
                "minute": "77",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 71,
                "minutes": 71,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": false,
                "inMinute": 71,
                "outMinute": 90,
                "minutes": 19,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 58,
                "minutes": 58,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": false,
                "inMinute": 58,
                "outMinute": 90,
                "minutes": 32,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Falla NDOYÉ [SENEGAL]. 2003",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Khalid Fouhami",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Oualid Regragui",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP ROUND ONE"
    },
    {
        "key": "19/11/2003|mali",
        "date": "19/11/2003",
        "city": "Casablanca",
        "stadium": "Morocco",
        "attendance": "6.000",
        "opponent": "MALI",
        "score": "0-1",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Alioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Akram Roumani",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mohamed Abdelhakim SHELMANI [LIBYA]",
        "coach": "Ezaki BADOU",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "15/11/2003|burkinafaso",
        "date": "15/11/2003",
        "city": "Meknes",
        "stadium": "Morocco",
        "attendance": "25.000",
        "opponent": "BURKINA FASO",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Abdeslam Ouaddou",
                "minute": "24",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Alioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Akram Roumani",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mohcine BOUKHTIR [TUNISIA]",
        "coach": "Ezaki BADOU",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "11/10/2003|tunisia",
        "date": "11/10/2003",
        "city": "Tunis",
        "stadium": "Tunisia",
        "attendance": "13.000",
        "opponent": "TUNISIA",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Akram Roumani",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 83,
                "minutes": 83,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Samir Boughanem",
                "starter": false,
                "inMinute": 83,
                "outMinute": 90,
                "minutes": 7,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 71,
                "minutes": 71,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": false,
                "inMinute": 71,
                "outMinute": 90,
                "minutes": 19,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Bertrand LAYEC [FRANCE]",
        "coach": "Ezaki BADOU",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "10/09/2003|trinidadtobago",
        "date": "10/09/2003",
        "city": "Marrakech",
        "stadium": "Morocco",
        "attendance": "",
        "opponent": "TRINIDAD & TOBAGO",
        "score": "2-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Marouane Chamakh",
                "minute": "38",
                "penalty": false
            },
            {
                "name": "Marouane Chamakh",
                "minute": "49",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 74,
                "minutes": 74,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdelilah Bagui",
                "starter": false,
                "inMinute": 74,
                "outMinute": 90,
                "minutes": 16,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Tarek Chihab",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Akram Roumani",
                "starter": true,
                "inMinute": 0,
                "outMinute": 80,
                "minutes": 80,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Oussaleh",
                "starter": false,
                "inMinute": 80,
                "outMinute": 90,
                "minutes": 10,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 74,
                "minutes": 74,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": false,
                "inMinute": 74,
                "outMinute": 90,
                "minutes": 16,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 63,
                "minutes": 63,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Hadji",
                "starter": false,
                "inMinute": 63,
                "outMinute": 90,
                "minutes": 27,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": true,
                "inMinute": 0,
                "outMinute": 69,
                "minutes": 69,
                "goals": 2,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": false,
                "inMinute": 69,
                "outMinute": 90,
                "minutes": 21,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 66,
                "minutes": 66,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": false,
                "inMinute": 66,
                "outMinute": 90,
                "minutes": 24,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Atef YAACOUBI [TUNISIA]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Khalid Fouhami",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Abdeslam Ouaddou",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "06/07/2003|equatorialguinea",
        "date": "06/07/2003",
        "city": "Bata",
        "stadium": "Equatorial Guinea",
        "attendance": "",
        "opponent": "EQUATORIAL GUINEA",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Jawad Akadar",
                "minute": "61",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Hdioued",
                "starter": true,
                "inMinute": 0,
                "outMinute": 56,
                "minutes": 56,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": false,
                "inMinute": 56,
                "outMinute": 90,
                "minutes": 34,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": true,
                "inMinute": 0,
                "outMinute": 56,
                "minutes": 56,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jawad Akadar",
                "starter": false,
                "inMinute": 56,
                "outMinute": 90,
                "minutes": 34,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "N/A",
        "coach": "Ezaki BADOU",
        "cards": [],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "20/06/2003|gabon",
        "date": "20/06/2003",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "15.000",
        "opponent": "GABON",
        "score": "2-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Mohamed El-Yaacoubi",
                "minute": "22",
                "penalty": false
            },
            {
                "name": "Jaouad Zairi",
                "minute": "75",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Hdioued",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": true,
                "inMinute": 0,
                "outMinute": 64,
                "minutes": 64,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Marouane Chamakh",
                "starter": false,
                "inMinute": 64,
                "outMinute": 90,
                "minutes": 26,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 88,
                "minutes": 88,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Houssine Kharja",
                "starter": false,
                "inMinute": 88,
                "outMinute": 90,
                "minutes": 2,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 81,
                "minutes": 81,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": false,
                "inMinute": 81,
                "outMinute": 90,
                "minutes": 9,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mohamed Abdelhakim SHELMANI [LIBYA]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Mourad Hdioued",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "08/06/2003|sierraleone",
        "date": "08/06/2003",
        "city": "Casablanca",
        "stadium": "Morocco",
        "attendance": "25.000",
        "opponent": "SIERRA LEONE",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Chippo",
                "minute": "26",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Abdelilah Bagui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Samir Boughanem",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Hdioued",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Essam Abdul EL-FATAH [EGYPT]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Abdeslam Ouaddou",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "30/04/2003|ivorycoast",
        "date": "30/04/2003",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "20.000",
        "opponent": "IVORY COAST",
        "score": "0-1",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Driss Asmar",
                "starter": true,
                "inMinute": 0,
                "outMinute": 75,
                "minutes": 75,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nadir Lamyaghri",
                "starter": false,
                "inMinute": 75,
                "outMinute": 90,
                "minutes": 15,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Faouzi El-Brazi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelilah Saber",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "R",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Boukhari",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Hdioued",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Samir Boughanem",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 65,
                "minutes": 65,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": false,
                "inMinute": 65,
                "outMinute": 90,
                "minutes": 25,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": true,
                "inMinute": 0,
                "outMinute": 86,
                "minutes": 86,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Bidodane",
                "starter": false,
                "inMinute": 86,
                "outMinute": 90,
                "minutes": 4,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 55,
                "minutes": 55,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Ali El-Omari",
                "starter": false,
                "inMinute": 55,
                "outMinute": 90,
                "minutes": 35,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Abderrahim EL-ARJOUNE [MOROCCO]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Abdelilah Saber",
                "type": "R",
                "minute": ""
            }
        ],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "29/03/2003|sierraleone",
        "date": "29/03/2003",
        "city": "Freetown",
        "stadium": "Sierra Leone",
        "attendance": "35.000",
        "opponent": "SIERRA LEONE",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Abdelilah Bagui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 61,
                "minutes": 61,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Driss Asmar",
                "starter": false,
                "inMinute": 61,
                "outMinute": 90,
                "minutes": 29,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelilah Saber",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Samir Boughanem",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Idrissa KABU [LIBERIA]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Abdelilah Saber",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Samir Boughanem",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Nabil Baha",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "12/02/2003|senegal",
        "date": "12/02/2003",
        "city": "Paris",
        "stadium": "France",
        "attendance": "8.000",
        "opponent": "SENEGAL",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Abdelilah Saber",
                "minute": "63",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Nadir Lamyaghri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 81,
                "minutes": 81,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdellah Fahmi",
                "starter": false,
                "inMinute": 81,
                "outMinute": 90,
                "minutes": 9,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelilah Saber",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 88,
                "minutes": 88,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Faouzi El-Brazi",
                "starter": false,
                "inMinute": 88,
                "outMinute": 90,
                "minutes": 2,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Samir Boughanem",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Mourad Hdioued",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Nabil Baha",
                "starter": true,
                "inMinute": 0,
                "outMinute": 88,
                "minutes": 88,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": false,
                "inMinute": 88,
                "outMinute": 90,
                "minutes": 2,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Yaacoubi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi 90+1']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Hervé PICCIRILLO [FRANCE]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Abdelkrim Kaissi",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Samir Boughanem",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "20/11/2002|mali",
        "date": "20/11/2002",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "15.000",
        "opponent": "MALI",
        "score": "1-3",
        "halfTime": "",
        "scorers": [
            {
                "name": "Rachid Rokki",
                "minute": "5",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Abdelilah Bagui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 62,
                "minutes": 62,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": false,
                "inMinute": 62,
                "outMinute": 90,
                "minutes": 28,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Amine Erbate",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 72,
                "minutes": 72,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Otman El-Assas",
                "starter": false,
                "inMinute": 72,
                "outMinute": 90,
                "minutes": 18,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Bidodane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Aboucharouane",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Rokki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 73,
                "minutes": 73,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Rabei Lafoui",
                "starter": false,
                "inMinute": 73,
                "outMinute": 90,
                "minutes": 17,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Said TAHIRI [MOROCCO]",
        "coach": "Ezaki BADOU",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "13/10/2002|equatorialguinea",
        "date": "13/10/2002",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "25.000",
        "opponent": "EQUATORIAL GUINEA",
        "score": "5-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Adil Ramzi",
                "minute": "8",
                "penalty": false
            },
            {
                "name": "Mustapha Bidodane",
                "minute": "24",
                "penalty": false
            },
            {
                "name": "Youssef Safri",
                "minute": "27",
                "penalty": false
            },
            {
                "name": "Rachid Rokki",
                "minute": "45",
                "penalty": false
            },
            {
                "name": "Noureddine Kacemi",
                "minute": "70",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Abdelilah Bagui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "R",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Noureddine Kacemi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 85,
                "minutes": 85,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": false,
                "inMinute": 85,
                "outMinute": 90,
                "minutes": 5,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelilah Saber",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 85,
                "minutes": 85,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abderafi Gassi",
                "starter": false,
                "inMinute": 85,
                "outMinute": 90,
                "minutes": 5,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Mustapha Bidodane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Rachid Rokki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 65,
                "minutes": 65,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Rabei Lafoui",
                "starter": false,
                "inMinute": 65,
                "outMinute": 90,
                "minutes": 25,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mohcine BOUKHTIR [TUNISIA]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Abdelilah Bagui",
                "type": "R",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "03/10/2002|niger",
        "date": "03/10/2002",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "4.300",
        "opponent": "NIGER",
        "score": "6-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Mustapha Bidodane",
                "minute": "9",
                "penalty": false
            },
            {
                "name": "Bouabid Bouden",
                "minute": "29",
                "penalty": true
            },
            {
                "name": "Otman El-Assas",
                "minute": "50",
                "penalty": false
            },
            {
                "name": "Mohamed Jebrane",
                "minute": "70",
                "penalty": false
            },
            {
                "name": "Omar Hassi",
                "minute": "78",
                "penalty": false
            },
            {
                "name": "Hicham Zerouali",
                "minute": "83",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Abdelilah Bagui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Ali Bouab",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelilah Saber",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abderahim Chkilitte ]",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Miri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Mokhtari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Otman El-Assas",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Bouabid Bouden",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Mustapha Bidodane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Rachid Rokki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Jebrane",
                "starter": false,
                "inMinute": 0,
                "outMinute": 0,
                "minutes": 0,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Omar Hassi",
                "starter": false,
                "inMinute": 0,
                "outMinute": 0,
                "minutes": 0,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Hicham Zerouali",
                "starter": false,
                "inMinute": 0,
                "outMinute": 0,
                "minutes": 0,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "? ROUAISSI [MOROCCO]",
        "coach": "Ezaki BADOU",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "07/09/2002|gabon",
        "date": "07/09/2002",
        "city": "Libreville",
        "stadium": "Gabon",
        "attendance": "30.000",
        "opponent": "GABON",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Chippo",
                "minute": "19",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Abdelilah Bagui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 76,
                "minutes": 76,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Mourad Hdioued",
                "starter": false,
                "inMinute": 76,
                "outMinute": 90,
                "minutes": 14,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 86,
                "minutes": 86,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Oualid Regragui",
                "starter": false,
                "inMinute": 86,
                "outMinute": 90,
                "minutes": 4,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Bidodane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 56,
                "minutes": 56,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Rabei Lafoui",
                "starter": false,
                "inMinute": 56,
                "outMinute": 90,
                "minutes": 34,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Raphael EVEHE [CAMEROON]",
        "coach": "Ezaki BADOU",
        "cards": [
            {
                "name": "Tarek Chihab",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Abdelkrim Kaissi",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Adil Ramzi",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Mustapha Bidodane",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "21/08/2002|luxembourg",
        "date": "21/08/2002",
        "city": "Luxembourg City",
        "stadium": "Luxembourg",
        "attendance": "1.654",
        "opponent": "LUXEMBOURG",
        "score": "2-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Mohamed Jebrane",
                "minute": "72",
                "penalty": false
            },
            {
                "name": "Noureddine Kacemi",
                "minute": "84",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Abdelilah Bagui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Badr El-Kaddouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 75,
                "minutes": 75,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": false,
                "inMinute": 75,
                "outMinute": 90,
                "minutes": 15,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Hdioued",
                "starter": true,
                "inMinute": 0,
                "outMinute": 56,
                "minutes": 56,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abderahim Chkilitte",
                "starter": false,
                "inMinute": 56,
                "outMinute": 90,
                "minutes": 34,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 88,
                "minutes": 88,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Lotfi Benboubker",
                "starter": false,
                "inMinute": 88,
                "outMinute": 90,
                "minutes": 2,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rafei Lafoui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 57,
                "minutes": 57,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Jebrane",
                "starter": false,
                "inMinute": 57,
                "outMinute": 90,
                "minutes": 33,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Edgar STEINBORN [GERMANY]",
        "coach": "Ezaki BADOU",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "30/01/2002|southafrica",
        "date": "30/01/2002",
        "city": "Segou",
        "stadium": "Mali",
        "attendance": "3.000",
        "opponent": "SOUTH AFRICA",
        "score": "1-3",
        "halfTime": "",
        "scorers": [
            {
                "name": "Rachid Benmahmoud",
                "minute": "80",
                "penalty": true
            }
        ],
        "players": [
            {
                "name": "Driss Benzekri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Faouzi El-Brazi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdellah Fahmi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Akram Roumani",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Boukhari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 50,
                "minutes": 50,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": false,
                "inMinute": 50,
                "outMinute": 90,
                "minutes": 40,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 59,
                "minutes": 59,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Benmahmoud",
                "starter": false,
                "inMinute": 59,
                "outMinute": 90,
                "minutes": 31,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": true,
                "inMinute": 0,
                "outMinute": 85,
                "minutes": 85,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Rokki",
                "starter": false,
                "inMinute": 85,
                "outMinute": 90,
                "minutes": 5,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Zerouali",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Gamal EL-HAWARI [LIBYA]",
        "coach": "Humberto COELHO",
        "cards": [],
        "source": "NATIONS CUP ROUND ONE"
    },
    {
        "key": "26/01/2002|burkinafaso",
        "date": "26/01/2002",
        "city": "Segou",
        "stadium": "Mali",
        "attendance": "4.000",
        "opponent": "BURKINA FASO",
        "score": "2-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Hicham Zerouali",
                "minute": "23",
                "penalty": false
            },
            {
                "name": "Hicham Zerouali",
                "minute": "85",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Driss Benzekri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdellah Fahmi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Akram Roumani",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Boukhari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 74,
                "minutes": 74,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rabei Lafoui",
                "starter": false,
                "inMinute": 74,
                "outMinute": 90,
                "minutes": 16,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri 66']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Gharib Amzine",
                "starter": true,
                "inMinute": 0,
                "outMinute": 32,
                "minutes": 32,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Faouzi El-Brazi",
                "starter": false,
                "inMinute": 32,
                "outMinute": 90,
                "minutes": 58,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Zerouali",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 2,
                "cards": []
            }
        ],
        "referee": "Lim Kee CHONG [MAURITIUS]",
        "coach": "Humberto COELHO",
        "cards": [],
        "source": "NATIONS CUP ROUND ONE"
    },
    {
        "key": "21/01/2002|ghana",
        "date": "21/01/2002",
        "city": "Segou",
        "stadium": "Mali",
        "attendance": "4.000",
        "opponent": "GHANA",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Driss Benzekri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdellah Fahmi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Akram Roumani",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Gharib Amzine",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": true,
                "inMinute": 0,
                "outMinute": 59,
                "minutes": 59,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Rokki",
                "starter": false,
                "inMinute": 59,
                "outMinute": 90,
                "minutes": 31,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 89,
                "minutes": 89,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Faouzi El-Brazi",
                "starter": false,
                "inMinute": 89,
                "outMinute": 90,
                "minutes": 1,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Zerouali",
                "starter": true,
                "inMinute": 0,
                "outMinute": 70,
                "minutes": 70,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rabei Lafoui",
                "starter": false,
                "inMinute": 70,
                "outMinute": 90,
                "minutes": 20,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Domenico MESSINA [ITALY]",
        "coach": "Humberto COELHO",
        "cards": [
            {
                "name": "Noureddine Naybet",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Gharib Amzine",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP ROUND ONE"
    },
    {
        "key": "16/01/2002|gambia",
        "date": "16/01/2002",
        "city": "Banjul",
        "stadium": "Gambia",
        "attendance": "",
        "opponent": "GAMBIA",
        "score": "2-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Adil Ramzi",
                "minute": "15",
                "penalty": false
            },
            {
                "name": "Abdejalil Hadda",
                "minute": "28",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Driss Benzekri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Faouzi El-Brazi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdellah Fahmi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Akram Roumani",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Hicham Zerouali",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "N/A",
        "coach": "Humberto COELHO",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "13/01/2002|guinea",
        "date": "13/01/2002",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "",
        "opponent": "GUINEA",
        "score": "2-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Abdejalil Hadda",
                "minute": "10",
                "penalty": false
            },
            {
                "name": "Adil Ramzi",
                "minute": "49",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Driss Benzekri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Faouzi El-Brazi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdellah Fahmi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Akram Roumani",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 80,
                "minutes": 80,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": false,
                "inMinute": 80,
                "outMinute": 90,
                "minutes": 10,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 67,
                "minutes": 67,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Benmahmoud",
                "starter": false,
                "inMinute": 67,
                "outMinute": 90,
                "minutes": 23,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Otman El-Assas",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 75,
                "minutes": 75,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Noureddine Boukhari",
                "starter": false,
                "inMinute": 75,
                "outMinute": 90,
                "minutes": 15,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Hicham Zerouali",
                "starter": true,
                "inMinute": 0,
                "outMinute": 75,
                "minutes": 75,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rabei Lafoui",
                "starter": false,
                "inMinute": 75,
                "outMinute": 90,
                "minutes": 15,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Abderrahim EL-ARJOUNE [MOROCCO]. 2001",
        "coach": "Humberto COELHO",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "12/12/2001|mali",
        "date": "12/12/2001",
        "city": "Settat",
        "stadium": "Morocco",
        "attendance": "40.000",
        "opponent": "MALI",
        "score": "1-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Chippo",
                "minute": "9",
                "penalty": true
            }
        ],
        "players": [
            {
                "name": "Abdelilah Bagui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdellah Fahmi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarek Chihab",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Gharib Amzine",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Rokki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Zerouali",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "N/A",
        "coach": "Humberto COELHO",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "14/11/2001|zambia",
        "date": "14/11/2001",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "2.000",
        "opponent": "ZAMBIA",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Rachid Rokki",
                "minute": "86",
                "penalty": true
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Bekkari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdellah Fahmi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Akram Roumani",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Otman El-Assas",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Moncef Zerka",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Zerouali",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Rokki",
                "starter": false,
                "inMinute": 0,
                "outMinute": 0,
                "minutes": 0,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Abderrahim EL-ARJOUNE [MOROCCO]",
        "coach": "Humberto COELHO",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "14/10/2001|mali",
        "date": "14/10/2001",
        "city": "Bamako",
        "stadium": "Mali",
        "attendance": "35.000",
        "opponent": "MALI",
        "score": "1-2",
        "halfTime": "",
        "scorers": [
            {
                "name": "Rachid Rokki",
                "minute": "10",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Abdelilah Bagui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Bekkari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Ali Bouab",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Akram Roumani",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Idriss Bouletta",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Omar Gassimi ]",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 59,
                "minutes": 59,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hassan Mouatry",
                "starter": false,
                "inMinute": 59,
                "outMinute": 90,
                "minutes": 31,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Benmahmoud",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Kharbouch",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Rokki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Hicham Zerouali",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Seydou KÉITA [MALI]",
        "coach": "Humberto COELHO",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "12/10/2001|gambia",
        "date": "12/10/2001",
        "city": "Bamako",
        "stadium": "Mali",
        "attendance": "50.000",
        "opponent": "GAMBIA",
        "score": "2-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Hicham Zerouali",
                "minute": "25",
                "penalty": false
            },
            {
                "name": "Hicham Zerouali",
                "minute": "55",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Hicham Zerouali",
                "starter": false,
                "inMinute": 0,
                "outMinute": 0,
                "minutes": 0,
                "goals": 2,
                "cards": []
            }
        ],
        "referee": "N/A",
        "coach": "Humberto COELHO",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "05/09/2001|italy",
        "date": "05/09/2001",
        "city": "Piacenza",
        "stadium": "Italy",
        "attendance": "18.740",
        "opponent": "ITALY",
        "score": "0-1",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Driss Benzekri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdellah Fahmi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 89,
                "minutes": 89,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Rossi",
                "starter": false,
                "inMinute": 89,
                "outMinute": 90,
                "minutes": 1,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Akram Roumani",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Rachid Benmahmoud",
                "starter": true,
                "inMinute": 0,
                "outMinute": 65,
                "minutes": 65,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": false,
                "inMinute": 65,
                "outMinute": 90,
                "minutes": 25,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 72,
                "minutes": 72,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Otman El-Assas",
                "starter": false,
                "inMinute": 72,
                "outMinute": 90,
                "minutes": 18,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Kharbouch",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Zerouali",
                "starter": true,
                "inMinute": 0,
                "outMinute": 79,
                "minutes": 79,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": false,
                "inMinute": 79,
                "outMinute": 90,
                "minutes": 11,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Juan Ansuategui ROCA [SPAIN]",
        "coach": "Humberto COELHO",
        "cards": [
            {
                "name": "Youssef Safri",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "FRIENDLY INTERNATIONAL"
    },
    {
        "key": "14/07/2001|senegal",
        "date": "14/07/2001",
        "city": "Dakar",
        "stadium": "Senegal",
        "attendance": "60.000",
        "opponent": "SENEGAL",
        "score": "0-1",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdelkrim El-Hadrioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Rachid Benmahmoud",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 76,
                "minutes": 76,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hassan Nader",
                "starter": false,
                "inMinute": 76,
                "outMinute": 90,
                "minutes": 14,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Gharib Amzine",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 67,
                "minutes": 67,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": false,
                "inMinute": 67,
                "outMinute": 90,
                "minutes": 23,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Petros MATHABELA [SOUTH AFRICA]",
        "coach": "Humberto COELHO",
        "cards": [
            {
                "name": "Noureddine Naybet",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Youssef Safri",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Adil Ramzi",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "30/06/2001|egypt",
        "date": "30/06/2001",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "70.000",
        "opponent": "EGYPT",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Mustapha Hadji",
                "minute": "32",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Driss Benzekri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim El-Hadrioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Rossi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Benmahmoud",
                "starter": true,
                "inMinute": 0,
                "outMinute": 85,
                "minutes": 85,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Sellami",
                "starter": false,
                "inMinute": 85,
                "outMinute": 90,
                "minutes": 5,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 75,
                "minutes": 75,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Faouzi El-Brazi",
                "starter": false,
                "inMinute": 75,
                "outMinute": 90,
                "minutes": 15,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hassan Kachloul",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Gharib Amzine",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 67,
                "minutes": 67,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": false,
                "inMinute": 67,
                "outMinute": 90,
                "minutes": 23,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Edwin SENAI [BOTSWANA]",
        "coach": "Humberto COELHO",
        "cards": [
            {
                "name": "Driss Benzekri",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Hassan Kachloul",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "16/06/2001|gabon",
        "date": "16/06/2001",
        "city": "Fes",
        "stadium": "Morocco",
        "attendance": "12.000",
        "opponent": "GABON",
        "score": "0-1",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Faouzi El-Brazi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdellatif Jrindou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Belkhouja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Rachid Benmahmoud",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Gharib Amzine",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": true,
                "inMinute": 0,
                "outMinute": 57,
                "minutes": 57,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": false,
                "inMinute": 57,
                "outMinute": 90,
                "minutes": 33,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Hassan Nader",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Rokki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 74,
                "minutes": 74,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": false,
                "inMinute": 74,
                "outMinute": 90,
                "minutes": 16,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mohamed ABDELLAH [LIBYA]",
        "coach": "Humberto COELHO",
        "cards": [
            {
                "name": "Abdelkrim Kaissi",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Abdejalil Hadda",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "02/06/2001|kenya",
        "date": "02/06/2001",
        "city": "Nairobi",
        "stadium": "Kenya",
        "attendance": "17.000",
        "opponent": "KENYA",
        "score": "1-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Salaheddine Bassir",
                "minute": "43",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Driss Benzekri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Faouzi El-Brazi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Belkhouja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Gharib Amzine",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 89,
                "minutes": 89,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim Kaissi",
                "starter": false,
                "inMinute": 89,
                "outMinute": 90,
                "minutes": 1,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 73,
                "minutes": 73,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rabei Lafoui",
                "starter": false,
                "inMinute": 73,
                "outMinute": 90,
                "minutes": 17,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": true,
                "inMinute": 0,
                "outMinute": 84,
                "minutes": 84,
                "goals": 1,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Rachid Rokki",
                "starter": false,
                "inMinute": 84,
                "outMinute": 90,
                "minutes": 6,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Robin WILLIAMS [SOUTH AFRICA]",
        "coach": "Humberto COELHO",
        "cards": [
            {
                "name": "Salaheddine Bassir",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "04/05/2001|algeria",
        "date": "04/05/2001",
        "city": "Alger",
        "stadium": "Algeria",
        "attendance": "15.000",
        "opponent": "ALGERIA",
        "score": "2-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Rachid Benmahmoud",
                "minute": "17",
                "penalty": false
            },
            {
                "name": "Gharib Amzine",
                "minute": "48",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Driss Benzekri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim El-Hadrioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Rachid Benmahmoud",
                "starter": true,
                "inMinute": 0,
                "outMinute": 85,
                "minutes": 85,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Faouzi El-Brazi",
                "starter": false,
                "inMinute": 85,
                "outMinute": 90,
                "minutes": 5,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 89,
                "minutes": 89,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Rossi",
                "starter": false,
                "inMinute": 89,
                "outMinute": 90,
                "minutes": 1,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Gharib Amzine",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 85,
                "minutes": 85,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Rokki",
                "starter": false,
                "inMinute": 85,
                "outMinute": 90,
                "minutes": 5,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Hichem GUIRAT [TUNISIA]",
        "coach": "Humberto COELHO",
        "cards": [
            {
                "name": "Youssef Safri",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Youssef Chippo",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "21/04/2001|namibia",
        "date": "21/04/2001",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "15.000",
        "opponent": "NAMIBIA",
        "score": "3-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Rachid Rokki",
                "minute": "48",
                "penalty": false
            },
            {
                "name": "Abdejalil Hadda",
                "minute": "75",
                "penalty": false
            },
            {
                "name": "Abdejalil Hadda",
                "minute": "90",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Driss Benzekri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim El-Hadrioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Benmahmoud",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 84,
                "minutes": 84,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Safri",
                "starter": false,
                "inMinute": 84,
                "outMinute": 90,
                "minutes": 6,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Gharib Amzine",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 39,
                "minutes": 39,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Rokki",
                "starter": false,
                "inMinute": 39,
                "outMinute": 90,
                "minutes": 51,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 2,
                "cards": []
            }
        ],
        "referee": "Koman COULIBALY [MALI]",
        "coach": "Humberto COELHO",
        "cards": [
            {
                "name": "Youssef Chippo",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "24/03/2001|tunisia",
        "date": "24/03/2001",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "25.000",
        "opponent": "TUNISIA",
        "score": "2-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Chippo",
                "minute": "20",
                "penalty": false
            },
            {
                "name": "Abdejalil Hadda",
                "minute": "60",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Driss Benzekri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Rossi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Benmahmoud",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 89,
                "minutes": 89,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Rokki",
                "starter": false,
                "inMinute": 89,
                "outMinute": 90,
                "minutes": 1,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 78,
                "minutes": 78,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Faouzi El-Brazi",
                "starter": false,
                "inMinute": 78,
                "outMinute": 90,
                "minutes": 12,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Gharib Amzine",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Coffi CODJIA [BENIN]",
        "coach": "Humberto COELHO",
        "cards": [
            {
                "name": "Noureddine Kacemi",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Youssef Rossi",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Adil Ramzi",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "24/02/2001|senegal",
        "date": "24/02/2001",
        "city": "Rabat",
        "stadium": "Morocco",
        "attendance": "60.000",
        "opponent": "SENEGAL",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Driss Benzekri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim El-Hadrioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdelilah Saber",
                "starter": true,
                "inMinute": 0,
                "outMinute": 57,
                "minutes": 57,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Gharib Amzine",
                "starter": false,
                "inMinute": 57,
                "outMinute": 90,
                "minutes": 33,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Otman El-Assas",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 88,
                "minutes": 88,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hassan Nader",
                "starter": false,
                "inMinute": 88,
                "outMinute": 90,
                "minutes": 2,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui 45']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Felix TANGAWARIMA [ZIMBABWE]",
        "coach": "Humberto COELHO",
        "cards": [
            {
                "name": "Abdelkrim El-Hadrioui",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Otman El-Assas",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "14/02/2001|unitedarabemirates",
        "date": "14/02/2001",
        "city": "Dubai",
        "stadium": "United Arab Emirates",
        "attendance": "",
        "opponent": "UNITED ARAB EMIRATES",
        "score": "1-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Tarik Sektioui",
                "minute": "75",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Tarik Sektioui",
                "starter": false,
                "inMinute": 0,
                "outMinute": 0,
                "minutes": 0,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "N/A",
        "coach": "Humberto COELHO",
        "cards": [],
        "source": "FRIENDSHIP TOURNAMENT"
    },
    {
        "key": "08/02/2001|southkoreab",
        "date": "08/02/2001",
        "city": "Dubai",
        "stadium": "United Arab Emirates",
        "attendance": "500",
        "opponent": "SOUTH KOREA B",
        "score": "1-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Otman El-Assas",
                "minute": "10",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Driss Benzekri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Kacemi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 42,
                "minutes": 42,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Rachid Regadi",
                "starter": false,
                "inMinute": 42,
                "outMinute": 90,
                "minutes": 48,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Faouzi El-Brazi 24']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Lahcen Abrami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Otman El-Assas",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Sellami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Said Chiba",
                "starter": true,
                "inMinute": 0,
                "outMinute": 66,
                "minutes": 66,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tarik Sektioui",
                "starter": false,
                "inMinute": 66,
                "outMinute": 90,
                "minutes": 24,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": true,
                "inMinute": 0,
                "outMinute": 89,
                "minutes": 89,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Benmahmoud",
                "starter": false,
                "inMinute": 89,
                "outMinute": 90,
                "minutes": 1,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Rokki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 81,
                "minutes": 81,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Daoudi",
                "starter": false,
                "inMinute": 81,
                "outMinute": 90,
                "minutes": 9,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mohamed Ali BUJSAIM [UAE]",
        "coach": "Humberto COELHO",
        "cards": [
            {
                "name": "Noureddine Kacemi",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Otman El-Assas",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "FRIENDSHIP TOURNAMENT"
    },
    {
        "key": "28/01/2001|egypt",
        "date": "28/01/2001",
        "city": "Cairo",
        "stadium": "Egypt",
        "attendance": "60.000",
        "opponent": "EGYPT",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Driss Benzekri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Oualid Regragui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelkrim El-Hadrioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Rossi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tahar El-Khalej 31']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Gharib Amzine",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 87,
                "minutes": 87,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": false,
                "inMinute": 87,
                "outMinute": 90,
                "minutes": 3,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 59,
                "minutes": 59,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hassan Nader",
                "starter": false,
                "inMinute": 59,
                "outMinute": 90,
                "minutes": 31,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mohamed Abdelhakim SHELMANI [LIBYA]",
        "coach": "Humberto COELHO",
        "cards": [
            {
                "name": "Driss Benzekri",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Oualid Regragui",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Youssef Chippo",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "13/01/2001|tunisia",
        "date": "13/01/2001",
        "city": "Tunis",
        "stadium": "Tunisia",
        "attendance": "35.000",
        "opponent": "TUNISIA",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Abdejalil Hadda",
                "minute": "49",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Driss Benzekri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdeslam Ouaddou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Rossi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tahar El-Khalej",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Mustapha Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 71,
                "minutes": 71,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": false,
                "inMinute": 71,
                "outMinute": 90,
                "minutes": 19,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 81,
                "minutes": 81,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Sellami",
                "starter": false,
                "inMinute": 81,
                "outMinute": 90,
                "minutes": 9,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Gharib Amzine",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 89,
                "minutes": 89,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Said Chiba",
                "starter": false,
                "inMinute": 89,
                "outMinute": 90,
                "minutes": 1,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Gamal EL-GHANDOUR [EGYPT]. 2000",
        "coach": "Humberto COELHO",
        "cards": [
            {
                "name": "Driss Benzekri",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Noureddine Naybet",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Tahar El-Khalej",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "08/10/2000|kenya",
        "date": "08/10/2000",
        "city": "Casablanca",
        "stadium": "Morocco",
        "attendance": "",
        "opponent": "KENYA",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Youssef Chippo",
                "minute": "43",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Abderafi Gassi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Faouzi El-Brazi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdelkrim El-Hadrioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelilah Saber",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Mustapha Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 72,
                "minutes": 72,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelfattah El-Khattari",
                "starter": false,
                "inMinute": 72,
                "outMinute": 90,
                "minutes": 18,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hassan Kachloul",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Said Chiba 45']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": true,
                "inMinute": 0,
                "outMinute": 80,
                "minutes": 80,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": false,
                "inMinute": 80,
                "outMinute": 90,
                "minutes": 10,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Alex QUARTEY [GHANA]",
        "coach": "Mustapha MADIH",
        "cards": [
            {
                "name": "Noureddine Naybet",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Youssef Safri",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "02/09/2000|gabon",
        "date": "02/09/2000",
        "city": "Libreville",
        "stadium": "Gabon",
        "attendance": "4.000",
        "opponent": "GABON",
        "score": "0-2",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdellah Fahmi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 75,
                "minutes": 75,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Sellami",
                "starter": false,
                "inMinute": 75,
                "outMinute": 90,
                "minutes": 15,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelilah Saber",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 69,
                "minutes": 69,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Lahcen Abrami",
                "starter": false,
                "inMinute": 69,
                "outMinute": 90,
                "minutes": 21,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Meriana",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Bidodane",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jaouad Zairi 67']",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Sidi Bekaye MAGASSA [MALI]",
        "coach": "Henryk KASPERCZAK",
        "cards": [
            {
                "name": "Youssef Chippo",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP QUALIFIER"
    },
    {
        "key": "09/07/2000|algeria",
        "date": "09/07/2000",
        "city": "Fes",
        "stadium": "Morocco",
        "attendance": "10.000",
        "opponent": "ALGERIA",
        "score": "2-1",
        "halfTime": "",
        "scorers": [
            {
                "name": "Abdejalil Hadda",
                "minute": "51",
                "penalty": false
            },
            {
                "name": "Abdejalil Hadda",
                "minute": "75",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Abderafi Gassi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Neqrouz",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelilah Saber",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 82,
                "minutes": 82,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Mourad Hdioued",
                "starter": false,
                "inMinute": 82,
                "outMinute": 90,
                "minutes": 8,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Said Chiba",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Meriana",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelfattah El-Khattari",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": true,
                "inMinute": 0,
                "outMinute": 89,
                "minutes": 89,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Sellami",
                "starter": false,
                "inMinute": 89,
                "outMinute": 90,
                "minutes": 1,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 2,
                "cards": []
            }
        ],
        "referee": "Ferid SAHLI [TUNISIA]",
        "coach": "Henryk KASPERCZAK",
        "cards": [
            {
                "name": "Abdelilah Saber",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Youssef Chippo",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "17/06/2000|namibia",
        "date": "17/06/2000",
        "city": "Windhoek",
        "stadium": "Namibia",
        "attendance": "5.000",
        "opponent": "NAMIBIA",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Abderafi Gassi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Benchrifa",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Lahcen Abrami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Otman El-Assas",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Hdioued",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Sellami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Meriana",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 77,
                "minutes": 77,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Bidodane",
                "starter": false,
                "inMinute": 77,
                "outMinute": 90,
                "minutes": 13,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Hicham Zerouali",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Edwin SENAI [BOTSWANA]",
        "coach": "Henryk KASPERCZAK",
        "cards": [
            {
                "name": "Jamal Sellami",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Salaheddine Bassir",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "06/06/2000|france",
        "date": "06/06/2000",
        "city": "Casablanca",
        "stadium": "Morocco",
        "attendance": "55.000",
        "opponent": "FRANCE",
        "score": "1-5",
        "halfTime": "",
        "scorers": [
            {
                "name": "Noureddine Naybet",
                "minute": "66",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Benchrifa",
                "starter": false,
                "inMinute": 90,
                "outMinute": 90,
                "minutes": 0,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 75,
                "minutes": 75,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Jamal Sellami",
                "starter": false,
                "inMinute": 75,
                "outMinute": 90,
                "minutes": 15,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Lahcen Abrami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 59,
                "minutes": 59,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Mohamed Kharbouch",
                "starter": false,
                "inMinute": 59,
                "outMinute": 90,
                "minutes": 31,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Meriana",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Hdioued",
                "starter": true,
                "inMinute": 0,
                "outMinute": 59,
                "minutes": 59,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": false,
                "inMinute": 59,
                "outMinute": 90,
                "minutes": 31,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Othman El-Assas",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 63,
                "minutes": 63,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelfattah El-Khattari",
                "starter": false,
                "inMinute": 63,
                "outMinute": 90,
                "minutes": 27,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Zerouali",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mohamed Ali BUJSAIM [UAE]",
        "coach": "Henryk KASPERCZAK",
        "cards": [
            {
                "name": "Lahcen Abrami",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "HASSAN II TOURNAMENT"
    },
    {
        "key": "04/06/2000|jamaica",
        "date": "04/06/2000",
        "city": "Casablanca",
        "stadium": "Morocco",
        "attendance": "40.000",
        "opponent": "JAMAICA",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Hicham Zerouali",
                "minute": "61",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Karim Zaza",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed Benchrifa",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Lahcen Abrami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Otman El-Assas",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mourad Hdioued",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Sellami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hicham Zerouali",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 1,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Meriana",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "N/A",
        "coach": "Henryk KASPERCZAK",
        "cards": [],
        "source": "HASSAN II TOURNAMENT"
    },
    {
        "key": "22/04/2000|gambia",
        "date": "22/04/2000",
        "city": "Casablanca",
        "stadium": "Morocco",
        "attendance": "10.800",
        "opponent": "GAMBIA",
        "score": "2-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Abdelfattah El-Khattari",
                "minute": "17",
                "penalty": false
            },
            {
                "name": "Abdelfattah El-Khattari",
                "minute": "31",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdellatif Jrindou",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdelilah Saber",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Otman El-Assas",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Sellami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Meriana",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdelfattah El-Khattari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 2,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 77,
                "minutes": 77,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustpha Bidodane",
                "starter": false,
                "inMinute": 77,
                "outMinute": 90,
                "minutes": 13,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Mohamed AL-HABIB [LIBYA]",
        "coach": "Henryk KASPERCZAK",
        "cards": [
            {
                "name": "Khalid Fouhami",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Abdellatif Jrindou",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Youssef Meriana",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "09/04/2000|gambia",
        "date": "09/04/2000",
        "city": "Banjul",
        "stadium": "Gambia",
        "attendance": "20.000",
        "opponent": "GAMBIA",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Bouchaib El-Moubarki",
                "minute": "63",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Talal El-Karkouri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelilah Saber",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Safri",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 88,
                "minutes": 88,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": false,
                "inMinute": 88,
                "outMinute": 90,
                "minutes": 2,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 88,
                "minutes": 88,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Otman El-Assas",
                "starter": false,
                "inMinute": 88,
                "outMinute": 90,
                "minutes": 2,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Sellami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Meriana",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelfattah El-Khattari",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Bouchaib El-Moubarki",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Mamadouba CAMARA [GUINEA]",
        "coach": "Henryk KASPERCZAK",
        "cards": [
            {
                "name": "Abdelilah Saber",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "WORLD CUP QUALIFIER"
    },
    {
        "key": "03/02/2000|nigeria",
        "date": "03/02/2000",
        "city": "Lagos",
        "stadium": "Nigeria",
        "attendance": "40.000",
        "opponent": "NIGERIA",
        "score": "0-2",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Lahcen Abrami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Neqrouz",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelilah Saber",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tahar El-Khalej",
                "starter": true,
                "inMinute": 0,
                "outMinute": 77,
                "minutes": 77,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Rachid Benmahmoud",
                "starter": false,
                "inMinute": 77,
                "outMinute": 90,
                "minutes": 13,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Sellami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Said Chiba",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Youssef Meriana",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Ahmed Bahja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 70,
                "minutes": 70,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": false,
                "inMinute": 70,
                "outMinute": 90,
                "minutes": 20,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": true,
                "inMinute": 0,
                "outMinute": 45,
                "minutes": 45,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mohamed El-Badraoui",
                "starter": false,
                "inMinute": 45,
                "outMinute": 90,
                "minutes": 45,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Coffi CODJIA [BENIN]",
        "coach": "Henri MICHEL",
        "cards": [
            {
                "name": "Tahar El-Khalej",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Said Chiba",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP ROUND ONE"
    },
    {
        "key": "29/01/2000|tunisia",
        "date": "29/01/2000",
        "city": "Lagos",
        "stadium": "Nigeria",
        "attendance": "5.000",
        "opponent": "TUNISIA",
        "score": "0-0",
        "halfTime": "",
        "scorers": [],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Abdelkrim El-Hadrioui",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelilah Saber",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Tahar El-Khalej",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 88,
                "minutes": 88,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Hassan Kachloul",
                "starter": false,
                "inMinute": 88,
                "outMinute": 90,
                "minutes": 2,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 11,
                "minutes": 11,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Benmahmoud",
                "starter": false,
                "inMinute": 11,
                "outMinute": 90,
                "minutes": 79,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Jamal Sellami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Said Chiba",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Adil Ramzi",
                "starter": true,
                "inMinute": 0,
                "outMinute": 67,
                "minutes": 67,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": false,
                "inMinute": 67,
                "outMinute": 90,
                "minutes": 23,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            }
        ],
        "referee": "Falla NDOYÉ [SENEGAL]",
        "coach": "Henri MICHEL",
        "cards": [
            {
                "name": "Noureddine Naybet",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Jamal Sellami",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP ROUND ONE"
    },
    {
        "key": "25/01/2000|congo",
        "date": "25/01/2000",
        "city": "Lagos",
        "stadium": "Nigeria",
        "attendance": "8.000",
        "opponent": "CONGO",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Salaheddine Bassir",
                "minute": "85",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Khalid Fouhami",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Noureddine Naybet",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Rachid Neqrouz",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdelilah Saber",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Taher El-Khalej",
                "starter": true,
                "inMinute": 0,
                "outMinute": 76,
                "minutes": 76,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Rachid Benmahmoud",
                "starter": false,
                "inMinute": 76,
                "outMinute": 90,
                "minutes": 14,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Mustapha Hadji",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Chippo",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Said Chiba",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Youssef Meriana",
                "starter": true,
                "inMinute": 0,
                "outMinute": 90,
                "minutes": 90,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Ahmed Bahja",
                "starter": true,
                "inMinute": 0,
                "outMinute": 76,
                "minutes": 76,
                "goals": 0,
                "cards": [
                    {
                        "type": "Y",
                        "minute": ""
                    }
                ]
            },
            {
                "name": "Adil Ramzi",
                "starter": false,
                "inMinute": 76,
                "outMinute": 90,
                "minutes": 14,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Abdejalil Hadda",
                "starter": true,
                "inMinute": 0,
                "outMinute": 83,
                "minutes": 83,
                "goals": 0,
                "cards": []
            },
            {
                "name": "Salaheddine Bassir",
                "starter": false,
                "inMinute": 83,
                "outMinute": 90,
                "minutes": 7,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "Alex QUARTEY [GHANA]",
        "coach": "Henri MICHEL",
        "cards": [
            {
                "name": "Noureddine Naybet",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Abdelilah Saber",
                "type": "Y",
                "minute": ""
            },
            {
                "name": "Ahmed Bahja",
                "type": "Y",
                "minute": ""
            }
        ],
        "source": "NATIONS CUP ROUND ONE"
    },
    {
        "key": "18/01/2000|trinidadtobago",
        "date": "18/01/2000",
        "city": "El Jadida",
        "stadium": "Morocco",
        "attendance": "10.000",
        "opponent": "TRINIDAD & TOBAGO",
        "score": "1-0",
        "halfTime": "",
        "scorers": [
            {
                "name": "Mustapha Hadji",
                "minute": "34",
                "penalty": false
            }
        ],
        "players": [
            {
                "name": "Mustapha Hadji",
                "starter": false,
                "inMinute": 0,
                "outMinute": 0,
                "minutes": 0,
                "goals": 1,
                "cards": []
            }
        ],
        "referee": "N/A",
        "coach": "Henri MICHEL",
        "cards": [],
        "source": "FRIENDLY INTERNATIONAL"
    }
];
