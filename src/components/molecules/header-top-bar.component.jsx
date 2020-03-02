import React from 'react';
import PropTypes from 'prop-types';

function HeaderTopBar(props) {
  return (
    <div>
      <div>
        {/* <FontAwesomeIcon icon={faUser} /> */}
        <ion-icon name='person-outline'></ion-icon>
        <span>Tài Khoản</span>
      </div>

      <div>
        <p>Đảm bảo 100% sự hài lòng</p>
      </div>

      <div>
        <div>
          {/* <FontAwesomeIcon icon={faSearch} /> */}
          <span>Tìm kiếm</span>
        </div>

        <div>
          {/* <FontAwesomeIcon icon={faSearch} /> */}
          <span>Giỏ hàng</span>
          <span>(1)</span>
        </div>
      </div>
    </div>
  );
}

HeaderTopBar.propTypes = {};

export default HeaderTopBar;
