import React, { useState } from 'react';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['front', 'devs']);
    // useState retorna array com duas posições
    // Na primeira retorna o valor inicial
    // No segundo retorna uma função para atualizar valor

    function handleAddProject() {
        // projects.push(`New Project ${Date.now()}`);
        setProjects([...projects, `New Project ${Date.now()}`]); // ... spread operator
    }


    return (
        <>
            <Header title="Projects">
                <ul>
                    <li>b@</li>
                    <li>gre</li>
                </ul>
            </Header>

            <h1>Estado</h1>
            <p>
                <ul>
                    {projects.map(project => <li key={project}>{project}</li>)}
                </ul>
                <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
            </p>
        </>
    );
}

export default App;
