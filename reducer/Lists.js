// const initialState ={
//     todo:[],
//     isLoading:false,
//     isSaved:false,
//     isError:false,

// }

// const listReducer = function(state=initialState, action){
//     switch (action.type) {
//         case "ALL_LISTS_PENDING":
//             return{...state, isLoading: true}
//         case "ALL_LISTS_FULFILLED":
//             return{...state, todo:action.payload.data, isLoading:false}
//         case "CREATE_LISTS_FULFILLED":
//             return{...state, isSaved:true}
//         case "CREATE_LISTS_REJECTED":
//             return{...state, isError:true}
//         default:
//             break;
//     }
// }

// export default listReducer