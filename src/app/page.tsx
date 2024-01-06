/* eslint-disable react/jsx-key */
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 4)

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header
          title="Rekomendasi"
          linkHref="/populer"        />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
function reproducedAnime(recommendedAnime: any, arg1: number) {
  throw new Error("Function not implemented.");
}

