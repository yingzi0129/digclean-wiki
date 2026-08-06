export interface Item {
  id: string;
  name: string;
  rarity: string;
  value: number;
  recommendation: string;
  location: string;
  description: string;
  confidence: string;
}

export interface CodeRow {
  code: string;
  reward: string;
}

export interface StagePick {
  stage: string;
  shovel: string;
  why: string;
  confidence: string;
}

export interface Shovel {
  name: string;
  speed: number;
  power: number;
  price: number;
  bestFor: string;
  confidence: string;
}
