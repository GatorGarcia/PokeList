export type PokemonResult = {
    name: string,
    sprites: PokemonSprite,
    moves: PokemonMove,
    types: PokemonType,
    height: string,
    weight: string,
    id: string
}

export type PokemonType = {
    0: {
        type: {
            name: string
        }
    }
}

type PokemonMove = {
    0: {
        move: {
            name: string
        }
    }
}

type PokemonSprite = {
    front_default: string
}