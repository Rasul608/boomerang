// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 2;
    this.health = 1;
    this.speed = 1;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= this.speed;
  }

  takeDamage() {
    this.health -= 1;
    if(this.health <= 0) {
      this.die();
    }

  }

  die() {
    this.position = '?';
    console.log('Enemy is dead!');
  }
  
  update() {
    this.moveLeft();
  }
}

module.exports = Enemy;
