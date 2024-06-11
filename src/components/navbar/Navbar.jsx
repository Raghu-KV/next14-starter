"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  //TEMP DATA

  const session = false;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.navLinks}>
        {navLinks.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className={`${pathName == link.path && styles.activeNav}`}
          >
            {link.title}
          </Link>
        ))}

        {session ? (
          <>
            {isAdmin && (
              <Link
                href={"/admin"}
                className={`${pathName == "/admin" && styles.activeNav}`}
              >
                admin
              </Link>
            )}
            <button>Log Out</button>
          </>
        ) : (
          <Link
            href={"/login"}
            className={`${pathName == "/login" && styles.activeNav}`}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
