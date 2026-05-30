# Audit pre-deploiement 2006/07-2009/10

Ce controle a ete fait avant integration dans l'application. Il compare les matchs de championnat lus depuis les fichiers source avec le classement final : MJ, V, N, D, BP, BC.

## Synthese

| Saison | Championnat | Matchs lus | Tapis vert | Etat |
|---|---:|---:|---:|---|
| 2006/07 | complet | 240 | 0 | Pret Botola |
| 2007/08 | complet | 240 | 0 | Pret Botola |
| 2008/09 | complet | 240 | 2 | Deployee avec anomalies documentees |
| 2009/10 | complet | 240 | 0 | Pret Botola |

## Details Botola

### 2006/07

Aucune anomalie detectee entre les 240 matchs et le classement final.

Champion : Olympique Club de Khouribga.

### 2007/08

Aucune anomalie detectee entre les 240 matchs et le classement final.

Champion : FAR Rabat.

### 2008/09

Les 240 matchs sont bien detectes, dont 2 matchs sur tapis vert :

| Journee | Match | Score officiel |
|---|---|---:|
| Journee 3 | WAC Casablanca - OC Khouribga | 0-1 |
| Journee 10 | JS El Massira - DH El Jadida | 0-1 |

Malgre cela, 2 equipes ne retombent pas encore sur le classement final :

| Equipe | Classement MJ-V-N-D BP-BC | Exploitation MJ-V-N-D BP-BC | Ecart MJ/V/N/D/BP/BC |
|---|---:|---:|---:|
| JSM | 30-8-10-12 31-41 | 30-8-10-12 29-39 | +0/+0/+0/+0/-2/-2 |
| IZK | 30-7-12-11 22-29 | 30-7-12-11 20-27 | +0/+0/+0/+0/-2/-2 |

Correction deja confirmee : MC Oujda - Raja Casablanca est corrige en 0-0 (mars 2009), tandis que Raja Casablanca - MC Oujda reste 1-0.
Correction deja confirmee : MAS Fes - MA Tetouan est corrige en 0-1 (22 mars 2009), au lieu de 2-2.

Conclusion : la saison est deployee, mais ces anomalies restent documentees dans l'application et dans le rapport global.

### 2009/10

Aucune anomalie detectee entre les 240 matchs et le classement final.

Champion : WAC Casablanca.

## Coupe du Trone

Les finales sont presentes dans les fichiers source :

| Saison | Finale |
|---|---|
| 2006/07 | Rachad Bernoussi 1-1 FAR Rabat, FAR vainqueur aux penalties |
| 2007/08 | MAS Fes 0-1 FAR Rabat apres prolongation |
| 2008/09 | FUS Rabat 1-1 FAR Rabat, FAR vainqueur aux penalties |
| 2009/10 | FUS Rabat 2-1 MAS Fes |
