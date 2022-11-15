import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Menu, Avatar } from 'antd';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

function Navbar() {
  return (
    <section className='nav-wrapper'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className='menu-control-container'>
          <MenuOutlined />
        </Button> */}
      </div>
    </section>
  );
}

export default Navbar;
