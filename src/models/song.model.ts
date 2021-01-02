/* eslint-disable prettier/prettier */
import { model, Schema, Document } from 'mongoose';
import { Song } from '../interfaces/song.interface';

const songSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  artist: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});

const songModel = model<Song & Document>('Song', songSchema, 'music');

export default songModel;
