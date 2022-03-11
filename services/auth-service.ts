import { standService } from "@/utils/service";

export const authService = async (): Promise<{
  data: {
    messages: string;
    status: string;
  };
}> => {
  return await standService.get("/", {});
};
