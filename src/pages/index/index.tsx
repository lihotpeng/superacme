import './index.less';

import IndexHeader from '@/components/IndexHeader/';
import IndexHCarousel from './components/IndexCarousel';
import axios from 'axios';
import mock from '../../../mock/index';
import React from 'react';
import { Segmented, Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};
let htmls =`<div>qwe</div>`
const items: TabsProps['items'] = [
  { key: '1', label: '电池摄像机', children: `<div>qwe</div>` },
  { key: '2', label: '4G摄像机', children: 'Content of Tab Pane 2' },
  { key: '3', label: '手持摄影设备', children: 'Content of Tab Pane 3' },
  { key: '4', label: '视频会议', children: 'Content of Tab Pane 2' },
  { key: '5', label: '专业级产品', children: 'Content of Tab Pane 3' },
  { key: '6', label: '全景相机', children: 'Content of Tab Pane 2' },
  { key: '7', label: '77777', children: '77777777777777777' },
];

type Align = 'start' | 'center' | 'end';

export default function HomePage() {
  const [alignValue] = React.useState<Align>('center');

  axios.get('/api/users')  
    .then(response => {  
      console.log(response)
    })  
    .catch(error => {  
      console.log(error)
    });  

  return (
    <div className='page'>
      <IndexHeader/>
      <IndexHCarousel/>
      <div className='tab_box'>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          indicator={{ size: (origin) => origin - 20, align: alignValue }}
        />
      </div>
    </div>
  );
}
