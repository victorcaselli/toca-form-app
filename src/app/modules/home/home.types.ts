export interface DisciplePayload{
  id: string,
  name: string,
  birthDate: string,
  address: string,
  district: string,
  decisionType: string,
  churchStatus: string,
  christeningStatus: string,
  details: string
}

export interface Enumeration{
  code: string,
  description: string,
  enumeration: string
}


export interface EnumerationParam{
  param: string
}
