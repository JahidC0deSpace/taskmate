import React from 'react'

export const Footer = () => {
  const date=new Date().getFullYear();
  return (
    <footer>
       CopyRight©{date}
    </footer>
  )
}
