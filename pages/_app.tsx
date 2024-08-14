import { AppProps } from "next/app";
import "../styles/index.css";
import AOS from "aos";
import "aos/dist/aos.css"; // 引入 AOS 的 CSS 文件
import { useEffect } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 動畫持續時間，毫秒
      easing: "ease-in-out", // 緩動效果
      once: true, // 是否只觸發一次
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
