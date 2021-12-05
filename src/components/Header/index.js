import styles from "./styles.module.scss";
import Image from "next/image";


export function Header() {


  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <Image 
            src="/logo.jpg"
            width="200"
            height="200" 
        />
      </div>
      <div className={styles.foto}>
        <Image 
            src={'/logo.jpg'}
            width="200"
            height="200" 
        />
      </div>
      <div className={styles.nome}>
        <span>Luci Lua</span>
        {/* {console.log(user.avatar_url)} */}
      </div>
    </div>
  );
}
