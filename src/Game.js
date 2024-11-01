// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const keypress = require('keypress'); // kraken

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({position: 0, weapon: new Boomerang()}); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }

  play() {
    setInterval(() => {
      this.keyListener(); // kraken 
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    });
  }

  keyListener() {                                           // kraken
    keypress(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.on('keypress', (ch, key) => {
      if (key.ctrl && key.name === 'c') {
        process.exit(); // выход из игры по Ctrl+C
      }
      if (key.name === 'a') {
        this.attack();
      }
    });
  }                                                        // 
}

module.exports = Game;
