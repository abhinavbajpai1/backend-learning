// const asynchandler=()=>{}

// export {asynchandler}

// const asynchandler=(fn)=> async ()=>{}


  /* through async and await */


// const asynchandler =(fn)=> async (req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(500).json({
//             success:false,
//             error:error.message})
//         next(error)
//     }
// }

/* through promises  */

const asynchandler=(fn)=>(req,res,next)=>{
   return  Promise.resolve(fn(req,res,next)).catch(next)
}




export {asynchandler}