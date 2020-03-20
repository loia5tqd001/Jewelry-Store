import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { InputGroup, Input, Button } from './email-subscribe.styles';

function EmailSubscribe(props) {
  const { colors } = useContext(ThemeContext);

  return (
    <form>
      <InputGroup>
        <Input
          required={true}
          type="email"
          placeholder="Nhập email của bạn"
          aria-label="Email Address"
        />
        <Button
          bgStatic={colors.blueDarker2}
          fgStatic={colors.white}
          bgSliding={colors.transparent}
          fgSliding={colors.greyDark1}
          padding="1rem"
          fontSize="0.9em"
        >
          Đăng ký
        </Button>
      </InputGroup>
    </form>
  );
}

EmailSubscribe.propTypes = {};

export default EmailSubscribe;
