import {HiArrowNarrowRight} from 'react-icons/hi'

function Home() {
    return (
        <div name='home' className='bg-slate-500 w-full h-screen'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold'>David Caldera</h1>
                <h2>I'm a fullstack developer</h2>
                <p>I'm a fullstack developer specializing in building robust digital experiences. Currently I am focused on building responsive fullstack web applications. </p>
                <div>
                    <button>View Work <HiArrowNarrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Home