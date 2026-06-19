import { getProfile } from '@/lib/db'
import { NavbarClient } from '@/components/navbar-client'

export async function Navbar() {
  const PERSON = await getProfile()
  return <NavbarClient name={PERSON.name} />
}
