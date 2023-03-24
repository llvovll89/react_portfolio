import styled from "styled-components";

const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    display: block;
    padding: 20px;
    border: 1px solid #078f;
`

const VelogLink = styled.a`
    margin: 6px auto;
    display: block;
    width: 100%;
    height: 56px;
    font-size: 16px;
    background: #191919;
    border-radius: 6px;
    color: #FFF;
    font-size: 18px;
    letter-spacing: 0.12rem;
    line-height: 56px;
    text-align: center;
    transition: 0.25s all linear;
    font-family: var(--korFont);
    &:hover {
        background: #08f;
        /* color: #fff; */
    }

    @media screen and (max-width: 1024px) {
        height: 46px;
        line-height: 46px;
        font-size: 16px;
    }
`

export {
    ModalContainer,
    VelogLink
}