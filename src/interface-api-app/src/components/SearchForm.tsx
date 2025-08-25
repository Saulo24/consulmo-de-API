import React, { useState } from 'react';

const SearchForm: React.FC<{ onSearch: (cpf: string) => void }> = ({ onSearch }) => {
    const [cpf, setCpf] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(cpf);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="cpf">CPF:</label>
            <input
                type="text"
                id="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="Digite o CPF"
                required
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default SearchForm;