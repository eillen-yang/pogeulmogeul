export interface Post<TCategory = string> {
  id?: number
  title: string
  contents: string
  price: number
  place: string
  category: string[]
  firstDate: Date
  lastDate: Date
  mainImage: File
  detailImage?: File[]
}
