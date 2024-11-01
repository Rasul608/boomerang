// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🪓';
    this.position = 0;
    this.direction = 1;

  }

  fly() {
    this.moveRight();
    this.moveLeft();
  }

  moveLeft() {
    // Идём влево.
    this.position -= this.direction;
  }

  moveRight() {
    // Идём вправо.
    this.position += this.direction;
  }
}

module.exports = Boomerang;
