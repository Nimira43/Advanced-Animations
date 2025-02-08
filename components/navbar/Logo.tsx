import Link from 'next/link'
import { Button } from '../ui/button'
import { CgGlobe } from 'react-icons/cg'

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <CgGlobe  className='w-6 h-6'/>
      </Link>
    </Button>
  )
}
export default Logo