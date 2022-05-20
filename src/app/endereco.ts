export interface Endereco {

    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string

    // TODO: Testar acresentar os campos numéricos (ddd)
    // TODO: Testar trocar a chave localidade por cidade
}
