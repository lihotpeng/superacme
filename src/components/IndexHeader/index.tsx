import React from 'react';
import { ShoppingOutlined, UserOutlined, TaobaoCircleFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import { NavLink } from 'umi';
import headerLogo from '@/assets/logo.png';
import './index.less';



const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};


const items: MenuProps['items'] = [
  {
    label: '天猫官方旗舰店',
    key: '1',
    icon: <TaobaoCircleFilled />,
  },
  {
    label: '京东官方旗舰店',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '神眸官方商店',
    key: '3',
    icon: <UserOutlined />,
    disabled: true,
  },
  {
    label: '神眸线下专卖店',
    key: '4',
    icon: <UserOutlined />,
    disabled: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

export default function IndexHeader() {
  return (
    <div className="index_header_outside">
      <div className="index_header_inside">
        <div className='header_l'>
          <a className="logo" href='#'>
            <img src={headerLogo} width="250" />
          </a>
          <ul className='header_nav_list'>
            <NavLink className="links" to="/">家用摄像头</NavLink>
            <NavLink className="links"to="/">产品中心</NavLink>
            <NavLink className="links" to="/product">发现精彩</NavLink>
            <NavLink className="links" to="/docs">服务与支持</NavLink>
            <NavLink className="links" to="/product">关于神眸</NavLink>
          </ul>
        </div>
        <div className='header_r'>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
            <ShoppingOutlined />
              立即购买
            </Space>
          </Button>
        </Dropdown>
        </div>
      </div>
    </div>
  );
}
