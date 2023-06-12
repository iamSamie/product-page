import { Header } from './components/Header'
import { Main } from './components/Main'
import { ContextFunction } from './context'

function App() {
    return (
        <>
            <ContextFunction>
                <Header />
                <Main />
            </ContextFunction>
        </>
    )
}

export default App
