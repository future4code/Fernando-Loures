var fs = require('fs');


let index = 2
let task = ""
while (process.argv[index]) {
    task += process.argv[index] + " "
    index += 1
}

// // tasks.push(task)
// for (const t of tasks) {
//     console.log('opa', t)
// }
// console.log('aqui', tasks)

fs.appendFile('demofile.txt', `\n${task}`, function(err) {
    if (err) throw err;
    console.log('Saved!');
})


fs.readFile('demofile.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});