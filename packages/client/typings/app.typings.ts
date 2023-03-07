export enum EnemyType {
  GOBLIN,
  HOBGOBLIN,
  ORC,
}

export enum TowerType {
  ARCHER,
  STONE,
}

export type TGameSettings = {
  tileSize: number;
  width: number;
  height: number;
  hearts: number;
  coins: number;
  waves: {
    enemies: {
      type: EnemyType;
      count: number;
    }[];
  }[];
  towers: TowerType[];
  placementTiles: number[];
  waypoints: {
    x: number;
    y: number;
  }[];
};

export type TEnemySettings = {
  width: number;
  height: number;
  radius: number;
  health: number;
  speed: number;
  imageSrc: string;
  coins: number;
  points: number;
};

export type TBuildingSettings = {
  radius: number;
  delay: number;
  imageSrc: string;
  cost: number;
  projectile: {
    imageSrc: string;
    radius: number;
    damage: number;
  };
};

export type State = {
  game: GameState;
};

export type GameState = {
  points: number;
};

export type UserInfo = {
  id: string;
  first_name: string;
  second_name: string;
  display_name: string | null;
  login: string;
  avatar: string | null;
  email: string | null;
  phone: string | null;
};
