import HttpException from '../exceptions/HttpException';
import { Blog } from '../interfaces/blogs.interface';
import blogModel from '../models/blogs.model';

class BlogService {
  public blogs = blogModel;

  public async findAllBlogs(): Promise<Blog[]> {
    const blogs: Blog[] = await this.blogs.find();
    return blogs;
  }

  public async findBlogById(id: string): Promise<Blog> {
    const findBlog: Blog = await this.blogs.findOne({ _id: id });
    if (!findBlog) throw new HttpException(409, "You're not user");

    return findBlog;
  }
}

export default BlogService;
