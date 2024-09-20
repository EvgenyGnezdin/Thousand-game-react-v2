import { Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { NamePlayer, ListPlayer, CountePlayer } from './context'
import { nanoid } from 'nanoid' 

import HomePage from './pages/HomePage'
import AddPage from './pages/AddPage'
import CountePage from './pages/CountePage'

import styled from './App.module.scss'

function App() {
  const [player, setPlayer] = useState('')
  const [data, setData] = useState([])

  //Загрузка данных из localStorage, если такие имеются в нем.
  useEffect(() => {
    let storeData = JSON.parse(localStorage.getItem('data'))
    if(storeData !== null) {
      setData([...storeData])
    }
  },[])

  //Добавление массива в localStorage без отображения начального значения useState, а сразу актуального значения.
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  //Функция удаления обьекта с параметрами игрока из массива с игроками.
  const removePlayer = (id) => {
    const newList = data.filter(note => note.id !== id)
    setData(newList)
  }

  // Функция добавления обьекта с параметрами игрока в массив с игроками.
  const addPlayer = (e) => {
    e.preventDefault()
    if(player){
      setData([...data, {
        name: player,
        count: 0,
        id: nanoid() 
      }])
    } else {
      return
    }
    setPlayer('')
  }

  
  return (
    <div className={styled.app}>
      <Routes>
        <Route path="/"element={
          <ListPlayer.Provider value={{ data, removePlayer }}>
            <HomePage/>
          </ListPlayer.Provider>}/>
        <Route path="/addPlayer" element={
          <NamePlayer.Provider value={{ player, setPlayer, addPlayer, data }}>
            <AddPage/>
          </NamePlayer.Provider>}/>
        <Route path="/countePlayer/*" element={
          <CountePlayer.Provider value={{ data, setData }}>
            <CountePage/>
          </CountePlayer.Provider>}/>
      </Routes>
    </div>
  )
}

export default App
