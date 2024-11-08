import Link from 'next/link'
import { Button } from '../ui/button'
import { BiMapPin } from 'react-icons/bi'

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <BiMapPin />
      </Link>
    </Button>
  )
}
export default Logo