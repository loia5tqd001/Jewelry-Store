import React, { useContext, useState } from 'react';
import ButtonSliding from '../../atoms/button-sliding.comp';
import { TextContainer, ButtonContainer } from './account-login.styled';
import { PageContainer, Title, Form, Input } from './common.styled';
import { ThemeContext } from 'styled-components';
import StyledLink from '../../atoms/styled-link.comp';
import routes from '../../../utils/routes';
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithEmailAndPassword,
} from '../../../firebase/utils';

import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import Loader from 'react-loader-spinner';
import FormErrorMessage from '../../atoms/form-error-message.comp';

function AccountLogin(props) {
  const { colors } = useContext(ThemeContext);
  const { register, handleSubmit, errors } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async ({ email, password }) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(email, password);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      switch (error.code) {
        case 'auth/user-not-found': {
          enqueueSnackbar('Email không tồn tại trong hệ thống', { variant: 'error' });
          break;
        }
        case 'auth/wrong-password': {
          enqueueSnackbar('Mật khẩu không đúng', { variant: 'error' });
          break;
        }
        case 'auth/too-many-requests': {
          enqueueSnackbar('Nhập sai quá nhiều lần', { variant: 'error' });
          break;
        }
        default: {
          enqueueSnackbar(error.toString(), { variant: 'error' });
        }
      }
    }
  };

  return (
    <PageContainer>
      <div>
        <Title>Đăng nhập</Title>
      </div>
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            id="email"
            placeholder="Email"
            ref={register({
              required: 'Email không được để trống',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Email không đúng định dạng',
              },
            })}
          />
          <FormErrorMessage errors={errors} name="email"/>

          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Mật khẩu"
            ref={register({
              required: 'Mật khẩu không được để trống',
              minLength: {
                value: 6,
                message: 'Mật khẩu phải dài ít nhất 6 kí tự',
              },
            })}
          />
          <FormErrorMessage errors={errors} name="password"/>

          <TextContainer>
            <StyledLink to={routes.accountRecover.path}>Quên mật khẩu?</StyledLink>
            <StyledLink to={routes.accountRegister.path}>Đăng ký?</StyledLink>
          </TextContainer>
          <ButtonContainer>
            <ButtonSliding
              bg_static={colors.blueDarker2}
              fg_static={colors.white}
              bg_sliding={colors.white}
              fg_sliding={colors.greyDark1}
              padding="1.5em"
            >
              {isLoading ?
                <Loader type="Oval" color={colors.greyDark1} height={16}/> :
                <span>Đăng nhập</span>
              }
            </ButtonSliding>
            <ButtonSliding
              bg_static={colors.redGoogle}
              fg_static={colors.white}
              bg_sliding={colors.white}
              fg_sliding={colors.greyDark1}
              padding="1.5em"
              children="Đăng nhập với Google"
              onClick={async (e) => {
                e.preventDefault();
                await signInWithGoogle();
              }}
            />
            <ButtonSliding
              bg_static={colors.blueFacebook}
              fg_static={colors.white}
              bg_sliding={colors.white}
              fg_sliding={colors.greyDark1}
              padding="1.5em"
              children="Đăng nhập với Facebook"
              onClick={async (e) => {
                e.preventDefault();
                await signInWithFacebook();
              }}
            />
          </ButtonContainer>
        </Form>
      </div>
    </PageContainer>
  );
}

export default AccountLogin;
