const game = {
    team1: ' hanoi fc ',
    team2: 'hai phong fc',
    player: [
        [
            'quang hai',
            'tien linh',
            'xuan truong',
            'tien dung',
            'coman',
        ],
        [
            'martin la',
            'minh di',
            'manh dung',
            'tien anh',
            'van toan',

        ],
    ],
    score: '4:0',
    scored: ['tien linh ', 'quang hai', 'xuan truong', 'coman'],
    date: 'nov 9th,2020',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,

    },
};
// 1.
const [player1, player2] = game.player;
console.log(player1, player2);
//2.
const [gk, ...fieldPlayer] = player1
console.log(gk, fieldPlayer);
//3.
const [allPlayer] = [...player1, ...player2];
console.log(allPlayer);
//4.
const players1Final = [...player1, 'quang hai', 'tien linh', 'tien dung'];
//5.
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);
//6.
const printGoals = function(...player) {
    console.log('$(player.length)goals were scored');
}

printGoals(
    'quang hai',
    'tien linh',
    'xuan truong',
    'tien dung',

);

printGoals(
    'quang hai',
    'tien linh',


);
printGoals(...game.scored);
//7
team1 < team2 && console.log('team 1 win');
team1 > team2 && console.log('team 2 win');
//code chanlenger 2
//1.
for (const [i, player] of game.scored.entries()) {
    console.log(` goal ${i + 1}: ${player}`);



}
//2.
const odds = Object.values(game.odds);

let average = 0;
for (const odd of odds) {
    average += odd;
    average /= odds.length;

    console.log(average);
}
//3.
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory
    ${game[team]}`;



    console.log(`odds of $(odd)`);

}