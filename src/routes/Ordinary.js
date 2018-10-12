import React from 'react';
import { withRouter } from 'dva/router';

function Ordinary({ location: { pathname,history } }) {
  return (
    <div>
      普通路由: {pathname}
    </div>
  );
}

export default withRouter(Ordinary);
