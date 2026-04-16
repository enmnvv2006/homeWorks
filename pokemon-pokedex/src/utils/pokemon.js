export const getStat = (pokemon, name) =>
  pokemon?.stats?.find((item) => item.stat.name === name)?.base_stat ?? 0

export const getPower = (pokemon) =>
  (pokemon?.stats ?? []).reduce((sum, item) => sum + item.base_stat, 0)
