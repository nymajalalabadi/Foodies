import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className={styles.header}>
        <Link href="/" className={styles.logo}>
            <Image width={50} height={50} src={logo.src} alt="a picture of a plate of food"  />
            nextlevel food
        </Link>

        <nav className={styles.nav}>
            <ul  >
                <li>
                    <Link href="/meals">Browse Meals </Link> 
                </li>
                <li>
                    <Link href="/community">Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}