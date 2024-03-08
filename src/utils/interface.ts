export interface IButtonVariant {
  paginationButton: string;
  filterButton: string;
}

export interface IContainerVariant {
  page: string;
  paginationContainer: string;
  itemsPerPageContainer: string;
  loadingContainer: string;
}

export interface IWrapperVariant {
  animationArea: string;
  textArea: string;
  filter: string;
  dataTable: string;
  titloArea: string;
}

export interface IPagination {
  page: number;
  itemsPerPage: number;
}

export interface IGetDate extends IPagination {
  initialDate?: string;
  finalDate?: string;
}

export interface IResponse {
  status: number;
  data: {
    items: Array<any>;
    totalPages: number;
  };
}

export interface IApiResponse {
  titulo: string;
  produto_id: number;
  nome_produto: string;
  data_divulgacao: string;
  tipo: string;
}

export interface IIbgeProduct {
  titlo: string;
  product_id: number;
  product_name: string;
  date: string;
  type: string;
}

export interface IFilter {
  initialDate: string;
  finalDate: string;
}
