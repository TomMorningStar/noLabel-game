import { Link, useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
// import InputWrapper from '../../components/InputWrapper';
import './index.scss';
import classNames from 'classnames';
import HeaderH1 from '../../ui/HeaderH1';
import { Button } from '../../components/Button';
// import ValidateErrorMessage from '../../components/ValidateErrorMessage';
import { useState } from 'react';
import { useLoading } from '../../components/LoaderComponent';
import { handleSubmitLogin } from '../../components/Autification/slice';
import Loader from '../../ui/Loader';
import { useAppDispatch } from '../../../utils/hooks/reduxHooks';
import InputValidate from '../../components/InputValidate';

const SigninSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Слишком короткий!')
    .max(10, 'Слишком длинный!')
    .matches(/^[a-z0-9_-]{2,19}$/, 'Поле зполнено некорректно'),
  // .required('Required'),
  password: Yup.string()
    .min(2, 'Слишком короткий!')
    .max(10, 'Слишком длинный!')
    .matches(/(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g, 'Поле заполнено некорректно'),
  // .required('Required'),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [fieldError, setFieldError] = useState(null);
  const { loading } = useLoading();
  const dispatch = useAppDispatch();
  // const [logErr, setLogErr] = useState(false);
  // const [passErr, setPassErr] = useState(false);

  return (
    <div className={classNames('container-content', 'container-content_main', 'bg-image_login')}>
      {loading && <Loader />}
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        validationSchema={SigninSchema}
        onSubmit={(values) => {
          dispatch(
            handleSubmitLogin({ navigate: navigate, values: values, setFieldError: setFieldError })
          );
        }}>
        {({ errors, values, handleChange }) => (
          <Form className={classNames('colum-5', 'container__login-form')}>
            <HeaderH1 label={'ВХОД'} />
            <InputValidate
              handleChange={handleChange}
              name={'login'}
              type={'text'}
              label={'Логин'}
              value={values.login}
              error={errors.login}
            />
            <InputValidate
              handleChange={handleChange}
              name={'password'}
              type={'password'}
              label={'Пароль'}
              value={values.password}
              error={errors.password}
            />
            <Button
              text='Вход'
              type='submit'
              className='custom-button'
              onClick={() => console.log(11)}
            />
            <Link className='plane-link' to={'/registration'}>
              Нет аккаунта?
            </Link>
            <div className='input__error-message'>{fieldError}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
