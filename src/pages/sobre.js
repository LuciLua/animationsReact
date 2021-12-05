import React from "react";
import Image from "next/image";

import styles from "../styles/sobre.module.scss";

export async function getStaticProps(ctx) {
  var whois = `LuciLua`;

  const usuario = await fetch(`https://api.github.com/users/${whois}`, {
    method: "GET",
    headers: {
      Authorization: `${process.env.API_KEY}`,
    },
  })
    .then((resp) => {
      if (resp.ok) return resp.json();
      throw new Error("Deu ruim!");
    })
    .then((resp) => resp);

  return {
    props: { usuario },
  };
}

const Sobre = (props) => {
  const { usuario } = props;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.boxPhoto}>
            <Image
              className={styles.profilePhoto}
              src={usuario.avatar_url}
              alt="Picture of the author"
              layout="fill"
            />
          </div>
          <div className={styles.boxAbout}>
            <h1>Luci Lua</h1>
            <p>
              Olá! Sou Luci, estudante de artes da Universidade Federal de Juiz
              de Fora e estusiasta da tecnologia. Minha grande paixão é a
              novidade, a possibilidade de mudança e, para mim, mudar é o
              primeiro grande passo para evoluir. Atualmente tenho 20 anos e
              busco sempre melhorar nos meus projetos, aprender ferramentas
              novas e aperfeiçoar as que já sei.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sobre;
