import NavBar from "./NavBar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

export default function Layout(props) {
  const { children } = props;
  const router = useRouter();
  useEffect(() => {
    const handlerRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handlerRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handlerRouteChange);
    };
  }, []);
  return (
    <div>
      <NavBar />

      <main className="container py-4">{children}</main>

      <footer className="bg-dark text-light text-center">
        <div className="container p-4 pt-2">
          <h1>&copy; Camilo Araque Caro Portfolio</h1>
          <p>2001 - {new Date().getFullYear()}</p>
          <p>All rights Reserverd</p>
        </div>
      </footer>
    </div>
  );
}
