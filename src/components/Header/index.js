import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

import whois from "../../api/github";
import { MenuIcon } from "@heroicons/react/outline";

export async function getStaticProps(ctx) {
  console.log(whois);
  return {
    props: {
      whois,
    },
  };
}

export function Header(props) {
  const { whois } = props;

  function toggleMenu() {
    var headerContainer = document.querySelector("#menu");
    console.log(headerContainer);
    headerContainer.classList.toggle(styles.active);
  }

  return (
    <div className={styles.headerContainer} id="menu">
      <div className={styles.navAndLogo}>
        <div className={styles.logo}>
          <Image src="/logo.jpg" width="200" height="200" />
        </div>

        <ul className={styles.nav}>
          <Link href="/sobre">
            <a>
              <li>Sobre</li>
            </a>
          </Link>
          <Link href="/">
            <a>
              <li>Repositorios</li>
            </a>
          </Link>
          <Link href="/animate">
            <a>
              <li>Animate</li>
            </a>
          </Link>
          <Link href="https://luci-lua.tk">
            <a>
              <li>Portfólio</li>
            </a>
          </Link>
        </ul>
      </div>

      <div className={styles.right}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <MenuIcon className="MenuIconIco" />
        </div>
        <div className={styles.fotoNome}>
          <div className={styles.nome}>
            <span>{whois}LuciLua</span>
          </div>
          <div className={styles.foto}>
            <Image src="/logo.jpg" width="200" height="200" />
          </div>
        </div>
      </div>
    </div>
  );
}
