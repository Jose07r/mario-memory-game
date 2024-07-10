const cardsPaths = Object.values(
  import.meta.glob('@assets/images/cards/*.{png, PNG}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
);

export const rawCards = [
  {
    id: 0,
    name: 'Mario',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 0,
    name: 'Mario',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 1,
    name: 'Luigi',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 1,
    name: 'Luigi',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 2,
    name: 'Baby Mario',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 2,
    name: 'Baby Mario',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 3,
    name: 'Baby Luigi',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 3,
    name: 'Baby Luigi',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 4,
    name: 'Boo',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 4,
    name: 'Boo',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 5,
    name: 'Bowser',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 5,
    name: 'Bowser',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 6,
    name: 'Bowser Jr.',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 6,
    name: 'Bowser Jr.',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 7,
    name: 'Daisy',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 7,
    name: 'Daisy',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 8,
    name: 'Donkey Kong',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 8,
    name: 'Donkey Kong',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 9,
    name: 'Koopa Troopa',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 9,
    name: 'Koopa Troopa',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 10,
    name: 'Peach',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 10,
    name: 'Peach',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 11,
    name: 'Toad',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 11,
    name: 'Toad',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 12,
    name: 'Waluigi',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 12,
    name: 'Waluigi',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 13,
    name: 'Wario',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 13,
    name: 'Wario',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 14,
    name: 'Yoshi',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
  {
    id: 14,
    name: 'Yoshi',
    imageSrc: function () {
      return cardsPaths.at(this.id);
    },
    flipped: true,
    matched: false,
  },
];
