export interface Relative {
    family: string;
    members: (string | null)[];
  }
  
  export interface Group {
    name: string;
    sub_groups: string[];
  }
  
  export interface CharacterResult {
    id: number;
    name: string;
    img: string;
    alias: string[];
    species: string[];
    gender: string;
    age: number | null;
    height: string | null;
    relatives: Relative[];
    birthplace: string | null;
    residence: string | null;
    status: 'Alive' | 'Deceased' | 'Unknown';
    occupation: string | null;
    groups: Group[];
    roles: string[];
    episodes: string[];
  }
  
  export interface ApiResponse<T> {
    info: {
      count: number;
      pages: number;
      next_page: string | null;
      prev_page: string | null;
    };
    results: T[];
  }