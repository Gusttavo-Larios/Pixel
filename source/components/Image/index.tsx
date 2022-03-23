import * as React from "react";
import { Pressable } from "react-native";
import LottieView from "lottie-react-native";
import ImageInterface from "~/interfaces/image.interface";
import { addImage, removeImage } from "~/storage";
import { Author, Container, Footer } from "./styles";

interface PropsType {
  data: {
    item: ImageInterface;
  };
}

function Image({ data }: PropsType) {
  const { author, url } = data.item;

  const [isVisible, setIsVisible] = React.useState(false);

  const animationRef = React.useRef<LottieView>(null);
  const [like, setLike] = React.useState(false);

  function onChangeLike() {
    like ? animationRef.current?.reset() : animationRef.current?.play();
    setLike(!like);
  }

  React.useEffect(() => {
    onChangeStorage();
  }, [like]);

  async function onChangeStorage() {
    if (like) {
      await addImage({
        author,
        url,
      });
    } else {
      await removeImage({
        author,
        url,
      });
    }
  }

  return (
    <Container
      source={{
        uri: url,
      }}
      resizeMode="cover"
      onLoadStart={() => setIsVisible(false)}
      onLoadEnd={() => setIsVisible(true)}
    >
      <Footer isVisible={isVisible}>
        <Author numberOfLines={1}>{author}</Author>
        <Pressable onPress={onChangeLike}>
          <LottieView
            ref={animationRef}
            loop={false}
            autoPlay={false}
            style={{
              height: 50,
            }}
            source={require("../../../assets/animations/heart-animation.json")}
          />
        </Pressable>
      </Footer>
    </Container>
  );
}

export default Image;
