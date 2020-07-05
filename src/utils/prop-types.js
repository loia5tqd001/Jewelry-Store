import PropTypes from 'prop-types';
export default PropTypes;

export const productProps = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  salePrice: PropTypes.number,
};

export const collectionProps = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  collection: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
