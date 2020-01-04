const spawn = require('cross-spawn');

const env = Object.create( process.env );
env.NODE_ENV = 'development';

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
    ],
    { env: env }
);
bindToLogs(clientProcess);


// Сборка сервера
const serverProcess = spawn(
    'yarn',
    [
        'build:server',
        '--watch'
    ],
    { env: env }
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
    ],
    { env: env }
);

setTimeout(() => {
    bindToLogs(startServerProcess);
}, 5000);


