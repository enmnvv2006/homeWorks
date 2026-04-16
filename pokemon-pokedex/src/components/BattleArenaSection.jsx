import { Alert, Card, Col, Row, Select, Typography } from 'antd'
import { getPower, getStat } from '../utils/pokemon'

function BattleArenaSection({
  firstOptions,
  secondOptions,
  firstFighterId,
  secondFighterId,
  setFirstFighterId,
  setSecondFighterId,
  fighterOne,
  fighterTwo,
  battleResult,
}) {
  return (
    <section>
      <Typography.Title level={2}>Боевая арена</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Select
            allowClear
            className="full-width"
            options={firstOptions}
            placeholder="Выберите первого покемона"
            value={firstFighterId}
            onChange={(value) => setFirstFighterId(value)}
          />
        </Col>
        <Col xs={24} md={12}>
          <Select
            allowClear
            className="full-width"
            options={secondOptions}
            placeholder="Выберите второго покемона"
            value={secondFighterId}
            onChange={(value) => setSecondFighterId(value)}
          />
        </Col>
      </Row>

      {fighterOne && fighterTwo ? (
        <Row gutter={[16, 16]} className="battle-stats">
          <Col xs={24} md={12}>
            <Card title={fighterOne.name}>
              <p>HP: {getStat(fighterOne, 'hp')}</p>
              <p>Attack: {getStat(fighterOne, 'attack')}</p>
              <p>Defense: {getStat(fighterOne, 'defense')}</p>
              <p>Speed: {getStat(fighterOne, 'speed')}</p>
              <p>Total Power: {getPower(fighterOne)}</p>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card title={fighterTwo.name}>
              <p>HP: {getStat(fighterTwo, 'hp')}</p>
              <p>Attack: {getStat(fighterTwo, 'attack')}</p>
              <p>Defense: {getStat(fighterTwo, 'defense')}</p>
              <p>Speed: {getStat(fighterTwo, 'speed')}</p>
              <p>Total Power: {getPower(fighterTwo)}</p>
            </Card>
          </Col>
        </Row>
      ) : null}

      {battleResult ? (
        <Alert className="battle-result" message={battleResult} type="success" showIcon />
      ) : null}
    </section>
  )
}

export default BattleArenaSection
