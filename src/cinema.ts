import {API} from "./api.js";


export interface IMovie {
  title: string;
  year: number;
}

export class Cinema {
  private api: API;

  constructor(private name: string) {
    // this is just for example purposes (without DI)
    this.api = new API("secret123");
  }

  addMovie(movie: IMovie) {
    return this.api.post({
      cinema: this.name,
      movie
    });
  }
}
