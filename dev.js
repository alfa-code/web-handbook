const spawn = require('cross-spawn');

const env = Object.create( process.env );

env.NODE_ENV = 'development';

env.JWT_SECRET_KEY = 'secret';
env.PGHOST = 'localhost';
env.PGPORT = 5432;
env.PGDATABASE = 'postgres';
env.PGUSER = 'postgres';
env.PGPASSWORD = 'postgres';

function bindToLogs(programm, color, deviceType = '') {
    if (!color) {
        color = '\x1b[33m%s\x1b[0m';
    }

    programm.stdout.on('data', (data) => {
        console.log(color, `stdout ${deviceType}: ${data}`);
    });

    programm.stderr.on('data', (data) => {
        console.error(color, `stderr ${deviceType}: ${data}`);
    });

    programm.on('close', (code) => {
        console.log(color, `${deviceType}: child process exited with code ${code}`);
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
bindToLogs(clientProcess, '\x1b[36m%s\x1b[0m', 'client build'); // cyan

// Сборка сервера
const serverProcess = spawn(
    'yarn',
    [
        'build:server',
        '--watch'
    ],
    { env: env }
);
bindToLogs(serverProcess, '\x1b[35m%s\x1b[0m', 'server build'); // magenta

// Старт сервера
const startServerProcess = spawn(
    'yarn',
    [
        'nodemon',
        './.build/server.js',
        // '--inspect=0.0.0.0:7000',
        '--watch', // следим только за изменением этого файла
        './.build/server.js', // следим только за изменением этого файла
        // '-L'
    ],
    { env: env }
);

setTimeout(() => {
    bindToLogs(startServerProcess);
}, 10000);


