import { Schema, model } from 'mongoose'

export const Artist = model("artist", new Schema({
  name: {type: String},
  songIds: {type: [String]}
}));