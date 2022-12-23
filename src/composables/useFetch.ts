import { ref } from "vue";
import type { ImagesData } from "@/interfaces/types";
import type { Image } from "@/interfaces/oneImgTypes";

export const useGetImages = (url: string, method: string = "images") => {
  const images = ref<ImagesData[] | Image>([]);
  const image = ref<Image>();
  const error = ref<null | string>(null);
  const pending = ref<boolean>(false);

  const loadData = async (): Promise<void> => {
    try {
      pending.value = true;
      error.value = null;
      const response: Response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (method === "images") {
        const data: ImagesData[] = await response.json();
        images.value = data;
      } else {
        const data: Image = await response.json();
        image.value = data;
      }
    } catch (err) {
      error.value = (err as Error).message;
    } finally {
      pending.value = false;
    }
  };

  return { loadData, images, image, error, pending };
};
