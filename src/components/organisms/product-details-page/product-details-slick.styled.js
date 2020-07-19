import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

export const Container = styled.div`
  min-height: 45vw;

  .carousel-status,
  .control-arrow,
  .control-dots {
    display: none;
  }

  .thumbs {
    display: flex;
    justify-content: center;
  }

  .carousel .thumb,
  .carousel .thumb.selected,
  .carousel .thumb:hover {
    border-width: 1px;
  }
  
  ${(props) => props.theme.media.lessThan('smedium')`
    margin-bottom: -5em;
    
    .thumbs {
      display: none;
    }
  `}
`;
//
// export const Thumbs = styled.div`
//   position: absolute;
//   left: 0;
//   top: 0;
//   height: 100px;
// `;
//
// export const Thumb = styled.div`
//   height: 100px;
// `;
//
// export const ImageContainer = styled.div`
//   max-width: 10em;
// `;

export const CarouselContainer = styled(Carousel)`
  max-width: 40em;
`
