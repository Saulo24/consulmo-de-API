document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const cpfInput = document.getElementById('cpf');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const cpf = cpfInput.value.trim();

        resultsDiv.innerHTML = '';

        if (!cpf) {
            resultsDiv.innerHTML = '<p class="error">Por favor, informe um CPF.</p>';
            return;
        }

        resultsDiv.innerHTML = '<p>Buscando...</p>';

        try {
            const mockData = {
                "beneficios": [
                    {
                        "numeroBeneficio": 6177365055,
                        "cpf": "12512907520",
                        "nit": 10751564904,
                        "nomeTitular": "JOAO SILVA",
                        "nomeMaeTitular": "JULIA BERNARDINA MARIA DA SILVA",
                        "genero": "Feminino",
                        "dataNascimento": "1957-04-29",
                        "dataInicioBeneficio": "2017-03-06",
                        "dataCessacaoBeneficio": "2017-05-15",
                        "codigoSituacaoBeneficio": 2,
                        "descricaoSituacaoBeneficio": "CESSADO",
                        "codigoEspecieBeneficio": 87,
                        "descricaoEspecieBeneficio": "AMP. SOCIAL PESSOA PORTADORA DEFICIENCIA"
                    }
                ]
            };
            const response = await fetch(`https://apigateway.conectagov.estaleiro.serpro.gov.br/oauth2/jwt-token=${encodeURIComponent(cpf)}`);
            if (!response.ok) {
             throw new Error('Erro ao consultar API');
             }
            const data = await response.json();
            data = mockData;

            if (data && data.beneficios && data.beneficios.length > 0) {
                const beneficio = data.beneficios[0];
                resultsDiv.innerHTML = `
                    <div class="result-card">
                        <h2>Resultado</h2>
                        <ul style="list-style:none;padding:0;margin:0;">
                            <li><strong>Nº Benefício:</strong> ${beneficio.numeroBeneficio}</li>
                            <li><strong>CPF:</strong> ${beneficio.cpf}</li>
                            <li><strong>NIT:</strong> ${beneficio.nit}</li>
                            <li><strong>Nome:</strong> ${beneficio.nomeTitular}</li>
                            <li><strong>Mãe:</strong> ${beneficio.nomeMaeTitular}</li>
                            <li><strong>Gênero:</strong> ${beneficio.genero}</li>
                            <li><strong>Nascimento:</strong> ${beneficio.dataNascimento}</li>
                            <li><strong>Início Benefício:</strong> ${beneficio.dataInicioBeneficio}</li>
                            <li><strong>Cessação:</strong> ${beneficio.dataCessacaoBeneficio}</li>
                            <li><strong>Situação:</strong> ${beneficio.descricaoSituacaoBeneficio}</li>
                            <li><strong>Espécie:</strong> ${beneficio.descricaoEspecieBeneficio}</li>
                        </ul>
                    </div>
                `;
            } else {
                resultsDiv.innerHTML = '<p>Nenhum resultado encontrado para este CPF.</p>';
            }
        } catch (error) {
            resultsDiv.innerHTML = `<p class="error">Erro: ${error.message}</p>`;
        }
    });
});