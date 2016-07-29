// We create our only state
var PlayState = {

  create: function() {
    game.stage.backgroundColor = '#3498DB';
    game.physics.startSystem(Phaser.Physics.Arcade);
    game.renderer.renderSession.roundPixels = true;
    this.cursor = game.input.keyboard.createCursorKeys();

    this.map = game.add.tilemap('map');
    this.map.addTilesetImage('tiles');

    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();
    this.map.setCollisionBetween(2, 200)

    // Initialize player and set physics properties
    // this.ratBabies = game.add.group();
    // this.ratBabies.enableBody = true;
    // game.add.image(100, 200, 'rat-baby', this.ratBabies);
    // this.ratBabies.setAll('anchor', 0.5);
    // this.ratBabies.setAll('scale', 2);
    this.rat = game.add.sprite(32, 32, 'rat-baby');
    this.rat.scale.setTo(2);
    game.physics.enable(this.rat, Phaser.Physics.ARCADE);

    this.rat.body.velocity.x = 100 * game.rnd.pick([-1, 1]);
    this.rat.body.velocity.y = 100 * game.rnd.pick([-1, 1]);
    this.rat.body.bounce.x = true;
    this.rat.body.bounce.y = true;

    // Create cursor keys

    // Initialize score text
    // this.scoreLabel = game.add.text(30, 30, 'Score: 0', {
    //   font: '20px Geo', fill: '#ffffff', fontWeight: 300
    // });
    // game.global.score = 0;

    // // Initialize enemies
    // this.enemies = game.add.group();
    // this.enemies.enableBody = true;
    // this.enemies.createMultiple(10, 'enemy');
    // game.time.events.loop(2200, this.addEnemy, this);

    // // Particle emitter
    // this.emitter = game.add.emitter(0, 0, 15);
    // this.emitter.makeParticles('pixel');
    // this.emitter.setYSpeed(-150, 150);
    // this.emitter.setXSpeed(-150, 150);
    // this.emitter.setScale(2, 0, 2, 0, 800);
    // this.emitter.gravity = 0;

    // // Initialize sounds
    // this.jumpSound = game.add.audio('jump');
    // this.coinSound = game.add.audio('coin');
    // this.deadSound = game.add.audio('dead');

    // // Create world
    // this.createWorld();
    //
    // if (!game.device.desktop) {
    //   this.addMobileInputs();
    // }
  },

  update: function() {
    game.physics.arcade.collide(this.rat, this.layer);

    //this.rat.body.velocity.set(0);

    // if (this.cursor.left.isDown)
    // {
    //     this.rat.body.velocity.x = -100;
    // }
    // else if (this.cursor.right.isDown)
    // {
    //     this.rat.body.velocity.x = 100;
    // }
    // else if (this.cursor.up.isDown)
    // {
    //     this.rat.body.velocity.y = -100;
    // }
    // else if (this.cursor.down.isDown)
    // {
    //     this.rat.body.velocity.y = 100;
    // }

  }

};
