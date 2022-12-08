export interface IBook {
  id: string
  selfLink: string
  volumeInfo: IVolumeInfo
  imageLinks: string
}

interface IVolumeInfo {
  title: string
  authors: string[]
  description: string
}
