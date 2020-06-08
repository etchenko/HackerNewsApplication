import * as React from 'react'
import './App.css'
import Stories from './Stories'
import SearchStories from './SearchStories'

export const App: React.FC = () => (
  <div className="app">
    <div className='interactions'>
      <SearchStories />
    </div>
    <Stories />
  </div>
)
