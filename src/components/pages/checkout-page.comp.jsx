import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { selectTotalMoney, selectItems } from '../../redux/cart/selectors';
import { emptyCart } from '../../redux/cart/actions';
import { formatVnd } from '../../utils/helpers';
import routes from '../../utils/routes';
import Stepper from 'react-stepper-horizontal';
import CartItem from '../molecules/cart-item.comp';
import FormGuestCart from '../molecules/form-guest-cart.comp';
import {
  CartContainer,
  InfoHeading,
  Red,
  Hr,
  TotalMoney,
  HeaderLink,
  StepperContainer,
  LinkContainer,
} from './checkout-page.styled';

function Checkout() {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItems);
  const totalMoney = useSelector(selectTotalMoney);

  const { colors } = useContext(ThemeContext);


  if (!cartItems.length) {
    history.push(routes.home.path);
  }


  useEffect(() => {
    return () => {
      dispatch(emptyCart());
    };
  }, [dispatch]);

  return (
    <div>
      <StepperContainer>
        <Stepper
          steps={[{ title: 'Nhập địa chỉ' }, { title: 'Chọn phương thức thanh toán' }]}
          activeStep={1}
          activeColor={colors.greyLight3}
          completeColor={colors.blueDarker2}
        />
      </StepperContainer>

      <LinkContainer>
        <HeaderLink to={routes.products.path}>
          <ion-icon name="chevron-back-outline" />
          Quay lại
        </HeaderLink>
        <HeaderLink to={routes.products.path}>
          Chọn phương thức thanh toán
          <ion-icon name="chevron-forward-outline" />
        </HeaderLink>
      </LinkContainer>

      <CartContainer>
        <FormGuestCart />
        <InfoHeading>Sản phẩm đã mua:</InfoHeading>{' '}
        {cartItems.map(({ product, amount }) => (
          <CartItem key={product.id} product={product} amount={amount} fixed />
        ))}{' '}
        <Hr />
        <TotalMoney>
          Tổng tiền: <Red> {formatVnd(totalMoney)} </Red>{' '}
        </TotalMoney>
      </CartContainer>
    </div>
  );
}

export default Checkout;
