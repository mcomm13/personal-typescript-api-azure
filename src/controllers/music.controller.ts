import { NextFunction, Request, Response } from 'express';
import { Song } from '../interfaces/song.interface';
import musicService from '../services/music.service';

class MusicController {
  public musicService = new musicService();

  public getSongs = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllSongsData: Song[] = await this.musicService.findAllSongs();
      res.status(200).json({ data: findAllSongsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getSongById = async (req: Request, res: Response, next: NextFunction) => {
    const songId: string = req.params.id;

    try {
      const findOneSongData: Song = await this.musicService.findSongById(songId);
      res.status(200).json({ data: findOneSongData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
}

export default MusicController;
