// Сделаем отдельный класс для отображения игры в консоли.
const chalk = require("chalk")

class View {
  render(track) {
    const yourTeamName = 'Зомби с амбициями';

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(chalk.green.bold(`Created by "${yourTeamName}" with love`));

    
  }
}

module.exports = View;
