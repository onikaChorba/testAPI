
export type productsType = {
  id: string,
  title: string, 
  price: number,
  description: string, 
  category: string, 
  image: string,
}

export type quoteType={
  quote: string,
  author: string,
}
export type gendersType = Array<string>

export type scheduleType = {
  time: string,
  days: string
}
export type imageType ={
  original: string,
  medium: string,
}
export type countryType = {
  name: string
}
export type networkType ={
  country: countryType
}
export type showType ={
  id: string,
  url: string,
  name: string,
  types: string, 
  language: string,
  genders: gendersType,
  status: string,
  premiered: string,
  ended: string,
  schedule: scheduleType,
  image: imageType,
  network: networkType,
  genres: Array<string>,
  officialSite: string,
  summary:string
}

export type filmsType = {
  show: showType,
  score: Number | string,
  films: any
}
export type peopleType = {
  url: string,
  name: string,
  birthday: string,
  image: imageType,
  gender: string, 
  country: countryType
}
