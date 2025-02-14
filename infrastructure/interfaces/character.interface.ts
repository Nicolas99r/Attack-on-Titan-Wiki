export interface Relative {
    family: string;
    members: string[]; // Filtra valores nulos
  }
  
  export interface Group {
    name: string;
    subGroups: string[]; // Renombra "sub_groups" a "subGroups"
  }
  
  export interface Character {
    id: number;
    name: string;
    image: string; // URL completa de la imagen
    aliases: string[];
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
    episodeIds: number[]; // IDs de episodios en lugar de URLs
  }