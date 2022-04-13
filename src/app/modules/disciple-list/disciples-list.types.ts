export interface Disciple{
  id: string ,
  name: string,
  age: string,
  birthDate: string,
  address: string,
  district: string,
  decisionType: string,
  churchStatus: string,
  christeningStatus: string,
  phone: string,
  details: string
}

export interface Phone {
  id: string,
  ddd: string,
  number: string,
  phoneType: string,
  whatsapp: string,
}


export interface SearchParams {
  code: string,
  text: string
}
