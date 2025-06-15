const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));
    }
}


export { asyncHandler };





// Async Await and Try-Catch Error Handling Middleware for Express.js
/*
const asyncHandler = (fn) => async (err, req, res, next) => {
    try {
        await fn(err, req, res, next);
        } catch (error) {
            res.status(err.code || 500).json({
                success: false,
                message: err.message || "Internal Server Error",
                error: error.message || "An unexpected error occurred"
            });
        }
        }
    */
// const asyncHandler = (fn) => { () => {} }    //Higher Order Function