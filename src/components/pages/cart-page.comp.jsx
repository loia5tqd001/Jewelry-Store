import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import {
  selectItemsInCart,
  selectAmountProductInCart,
  selectTotalMoney,
} from '../../redux/cart/selectors';
import { formatVnd } from '../../utils/helpers';
import routes, { Link } from '../../utils/routes';

import CartItem from '../molecules/cart-item.comp';
import ButtonSliding from '../atoms/button-sliding.comp';

import {
  Heading,
  SubHeading,
  CartContainer,
  CartProducts,
  Total,
  EmptyCartContainer,
  ButtonActions,
} from './cart-page.styled';

function CartPage() {
  const cartItems = useSelector(selectItemsInCart);
  const itemsCount = useSelector(selectAmountProductInCart);
  const totalMoney = useSelector(selectTotalMoney);
  const { colors } = useContext(ThemeContext);

  return (
    <div>
      <Heading>Giỏ hàng của bạn</Heading>
      <SubHeading>Có {itemsCount} sản phẩm trong giỏ hàng của bạn</SubHeading>
      <div>
        {cartItems.length > 0 ? (
          <CartContainer>
            <CartProducts>
              {cartItems.map(({ product, amount }) => (
                <CartItem key={product.id} product={product} amount={amount} />
              ))}

              <Total>
                Tổng tiền: <span>{formatVnd(totalMoney)}</span>
              </Total>
            </CartProducts>
            <ButtonActions>
              <ButtonSliding
                bg_static={colors.blueDarker2}
                fg_static={colors.white}
                bg_sliding={colors.white}
                fg_sliding={colors.greyDark1}
                padding="1em 2em"
                as={Link}
                to={routes.products.path}
              >
                <ion-icon name="arrow-undo-outline" />
                {'  '} Tiếp tục mua hàng
              </ButtonSliding>
              <ButtonSliding
                bg_static={colors.blueDarker2}
                fg_static={colors.white}
                bg_sliding={colors.white}
                fg_sliding={colors.greyDark1}
                padding="1em 2em"
                as={Link}
                to={routes.checkout.path}
              >
                <ion-icon name="card-outline" />
                {'  '} Thanh toán
              </ButtonSliding>
            </ButtonActions>
          </CartContainer>
        ) : (
          <EmptyCartContainer>
            <ButtonSliding
              bg_static={colors.blueDarker2}
              fg_static={colors.white}
              bg_sliding={colors.white}
              fg_sliding={colors.greyDark1}
              padding="1.5em 4em"
              as={Link}
              to={routes.products.path}
            >
              <ion-icon name="arrow-undo-outline" />
              {'  '} Tiếp tục mua hàng
            </ButtonSliding>
          </EmptyCartContainer>
        )}
      </div>
    </div>
  );
}

export default CartPage;
