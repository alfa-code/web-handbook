// const { Client } = require('pg');
// const { Client } = require('pg');

import pg from 'pg';
const { Client } = pg;

import { PGHOST, PGPORT, PGUSER, PGDATABASE, PGPASSWORD } from '../../constants/env-variables';

export function createPGClient() {
    const client = new Client({
        user: process.env[PGUSER],
        host: process.env[PGHOST],
        database: process.env[PGDATABASE],
        password: process.env[PGPASSWORD],
        port: process.env[PGPORT],
    });

    return client;
}

