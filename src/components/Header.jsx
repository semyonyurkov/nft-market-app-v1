import { Container } from './Container';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    const HeaderEl = styled.header`
        box-shadow: var(--shadow);
        background-color: var(--colors-ui-base);
    `;

    const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 0;
    `;

    const Title = styled.div`
        color: var(--colors-text);
        font-size: var(--fs-sm);
        text-decoration: none;
        font-weight: var(--fw-bold);
    `;

    const Button = styled(Link).attrs({
        to: '/account',
    })`
        color: var(--colors-text);
        font-size: var(--fs-sm);
        text-decoration: none;
        font-weight: var(--fw-bold);
    `;

    return (
        <>
            <HeaderEl>
                <Container>
                    <Wrapper>
                        <Title>NFT Gallery</Title>
                        <Button>Log in / Sign up</Button>
                    </Wrapper>
                </Container>
            </HeaderEl>
        </>
    );
};

export default Header;
