import axios from "axios";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from 'next/Router';
import { User } from "../../../api/User";


export interface UserProps {
    user: User
}

function Profile({ user }:  InferGetStaticPropsType<typeof getStaticProps>){ 
    const router = useRouter();

    if(router.isFallback) return <h1>carregando...</h1>;
    
    return ( 
    <div>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.username}</p>
    </div>
    );
}

//work, rota dinâmica
export const getStaticProps: GetStaticProps<UserProps> = async (context) => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users",
  { params: { id: context.params.id }});

  const user = await response.data[0];

 // await new Promise((res) => setTimeout(res, 4000));

  return {
      props: { user, revalidate: 10 },
  };
}

//essencial para rota dinâmica
export const getStaticPaths: GetStaticPaths = async () => {
    const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
    );

    const users = response.data.slice(0, 5);

    const paths = users.map((user) => {
        return { params: { id: String(user.id) } };
    });
    return {
        paths,
        fallback: true,

    };
}
export default Profile;