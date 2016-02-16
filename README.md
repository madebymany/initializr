# initializr

Add MVC controller and action names to the body of your page like this:

```HTML
<body data-controller="pages" data-action="index">
  <!-- some things -->
</body>
```

Create an object literal that represents the structure of your app and pass it to `initializr`

```JavaScript
import initializr from "initializr";
import {code} from "./code-to-run";

initializr({
  "pages": {
    index() {
      console.log(`run ${code()} here`);
    }
    new() {
      // run some other code here
    }
  }
});
```

