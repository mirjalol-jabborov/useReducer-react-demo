import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counter from '../components/counter'
import { navbar } from '../utils/Navbar'
import Navbar from '../components/Navbar'

const Root = () => {
  return (
    <>
    <Navbar>    </Navbar>
      <Routes>
        {/* <Route path="/counter" element={<Counter />} /> */}
        {navbar.length > 0 && (
           navbar.map((item) => (
            <Route key={item.id} path={item.path} element={item.element} />
            ))
        )}
      </Routes>
    </>
  )
}

export default Root
