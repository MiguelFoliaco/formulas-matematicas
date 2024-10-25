'use client';
import React, { useState } from 'react'
import formulas from '../data.json'
import { Input } from '../../../../@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link';

export const SearchContainer = () => {

    const [list, setList] = useState(formulas)
    const [text, setText] = useState('')


    return (
        <div
            className='mx-auto w-11/12 mt-6 min-h-64 border border-gray-500 rounded-md rounded-b-none p-2 border-slate-300 border-b-transparent'
        >
            <h1 className='text-center text-slate-200 text-lg font-bold'>Formulas Matematicas</h1>
            <div className="grid w-full max-w-sm items-center mx-auto gap-1.5">
                <Label>Buscar nombre, formula, o palabra claves </Label>
                <Input value={text} onChange={(e) => {
                    setText(e.target.value)
                    const _list = formulas.filter(f => (f.name.toLowerCase().includes(e.target.value.toLowerCase()) || f.keywords.find(k => k.toLowerCase() === e.target.value.toLowerCase())))
                    setList(_list)
                }} className='p-1 px-2 ' placeholder='cos x=cos(-x)' />
            </div>

            <div>
                <h4 className='pl-3 my-2 font-bold text-slate-300'>Resultados</h4>

                <div className='px-2'>
                    {
                        list.map(e => (
                            <div className='mb-2 p-2 border border-gray-500 rounded' key={e.name}>
                                <Link href={`/formulas/${e.slug}`} className='cursor-pointer duration-200 hover:pl-2 hover:text-teal-300'>{e.name}</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
