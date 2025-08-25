import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

const App: React.FC = () => {
    const [data, setData] = useState<any>(null);

    const fetchData = async (cpf: string) => {
        try {
            const response = await fetch(`https://apigateway.conectagov.estaleiro.serpro.gov.br/oauth2/jwt-token?cpf=${cpf}`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Consulta de CPF</h1>
            <SearchForm onSearch={fetchData} />
            <Results data={data} />
        </div>
    );
};

export default App;