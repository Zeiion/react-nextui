import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Select, SelectItem } from "@nextui-org/react";


function App() {
  const [v, setV] = useState([])

  const numberOptions = [
    {
      label: "A",
      value: 1,
    },
    {
      label: "B",
      value: 2,
    },
  ]

  const stringOptions = numberOptions.map((o)=>({
    ...o,
    value: String(o.value),
  }))

  return (
    <>
      Hello World
      <Select
        selectedKeys={[1]}
        items={numberOptions}
      >
        {
          ({label, value})=> <SelectItem key={value}>{label}</SelectItem>
        }
      </Select>
      <Select
        selectedKeys={["1"]}
        items={numberOptions}
      >
        {
          ({label, value})=> <SelectItem key={value}>{label}</SelectItem>
        }
      </Select>
      <Select
        selectedKeys={["1"]}
        items={stringOptions}
      >
        {
          ({label, value})=> <SelectItem key={value}>{label}</SelectItem>
        }
      </Select>
    </>
  )
}

export default App
