export interface ChartsModel {
  type: string;
  data: Array<any>;
  columnNames: Array<string>;
  width: number;
  height: number;
  title?: string;
  options?: object;
}
