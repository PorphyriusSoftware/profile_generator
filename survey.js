const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const quesions = ['What\'s your name ? Nicknames are also acceptable: ',
    'What\'s an activity you like doing?: ',
    'What do you listen to while doing that ?: ',
    'Which meal is your favourite(eg: dinner, brunch, etc.): ',
    'What\'s your favourite thing to eat for that meal?: ',
    'Which sport is your absolute favourite ?: ',
    'What is your superpower ? In a few words, tell us what you are amazing at!: ']

let index = 0;

const answers = [];


const gatherData = (quesions, index) => {

    rl.question(quesions[index], (answer) => {

        index++
        answers.push(answer);
        if (index < quesions.length) {
            gatherData(quesions, index);
        }


        if (index === quesions.length) {

            console.log(`
            Hello my name is ${answers[0]}.
            I really enjoy ${answers[1]} while listening to ${answers[2]}.
            I absolutely like ${answers[4]} at ${answers[3]}.
            My favourite sport is ${answers[5]}.
            And of course my super power is ${answers[6]}`);
            
            rl.close();
        }

    });

}

gatherData(quesions, index);



