interface ClientProps {
    nome: string;
    idade ?: number; //? significa, propriedade opcional...
}

export default function Client(props: ClientProps){
    return (
        <div>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade ?? 'Não informado'}</div>
        </div>
    )
}