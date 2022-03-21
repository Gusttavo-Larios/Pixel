import AsyncStorage from "@react-native-async-storage/async-storage";
import StorageInterface from "../interfaces/storage.interface";

export async function addImage(image: StorageInterface) {
  try {
    let storageImages: any = getImages();
    storageImages.push(image);
    await AsyncStorage.setItem("@images", JSON.stringify(storageImages));
  } catch (error) {
    throw "Is not possible add image";
  }
}

export async function removeImage(image: StorageInterface) {
  try {
    const listImages: any = getImages();
    const index = listImages.indexOf(
      (item: StorageInterface) => item === image
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
    return listImages ? listImages : [];
  } catch (error) {
    throw "Is not possible get images";
  }
}