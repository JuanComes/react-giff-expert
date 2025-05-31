import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {

    const category = "One Punch";


    test('Debe de mostrar el loading inicialmente ', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render( <GifGrid category={category}/> );
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category));
        screen.debug();
    });

    test('debe de mostrar items cuando se cargan las imágees de useFetchGifs', () => {

        const gifs = [
            {
                id: "ABC",
                title: "Goku3",
                url: "https://localhost/ABC.jpg"

            },
            {
                id: "B",
                title: "Goku2",
                url: "https://localhost/ABC.jpg"

            },
            {
                id: "C",
                title: "Goku3",
                url: "https://localhost/ABC.jpg"

            }
        ]
        

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrid category={category}/> );

        screen.debug();
        expect(screen.getAllByRole("img").length).toBe(3);
    })
    
    
});
