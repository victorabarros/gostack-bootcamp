import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
// import api from '../../services/api'

import logoImage from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FunctionComponent = () => {
  const [newRepo, setNewRepo] = useState('');
  // const [repositories, setRepositories] = useState([]);

  function handleAddRepository(): void {
    console.log(newRepo);

    // Add new repo
    // consume github api fetching repo data
    // save repo updated
  }

  return (
    <>
      <img src={logoImage} alt="Github Explorer"/>
      <Title>Explore Repositórios do Github</Title>

      <Form onSubmit={handleAddRepository}>
          <input
            value={newRepo}
            onChange={(e) => setNewRepo(e.target.value)}
            placeholder="Digite o nome do repo"
          />
          <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img src="https://avatars3.githubusercontent.com/u/42843223"
                alt="victorbarros"/>
          <div>
            <strong>Victor Barros</strong>
            <p>BackEnd Developer</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
