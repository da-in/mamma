import { useAuthStore } from "@/store/use-auth";
import { googleSheetApi } from "./axios";

const deleteRestaurant = async (restaurantId: number) => {
  const authStore = useAuthStore();

  try {
    await googleSheetApi.delete(`/restaurant`, {
      data: {
        restaurantId,
      },
      headers: {
        authorization: `Bearer ${authStore.token}`,
      },
    });
  } catch (error) {
    console.error(error);
    alert("레스토랑 삭제에 실패했습니다. 다시 시도해주세요.");
  }
};

export { deleteRestaurant };
