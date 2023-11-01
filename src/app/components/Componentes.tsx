import "./componentes.css"; // Representa o arquivo de estilização para a página
import Image from "next/image";
import icone from "../../../public/react-icon.png";
import dance from "../../../public/dance.gif";
import { ReactNode } from "react";
/*
    Componente de Quadrado:
        1. Crie um componente chamado Quadrado que renderize um elemento <div> com uma cor de fundo,
        2. largura e altura fixas para representar um quadrado.
*/

function Paragrafo({ texto }: { texto: string }) {
  return <p style={{ fontWeight: "550" }}>{texto}</p>;
}

interface definirHeader {
  texto: string;
  id?: string;
  classes?: string;
}
function Header({ texto, id, classes }: definirHeader) {
  return (
    <header id={id} className={classes}>
      <h1>{texto}</h1>
    </header>
  );
}

export function Quadrado() {
  return (
    <section>
      <Paragrafo texto="Quadrado (ele gira!)" />
      <div className="quadrado"></div>
    </section>
  );
}

export function Titulo(): JSX.Element {
  // <></> - funciona como elemento 'pai' no react, não vai aparecer no console do navegador
  return (
    <>
      <Header
        texto="Página React (testes e prática): Bem vindo!"
        classes="titulo"
      />
    </>
  );
}

export function Botao() {
  return (
    <section>
      <button>Alterar Design</button>
    </section>
  );
}

interface ListProps {
  titulo: string;
  children: ReactNode;
  //children permite colocar elementos HTML dentro de um componente de forma não definida
}
export function ListaItens({ titulo, children }: ListProps) {
  return (
    <section>
      <Paragrafo texto={titulo} />
      <ul>{children}</ul>
    </section>
  );
}

export function Imagem() {
  return (
    <section>
      <Paragrafo texto="Icone do React (clique na imagem e você será mandado para o site ofical do React)" />
      <a href="https://pt-br.legacy.reactjs.org/" target="_blanck">
        <Image src={icone} width={500} height={200} alt="Icone do React" />
      </a>
    </section>
  );
}

interface rodape {
  texto1: string;
  texto2: string;
}

export function Rodape({ texto1, texto2 }: rodape) {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>{texto1}</h2>
      <p>{texto2}</p>
      <Image
        src={dance}
        width={400}
        height={400}
        alt="Gif de um garoto dançando"
      />
    </footer>
  );
}
