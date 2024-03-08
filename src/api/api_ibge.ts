import { IResponse, IPagination, IGetDate } from "@/utils/interface";
import { apiRest } from "@/clients/AxiosClient";
import { getCurrentDate } from "@/utils/date";

export const getNacionalAccountsApi = async ({
  initialDate = "2020-01-01",
  finalDate = getCurrentDate(),
  page,
  itemsPerPage,
}: IGetDate): Promise<IResponse> => {
  try {
    const response = await apiRest().get(
      `?qtd=${itemsPerPage}&page=${page}&de=${initialDate}&ate=${finalDate}`
    );

    return response;
  } catch (error: any) {
    return error;
  }
};
