import '../../styles/globals.scss'
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../pages/Testando_redux/store/store';

//component é cada página do app, page vai passar em cada my app
function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  )
}

const makestore = ()=>store;
const wrapper = createWrapper(makestore);



export default wrapper.withRedux(MyApp);
