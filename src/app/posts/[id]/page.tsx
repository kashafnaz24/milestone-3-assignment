
import React from 'react';
import Link from 'next/link';

async function Page({ params , searchParams}: { params: { id: string } , searchParams: {title: string ; body:string}}) {
  const { id } = await params
  const { title , body } = await searchParams
    return (
      <div className='w-[80%] mx-auto p-11'>
          <h1 className=' my-5 text-[35px] font-mono'>Post ID: {id}</h1>
          <h2><b className='text-[20px] font-serif'>Title:</b> {title}</h2>
          <p><b className='text-[20px] font-serif'>Body:</b>{body}</p>
          <Link href="/" ><button className='p-[10px] my-5 text-[white] bg-black rounded-md'>Veiw all Posts</button></Link>
      </div>
    );
}

export default Page;
