import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  const handleViewImage = ({ url }: { url: string }): void => {
    onOpen();
    setSelectedImageUrl(url);
  };

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {cards?.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={url => handleViewImage({ url })}
          />
        ))}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        imgUrl={selectedImageUrl}
        onClose={onClose}
      />
    </>
  );
}
