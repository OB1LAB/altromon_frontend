import useAuthStore from "@/modules/Auth/useAuthStore";
import { usePathname } from "next/navigation";
import { Navbar, Nav } from "rsuite";
import Link from "next/link";
import styles from "./NavBar.module.scss";

const admins = ["OB1CHAM", "datav3nom"];

const NavBar = () => {
  const pathPage = usePathname();
  const isAuth = useAuthStore((store) => store.isAuth);
  const username = useAuthStore((store) => store.username);
  const currentPath = `/${pathPage.split("/")[1]}`;
  if (!isAuth) {
    return (
      <Navbar>
        <Nav className={styles.nav}>
          <Nav.Item href={"/"} as={Link} active={"/" === currentPath}>
            AltroMon
          </Nav.Item>
          <Nav.Item
            href={"/servers"}
            as={Link}
            active={"/servers" === currentPath}
          >
            Сервера
          </Nav.Item>
          <Nav.Item href={"/login"} as={Link} active={"/login" === currentPath}>
            Логин
          </Nav.Item>
          <Nav.Item
            href={"/register"}
            as={Link}
            active={"/register" === currentPath}
          >
            Регистрация
          </Nav.Item>
        </Nav>
      </Navbar>
    );
  }
  if (admins.includes(username)) {
    return (
      <Navbar>
        <Nav className={styles.nav}>
          <Nav.Item href={"/"} as={Link} active={"/" === currentPath}>
            AltroMon
          </Nav.Item>
          <Nav.Item
            href={"/servers"}
            as={Link}
            active={"/servers" === currentPath}
          >
            Сервера
          </Nav.Item>
          <Nav.Item
            href={"/description"}
            as={Link}
            active={"/description" === currentPath}
          >
            Описание серверов
          </Nav.Item>
          <Nav.Item
            href={"/password"}
            as={Link}
            active={"/password" === currentPath}
          >
            Смена паролей
          </Nav.Item>
          <Nav.Item
            href={"/profile"}
            as={Link}
            active={"/profile" === currentPath}
          >
            Профиль
          </Nav.Item>
        </Nav>
      </Navbar>
    );
  }
  return (
    <Navbar>
      <Nav className={styles.nav}>
        <Nav.Item href={"/"} as={Link} active={"/" === currentPath}>
          AltroMon
        </Nav.Item>
        <Nav.Item
          href={"/servers"}
          as={Link}
          active={"/servers" === currentPath}
        >
          Сервера
        </Nav.Item>
        <Nav.Item
          href={"/profile"}
          as={Link}
          active={"/profile" === currentPath}
        >
          Профиль
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
