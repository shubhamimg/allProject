

exports.wrapAsync = (fn) => {
    try {
        return (req, res, next) => {
            fn(req, res, next).catch((err) => next(err))
        };
    } catch (error) {
        console.log(error);
    };
};