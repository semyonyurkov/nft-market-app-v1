import { Card } from 'antd';

export const CardInfo = ({ onClick }) => (
    <Card
        onClick={onClick}
        hoverable
        style={{
            width: 240,
        }}
        cover={
            <img
                alt="example"
                src="https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/5/14/756481953203145.png"
            />
        }
    >
        <div>Name: Nft Monkey #1</div>
        <div>Author: Vladimir Putin</div>
    </Card>
);
