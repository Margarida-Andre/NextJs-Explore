import * as yup from "yup";

export const validacoes = yup.object().shape({
    nome:  yup.string().min(3, "Digite o seu nome maior, por favor!").required("Digite o seu nome, por favor!"),
    email: yup.string().email('email inválido').required('digite o seu email. por favor!'),
    senha:  yup.string().min(8, "Digite uma senha maior, por favor!").max(9, "Esta senha é muito longa!").required("Digite a senha, por favor!"),
    nu: yup.number().required("digite o seu contacto, por favor").positive().integer()


});