import { useState } from 'react'
//eka
import Notification from './components/Notification'
import Footer from "./components/Footer";

const App = () => {

    //toka
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    //kolmas

    console.log('render', 'päiväkirjamerkinnät')

    const handleLogin = event => {
        event.preventDefault()

        if (username === 'pekka' && password === 'PekkA') {
            setLoggedIn(true)
        } else {
            setErrorMessage('Invalid username or password')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }

        setUsername('')
        setPassword('')
    }

    //neljas

   

        if (!loggedIn) {
            return (
                <div>
                    <h1>Päiväkirja</h1>
                    <Notification message={errorMessage} />
                    <form onSubmit={handleLogin}>
                        <div>
                            <label>Käyttäjätunnus: </label>
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <label>Salasana: </label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="submit">Kirjaudu</button>
                    </form>
                    <Footer />
                </div>
            )
        }

    /* return (
        <div>
            <h1>Päiväkirjan Kirjautuminen</h1>
            <Notification message={errorMessage} />
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all' }
                </button>
            </div>
            <ul>
                {notesToShow.map(diary =>
                    <Note key={diary.id}
                          diary={diary}
                          toggleImportance={() => toggleImportanceOf(diary.id)}
                    />
                )}
            </ul>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={""} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={""} />
                </div>
                <button type="submit">Login</button>
            </form>

            
        </div>
    )*/
}
export default App