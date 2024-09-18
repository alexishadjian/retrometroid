require('dotenv').config();
const express = require("express");
const http = require("http");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")
import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('coucou les amis');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
