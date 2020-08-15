import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    overflow: hidden;

    h1 {
        color: white;
        margin: 2.4rem auto;
        font-size: 2.8rem;
        position: absolute;
        top: 0;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: calc(100vh - 2rem);
        background-color: black;

        margin: 1rem;
    }

    .section1 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas:
            'subTitle subTitle'
            'svg text'
            'svg text'
            'svg text';
        p:nthchild(1) {
            grid-area: text;
        }
        p:nthchild(2) {
            grid-area: text;
        }
        p:nthchild(3) {
            grid-area: text;
        }

        div > p {
            display: flex;
            width: 40%;
            flex-wrap: no-wrap;
        }

        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 30%;
            height: 30%;
        }

        h2 {
            text-align: center;
            margin: 7rem 1.6rem 0 1.6rem;
            grid-area: subTitle;
        }

        img {
            width: 2rem;
            margin: 2rem;
            justify-self: end;
        }

        img:ntchild(1) {
            grid-area: svg;
        }

        img:nthchild(2) {
            grid-area: svg;
        }

        img:nthchild(3) {
            grid-area: svg;
        }
    }

    .title-div {
    }
`;
