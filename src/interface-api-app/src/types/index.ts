export interface ApiResponse {
    success: boolean;
    data: {
        cpf: string;
        nome: string;
        idade: number;
        [key: string]: any; // Permite outros campos dinâmicos
    } | null;
    message?: string; // Mensagem de erro ou sucesso
}

export interface SearchFormProps {
    onSearch: (cpf: string) => void;
}

export interface ResultsProps {
    data: ApiResponse | null;
}