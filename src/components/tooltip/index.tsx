import * as S from './style.css'

export type TooltipProps = {
    children: React.ReactNode
}

const Tooltip = ({children}: TooltipProps) => (
    <div>
        <h1>{children}</h1>
    </div>
)

export default Tooltip