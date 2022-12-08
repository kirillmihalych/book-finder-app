export interface IBooks {
  items: IBook[]
}

export interface IBook {
  id: string
  selfLink: string
  volumeInfo: IVolumeInfo
}

interface IVolumeInfo {
  title: string
  authors: string[]
  description: string
  imageLinks: IImageLinks
  previewLink: string
}

interface IImageLinks {
  smallThumbnail: string
  thumbnail: string
}
