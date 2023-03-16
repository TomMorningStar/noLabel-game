import { EnemyType, TowerType } from '../../../../typings/app.typings';

export const settings = {
  tileSize: 64,
  width: 20,
  height: 12,
  hearts: 10,
  coins: 50,
  waves: [
    {
      enemies: [
        {
          type: EnemyType.ORC_WARRIOR,
          count: 5,
        },
        {
          type: EnemyType.ORC,
          count: 1,
        },
        {
          type: EnemyType.HOBGOBLIN,
          count: 3,
        },
      ],
    },
    {
      enemies: [
        {
          type: EnemyType.HOBGOBLIN,
          count: 3,
        },
      ],
    },
    {
      enemies: [
        {
          type: EnemyType.ORC,
          count: 1,
        },
      ],
    },
  ],
  towers: [TowerType.ARCHER, TowerType.STONE],
  placementTiles: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 91448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91486,
    91486, 91486, 91486, 91486, 91486, 91486, 0, 0, 0, 0, 91448, 0, 0, 0, 0, 0, 0, 0, 0, 91448, 0,
    91448, 0, 91448, 0, 91448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 91448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 91489, 91489, 91489, 91489, 91489, 91489, 91489, 91489, 91489, 91489, 91489, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  waypoints: [
    {
      x: -100,
      y: 640,
    },
    {
      x: -128,
      y: 576,
    },
    {
      x: 512,
      y: 576,
    },
    {
      x: 640,
      y: 448,
    },
    {
      x: 640,
      y: 320,
    },
    {
      x: 896,
      y: 192,
    },
    {
      x: 896,
      y: 64,
    },
    {
      x: 1215.5,
      y: -130,
    },
  ],
};
