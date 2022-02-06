function App() {
  const [counter, setCounter] = useState(1)
  const incrementCounter = () => setCounter(counter + 1)
  let decrementCounter = () => setCounter(counter - 1)

  if(counter<=0) {decrementCounter = () => setCounter(1)}

  return (
    <div> 
      <ButtonIncrement onClickFunc={incrementCounter}/>
      <Display message={counter}/> 
      <ButtonDecrement onClickFunc={decrementCounter}/>
    </div>
  )
}
