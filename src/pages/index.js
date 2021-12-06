import React from "react";
import styles from "../styles/home.module.scss";

export async function getStaticProps(ctx) {
  var whois = "LuciLua";

  const repositorios = await fetch(
    `https://api.github.com/users/${whois}/repos`,
    {
      method: "GET",
      headers: {
        Authorization: `${process.env.API_KEY}`,
      },
    }
  )
    .then((resp) => {
      if (resp.ok) return resp.json();
      throw new Error("Deu ruim!");
    })
    .then((resp) => resp);

  // const repositorios = [
  //   {id: '1', homepage: '/', name: 'Ola'},
  //   {id: '2', homepage: '/', name: 'Luci'}
  // ]

  return {
    props: { repositorios, whois },
  };
}

const Home = (props) => {
  const { repositorios, whois } = props;

  return (
    <>
      {/* <div className={styles.line}></div> */}
      <div className={styles.repositories}>
    
        <ul className={styles.ul}>
          {repositorios.map((repo) => (
            <li className={styles.li} key={repo.id}>
              <a href={`${repo.homepage}`}>{repo.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
