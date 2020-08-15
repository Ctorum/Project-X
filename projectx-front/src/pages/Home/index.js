import React from 'react';

import { Container } from './styles';
import code from '../../assets/code.svg';

function Home() {
    return (
        <Container>
            <h1>CodeThon</h1>
            <section className="section1">
                <h2>O maior evento de hackathon do Brasil</h2>

                <img src={code} alt="Code" title="Code" />
                <div>
                    <p>Prove suas habilidades aqui</p>
                </div>

                <img src={code} alt="Code" title="Code" />
                <div>
                    <p>Seja destemido</p>
                </div>

                <img src={code} alt="Code" title="Code" />
                <div>
                    <p>Mame el admin</p>
                </div>
            </section>
            <section className="section2">
                <p>Section 2</p>
            </section>
            <section className="section3">
                <p>Section 3</p>
            </section>
        </Container>
    );
}

export default Home;
