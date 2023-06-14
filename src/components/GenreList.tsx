import { HStack, List, ListItem, Image, Spinner, Button, Heading } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
    const { data, isLoading, error } = useGenres()
    if (isLoading) return <Spinner />
    if (error) return null
    return (
        <>
            <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
            <List >
                {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} variant={'link'} fontSize={'large'}>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
            </List>
        </>
    );
}

export default GenreList;