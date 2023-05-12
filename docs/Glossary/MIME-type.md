---
sidebar_position: 13050 
title: "MIME/Media/Content Type"
slug: "../content-type-mime"
---

## Internet media type
A **media type** (formerly known as MIME type) is a two-part identifier for file formats and format contents transmitted on the Internet.<br/>
As an example, an HTML file might be designated `text/html`; `charset=UTF-8`. In this example, <em>text</em> is the <b>type</b>, <em>html</em> is the <b>subtype</b>, and charset=UTF-8 is an optional <b>parameter</b> indicating the character encoding.

## Content type example
- application/x-executable
- application/graphql
- application/javascript
- application/json
- application/ld+json
- application/msword (.doc)
- application/pdf
- application/sql
- application/xml
- application/zip
- audio/mpeg
- audio/ogg
- image/apng
- image/gif
- image/jpeg (.jpg, .jpeg, .jfif, .pjpeg, .pjp)
- image/png
- image/svg+xml (.svg)
- image/webp
- multipart/form-data
- text/css
- text/csv
- text/html
- text/php
- text/plain
- text/xml

## Mailcap
Mailcap (derived from the phrase "mail capability") is a type of meta file used to configure how MIME-aware applications such as mail clients and web browsers render files of different MIME-types. 


## MIME types usage

Internet media types are used in various situations, including:

1.   HTTP responses: When a web server sends a response to a client, it includes a MIME type in the Content-Type header to indicate the format of the response. This allows the client to know how to handle the response, such as rendering an HTML page or displaying an image.

2.  File uploads: When a user uploads a file to a web server, the server needs to know the format of the file so it can process it correctly. The MIME type is included in the request headers to indicate the format of the file being uploaded.

3.  Email attachments: When a user sends an email with an attachment, the MIME type is used to indicate the format of the attachment so the email client can display it correctly.

4.  API responses: When a web API sends a response to a client, it includes a MIME type in the response headers to indicate the format of the data being returned, such as JSON or XML.

Overall, internet media types are an important part of web standards and are used in many contexts to ensure that files and data are handled and displayed correctly.