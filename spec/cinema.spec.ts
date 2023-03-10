import { jest } from "@jest/globals";
import {Cinema} from "../src/cinema.js";
import {API} from "../src/api.js";

jest.mock('../src/api.js');


describe('cinema', () => {
  let cinema: Cinema;
  let api: API;

  beforeEach(() => {
    cinema = new Cinema('a cool cinema name');
    api = cinema['api'];
  });

  describe('constructor', () => {
    it('should set the name property', () => {
      expect(cinema['name']).toEqual('a cool cinema name');
    });

    it('should set the api property', () => {
      expect(api).toBeInstanceOf(API);
      expect(api["token"]).toEqual("secret123");
    });
  });

  describe('addMovie', () => {
    beforeEach( () => {
      jest.spyOn(api, 'post').mockResolvedValue({
        id: 321,
        cinema: 'a cool cinema name',
        movie: {title: 'John Wick', year: 2023}
      });
    });

    it('should call the post method on the api', () => {
      cinema.addMovie({title: 'John Wick', year: 2023});
      expect(api.post).toHaveBeenCalledWith({
        cinema: 'a cool cinema name',
        movie: {title: 'John Wick', year: 2023}
      });
    });

    it('should return the response', async () => {
      const res = await cinema.addMovie({title: 'John Wick', year: 2023});
      expect(res).toEqual({
        id: 321,
        cinema: 'a cool cinema name',
        movie: {title: 'John Wick', year: 2023}
      });
    });
  });
});
