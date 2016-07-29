var LoadState = {

  preload: function() {

    // Images
    game.load.image('rat-baby', 'assets/rat-baby.png');
    game.load.image('rat-male', 'assets/rat-male.png');
    game.load.image('rat-female', 'assets/rat-female.png');

    // Tilemaps
    game.load.tilemap('map', 'assets/map2.json', null, Phaser.Tilemap.TILED_JSON);
    //game.load.tilemap('map', 'assets/tilemaps/maps/tile_properties.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/gridtiles.png');
  },

  create: function() {
    game.state.start('play');
  }

}
