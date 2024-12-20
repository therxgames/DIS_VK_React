import { tw } from "typewind";
import { MainLayout } from "@layouts/MainLayout/MainLayout";
import { Banner } from "./components/Banner";
import { Reviews } from "./components/Reviews";
import { Main } from "./components/Main";
import { FAQ } from "./components/FAQ";
import { Footer } from "@components/ui/Footer";

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <Reviews />
      <Main />
      <FAQ />
      <Footer />
    </MainLayout>
  );
}
