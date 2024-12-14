import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const createProfileAction = async (formData: FormData) => {
  'use server'
  const firstName = formData.get('firstName') as string
  console.log(firstName)
}

function CreateProfile() {
  return (
    <section>
      <h1 className='2xl font-semibold mb-8 capitalize'>new user</h1>
      <div className="border p-8 rounded sm max-w-lg">
        <form action={createProfileAction}>
          <div className="mb-2">
            <Label htmlFor='firstName'>First Name</Label>
            <Input id="firstName" name="firstName" type='type' />
          </div>
          <Button type='submit' size='lg'>
            Create Profile
          </Button>
        </form>
      </div>
    </section>
  )
}
export default CreateProfile