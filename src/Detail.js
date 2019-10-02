import React from 'react';
import { Query } from 'react-apollo';
//render prop을 사용하여 컴포넌트를 만드는 경우에 
//컴포넌트가 인자로써 prop을 받게 하자

const Detail = ({
    match: {
        params: {movieId}
    }
}) => {
    console.log(movieId)
    return <div>Detail</div>
}

export default Detail;