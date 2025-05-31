import { render, screen, act, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";



describe('Pruebas en <GifExpertApp />', () => {

    test('Verificar que se agregue una nueva categoría', async () => {

        // 1.Renderizo
        render(<GifExpertApp />);
        screen.debug();

        // 2.Selecciono con ayuda del screen.debug()
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        // 3.Simulo eventos
        fireEvent.change(input, { target: { value: "DOS2"}});
        fireEvent.submit(form);

        // 4.Evaluo
        const times = screen.getAllByText("DOS2");
        expect(times.length).toBe(1);
    });

    test('no debe agregar categoría si ya existe', () => {
    

        // 1.Renderizo
        render(<GifExpertApp />);
        
        // 2.Selecciono con ayuda del screen.debug()
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // 3.Simulo eventos
        fireEvent.change(input, { target: { value: 'AOE2' } });
        fireEvent.submit(form);

        // 4.Evaluo
        const categorias = screen.getAllByText('AOE2');
        expect(categorias.length).toBe(1);
    });
    
});
