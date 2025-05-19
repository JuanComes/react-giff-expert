import { getGiffs } from "../../src/helpers/getGifs"
import 'whatwg-fetch';

describe('Pruebas en getGifs', () => {  

    test("Debe de retornar un arreglo de gifs", async() => {


        const gifs = await getGiffs("One Punch");

        expect ( gifs.length).toBeGreaterThan(0);

        expect( gifs[0]).toEqual({

            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    });

});