var passport = require('passport');
const user = require('../models/user');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var GitHubStratergy = require('passport-github2').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:4000/auth/google/callback'
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(accessToken, refreshToken, profile);
      await user.create(profile);
    }
  )
);

passport.use(
  new GitHubStratergy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:4000/auth/github/callback'
    },
    async function (accessToken, refreshToken, profile, done) {
      console.log(accessToken, refreshToken, profile);
    }
  )
);
