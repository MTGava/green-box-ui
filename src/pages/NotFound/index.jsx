import React from 'react'

import './index.css'

function NotFound() {
  return (
    <div className="content-not-found">
      <div id="title">Simple Pure CSS3 &bull; 404 Error Page</div>
      <div className="circles">
        <p>
          404
          <br />
          <small>PAGE NOT FOUND</small>
        </p>
        <span className="circle big" />
        <span className="circle med" />
        <span className="circle small" />
      </div>
    </div>
  )
}

export default NotFound