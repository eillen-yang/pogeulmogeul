export interface Post {
  bid?: number
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

export interface PostList {
  bid: number
  baseBoard: {
    email: string
    title: string
    contents: string
    titlePath: string
    detailPaths?: string[]
    createAt: string
    firstDate: string
    lastDate: string
  }
  bigCategory: string
  category: string[] | string
  place?: string
  price?: string
}

export interface PostDetail {
  name: string
  title: string
  contents: string
  price?: number
  place?: string
  category: string[] | string
  createdAt: string
  firstDate: string
  lastDate: string
  gender: string
  nationality: string
  city: string
  businessTrip: string | null
  correction: string | null
  production: string | null
  portfolioPath: string | null
  titlePath: string | null
  detailPath: string[] | null
  userRank: string
  url: string | null
}
