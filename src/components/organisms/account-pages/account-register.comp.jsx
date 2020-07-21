import React, { useState, useRef, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import routes from '../../../utils/routes';
import Loader from 'react-loader-spinner';
import { PageContainer, Title, Form, Input } from './common.styled';
import { RadioInputGroup, RadioInput, Label, BackLink } from './account-register.styled';
import { signUpWithEmailAndPassword } from '../../../firebase/utils';
import ButtonSliding from '../../atoms/button-sliding.comp';
import FormErrorMessage from '../../atoms/form-error-message.comp';

function AccountRegister(props) {
  const { colors } = useContext(ThemeContext);

  const { register, handleSubmit, watch, errors } = useForm();
  const password = useRef({});
  password.current = watch('password', ''); // to have access to validate comparing with repeat-password

  const { enqueueSnackbar } = useSnackbar();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async ({ email, password, displayName, gender }) => {
    setIsLoading(true);
    try {
      await signUpWithEmailAndPassword(email, password, { displayName, gender });
      enqueueSnackbar('Đăng ký tài khoản thành công', { variant: 'success' });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      switch (error.code) {
        case 'auth/invalid-email': {
          enqueueSnackbar('Định dạng email không đúng', { variant: 'error' });
          break;
        }
        case 'auth/email-already-in-use': {
          enqueueSnackbar('Địa chỉ email đã được sử dụng', { variant: 'error' });
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
        <Title>Đăng ký</Title>
      </div>
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            name="displayName"
            id="displayName"
            placeholder="Họ và tên"
            ref={register({ required: 'Họ tên không được bỏ trống' })}
          />
          <FormErrorMessage errors={errors} name="displayName"/>

          <RadioInputGroup>
            <RadioInput
              type="radio"
              name="gender"
              id="male"
              value="male"
              ref={register({ required: 'Giới tính không được bỏ trống' })}
            />
            <Label htmlFor="male">Nam</Label>
            <RadioInput
              type="radio"
              name="gender"
              id="female"
              value="female"
              ref={register({ required: 'Giới tính không được bỏ trống' })}
            />
            <Label htmlFor="female">Nữ</Label>
            <RadioInput
              type="radio"
              name="gender"
              id="other"
              value="other"
              ref={register({ required: 'Giới tính không được bỏ trống' })}
            />
            <Label htmlFor="other">Khác</Label>
          </RadioInputGroup>
          <FormErrorMessage errors={errors} name="gender"/>

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

          <Input
            type="password"
            name="re-password"
            id="re-password"
            placeholder="Nhập lại mật khẩu"
            ref={register({
              validate: (value) =>
                value === password.current || 'Nhập lại mật khẩu không khớp',
            })}
          />
          <FormErrorMessage errors={errors} name="re-password"/>

          <ButtonSliding
            bg_static={colors.blueDarker2}
            fg_static={colors.white}
            bg_sliding={colors.white}
            fg_sliding={colors.greyDark1}
            padding="1.5em"
          >
            {isLoading ?
              <Loader type="Oval" color={colors.greyDark1} height={16}/> :
              <span>Đăng ký</span>
            }
          </ButtonSliding>
          <BackLink title={null} to={routes.accountLogin.path}>
            <ion-icon name="return-down-back"/>
            Quay lại
          </BackLink>
        </Form>
      </div>
    </PageContainer>
  );
}

export default AccountRegister;
