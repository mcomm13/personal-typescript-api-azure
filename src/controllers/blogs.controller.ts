import { NextFunction, Request, Response } from 'express';
import { Blog } from '../interfaces/blogs.interface';
import blogService from '../services/blog.service';
import { CreateBlogDto } from '../dtos/blogs.dto';

class BlogsController {
  public blogService = new blogService();

  public getBlogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllBlogsData: Blog[] = await this.blogService.findAllBlogs();
      res.status(200).json({ data: findAllBlogsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getBlogById = async (req: Request, res: Response, next: NextFunction) => {
    const blogId: string = req.params.id;

    try {
      const findOneBlogData: Blog = await this.blogService.findBlogById(blogId);
      res.status(200).json({ data: findOneBlogData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createBlog = async (req: Request, res: Response, next: NextFunction) => {
    const blogData: CreateBlogDto = req.body;

    try {
      const createBlogData: Blog = await this.blogService.createBlog(blogData);
      res.status(201).json({ data: createBlogData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateBlog = async (req: Request, res: Response, next: NextFunction) => {
    const blogId: string = req.params.id;
    const blogData: Blog = req.body;

    try {
      const updateBlogData: Blog = await this.blogService.updateBlog(blogId, blogData);
      res.status(200).json({ data: updateBlogData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };
}

export default BlogsController;
