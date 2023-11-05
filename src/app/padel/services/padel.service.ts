import { Injectable } from '@angular/core';
import { PadelMatch } from '../models/padelMatch';

@Injectable({
  providedIn: 'root',
})
export class PadelService {
  getPadelMatches(): PadelMatch[] {
    const mappedPadelMatches: PadelMatch[] = padelMatches.map((match: any) => ({
      id: match.id,
      date: new Date(match.date),
      players: match.players.map((player: any) => ({
        name: player.name,
        nickName: player.nickName,
        rating: player.rating,
      })),
      location: match.location,
    }));

    return mappedPadelMatches;
  }

  getPadelMatchById(id: number): PadelMatch | undefined {
    const match = padelMatches.find((match: any) => match.id === id);

    if (match) {
      const mappedMatch: PadelMatch = {
        id: match.id,
        date: new Date(match.date),
        players: match.players.map((player: any) => ({
          name: player.name,
          nickName: player.nickName,
          rating: player.rating,
        })),
        location: match.location,
      };
      return mappedMatch;
    } else {
      return undefined;
    }
  }
}

const padelMatches: any[] = [
  {
    id: 1,
    date: '2023-10-11',
    players: [
      {
        name: 'Levan',
        nickName: 'ZviadBliadze',
        rating: 5.0,
      },
    ],
    location: 'Benduqidze',
  },
];
