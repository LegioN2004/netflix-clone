# NOTES

In vite, for storing credentials, we'll use .env but in order to use it we need to set the variables like this when using vite: `VITE_THING_NAME: _value_`.

using APIs there will always be a unique identifier like a number or something else that helps us differentiate betweeen similar objects.

The need for this is in key in react props(otherwise the error reads, "each child in a list should have a unique 'key' prop") and the reason to add it in the props is that this is how react knows if a state changes for a particular item in a map and so it'll just update that item instead of re-rendering the whole list, and it does that using this key prop, and it needs to be unique

```ts
import {FaHeart} from 'react-icons/fa'
```

the icons are in the format `fa FaHeart` where the first part is the library and the second part is the icon name. So you need to add the icon name in the object destructure part and the icon pack library in the import part after `react-icons/`