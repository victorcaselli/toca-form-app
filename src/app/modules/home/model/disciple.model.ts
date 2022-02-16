import {Phone} from "../home.types";


export class DiscipleModel {
  id: string;
  name: string;
  age: string;
  birthDate: string;
  address: string;
  district: string;
  decisionType: string;
  churchStatus: string;
  christeningStatus: string;
  phones: Phone[];
  details: string;

  constructor() {
  }

}
