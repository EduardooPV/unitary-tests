import { FC, useEffect, useState } from 'react'
import { PostsProps } from './PostsPlaceholder.types'

const PostsPlaceholder: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<string>('')
  const [posts, setPosts] = useState<PostsProps[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        )
        const data = await response.json()
        setPosts(data)
        setIsLoading(false)
      } catch (error: any) {
        setIsError('Something went wrong!')
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2 className="text-3xl">Posts:</h2>

      <p>{isError}</p>

      {posts.length > 0 ? (
        posts.map((repo) => (
          <p className="py-3" key={repo.id}>
            {repo.title}
          </p>
        ))
      ) : (
        <p className="py-3">No posts found</p>
      )}
    </div>
  )
}

export default PostsPlaceholder
