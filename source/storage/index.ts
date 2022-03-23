import AsyncStorage from "@react-native-async-storage/async-storage";
import ImageInterface from "../interfaces/image.interface";

export async function addImage(image: ImageInterface) {
  try {
    let storageImages: ImageInterface[] = await getImages();
    storageImages.push(image);
    await AsyncStorage.setItem("@images", JSON.stringify(storageImages));
  } catch (error) {
    throw "Is not possible add image";
  }
}

export async function removeImage(image: ImageInterface) {
  try {
    const listImages: ImageInterface[] = await getImages();
    const index = listImages.findIndex(
      (item: ImageInterface) => item.url == image.url
      );
    const newListImages = listImages.splice(index, 1);
    await AsyncStorage.setItem("@images", JSON.stringify(newListImages));
  } catch (error) {
    throw "Is not possible remove image";
  }
}

export async function getImages() {
  try {
    const listImages = await AsyncStorage.getItem("@images");
    return listImages ? JSON.parse(listImages) : [];
  } catch (error) {
    throw "Is not possible get images";
  }
}