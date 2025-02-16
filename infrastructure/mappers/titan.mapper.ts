import { Titan } from "../interfaces/titan.interface";

export class titanMapper {
  // Transforma de Titan (respuesta de la API) a Titan (dominio)
  static fromResponseToDomain = (titan: any): Titan => {
    return {
      id: titan.id,
      name: titan.name,
      img: titan.img,
      height: titan.height,
      abilities: titan.abilities || [],
      currentInheritor: titan.current_inheritor || null,
      formerInheritors: (titan.former_inheritors || []).map((url: string) => ({ url })),
      allegiance: Array.isArray(titan.allegiance) ? titan.allegiance : [titan.allegiance],
    };
  };

  // Transforma de Titan (dominio) a Titan (respuesta de la API)
  static fromDomainToResponse = (titan: Titan): any => {
    return {
      id: titan.id,
      name: titan.name,
      img: titan.img,
      height: titan.height,
      abilities: titan.abilities,
      current_inheritor: titan.currentInheritor,
      former_inheritors: titan.formerInheritors.map((inheritor) => inheritor.url),
      allegiance: titan.allegiance,
    };
  };
}