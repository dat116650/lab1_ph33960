document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function() {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n ');

    console.log(rows);
    for (const [i, row] of rows.entries()) {
        const [fist, second] = row.toLowerCase().trim().split('_');
        console.log(row, fist, second);
        const output = `${fist}${second.replace(sencond[0],second[0].toUpperCase)}`;
        console.log(output.padEnd(`${output.padEnd(20)}`));


    }

});