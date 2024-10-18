import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from './index';

describe('Testes para o componente PostComments', () => {
    it('Deve permitir a inserção de dois comentários', () => {
        render(<PostComments />);

        const textarea = screen.getByTestId('comment-input') as HTMLTextAreaElement; 
        const button = screen.getByTestId('comment-button');

        
        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        
        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
