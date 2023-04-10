import { useNavigate } from 'react-router-dom';
import { NftDetails } from '../components/NftDetails';

const Details = () => {
    const navigate = useNavigate();

    return (
        <div>
            <NftDetails navigate={navigate} />
        </div>
    );
};

export default Details;
