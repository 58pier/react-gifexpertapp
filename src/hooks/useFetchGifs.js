import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    console.log(category)
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs(category)
            .then( imgs => {

                    setTimeout( () => {

                        console.log(imgs)

                        setState({
                            data: imgs,
                            loading: false
                        });
                    }, 2000);



                }
            );

    }, [category]);

/*     setTimeout( () => {
        setState({
            data: [1,2,3,4,5],
            loading: false
        });
    }, 3000) */

    return state;
}
