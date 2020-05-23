import React, { useState, useEffect, useRef, useContext, useCallback } from 'react';
import ReactModal from 'react-modal';
import { ThemeContext } from 'styled-components';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import {
  modalStyles,
  Container,
  ContentWrapper,
  CloseButton,
  Heading,
  List,
  InputGroup,
  Input,
  Button,
} from './popup-contact.styled';

function PopupContact() {
  const { colors } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    disableBodyScroll(modalRef.current);
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    setIsOpen(false);
    enableBodyScroll(modalRef.current);
  }, []);

  return (
    // ariaHideApp={false} is to disable warnings
    <ReactModal
      ref={modalRef}
      isOpen={isOpen}
      ariaHideApp={false}
      closeTimeoutMS={200}
      style={modalStyles}
    >
      <Container>
        <ContentWrapper>
          <CloseButton onClick={onSubmit}>
            <ion-icon name="close-outline"></ion-icon>
          </CloseButton>
          <Heading>Đăng ký nhận bản tin</Heading>
          <p>Chúng tôi sẽ cập nhật các chương trình khuyến mãi đến bạn.</p>
          <List>
            <li>Giảm giá sản phẩm</li>
            <li>Sản phẩm mới</li>
            <li>Sản phẩm bán chạy</li>
          </List>
          <form onSubmit={onSubmit}>
            <InputGroup>
              <Input
                required={true}
                type="email"
                placeholder="Nhập email đăng ký nhận tin"
                aria-label="Email Address"
              />
              <Button
                bg_static={colors.blueDarker2}
                fg_static={colors.white}
                bg_sliding={colors.white}
                fg_sliding={colors.blueDarker2}
                title={null}
              >
                Đăng kí
              </Button>
            </InputGroup>
          </form>
        </ContentWrapper>
      </Container>
    </ReactModal>
  );
}

export default PopupContact;
