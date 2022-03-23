import * as React from "react";
import Body from "~/components/Body";
import Header from "~/components/Header";
import Image from "~/components/Image";
import LoadingFooter from "~/components/LoadingFooter";
import ImageInterface from "~/interfaces/image.interface";
import { api } from "~/services/api";
import { ItemSeparator, ListImages } from "./styles";

function Home() {
  const [page, setPage] = React.useState(1);
  const [listImages, setListImages] = React.useState<ImageInterface[]>([]);

  React.useEffect(() => {
    getPhotos();
  }, []);

  async function getPhotos() {
    try {
      const response = await api.get(`v2/list?page=${page}&limit=6`);
      const { data } = response;
      let newImages: ImageInterface[] = listImages;

      data.map((item: { author: string; download_url: string }) => {
        newImages.push({
          author: item.author,
          url: item.download_url,
        });
      });

      setPage(page + 1);
      setListImages(newImages);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Body>
      <Header>Pixel</Header>
      <ListImages
        data={listImages}
        keyExtractor={(_, key) => key.toString()}
        renderItem={(item: any) => <Image data={item} />}
        onEndReached={() => getPhotos()}
        onEndReachedThreshold={0.1}
        numColumns={2}
        horizontal={false}
        ItemSeparatorComponent={() => <ItemSeparator />}
        ListFooterComponent={<LoadingFooter />}
        showsVerticalScrollIndicator={false}
      />
    </Body>
  );
}

export default React.memo(Home);
