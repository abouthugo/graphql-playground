import mongoose from 'mongoose'
import {Song} from './Song'
import {Artist} from './Artist'


const URL = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`
mongoose.connect(URL, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

export {Song, Artist}