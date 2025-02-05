import { Footer, NavigationBar, Layout } from "@/components";
import { MainContent } from "@/components/Pages";
import { Suspense } from "react";

export default function Home() {
  return (
    <Layout>
      <NavigationBar
        $isSeparated={false}
        $isAuthorized={false}
        placeholderText="플레이스 홀더"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <MainContent />
      </Suspense>
      <Footer />
    </Layout>
  );
}
