var readlineSync=require('readline-sync')
const chalk=require('chalk')
const log=console.log

log(chalk.bgCyan.black.bold.italic('__Are you born in a Leap Year?__ '))
var userName=readlineSync.question('\nWhat is your name? ')
var year=readlineSync.question(chalk.yellow('\nEnter your birth year: '));

while(isNaN(year)){
  console.log(chalk.cyan('\nEnter a valid input'))
  var year=readlineSync.question(chalk.yellow('Enter your birth year: '));
}


if(year%4===0 && year%100!=0 || year%400===0){
  console.log(chalk.green('\nYay!! you were born in a leap year'));
  console.log(chalk.magenta('\nGo and share this with your friends on social media.'));
}else{
  console.log(chalk.red('\nOpps!! you were not born in a leap year.'));
}

