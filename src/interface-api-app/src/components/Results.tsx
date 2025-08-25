import React from 'react';
import { ApiResponse } from '../types';

interface ResultsProps {
    data: ApiResponse | null;
}

const Results: React.FC<ResultsProps> = ({ data }) => {
    if (!data) {
        return <p>Nenhum resultado encontrado.</p>;
    }

    return (
        <div>
            <h2>Resultados da Busca</h2>
            <ul>
                <li>Nome: {data.nome}</li>
                <li>CPF: {data.cpf}</li>
                <li>Data de Nascimento: {data.dataNascimento}</li>
                {/* Adicione mais campos conforme necessário */}
            </ul>
        </div>
    );
};

export default Results;