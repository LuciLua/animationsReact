import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

export function Header(props) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.navAndLogo}>
        <div className={styles.logo}>
          <Image src="/logo.jpg" width="200" height="200" />
        </div>

        <ul className={styles.nav}>
          <Link href="./sobre">
            <a>
              <li>Sobre</li>
            </a>
          </Link>
          <Link href="./">
            <a>
              <li>Repositorios</li>
            </a>
          </Link>
          <Link href="https://luci-lua.tk">
            <a>
              <li>Portfólio</li>
            </a>
          </Link>
        </ul>
      </div>

      <div className={styles.foto}>
        <Image src="/logo.jpg" width="200" height="200" />
      </div>
      <div className={styles.nome}>
        <span>Luci</span>
      </div>
    </div>
  );
}
