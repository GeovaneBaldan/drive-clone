import { FontWeights, weights } from '../config'

export function normalizeWeight(
  value: keyof FontWeights | (keyof FontWeights)[]
) {
  if (Array.isArray(value)) return value.map(item => weights[item])
  else return [value].map(item => weights[item])
}
