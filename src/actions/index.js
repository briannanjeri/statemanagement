export const increment=(increby)=>{
    return{
        type:'INCREMENT',
        payload:increby

    };
};

export const decrement=(decreby)=>{
    return{
        type:'DECREMENT',
        payload:decreby


    };
};