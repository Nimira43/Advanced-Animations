const createProfileAction = async (formData: FormData) => {
  'use server'
  const firstName = formData.get('firstName') as string
  console.log(firstName)
}

function Create