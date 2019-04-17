import { Schema, model } from 'mongoose'

export const Song = model("song", new Schema({
  name: {type: String},
  pace: {type: Number},
  genre: {type: String},
  artistId: {type: String}
}));