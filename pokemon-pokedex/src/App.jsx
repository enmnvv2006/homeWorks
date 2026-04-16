import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Typography } from 'antd'
import BattleArenaSection from './components/BattleArenaSection'
import CollectionSection from './components/CollectionSection'
import PokemonListSection from './components/PokemonListSection'
import { usePokemonStore } from './store/usePokemonStore'
import { getPower } from './utils/pokemon'
import './App.css'

const PAGE_SIZE = 20
const API_BASE = 'https://pokeapi.co/api/v2'

function App() {
  const caughtPokemons = usePokemonStore((state) => state.caughtPokemons)
  const catchPokemon = usePokemonStore((state) => state.catchPokemon)

  const [pokemons, setPokemons] = useState([])
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [firstFighterId, setFirstFighterId] = useState()
  const [secondFighterId, setSecondFighterId] = useState()

  const observerTargetRef = useRef(null)

  const loadPokemons = useCallback(async () => {
    if (isLoading || !hasMore) {
      return
    }

    try {
      setIsLoading(true)
      setError('')
      const listResponse = await fetch(
        `${API_BASE}/pokemon?offset=${offset}&limit=${PAGE_SIZE}`,
      )

      if (!listResponse.ok) {
        throw new Error('Не удалось получить список покемонов')
      }

      const listData = await listResponse.json()
      const detailed = await Promise.all(
        listData.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url)
          if (!response.ok) {
            throw new Error(`Ошибка загрузки: ${pokemon.name}`)
          }
          return response.json()
        }),
      )

      setPokemons((prev) => [...prev, ...detailed])
      setOffset((prev) => prev + PAGE_SIZE)
      setHasMore(Boolean(listData.next))
    } catch (loadError) {
      setError(loadError.message)
    } finally {
      setIsLoading(false)
    }
  }, [hasMore, isLoading, offset])

  useEffect(() => {
    loadPokemons()
  }, [loadPokemons])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadPokemons()
        }
      },
      { threshold: 1 },
    )

    const target = observerTargetRef.current
    if (target) {
      observer.observe(target)
    }

    return () => {
      if (target) {
        observer.unobserve(target)
      }
      observer.disconnect()
    }
  }, [loadPokemons])

  const options = useMemo(
    () =>
      caughtPokemons.map((pokemon) => ({
        label: `${pokemon.name} (#${pokemon.id})`,
        value: pokemon.id,
      })),
    [caughtPokemons],
  )

  const firstOptions = useMemo(
    () =>
      options.map((option) => ({
        ...option,
        disabled: option.value === secondFighterId,
      })),
    [options, secondFighterId],
  )

  const secondOptions = useMemo(
    () =>
      options.map((option) => ({
        ...option,
        disabled: option.value === firstFighterId,
      })),
    [options, firstFighterId],
  )

  const fighterOne = useMemo(
    () => caughtPokemons.find((pokemon) => pokemon.id === firstFighterId),
    [caughtPokemons, firstFighterId],
  )

  const fighterTwo = useMemo(
    () => caughtPokemons.find((pokemon) => pokemon.id === secondFighterId),
    [caughtPokemons, secondFighterId],
  )

  const battleResult = useMemo(() => {
    if (!fighterOne || !fighterTwo) {
      return null
    }

    const firstPower = getPower(fighterOne)
    const secondPower = getPower(fighterTwo)

    if (firstPower === secondPower) {
      return `Ничья: ${fighterOne.name} и ${fighterTwo.name} имеют одинаковую силу (${firstPower})`
    }

    const winner = firstPower > secondPower ? fighterOne : fighterTwo
    const score = `${Math.max(firstPower, secondPower)} vs ${Math.min(
      firstPower,
      secondPower,
    )}`

    return `Победитель: ${winner.name}. Счет по сумме характеристик: ${score}`
  }, [fighterOne, fighterTwo])

  return (
    <main className="app-shell">
      <Typography.Title level={1}>Pokemon Arena</Typography.Title>

      <CollectionSection caughtPokemons={caughtPokemons} />

      <BattleArenaSection
        battleResult={battleResult}
        fighterOne={fighterOne}
        fighterTwo={fighterTwo}
        firstFighterId={firstFighterId}
        firstOptions={firstOptions}
        secondFighterId={secondFighterId}
        secondOptions={secondOptions}
        setFirstFighterId={setFirstFighterId}
        setSecondFighterId={setSecondFighterId}
      />

      <PokemonListSection
        catchPokemon={catchPokemon}
        caughtPokemons={caughtPokemons}
        error={error}
        hasMore={hasMore}
        isLoading={isLoading}
        observerTargetRef={observerTargetRef}
        pokemons={pokemons}
      />
    </main>
  )
}

export default App
