import React from 'react'

// enum HeaderType = {
//   h1:'h1',
//   h2:'h2',

// }

const Header: React.FC<{ title: string }> = ({ title }) => {
  return <h2>{title}</h2>
}

export default Header
