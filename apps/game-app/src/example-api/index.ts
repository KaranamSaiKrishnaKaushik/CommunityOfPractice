const games = [
    {
      id: 'battleship',
      name: 'Battleship',
      image: '/assets/battleship.png', // 'https://media.giphy.com/media/xUNda3pLJEsg4Nedji/giphy.gif',
      description:
        'Battleship (also known as Battleships or Sea Battle) is a strategy type guessing game for two players',
      price: 35,
      rating: Math.random()
    },
    {
      id: 'chess',
      name: 'Chess',
      image: '/assets/chess1.png', // 'https://media.giphy.com/media/iCZyBnPBLr0dy/giphy.gif',
      description: 'One of the oldest and most popular board games, played by two opponents on a checkered board with specially designed pieces of contrasting colours, commonly white and black',
      price: 15,
      rating: Math.random()
    },
    {
      id: 'diceball',
      name: 'Diceball',
      image: '/assets/diceball.png', // 'https://media.giphy.com/media/12xMvwvQXJNx0k/giphy.gif',
      description: 'Diceball! is a board game in which two players roll dice to simulate a baseball game, one representing the visiting team and the other the home team',
      price: 45,
      rating: Math.random()
    }
  ];
  
  export const getAllGames = () => games;
  export const getGame = (id: string) => games.find(game => game.id === id);