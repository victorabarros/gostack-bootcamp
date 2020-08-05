import React, { useState, useEffect } from 'react';
import api from './services/api'

import './App.css';
import backgroundImage from './assets/background.jpeg'

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState([]);
    // useState retorna array com duas posições
    // Na primeira retorna o valor inicial
    // No segundo retorna uma função para atualizar valor

    useEffect(() => {
        api.get('/projects').then(response => {
            // console.log(response);
            setProjects(response.data);
        });
    }, []);
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
            {/* <img width={350} src={backgroundImage}/> */}

            <h1>Estado</h1>
            <p>
                <ul>
                    {projects.map(project => <li key={project.id}>{project.title}</li>)}
                </ul>
                <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
            </p>
        </>
    );
}

export default App;
