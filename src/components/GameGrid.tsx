import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery
}

function GameGrid({ gameQuery }: Props) {
    const { data, error, loading } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={6}>
                {loading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton} >
                        <GameCardSkeleton />
                    </GameCardContainer>
                )}
                {data.map((data) =>
                    <GameCardContainer key={data.id} >
                        <GameCard game={data} />
                    </GameCardContainer>
                )}
            </SimpleGrid>
        </>
    );


}

export default GameGrid;