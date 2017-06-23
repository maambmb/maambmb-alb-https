proxy-https-redirect
===================

Middleware to upgrade HTTP traffic to HTTPS via a 301 redirect. Looks at the `x-forwarded-proto` header, which is the standard header a proxy sets to identify the inbound client's protocol.

## Usage

```javascript
    const express = require( "express" );
    express()
        .use( require( "proxy-https-redirect" ) )
        .use( expres.static( STATIC_DIR ) )
        .listen( 8080 );
```
