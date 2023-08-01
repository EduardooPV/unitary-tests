import { render, screen, waitFor } from '@testing-library/react'
import PostsPlaceholder from '.'
import fetchMock from 'jest-fetch-mock'

describe('<PostsPlaceholder />', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('should render posts when api call success', async () => {
    const mockPosts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2 ' }
    ]

    fetchMock.mockResponseOnce(JSON.stringify(mockPosts))

    render(<PostsPlaceholder />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()

    expect(await screen.findByText(/Posts:/)).toBeInTheDocument()

    expect(await screen.findByText('Post 1')).toBeInTheDocument()
    expect(await screen.findByText('Post 2')).toBeInTheDocument()

    expect(screen.queryByText('No posts found')).not.toBeInTheDocument()
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
  })

  it('should render error when api call fails', async () => {
    fetchMock.mockReject(() => Promise.reject('API error'))

    render(<PostsPlaceholder />)

    expect(await screen.findByText('Something went wrong!')).toBeInTheDocument()
    expect(await screen.findByText('No posts found')).toBeInTheDocument()
  })
})
