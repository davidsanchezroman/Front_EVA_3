import { FaDizzy } from 'react-icons/fa'
import { LiaYoutube, LiaInstagram, LiaLinkedinIn, LiaPinterestP, LiaFacebook } from 'react-icons/lia'
import { dataFooter } from './Footer.data'
import { link } from 'fs'
import Link from 'next/link'

export function Footer() {
    return (
        <div className='px-4 py-8 bg-black/90 md:py-40 md:py-36'>
            <div className='grid gap-8 grid-cols-2 md:grid-cols-[1fr,1fr,1fr,_400px] text-white'>
                {dataFooter.map(({id, links})=>
                    <div key={id}>
                        {links.map(({name, link}) =>
                            <Link key={id} href={link} className='block mb-5'>{name}</Link>
                        )}
                    </div>
                )}
                <div className='md:text-right'>
                    <h4 className='mb-6 text-xl font-semibold'>Parcelas Terrsol</h4>
                    <p>Chillan, Chile</p>
                    <div className='flex gap-4 mt-5 md:justify-end'>
                        <LiaInstagram className='text-3xl cursor-pointer' href='#!'/>
                        <a href='https://www.facebook.com/tuparcelaenelsurdechile' target='_blank' rel='noopener noreferrer'>
                        <LiaFacebook className='text-3xl cursor-pointer' />
                        </a>
                        <LiaYoutube className='text-3xl cursor-pointer' href='#!'/>
                        <LiaLinkedinIn className='text-3xl cursor-pointer' href='#!'/>
                        <LiaPinterestP className='text-3xl cursor-pointer' href='#!'/>


                    </div>
                </div>
            </div>
        </div>
    )
}


