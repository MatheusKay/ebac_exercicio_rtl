import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar um comentario', () => {
        render(<Post />)

        fireEvent.change(screen.getByTestId('area-comentario'), {
            target: {
                value: 'Good post'
            },
        })

        fireEvent.click(screen.getByTestId('btn-comentario'))

        fireEvent.change(screen.getByTestId('area-comentario'), {
            target: {
                value: 'Nice man'
            },
        })

        fireEvent.click(screen.getByTestId('btn-comentario'))

        expect(screen.getAllByTestId('comentario-adicionado')).toHaveLength(2)
    })
});