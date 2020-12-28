import { Router } from 'express';
import BlogsController from '../controllers/blogs.controller';
import Route from '../interfaces/routes.interface';

class BlogsRoute implements Route {
  public path = '/blogs';
  public router = Router();
  public blogsController = new BlogsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.blogsController.getBlogs);
    this.router.get(`${this.path}/:id`, this.blogsController.getBlogById);
  }
}

export default BlogsRoute;
