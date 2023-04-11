export const NftDetails = ({ navigate }) => {
    return (
        <div className="nft-container" push={navigate}>
            <div className="nft-title-img">
                <h1>Nft #1</h1>
                <img
                    src="https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/5/14/756481953203145.png"
                    alt="123"
                />
            </div>
            <div className="nft-info">
                <div>author: Ivan Loh</div>
                <div>
                    Description: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quo facere modi praesentium. Rerum velit
                    inventore quas doloremque, ipsam repudiandae nesciunt quo,
                    deserunt ullam porro provident nulla nostrum, sequi sapiente
                    doloribus!
                </div>
                <div>id: 1</div>
            </div>
        </div>
    );
};
