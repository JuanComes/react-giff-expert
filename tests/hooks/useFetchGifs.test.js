import fetch from 'node-fetch';
global.fetch = fetch;

import { renderHook, waitFor} from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('useFetchGifs', () => {
    test("debe de regresar el estado inicial", () => {
        const { result } = renderHook(() => useFetchGifs("One Punch"));
        const {images, isLoading } = result.current;

        console.log(result);

        expect(isLoading).toBeTruthy;
        expect(images.length).toBe(0);

    });

    test("debe de retornar un arreglo de imagenes y el isLoading en false", async() => {
        const { result } = renderHook(() => useFetchGifs("One Punch"));

        await waitFor(
            () => expect(  result.current.images.length).toBeGreaterThan(0),
        );

        const {images,isLoading} = result.current;

        expect(isLoading).toBeFalsy;
        expect(images.length).toBeGreaterThan(0);

    });
});
