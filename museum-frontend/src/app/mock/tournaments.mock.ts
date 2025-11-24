import { Tournament } from '../models/tournament.model';

export const MOCK_TOURNAMENTS: Tournament[] = [
  // 2024
  {
    id: 'pgl-major-cph-2024',
    name: 'PGL CS2 Major Copenhagen 2024',
    location: 'Kopenhagen, Dänemark',
    startDate: '2024-03-17',
    endDate: '2024-03-31',
    winnerTeam: 'Team Spirit',
    game: 'CS2',
    prizePoolUsd: 1250000,
    organizer: 'PGL',
    venue: 'Royal Arena',
    description: 'Der erste CS2 Major mit dominanter Performance von Team Spirit und donk.',
    teamsTop4: ['Team Spirit', 'FaZe Clan', 'NAVI', 'MOUZ'],
    mvp: 'donk',
    mapPool: ['Mirage', 'Nuke', 'Inferno', 'Overpass', 'Vertigo', 'Ancient', 'Anubis'],
    eventImageUrl: 'assets/images/cph-major.jpg'
  },


  // 2023
  {
    id: 'blast-paris-major-2023',
    name: 'BLAST.tv Paris Major 2023',
    location: 'Paris, Frankreich',
    startDate: '2023-05-08',
    endDate: '2023-05-21',
    winnerTeam: 'Vitality',
    game: 'CS:GO',
    prizePoolUsd: 1250000,
    organizer: 'BLAST',
    venue: 'Accor Arena',
    description: 'Der letzte CS:GO Major, ausgetragen in Paris, geprägt von der Dominanz von Team Vitality.',
    teamsTop4: ['Vitality', 'GamerLegion', 'Heroic', 'Apeks'],
    mvp: 'ZywOo',
    mapPool: ['Mirage', 'Nuke', 'Inferno', 'Overpass', 'Vertigo', 'Ancient', 'Anubis'],
    eventImageUrl: 'assets/images/paris-major.jpg'
  },
  {
    id: 'iem-cologne-2023',
    name: 'IEM Cologne 2023',
    location: 'Köln, Deutschland',
    startDate: '2023-07-25',
    endDate: '2023-08-06',
    winnerTeam: 'G2 Esports',
    game: 'CS:GO',
    prizePoolUsd: 1000000,
    organizer: 'ESL',
    venue: 'Lanxess Arena',
    description: 'Eines der prestigeträchtigsten Turniere der CS-Szene, bekannt als „Cathedral of Counter-Strike“.',
    teamsTop4: ['G2 Esports', 'ENCE', 'Vitality', 'Astralis'],
    mvp: 'NiKo',
    mapPool: ['Mirage', 'Nuke', 'Inferno', 'Overpass', 'Vertigo', 'Ancient', 'Anubis'],
    eventImageUrl: 'assets/images/iem-cologne-2023.jpg'
  },

  // 2022
  { id: '10', name: 'PGL Major Antwerp 2022', location: 'Antwerpen', startDate: '2022-05-09', winnerTeam: 'FaZe Clan' },
  { id: '11', name: 'IEM Rio Major 2022', location: 'Rio', startDate: '2022-10-31', winnerTeam: 'Outsiders' },
  { id: '12', name: 'IEM Katowice 2022', location: 'Katowice', startDate: '2022-02-15', winnerTeam: 'FaZe Clan' },
  { id: '12', name: 'IEM Katowice 2022', location: 'Katowice', startDate: '2022-02-15', winnerTeam: 'FaZe Clan' },
  { id: '12', name: 'IEM Katowice 2022', location: 'Katowice', startDate: '2022-02-15', winnerTeam: 'FaZe Clan' },
  { id: '12', name: 'IEM Katowice 2022', location: 'Katowice', startDate: '2022-02-15', winnerTeam: 'FaZe Clan' },
  { id: '12', name: 'IEM Katowice 2022', location: 'Katowice', startDate: '2022-02-15', winnerTeam: 'FaZe Clan' },
  { id: '12', name: 'IEM Katowice 2022', location: 'Katowice', startDate: '2022-02-15', winnerTeam: 'FaZe Clan' },
  { id: '12', name: 'IEM Katowice 2022', location: 'Katowice', startDate: '2022-02-15', winnerTeam: 'FaZe Clan' },
  { id: '12', name: 'IEM Katowice 2022', location: 'Katowice', startDate: '2022-02-15', winnerTeam: 'FaZe Clan' },

  //2021
  { id: '10', name: 'PGL Major Antwerp 2022', location: 'Antwerpen', startDate: '2021-05-09', winnerTeam: 'FaZe Clan' },
  { id: '11', name: 'IEM Rio Major 2022', location: 'Rio', startDate: '2021-10-31', winnerTeam: 'Outsiders' },
  { id: '12', name: 'IEM Katowice 2022', location: 'Katowice', startDate: '2021-02-15', winnerTeam: 'FaZe Clan' },

  //2020
  { id: '13', name: 'PGL Major Antwerp 2022', location: 'Antwerpen', startDate: '2020-05-09', winnerTeam: 'FaZe Clan' },
  { id: '14', name: 'IEM Rio Major 2022', location: 'Rio', startDate: '2020-10-31', winnerTeam: 'Outsiders' },
  { id: '15', name: 'IEM Katowice 2022', location: 'Katowice', startDate: '2020-02-15', winnerTeam: 'FaZe Clan' },
];
