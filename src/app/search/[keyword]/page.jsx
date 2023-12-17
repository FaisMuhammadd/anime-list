import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

  return (
    <>
      {/* Anime Terpopuler */}
      <section>
        <Header
          title={`Pencarian Untuk ${decodedKeyword}...`}
        ></Header>
        <AnimeList api={searchAnime}></AnimeList>
      </section>
    </>
  );
};
export default Page;
