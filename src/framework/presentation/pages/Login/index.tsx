import { Button, Card, Container, Grid } from '@mantine/core';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthEvents } from '../../../events/AuthEvent';
import { AuthContext } from '../../context/AuthProvider';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import FormLogin from '../../form/FormLogin';
import './styles.scss';
import { AuthState } from '../../../../business/domain/User';

const Login = () => {
  const auth = useContext(AuthContext);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data, isLogin } = useAppSelector(state => state.user);

  useEffect(() => {
    if(data && isLogin){
      auth?.setAuth(data);
      navigate('/dashboard');
    }else{
      navigate('/login');
    }
  },[data, isLogin]);


  const handleLogin = (payload : AuthState) => {
    const credential = {
      username: payload.username,
      password: payload.password
    };
    dispatch(AuthEvents().loginEvent(credential));
  };

  return(
    <Container className='container'>
      <div className='card-login'>
        <Grid p={0} align='center'>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }} p={0} m={0}>
            <img src="https://img.freepik.com/free-vector/kids-reading-concept-illustration_114360-8613.jpg" 
              width={'100%'} alt="login" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }} className='box-form'>
            <div>
              <h3>Hello Readers</h3>
              <span>enjoy and read various kinds of books that we provide especially for you</span>
            </div>
            <FormLogin handleLogin={handleLogin} /> 
          </Grid.Col>
        </Grid>
      </div>
    </Container>
  );
};

export default Login;
