export class PadelMatch {
  id: number;
  date: Date;
  players: PadelPlayer;
  location: PadelLocation;
}

export interface PadelPlayer extends Player{
  rating: number
}

export interface Player {
  name: string,
  nickName: string
}

export enum PadelLocation {
  Benduqidze,
  Ninoshvili,
  Lisi,
  Mtatsminda
}
