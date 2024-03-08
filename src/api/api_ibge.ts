import { IResponse, IPagination } from "@/utils/interface";
import { apiRest } from "@/clients/AxiosClient";

export const getNacionalAccountsApi = async ({
  page,
  itemsPerPage,
}: IPagination): Promise<IResponse> => {
  try {
    const response = await apiRest().get(`?qtd=${itemsPerPage}&page=${page}`);

    return response;
  } catch (error: any) {
    return error;
  }
};

export const getNacionalAccountsByDateApi = () => {};
