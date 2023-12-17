import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs"

 const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendationAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendationAnime = reproduce(recommendationAnime, 4)

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer"></Header>
        <AnimeList api={topAnime}></AnimeList>
      </section>
      <section>
        <Header title="Rekomendasi"></Header>
        <AnimeList api={recommendationAnime}></AnimeList>
      </section>
    </>
    )
} 
export default Page
