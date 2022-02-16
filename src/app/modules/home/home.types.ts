export interface DisciplePayload{
  id: string,
  name: string,
  age: string,
  birthDate: string,
  address: string,
  district: string,
  decisionType: string,
  churchStatus: string,
  christeningStatus: string,
  phones: Phone[],
  details: string
}

export interface Phone {
  id: string,
  ddd: string,
  number: string,
  phoneType: string,
  whatsapp: string,
}


export interface Enumeration{
  code: string,
  description: string,
  enumeration: string
}


export interface EnumerationParam{
  param: string
}
