export const errorHandler = (err, req, res, next) => {
    console.error(err);
    return res.status(500).send({
        message: "Internal server error"
    });
};
//# sourceMappingURL=errorHandler.js.map