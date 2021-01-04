import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api'

import logoImage from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  }
  description: string;
}

const Dashboard: React.FunctionComponent = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const response = await api.get(`repos/${newRepo}`);
    const respository = response.data;

    setRepositories([...repositories, respository]);
    setNewRepo('');
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
        {repositories.map(repository => (
        <a key={repository.full_name} href="test">
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}/>
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
