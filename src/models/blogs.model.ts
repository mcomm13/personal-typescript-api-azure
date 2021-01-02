/* eslint-disable prettier/prettier */
import { model, Schema, Document } from 'mongoose';
import { Blog } from '../interfaces/blogs.interface';

const blogSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  youtubeUrl: {
    type: String,
    required: false,
  },
});

const blogModel = model<Blog & Document>('Blog', blogSchema, 'blog');

export default blogModel;
