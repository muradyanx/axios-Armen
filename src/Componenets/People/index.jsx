import '../People/style.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
function People(props){

const [heart,setheart] = useState(0);
const dispatch = useDispatch()

function liked(){
    setheart(heart + 1);
    dispatch({type: 'plus', payload: heart})
}
    return(
        <div className='people-blok people-blok-secnd'>
            <div className='people-img g-back-img' style={{backgroundImage:`url(${props.man.productImage})`}}>
              <div className='people-logo'>
                    <div className='p-logo icon-heart' onClick={liked}></div>
                    <Link to="/new" className='p-logo icon-eye'></Link>
                    <div className='p-logo icon-cart'></div>
              </div>  
            </div>
            <div className='people-info'>{props.man.productName}</div>
            <p className='people-xl'>M/L/X/XL</p>
            <div className='people-sum'>{props.man.price}</div>

        </div>
    )
}
export default People