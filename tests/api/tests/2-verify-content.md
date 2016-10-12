# Verify the news index has content

## `GET /news/_search?size=1`

Check that there is content in the news index. This test only grabs one document.

===

### Success

* Status: `200`
* Content-Type: `application/json; charset=UTF-8`
* Data.timed_out: false
* Data.hits.total: /[1-9]+/
