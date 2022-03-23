import * as React from "react";
import Body from "../../components/Body";
import Header from "../../components/Header";
import Image from "../../components/Image";
import ImageInterface from "../../interfaces/image.interface";
import PromisseImageInterface from "../../interfaces/promise.image.interface";
import { api } from "../../services/api";
import { ItemSeparator, ListFooter, ListImages } from "./styles";

function Home() {
  const [listImages, setListImages] = React.useState<ImageInterface[] | null>(null);

  React.useEffect(() => {
    getPhotos();
  }, []);

  async function getPhotos() {
    try {
      const response = await api.get("v2/list");
      const listImages: PromisseImageInterface[] = response.data
      let newImages: ImageInterface[] = []
      listImages.map(item => {
        newImages.push({
          author: item.author,
          url: item.download_url
        })
      })
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
        renderItem={(item: any)=> <Image data={item}/>}
        keyExtractor={(_, key) => key.toString()}
        numColumns={2}
        horizontal={false}
        ItemSeparatorComponent={() => <ItemSeparator />}
        ListFooterComponent={<ListFooter />}
        showsVerticalScrollIndicator={false}
      />
    </Body>
  );
}

export default Home;
