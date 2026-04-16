import { Alert, Button, Card, Col, Divider, Row, Space, Spin, Statistic, Tag, Typography } from 'antd'
import { getPower } from '../utils/pokemon'

function PokemonListSection({
  error,
  pokemons,
  caughtPokemons,
  catchPokemon,
  observerTargetRef,
  isLoading,
  hasMore,
}) {
  return (
    <section>
      <Typography.Title level={2}>Список покемонов</Typography.Title>
      {error ? <Alert type="error" message={error} showIcon /> : null}

      <Row gutter={[16, 16]}>
        {pokemons.map((pokemon) => {
          const isCaught = caughtPokemons.some((item) => item.id === pokemon.id)

          return (
            <Col key={pokemon.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                className="pokemon-card"
                title={`${pokemon.name} (#${pokemon.id})`}
                cover={
                  <img
                    alt={pokemon.name}
                    className="pokemon-image"
                    src={
                      pokemon.sprites.other['official-artwork'].front_default ??
                      pokemon.sprites.front_default
                    }
                  />
                }
              >
                <Space wrap size={[4, 8]}>
                  {pokemon.types.map((type) => (
                    <Tag key={type.slot} color="blue">
                      {type.type.name}
                    </Tag>
                  ))}
                </Space>
                <Divider />
                <Space direction="vertical" className="full-width">
                  <Statistic title="Power" value={getPower(pokemon)} />
                  <Button
                    block
                    disabled={isCaught}
                    onClick={() => catchPokemon(pokemon)}
                    type="primary"
                  >
                    {isCaught ? 'Уже пойман' : 'Поймать'}
                  </Button>
                </Space>
              </Card>
            </Col>
          )
        })}
      </Row>

      <div ref={observerTargetRef} className="infinite-trigger" />
      {isLoading ? (
        <div className="loading-box">
          <Spin size="large" />
        </div>
      ) : null}
      {!hasMore && pokemons.length > 0 ? (
        <Alert
          className="end-list"
          message="Все доступные покемоны загружены."
          type="info"
          showIcon
        />
      ) : null}
    </section>
  )
}

export default PokemonListSection
