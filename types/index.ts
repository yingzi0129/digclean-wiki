export interface Item {
  id: string;
  name: string;
  rarity: string;
  value: number;
  sellPrice: number;
  museumValue: string;
  location: string;
  description: string;
  recommendation: string;
  keepReason: string;
  confidence: string;
}

export interface Shovel {
  name: string;
  power: number;
  walkSpeed: number;
  price: number;
  bestFor: string;
  location?: string;
  items?: string[];
  confidence: string;
}

export interface Detector {
  name: string;
  luck: string;
  range: number;
  price: number;
  bestFor: string;
  confidence: string;
}

export interface Spray {
  name: string;
  power: number;
  range: number;
  price: number;
  bestFor: string;
  confidence: string;
}

export interface CodeRow {
  code: string;
  reward: string;
  status?: string;
  verified?: string;
  source?: string;
}

export interface CodeData {
  lastUpdated: string;
  active: CodeRow[];
  expired: CodeRow[];
  howToRedeem: string[];
  whereToWatch: string[];
  warnings: string[];
  faq: { q: string; a: string }[];
}

export interface ItemData {
  lastUpdated: string;
  confidence: string;
  items: Item[];
}
