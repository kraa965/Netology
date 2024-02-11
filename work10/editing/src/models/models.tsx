export interface Data {
  id: string;
  name: string;
  price: number;
}

export interface IsRedact {
  id: string;
  redact: boolean;
}

export interface DataState {
  data: {
    data: Data[];
  };
}
