import { Router } from 'express';
import MusicController from '../controllers/music.controller';
import Route from '../interfaces/routes.interface';

class BlogsRoute implements Route {
  public path = '/music';
  public router = Router();
  public musicController = new MusicController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.musicController.getSongs);
    this.router.get(`${this.path}/:id`, this.musicController.getSongById);
  }
}

export default BlogsRoute;
