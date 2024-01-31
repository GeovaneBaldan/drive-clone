import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<string, string>
    padding: Record<PaddingWildcard, string>
  }

  export type PaddingWildcard =
    | 'p1'
    | 'p2'
    | 'p3'
    | 'p4'
    | 'p5'
    | 'p6'
    | 'p7'
    | 'p8'
}
