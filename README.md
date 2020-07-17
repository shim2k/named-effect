# named-effect

Wrapper around React's useEffect, in-order to require a name for each effect used

## Install

```bash
npm install named-effect --save
```

## Usage

```jsx
import useNamedEffect from 'named-effect'
...
const onLayoutThree = useNamedEffect([stateVariable], () => stateVariable === 3).bind(useEffect)

onVariableIsThree((vnum) => {
  console.log(`variable is ${vnum}`); // variable is 3
})
```

## Example

```jsx
import React, { Component } from 'react'

import useNamedEffect from 'named-effect'

function Example() {

  const [currentLayout, setLayout] = useState(0);

  const onLayoutThree = useNamedEffect([currentLayout], () => currentLayout === 3).bind(useEffect);

  onLayoutThree((lnum) => {
    console.log(`layout number ${lnum}`); // layout number 3
  })

  const onLayoutChangeClicked = () => {
    setLayout(prev => prev+1);
  }

  return (
    <div className="example">
      <div onClick={onLayoutChangeClicked}>Change layout</div>
    </div>
  );
}
```

## License

MIT © [shim2k](https://github.com/shim2k)
