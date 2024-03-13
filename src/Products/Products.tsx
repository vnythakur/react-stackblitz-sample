import React, { useReducer, useState } from 'react'
import Product from './Product'
import { IProduct, ProductState } from './interface';

const initialState: ProductState = {
    products: [],
    order: 'asc'
}

const FETCH_DATA = 'fetch_data'

const productReducer = (state: ProductState, action: any) => {

    switch (action.type) {
        case FETCH_DATA:
            return { ...action.payload } as ProductState
    }

    return state
}

export default function Products() {

    const [state, dispatch] = useReducer(productReducer, initialState)

    /* const [products, setProducts] = useState<IProduct[]>([]);
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');

    React.useEffect(() => {
        fetchProducts()
    }, [order])

    const fetchProducts = async () => {
        const url = `https://fakestoreapi.com/products?sort=${order}`
        try {
            const response = await fetch(url)
            const data: IProduct[] = await response.json()

            setProducts(data)
        } catch (error) {
            console.log('[Error] : ', error);

        }
    }

    const onOrderChange = (event: any) => {
        setOrder(event.target.value)
    } */

    React.useEffect(() => {
        fetchProducts('asc')
    }, [])

    const onOrderChange = (event: any) => {
        fetchProducts(event.target.value)
    }

    const fetchProducts = async (order: 'asc' | 'desc') => {
        const url = `https://fakestoreapi.com/products?sort=${order}`
        try {
            const response = await fetch(url)
            const data: IProduct[] = await response.json()

            dispatch({ type: FETCH_DATA, payload: { order: order, products: data } })
        } catch (error) {
            console.log('[Error] : ', error);
        }
    }

    return (
        <>
            <div>
                <select onChange={onOrderChange}>
                    <option selected value={'asc'}>ASC</option>
                    <option value={'desc'}>DESC</option>
                </select>
            </div>
            <div>
                {state.products.map(p => <Product product={p} key={p.id} />)}
            </div>
        </>
    )
}
