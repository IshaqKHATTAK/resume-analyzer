import React from 'react'

export default function Sec({arr}) {
  return (
    <>
    <ul>
        <li>{arr.name} {arr.completed && '✅'}</li>
    </ul>
    </>
  )
}