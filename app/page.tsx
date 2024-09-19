"use client"

import { Container, Main } from '@/shared/components/layout';
import { Title, Description, SectionTitle, List, ListItem } from '@/shared/components/typography';
import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <Main>
        <Title>Teste Técnico - MySide</Title>
        <Description>
          Este projeto é uma aplicação web desenvolvida com <strong>Next.js</strong> para exibir produtos consumindo uma API externa. A estrutura do código segue o conceito de <strong>features</strong> organizadas por pastas, com nomes de arquivos em <strong>kebab-case</strong> para garantir consistência e modularidade.
        </Description>

        <SectionTitle>Ferramentas Utilizadas:</SectionTitle>
        <List>
          <ListItem>
            <strong>Axios</strong>: Biblioteca simples e eficiente para fazer requisições HTTP. Facilita a comunicação com a API e o tratamento de erros.
          </ListItem>
          <ListItem>
            <strong>React Query</strong>: Gerencia os dados assíncronos de forma otimizada, com cache automático, revalidação e sincronização em segundo plano.
          </ListItem>
        </List>

        <SectionTitle>Funcionalidades:</SectionTitle>
        <List>
          <ListItem>Listagem e filtragem de produtos.</ListItem>
          <ListItem>Busca por nome.</ListItem>
          <ListItem>Detalhamento dos produtos.</ListItem>
          <ListItem>Estrutura modular e organizada por features.</ListItem>
        </List>

        <SectionTitle>Repositório no GitHub:</SectionTitle>
        <Description>
          Acesse o código-fonte aqui: <Link href="#" target="_blank" rel="noopener noreferrer">Link para o repositório</Link>
        </Description>
      </Main>
    </Container>
  );
}
