import { Dialog } from './components/ui/dialog'

import { CreateGoal } from './components/create-goal'
import { WeeklySummary } from './components/WeeklySummary'
import { useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
// import { EmptyGoal } from './components/empty-goals'
import { getSummary } from './http/get-summary'
import { EmptyGoals } from './components/empty-goals'


export function App() {
  const { data, isLoading } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
  })

  if (isLoading || !data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="text-zinc-500 animate-spin size-10" />
      </div>
    )
  }

  return (
    <Dialog>
      {data.summary.total > 0 ? (
        <WeeklySummary summary={data.summary} />
      ) : (
        <EmptyGoals />
      )}

      < CreateGoal />
    </Dialog>
  )
}

