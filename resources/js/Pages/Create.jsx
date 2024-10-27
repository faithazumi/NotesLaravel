import { Head, useForm } from '@inertiajs/react'
import React from 'react'

const Create = () => {
    const { data, setData, post, errors, processing} = useForm({
        body:'',
    })

    function submit(e){
        e.preventDefault()
        post('/posts')
    }

    console.log(errors);

    <Head title='Write your notes'/>

  return (
    <div>
      <h1 className='title'>Write a new notes</h1>
      <div className='w-1/2 mx-auto'>
        <form onSubmit={submit}>
            <textarea rows='10' value={data.body} 
            onChange={(e) => setData('body', e.target.value)} className={errors.body && '!ring-red-500'}></textarea>
            {errors.body && <p className='error'>{errors.body}</p>}
            <button className='primary-btn mt-4' disabled={processing}>Create Post</button>
        </form>
      </div>
    </div>
  )
}

export default Create