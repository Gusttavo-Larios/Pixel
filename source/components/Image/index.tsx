import * as React from "react";
import { Pressable } from "react-native";
import LottieView from "lottie-react-native";
import { addImage } from "../../storage";
import { Author, Container, Footer } from "./styles";

function Image() {
  const animationRef = React.useRef<LottieView>(null);
  const [like, setLike] = React.useState(false);

  function onChangeLike() {
    like ? animationRef.current?.reset() : animationRef.current?.play();
    setLike(!like);
  }

  return (
    <Container
      source={{
        uri: "https://th.bing.com/th/id/R.96f4799e78bbc5d3c2c54fad0bab73ce?rik=bYl2hAJtayyQ1A&pid=ImgRaw&r=0",
      }}
      resizeMode="cover"
    >
      <Footer>
        <Author>Facebook</Author>
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
