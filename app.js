const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const FileStore = require('session-file-store')(session);

const authRouter = require('./src/routes/auth.router');
const tasksRouter = require('./src/routes/tasks.router')

const PORT = process.env.PORT || 3030;

const sessionConfig = {
  name: 'user',
  secret: process.env.COOKIE_SECRET ?? 'summer',
  store: new FileStore(),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(sessionConfig));

app.use('/auth', authRouter);
app.use('/tasks', tasksRouter);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
  


app.listen(PORT, () => {
  console.log('Server running on Port', PORT);
});

