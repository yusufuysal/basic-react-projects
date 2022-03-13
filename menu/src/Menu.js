import React from 'react';

const Menu = (props) => {
  const {img, title, price, desc} = props
  return <article menu-item>
    <img className="photo" src={img} alt="" />
    <div className='item-info'>
      <header>
        <h4>{title}</h4>
        <h4 className='price'>{price}</h4>
      </header>
      <p className='item-text'>{desc}</p>
    </div>
  </article>;
};

export default Menu;
