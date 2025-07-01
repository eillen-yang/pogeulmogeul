export interface Post {
  title: string
  content: string
  price: number
  location: string
  category: string[]
  startData: Date
  endDate: Date
  mainImage?: FileList
  detailImage?: FileList
}
