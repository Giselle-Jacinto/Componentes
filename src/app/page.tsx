import {
  Quadrado,
  Titulo,
  Botao,
  ListaItens,
  Imagem,
  Rodape,
} from "./components/Componentes";

export default function Home() {
  return (
    <>
      <Titulo />
      <main>
        <Quadrado />
        <Botao />
        <ListaItens titulo="Lista de Frutas">
          <li>
            <span>Maças</span>
          </li>

          <li>
            <span>Uvas</span>
          </li>

          <li>
            <span>Mangas</span>
          </li>
        </ListaItens>
        <Imagem />
      </main>
      <Rodape
        texto1="Esse é o fim dessa página"
        texto2="Obrigado por ver até o final, até mais!"
      />
    </>
  );
}
