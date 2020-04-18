import React from 'react';
import routes from '../../utils/routes';

import Breadcrumb from '../atoms/breadcrumb.comp';

function ProductDetailPage() {
  return (
    <div>
      <Breadcrumb
        paths={[routes.home, routes.productDetail.display , 'White Gold Diamond Solitaire Ring']}
      />
    </div>
  );
}

export default ProductDetailPage;
