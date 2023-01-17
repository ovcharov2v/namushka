import React, {FC, ReactNode, useEffect} from 'react'

interface IProps {
  title?: string,
  children?: ReactNode
}

const BaseLayout: FC<IProps> =({title, children}) =>{
  useEffect(() => {
    document.title = title || 'Default title'
  }, [title])
  return(
    <main className="main">
      <div className="container">
        {children}
      </div>
    </main>
  )
}

export default BaseLayout