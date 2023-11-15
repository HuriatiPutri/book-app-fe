import { Avatar, Card, Image, Text } from '@mantine/core';
import { Item } from '../../../../business/domain/Menu';
import './styles.scss';

// eslint-disable-next-line @typescript-eslint/ban-types
const ListItem = (Props: { item: Item, onPress: Function, type: string }) => {
  return(
    <>
      {Props.type === 'border' &&
        <Card padding="lg" mb={20} radius="md" withBorder>
          <div className="containerRow">
            <Image src={Props.item.cover} height={100} width={100} radius="md" />
            <div>
              <Text size="lg">{Props.item.title}</Text>
              <Text size="sm">{Props.item.description}</Text>
            </div>
          </div>
        </Card>
      }
      {Props.type === 'noBorder' &&
        <Card padding="lg" radius="md" style={{background: 'transparent'}}>
          <div className="containerRow border">
            <Avatar src="https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=600&q=90" alt="it's me" />
            <div>
              <Text size="lg">{Props.item.title}</Text>
              <Text size="sm">{Props.item.description}</Text>
            </div>
          </div>
        </Card>
      }
    </>
  );
};

export default ListItem;