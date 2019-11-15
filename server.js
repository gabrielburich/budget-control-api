import express from 'express';
import consign from 'consign';

const server = express();

consign()
  .include('libs/config.js')
  .then('db.js')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(server);
