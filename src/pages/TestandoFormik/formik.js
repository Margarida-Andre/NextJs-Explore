import { ErrorMessage, Formik, Form, Field } from "formik";
import { validacoes } from "./validacoes";
import style from "../../../styles/styleFormik.module.scss";


function Formulario(){
    return( 
    <section className={style.section} >
    <Formik
    initialValues={{}} 
    validationSchema={validacoes}
    className={style.formik}
    >
   
    <Form className={style.form}>
    <h1 className={style.h1}>LOGIN</h1>
       <div className={style.containerInput}>
        <label className={style.label}>Nome</label>
        <br></br>
        <Field name="nome" type="text" className={style.field} />
        <br></br>
        <ErrorMessage
        className={style.errorMessage}
        component="span"
        name="nome"/>
        </div> 

        <div className={style.containerInput}>
        <label className={style.label}>Email</label>
        <br></br>
        <Field name="email" type="text" className={style.field} />
        <br></br>
        <ErrorMessage
        className={style.errorMessage}
        component="span"
        name="email"/>
        </div> 

        <div className={style.containerInput}>
       <label className={style.label}>Senha</label>
        <Field name="senha" type="password" className={style.field} />
        <br></br>
        <ErrorMessage 
        className={style.errorMessage}
        component="span"
        name="senha"
       
        />
        </div>

        <div className={style.containerInput}>
       <label className={style.label}>Telefone</label>
        <Field name="nu" type="number" className={style.field} />
        <br></br>
        <ErrorMessage 
        className={style.errorMessage}
        component="span"
        name="nu"
        />
        </div>

        <button className={style.btn}>LOGIN</button>
    </Form>
    </Formik>
    </section>
    );
}

export default Formulario;