import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Pruebas en <GifItem />', () => {

    const title = "AOE2";
    const url = "https://age-of-empires.com/arbalest.jpg";


    test('Debe de hacer match con el Snapshot', () => {


        // Renderiza el componente
        const { container } = render( <GifGridItem title={ title } url={ url } />);

        // Compara con el snapshot
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        
        render( <GifGridItem title={ title } url={ url } />);
        
        // expect(screen.getByRole("img").src).toBe(url);
        // expect(screen.getByRole("img").alt).toBe(title);

        const {src, alt} = screen.getByRole("img");
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })
    

    test('debe de mostrar el título en el componente', () => {
        
        render( <GifGridItem title={ title } url={ url } />);
        
    
        expect(screen.getByText(title)).toBeTruthy();
    })

});

