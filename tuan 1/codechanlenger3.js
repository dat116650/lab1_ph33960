const gameEvents = new Map([
        [17, 'GOAL'],
        [36, 'Substitution'],
        [47, 'GOAL'],
        [61, 'Substitution'],
        [64, 'Yellow Card'],
        [69, 'Red Card'],
        [70, 'Substitution'],
        [72, 'Substitution'],
        [76, 'GOAl'],
        [80, 'GOAl'],
        [92, 'Yellow Card'],

    ])
    //1.
console.log(gameEvents.values())
const events = [...new Set(gameEvents.values())];
console.log(events);
//2.
gameEvents.delete(64);
//3.
console.log('an events happened,on average,every $(time/game.Events.size) minutes');
const time = [...gameEvents.keys()].pop();
console.log(time);
//4.
for (const [key, values] of gameEvents) {
    console.log(`[${half} HALF] ${min}: ${events}`);

}