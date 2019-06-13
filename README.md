## insert-html-code

**a webpack plugin**

example:
```
const insertHtmlCode = require('insert-html-code')

new insertHtmlCode({
        condition: 'condition', //condition any
        code: `<script>
            console.log('running')
        </script>` //your code
      }),
```

### install

```
npm i -D insert-html-code
```
