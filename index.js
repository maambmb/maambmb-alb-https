module.exports = function( req, res, next ) {

    if( req.headers[ "x-forwarded-proto" ] === "http" ) {
        var redirected = `https://${req.get("host")}${req.originalUrl}`;
        res.redirect( 301, redirected );
        return;
    }

    next();

};
