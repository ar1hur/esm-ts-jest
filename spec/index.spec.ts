import { jest } from "@jest/globals";

jest.spyOn(console, "log").mockImplementation(() => {});
jest.unstable_mockModule('../src/cinema.js', () => {
    return {
        Cinema: jest.fn().mockReturnValue({
            // @ts-ignore
            addMovie: jest.fn().mockResolvedValue("addMovieReturnValue")
        })
    };
});
await import("../src/index.js");
const { Cinema } = await import("../src/cinema.js");


describe('index', () => {
    let cinema = new Cinema('test');

    it('should call Cinema', async () => {
        expect(Cinema).toHaveBeenCalledWith('Cineopolis');
    });

    it('should add a movie', async () => {
        expect(cinema.addMovie).toHaveBeenCalledWith({title: 'The Matrix', year: 1999});
    });

    it('should log the result of adding a movie', async () => {
        expect(console.log).toHaveBeenCalledWith("addMovieReturnValue");
    });
});
