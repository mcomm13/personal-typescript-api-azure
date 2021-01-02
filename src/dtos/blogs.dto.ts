import { IsString } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  public title: string;

  @IsString()
  public date: string;

  @IsString()
  public author: string;

  @IsString()
  public content: string;
}
