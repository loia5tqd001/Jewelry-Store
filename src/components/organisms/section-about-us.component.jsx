import React from 'react';
import PropTypes from 'prop-types';

import { SectionContainer, Left, Heading, Right } from './section-about-us.styles';

import ButtonSliding from '../atoms/button-sliding.component';

function SectionAboutUs(props) {
  return (
    <SectionContainer>
      <Left bgImage="https://file.hara.vn/1000113711/file/home_about_image_ccd141c17b1c4f84b94f6a17d96be9c7.jpg">
        <Heading>Về chúng tôi</Heading>
        <ButtonSliding>Xem ngay</ButtonSliding>
      </Left>
      <Right>
        <strong>Jquery</strong> là công ty chế tác và bán lẻ trang sức hàng đầu châu Á, giữ vị trí số 1 trong các phân khúc trung và cao cấp tại Việt Nam với{' '} <strong>hơn 20 năm kinh nghiệm</strong> trong ngành. <br />
        Jquery mang lại niềm kiêu hãnh cho khách hàng bằng các sản phẩm trang sức tinh tế, chất lượng vượt trội. Thổi hồn vào sản phẩm bằng sự đam mê và không ngừng sáng tạo. Với Jquery, mỗi tuyệt tác trang sức là một câu chuyện về những giá trị đích thực, những phẩm chất cao quý và vẻ đẹp tinh tế của riêng bạn mà chúng tôi mãi tôn vinh. <br /> <br />
        <strong>Địa chỉ:</strong> KTX Khu B, phường Đông Hòa, thị xã Dĩ An, tỉnh Bình Dương <br /> <br />
        <strong>Hotline:</strong> 0961178682
      </Right>
    </SectionContainer>
  );
}

SectionAboutUs.propTypes = {};

export default SectionAboutUs;
