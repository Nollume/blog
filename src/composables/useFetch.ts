import { ref } from "vue";
import type { ImagesData } from "@/interfaces/types";

export const useGetImages = (url: string) => {
  const images = ref<ImagesData[]>([]);
  const error = ref<null | string>(null);
  const pending = ref<boolean>(false);

  const loadData = async (): Promise<void> => {
    try {
      pending.value = true;
      error.value = null;
      const response: Response = await fetch(url);
      const data: ImagesData[] = await response.json();
      images.value = data;
    } catch (err) {
      error.value = (err as Error).message;
    } finally {
      pending.value = false;
    }
  };

  return { loadData, images, error, pending };
};
