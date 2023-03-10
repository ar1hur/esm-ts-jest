export interface IPostData {
  cinema: string;
  movie: {
    title: string;
    year: number;
  }
}

export interface IPostResponse extends IPostData {
  id: number;
}

export class API {
  constructor(private token: string) {
  }

  post(data: IPostData): Promise<IPostResponse> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({...data, id: 1});
        console.log(`the movie "${data.movie.title}" has been added to cinema "${data.cinema}" with token ${this.token}`);
      }, 1000);
    });
  }
}
