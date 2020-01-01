const spawn = require('cross-spawn');

function bindToLogs(programm) {
    programm.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    programm.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    programm.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}

// Сборка клиента
const clientProcess = spawn(
    'yarn',
    [
        'build:client',
        '--watch'
    ]
);
bindToLogs(clientProcess);


// Сборка сервера
const serverProcess = spawn(
    'yarn',
    [
        'build:server',
        '--watch'
    ]
);
bindToLogs(serverProcess);

// Старт сервера
const startServerProcess = spawn(
    'yarn',
    [
        'nodemon',
        './.build/server.js',
        '--inspect',
        '--watch',
        './.build/server.js',
        '-L'
    ]
);
bindToLogs(startServerProcess);

