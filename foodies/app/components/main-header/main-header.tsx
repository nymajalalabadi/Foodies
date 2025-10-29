import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

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
                    <NavLink href="/meals">Browse Meals </NavLink> 
                </li>
                <li>
                    <NavLink href="/community">Foodies Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
  );
}