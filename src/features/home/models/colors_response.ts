export type ColorItem = {
  id: number,
  name: string,
  year: number,
  color: string,
  pantone_value: string
}
export class ColorsResponse {
  constructor(
    public page: number,
    public per_page: number,
    public total: number,
    public total_pages: number,
    public data: ColorItem[]
  ) { }
}