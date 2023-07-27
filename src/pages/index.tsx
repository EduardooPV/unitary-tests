import Countdown from 'components/Countdown'
import Button from 'components/Button'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 pt-10">
      <h1 className="text-3xl">Testing with Jest and Testing Library</h1>

      <Countdown />
    </main>
  )
}
