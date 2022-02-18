function App() {
  const title = 'Blog Post'
  const body = 'This is my blog post'

  const loading = true

  if (loading) return <h1>Loading...</h1>
  return (
    <div className='container'>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default App
