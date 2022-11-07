const MissionUtils = require("@woowacourse/mission-utils");

class App {
  answer;
  numberInput;

  play() {
    this.gameStartMessage();
    this.computerRandomNumber();
    this.getUserNumberInput();
  }

  gameStartMessage() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
  };
  

  computerRandomNumber() {
    const nonDuplicateNumbers = [];
    while (nonDuplicateNumbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!nonDuplicateNumbers.includes(randomNumber)) {
        nonDuplicateNumbers.push(randomNumber);
      }
    }
    return nonDuplicateNumbers
  }

  getUserNumberInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (numberInput) => {
      this.userNumberInput = numberInput;
    });
  }

  checkError(numberInput) {
    const NUMBERS = /^[1-9]+$/
    if(!NUMBERS.test(numberInput)) throw new Error('숫자가 입력되지 않았습니다');
    
    if(numberInput.length !== 3) throw new Error('3개의 글자가 아닙니다.');

    if(new Set(numberInput).size !== 3) throw new Error('중복된 숫자가 있습니다.');
  }
}

const app = new App();
app.play();

module.exports = App;