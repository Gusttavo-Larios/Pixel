import * as React from "react";
import Body from "../../components/Body";
import Header from "../../components/Header";
import Image from "../../components/Image";
import { ItemSeparator, ListFooter, ListImages } from "./styles";

function Home() {
  return (
    <Body>
      <Header>Pixel</Header>
      <ListImages
        data={[0, 0, 0, 0, 0, 0, 0, 0]}
        renderItem={(item) => <Image />}
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
