import {jest} from "@jest/globals";
import {API} from "../src/api.js";

jest.spyOn(console, "log").mockImplementation(() => {});

describe('api', () => {
  let api: API;

  beforeEach( () => {
    api = new API("topSecret");
  });

  describe('post', () => {
    it('should return the response', async () => {
      const res = await api.post({
        cinema: 'a cool cinema name',
        movie: {title: 'John Wick', year: 2023}
      });
      expect(res).toEqual({
        id: 1,
        cinema: 'a cool cinema name',
        movie: {title: 'John Wick', year: 2023}
      });
    });

    it('should log the response', async () => {
      await api.post({
        cinema: 'a cool cinema name',
        movie: {title: 'John Wick', year: 2023}
      });
      expect(console.log).toHaveBeenCalledWith('the movie "John Wick" has been added to cinema "a cool cinema name" with token topSecret');
    });
  });
});
