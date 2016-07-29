var game = new Phaser.Game(800, 640, Phaser.AUTO, 'game');
var map;
var layer;
game.global = {
  score: 0
};

// game.state.add('boot', BootState);
game.state.add('load', LoadState);
// game.state.add('menu', MenuState);
game.state.add('play', PlayState);

game.state.start('load');
