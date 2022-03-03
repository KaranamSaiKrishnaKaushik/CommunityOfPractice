import { Song } from '@angular-production/api-interfaces';
import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { v4 as uuidv4} from 'uuid';

@Injectable()
export class SongsService {

  songs: Song[] = [
        {
          "id": "1",
          "title": "Perfect - Ed Sheeran",
          "description": "I found a love for me Oh darling, just dive right in and follow my lead"
        },
        {
          "id": "2",
          "title": "OneRepublic performing Counting Stars",
          "description": "Lately, I've been, I've been losing sleep Dreaming about the things that we could be"
        },
        {
          "id": "3",
          "title": "Avicii - The Nights",
          "description": "He said, \"One day you'll leave this world behind So live a life you will remember"
        }
  ];

  create(song: Song) {
    this.songs = [...this.songs, Object.assign({}, song, { id : uuidv4()})];
    return this.songs;
  }

  findAll() {
    return this.songs;
  }

  findOne(id: string) {
    return this.songs.find((song)=> song.id === id);
  }

  update(id: string, song: Song) {
    this.songs = this.songs.map((s) => (s.id === id ? song : s))
    return this.songs;
  }

  remove(id: string) {
    this.songs = this.songs.filter((song)=> song.id !== id);
    return this.songs;
  }
}
