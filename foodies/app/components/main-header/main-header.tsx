import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
    <MainHeaderBackground />
    <header className={styles.header}>
        <Link href="/" className={styles.logo}>
            <Image width={50} height={50} src={logo} alt="a picture of a plate of food" priority />
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
    </>
  );
}