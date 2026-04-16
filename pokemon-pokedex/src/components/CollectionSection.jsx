import { Empty, Space, Tag, Typography } from 'antd'
import { getPower } from '../utils/pokemon'

function CollectionSection({ caughtPokemons }) {
  return (
    <section>
      <Typography.Title level={2}>Моя коллекция</Typography.Title>
      {caughtPokemons.length === 0 ? (
        <Empty description="Вы еще не поймали покемонов" />
      ) : (
        <Space wrap size={[8, 8]}>
          {caughtPokemons.map((pokemon) => (
            <Tag key={pokemon.id} color="gold">
              {pokemon.name} (Power: {getPower(pokemon)})
            </Tag>
          ))}
        </Space>
      )}
    </section>
  )
}

export default CollectionSection
