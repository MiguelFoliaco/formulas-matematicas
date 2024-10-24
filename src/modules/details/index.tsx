'use client'
import React from 'react'
import { IFormula } from '@corde/types/formula'
import { Coordinates, LaTeX, Mafs, vec } from 'mafs'
import './styles/mafs.css'
import Markdown from 'react-markdown'

const MD = ({ children }: { children: string }) => {
    return <Markdown
        components={{
            p: (props) => {
                return <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
                    {props.children}
                </p>
            },
            h1: (props) => {
                return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {...props}>
                    {props.children}
                </h1>
            },
        }}
    >
        {children}
    </Markdown>
}


export const FormulasDetails = ({ formula }: { formula: IFormula }) => {


    return (
        <div className='w-9/12 mx-auto p-3 py-5'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Formula: {formula.name}
            </h1>

            <div className=' mt-8 flex justify-center min-h-fit p-3'>
                <Mafs height={formula['table-media'].height} width={formula['table-media'].width} pan={false} >
                    {
                        formula['table-media']?.['coordinates.cartesian']?.show && <Coordinates.Cartesian subdivisions={formula['table-media']['coordinates.cartesian'].subdivisions} />
                    }
                    {/* <Text size={20} x={-5.3} y={2} color='#53bdff'>a</Text>
                    <Text size={20} x={-3} y={2} color='#ff53fc'>c</Text>
                    <Text size={20} x={-4} y={0.5} color='#53bdff'>b</Text> */}
                    {/* <Polygon color='#d0d0d0' points={[[-5, 1], [-5, 3], [-2, 1]]} /> */}
                    {
                        formula.formulas.map((e) => (
                            <LaTeX
                                key={e.str}
                                at={e.pos as vec.Vector2}
                                tex={String.raw`
                                    ${e.str}
                                    `}
                            />
                        ))
                    }
                </Mafs>
            </div>

            <MD>
                {formula.description}
            </MD>

            <div className=' mt-8  min-h-fit p-3'>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Ejemplos
                </h3>

                {
                    formula.examples.map(e => (
                        <div className='my-2' key={e.description}>
                            <MD>
                                {e.description}
                            </MD>

                            <Mafs  width={e.math['table-media']?.width} height={e.math['table-media']?.height}>
                                {
                                    e.math['table-media']?.['coordinates.cartesian']?.show && <Coordinates.Cartesian subdivisions={e.math['table-media']['coordinates.cartesian'].subdivisions} />
                                }
                                {/* <Text size={20} x={-5.3} y={2} color='#53bdff'>a</Text>
                    <Text size={20} x={-3} y={2} color='#ff53fc'>c</Text>
                    <Text size={20} x={-4} y={0.5} color='#53bdff'>b</Text> */}
                                {/* <Polygon color='#d0d0d0' points={[[-5, 1], [-5, 3], [-2, 1]]} /> */}
                                {
                                    e.math.process.map((e) => (
                                        <LaTeX
                                            key={e.str}
                                            at={e.pos as vec.Vector2}
                                            tex={String.raw`${e.str}`}
                                        />
                                    ))
                                }
                            </Mafs>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}
