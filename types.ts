export interface GetCharacterResults {
  info: Info;
  results: Character[];
}

export interface ViewState {
  viewType:string
}

export interface GetEmployeeResults {
  info: Info;
  results: Employee[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Employee {
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  gender: string;
  id: string;
  photo: string;
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}
