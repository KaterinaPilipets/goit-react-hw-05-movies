import { Container, Header, Link, Logo } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
const SharedLayout = () => (
  <Container>
    <Header>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Logo>Filmoteka</Logo>
    </Header>
    <main>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  </Container>
);

export default SharedLayout;
