export interface FormerInheritor {
    url: string; // URL del personaje que fue un antiguo portador
  }
  
  export interface Titan {
    id: number;
    name: string;
    img: string; // URL completa de la imagen
    height: string; // Altura del titán
    abilities: string[]; // Habilidades del titán
    currentInheritor: string | null; // URL del portador actual
    formerInheritors: FormerInheritor[]; // Lista de antiguos portadores
    allegiance: string[]; // A quién sirve el titán
  }