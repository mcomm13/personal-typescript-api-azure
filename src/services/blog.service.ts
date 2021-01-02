import HttpException from '../exceptions/HttpException';
import { Blog } from '../interfaces/blogs.interface';
import blogModel from '../models/blogs.model';
import { isEmpty } from '../utils/util';
import { CreateBlogDto } from '../dtos/blogs.dto';

class BlogService {
  public blogs = blogModel;

  public async findAllBlogs(): Promise<Blog[]> {
    const blogs: Blog[] = await this.blogs.find();
    return blogs;
  }

  public async findBlogById(id: string): Promise<Blog> {
    const findBlog: Blog = await this.blogs.findOne({ _id: id });
    if (!findBlog) throw new HttpException(409, 'Blog not found');

    return findBlog;
  }

  public async createBlog(blogData: CreateBlogDto): Promise<Blog> {
    if (isEmpty(blogData)) throw new HttpException(400, 'No blog data provided');

    const findBlog: Blog = await this.blogs.findOne({ title: blogData.title });
    if (findBlog) throw new HttpException(409, `This blog title already exists`);

    const createBlogData: Blog = await this.blogs.create({ ...blogData });
    return createBlogData;
  }

  public async updateBlog(blogId: string, blogData: Blog): Promise<Blog> {
    if (isEmpty(blogData)) throw new HttpException(400, 'No blog data provided');

    const updateBlogById: Blog = await this.blogs.findByIdAndUpdate(blogId, { ...blogData });
    if (!updateBlogById) throw new HttpException(409, "This blog entry doesn't exist");

    return updateBlogById;
  }
}

export default BlogService;
