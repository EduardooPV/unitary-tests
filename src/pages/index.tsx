import Button from 'components/Button'

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">Testing with Jest and Testing Library</h1>

      <Button testId="buttonTesting" onClick={() => alert('Click in button')}>
        CTA
      </Button>
    </main>
  )
}
