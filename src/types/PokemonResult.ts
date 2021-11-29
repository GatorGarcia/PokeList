export type PokemonResult = {
    name: string,
    sprites: {
        front_default: string
    },
    moves: {
        0: {
            move: {
                name: string
            }
        }
    },
    types: {
        0: {
            type: {
                name: string
            }
        }
    }
}