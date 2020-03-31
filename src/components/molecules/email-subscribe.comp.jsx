import React, { useContext, useState, useCallback } from 'react';
import { ThemeContext } from 'styled-components';

import { InputGroup, Input, Button, Sentence } from './email-subscribe.styled';

function EmailSubscribe() {
  const { colors } = useContext(ThemeContext);

  const [subscribed, setSubscribed] = useState(false);
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    setSubscribed(true);
  }, [setSubscribed]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <InputGroup>
          <Input
            disabled={subscribed}
            required={true}
            type="email"
            placeholder="Nhập email của bạn"
            aria-label="Email Address"
          />
          <Button
            disabled={subscribed}
            data-bg-static={colors.blueDarker2}
            data-fg-static={colors.white}
            data-bg-sliding={colors.transparent}
            data-fg-sliding={colors.greyDark1}
            padding="1rem"
            fontSize="0.9em"
          >
            Đăng ký
          </Button>
        </InputGroup>
      </form>
      <Sentence hidden={!subscribed}>Cảm ơn bạn đã đăng ký email theo dõi.</Sentence>
    </>
  );
}

export default EmailSubscribe;
