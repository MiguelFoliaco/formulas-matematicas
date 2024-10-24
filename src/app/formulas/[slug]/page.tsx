'use server'
import React from 'react'
import formulas from '../../../modules/home/data.json'
import { FormulasDetails } from '@corde/modules/details'
import styles from "../../page.module.css";

type props = { readonly params: Promise<{ readonly slug: string }> }

export default async function FormulasBySlug({ params }: props) {
    const { slug } = await params
    const formula = formulas.find(e => e.slug === slug)
    // const route = useRouter()
    return (
        <div className={styles.page}>
            {
                formula ?
                    <FormulasDetails formula={formula} />
                    :
                    <p>No exite dicha formula</p>
            }
        </div>
    )
}