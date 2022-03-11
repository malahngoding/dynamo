import { standService } from "@/utils/service";

export const authService = async (): Promise<{
  data: {
    messages: string;
    status: string;
  };
}> => {
  const data = await standService.get("/api", {});
  return data.data;
};
