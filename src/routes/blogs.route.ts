import { Router } from 'express';
import BlogsController from '../controllers/blogs.controller';
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';
import { CreateBlogDto } from '../dtos/blogs.dto';

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
    this.router.post(`${this.path}/create`, validationMiddleware(CreateBlogDto, 'body'), this.blogsController.createBlog);
    this.router.put(`${this.path}/update/:id`, validationMiddleware(CreateBlogDto, 'body', true), this.blogsController.updateBlog);
  }
}

export default BlogsRoute;
