import "./App.css"
import useLocalStorage from "./localstorage"

export default function ChangeTheme() {
  const [Theme, setTheme] = useLocalStorage("theme" ,"light")

  function handleColor() {
    setTheme(Theme === 'light' ? 'dark' : 'light')
  }
  console.log(Theme)
  return <div className="main" data-theme={Theme}>
    <div className="box">
      <h1>I think i am the best fit for <span>BetterZila!!</span><div className="hover">Hover!!</div></h1>
      <h1>Hello World!!</h1>
      <button className="button2" onClick={handleColor}>Change Theme</button>
    </div>
  </div>
}