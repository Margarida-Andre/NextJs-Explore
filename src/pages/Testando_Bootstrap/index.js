import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Container } from 'reactstrap';

export default function Home(){
    return(
        <div>
        <Container>
         <Alert color="primary">
            This is a primary alert — check it out!
         </Alert>
      </Container>
        </div>
    )
}