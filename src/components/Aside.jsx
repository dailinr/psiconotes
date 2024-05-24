import React from 'react'

export const Aside = () => {
  return (
    
    <div className="aside bg-white d-flex  flex-column flex-shrink-0 p-3 bg-body-tertiary border-right" style={{width: '250px', position: 'relative'}}>
    
    
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" >
        <a href="#" className="nav-link " aria-current="page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
        </svg>
          Mis pacientes
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
  
          Nuevos pacientes
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
           Sesiones
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
          Calendario
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
          Notificaciones
        </a>
      </li>
    </ul>
    <hr />

    <svg color="black" width="25" height="33" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="1" y="4" width="23" height="24" fill="url(#pattern0_314_374)"/>
<defs>
<pattern id="pattern0_314_374" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_314_374" transform="matrix(0.0163043 0 0 0.015625 -0.0217391 0)"/>
</pattern>
<image  id="image0_314_374" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUZSURBVHic7ZpbbBRVGIC//+xSpBRNuAUMJsCDbW27GGtAosFG8MEYJMasd+iFhBBiAhqNRhNDJEoiCSFRJIHSQtForDx4eVICBY1WBLFbajUYrIZSidDFpMWybef3oQvisjPMbHd2S5zvZS/n/2e+8++ZMzNnFgICAgICAgIC/qeI28DIcp1ImIcsZQEwS5SbfPTyhMCACt0CnYTZG6uXUx5ynalar+Gzv7FOlFeBSaMyzQ2WwHtWmBeO18uZawU7FqBylRYmEnwCLM6aXu7oMcr9bbulwynI2DepJAb5iOuz8wAzLeFA6dM60ynItgDl1dShPJB9r5wyLRxmm1OATQFURHjFD6M8sKysVm+za0xbgIoV3AXM8U0pxwg8adeWfgSEiPhmkwcEKuza0hZAlRn+6eQep/7YTYK9PrnkBYG/7NrSFsBAl282+UCxvTJMfwgk+ErhDeBLwPLLKwcocEiF9+0CrnkpHFmp5TrMVmBRNs38RoQDw/BMR6P86Bh35YeKal0EVInhRoUTBePYe3S7nI1GNfRTITsQan21zhKq1JdeYHVzswxHlut0y7AUoRjoF+VA+245dClWAMpqdIaBD4B7U7Y1gPJ8+27ZGo1qqLOQFhHuyWFfMuFgST+Lm5tluKJWn0V5HZiQGjM0xBOd70qPFNfppAKLw0CJ3RZFWBNrlG1ldTrPWBzDw210jlEJEYntlOORGl2rsMU2Uui0JjDfjLN4DofOA6iyuWylTu5okDaE1mxbZwuBr2M75XhkuU5X2OgYrJSav1lnRHjMxbZvMMM8kkzclwVXX1DYD6BhHubqYZ8u4XGDMtfVxpPHvihHRiPpJwLfAYhyt8uUuQYYcrVxpTL5ejQzPf8JmRE3hTtcplgGOO8yuLRsjRa1NUk38Ecmgj5z5liDnC5bo0VcY067jBI3KHGXOzD0My/5/vtMDH3mCEB4gNuBkKsMIW4Q1wUgJNyZfDv2DgNJDn/rsqMb4gZvd36VV+5sLCFWsgDJucolvQbcjwBNFkBCY7AAlyZn46EAHucAgOKSFTolVi+nFA57dPST1rYm6a5cpVNRbvWQdz7sZQ4AQgWGOmDT+AIeTFykDmGyR9nsovQOKjsBEglW4nYCBBDiIwVQL/tjQ3mtdh7dLp8Bb3rU9Y1IjS5VeM1TkhAPYxH3eGszXpRPK6p1H9CK0OcpO9soRQgLNZMHONalEZAJwhJgSUa52WQ096VKrzEWPVmTuc6wwpw2Q0WcAC7mWyYPDIQG+cV0vCN9onyRb5ucI3we2yP9BkCUDeDlXHDdo6IjCyYGoK1JDouwOb9OOUTYFNslrXDFc4HiPl4EduRNKlcI20v6ePnfjylUVOtTCBuBW3Iq5j+/i/BSrFH+85Ak7Vk0GtXQz4VUqWEhyixkzK4CO6Mowimx+Kb4Ai3NzTKcb6Uxh+MvW7Vew+e6eBQYTG2z+vm4o1kSvpl5oCyqBWYiy9I0jZsymw9b1ovtuqdjASK1ukA17XOAnvZdcrNXUT+pqNFu4ConY7GgrUlsb90d/iUGqlSlb6DFm57/KBxK970lNn1I4lgA9PIiaGrWQZdeOUPE5kcR57/7OBcg/fK3hYzBS+cRp6uuZkWcl/AdCyAWb5GyaKpKQ3uDnMzE0U/aG+SkQEPK1+eM8rZTXtipMbZHfi2v1vkirFWYJrB/6hwaR23rE5Nns/pcF98q3CfwJ4YtPzRIV769AgICAgICAgLGJP8AypyPWBxLvtEAAAAASUVORK5CYII="/>
</defs>
</svg>

   
  </div>
    
  )
}
