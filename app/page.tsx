import { redirect } from 'next/navigation'
import { useSessionStore } from '@/stores/sessionStore'

export default function Page() {
  const { isAuthenticated } = useSessionStore.getState()

  if (!isAuthenticated) {
    redirect('/login')
  }

  redirect('/dashboard')
}