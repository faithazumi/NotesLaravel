import { Head, useForm } from '@inertiajs/react'
import { useRoute } from '../../../vendor/tightenco/ziggy'
import React from 'react'

const Create = ({post}) => {
    const route = useRoute()

    const { data, setData, put, errors, processing} = useForm({
        body: post.body,
    })


    function submit(e){
        e.preventDefault()
        put(`/posts/${post.id}`);
        put(route('posts.update', post));
    }



  return (
    <div>
        <Head title='Edit' />
      <h1 className='title'>Edit your notes</h1>
      <div className='w-1/2 mx-auto'>
        <form onSubmit={submit}>
            <textarea rows='10' value={data.body} 
            onChange={(e) => setData('body', e.target.value)} className={errors.body && '!ring-red-500'}></textarea>
            {errors.body && <p className='error'>{errors.body}</p>}
            <button className='primary-btn mt-4' disabled={processing}>Edit Post</button>
        </form>
      </div>
    </div>
  )
}

export default Create
