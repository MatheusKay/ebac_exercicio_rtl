import { render, screen } from "@testing-library/react";
import Post from ".";

describe('Testes para o componente Post', () => {
    it('Deve renderizar corretamente o Post', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/125x125">
                teste
            </Post>
        )

        expect(screen.getByText('teste')).toBeInTheDocument()
    })
})