import './index.less';
import videos from '../../../../assets/Banner_X4_PC_3840-1760_xlarge.mp4';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  minHeight: '880px',
  maxHeight: '880px',
  margin: 0,
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

const videoStyle: React.CSSProperties = {
  objectFit: 'cover',
  width:'100%'
};


export default function IndexHCarousel() {

  return (
    <div className="index_carousel">
      <Carousel>
        <div>
          <h3 style={contentStyle}>
            <video style={videoStyle} className="bg-video" width="100%" height="880" autoplay="autoplay" src={videos}></video>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img className="bg-video" width="100%" height="880" src={'https://res.insta360.com/static/421c4172ec5cce8c79d88090bdc538a4/cn-1920.jpg'}/>
          </h3>
        </div>
      </Carousel>
    </div>
  );
}
