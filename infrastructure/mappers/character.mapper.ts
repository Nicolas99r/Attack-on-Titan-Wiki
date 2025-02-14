import { Character } from "../interfaces/character.interface";
import { CharacterResult } from "../interfaces/characters-response";

export class characterMapper {
    // Transforma de Character (dominio) a CharacterResult (respuesta de la API)
    static fromDomainToResponse = (character: Character): CharacterResult => {
        return {
            id: character.id,
            name: character.name,
            img: character.image,
            alias: character.aliases,
            species: character.species,
            gender: character.gender,
            age: character.age,
            height: character.height,
            relatives: character.relatives.map((relative) => ({
                family: relative.family,
                members: relative.members.filter(Boolean) as string[], // Filtra valores nulos
            })),
            birthplace: character.birthplace,
            residence: character.residence,
            status: character.status,
            occupation: character.occupation,
            groups: character.groups.map((group) => ({
                name: group.name,
                sub_groups: group.subGroups, // Renombra "subGroups" a "sub_groups"
              })),
            roles: character.roles,
            episodes: character.episodeIds.map(
                (id) => `https://api.attackontitanapi.com/episodes/${id}`
              ), // Convierte IDs en URLs
        }
    }

    // Transforma de CharacterResult (respuesta de la API) a Character (dominio)
    static fromResponseToDomain = (character: CharacterResult): Character => {
        return {
            id: character.id,
            name: character.name,
            image: character.img, // Renombra "img" a "image"
            aliases: character.alias,
            species: character.species,
            gender: character.gender,
            age: character.age,
            height: character.height,
            relatives: character.relatives.map((relative) => ({
                family: relative.family,
                members: relative.members.filter(Boolean) as string[], // Filtra valores nulos
            })),
            birthplace: character.birthplace,
            residence: character.residence,
            status: character.status,
            occupation: character.occupation,
            groups: character.groups.map((group) => ({
                name: group.name,
                subGroups: group.sub_groups, // Renombra "sub_groups" a "subGroups"
            })),
            roles: character.roles,
            episodeIds: character.episodes.map((url) =>
                parseInt(url.split("/").pop() || "", 10)
            ), // Extrae IDs de las URLs
        };
    };
}