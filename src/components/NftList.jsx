import { CardInfo } from './CardInfo';
import { useNavigate } from 'react-router-dom';

export const NftList = () => {
    const navigate = useNavigate();

    return (
        <div className="nft-list">
            <CardInfo onClick={() => navigate('/nft')} />
            <CardInfo onClick={() => navigate('/nft')} />
            <CardInfo onClick={() => navigate('/nft')} />
            <CardInfo onClick={() => navigate('/nft')} />
            <CardInfo onClick={() => navigate('/nft')} />
            <CardInfo onClick={() => navigate('/nft')} />
            <CardInfo onClick={() => navigate('/nft')} />
            <CardInfo onClick={() => navigate('/nft')} />
            <CardInfo onClick={() => navigate('/nft')} />
            <CardInfo onClick={() => navigate('/nft')} />
            <CardInfo onClick={() => navigate('/nft')} />
            <CardInfo onClick={() => navigate('/nft')} />
        </div>
    );
};
