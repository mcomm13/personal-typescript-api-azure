import HttpException from '../exceptions/HttpException';
import { Song } from '../interfaces/song.interface';
import songModel from '../models/song.model';

class MusicService {
  public songs = songModel;

  public async findAllSongs(): Promise<Song[]> {
    const songs: Song[] = await this.songs.find();
    return songs;
  }

  public async findSongById(id: string): Promise<Song> {
    const findSong: Song = await this.songs.findOne({ _id: id });
    if (!findSong) throw new HttpException(409, 'Song not found');

    return findSong;
  }
}

export default MusicService;
