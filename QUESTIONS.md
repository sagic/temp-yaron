1. PureComponent - Use when you should render once by a clear immutable prop change (simple button rendering for example, you should re-render when label changes). It does a shallow comparison on the 'next' props. Childs should be pure too.
   Component - All react's goodies. Stateful, rendered on props changes, states, etc...
2. Not sure… I recall that in older versions of the context api i implemented it manually because it was always rendering the same child structure. Since using the new contetext API it never recurred to me...
3. Callback prop, context api (useSomeContextFunc and connect parent to context changes), state manager action until recieived by parent's observer (mobx, redux...)
4. component key, shouldComponentUpdate => false
5. a convinient way to serve some components together as children without wrapping them with a dom element.
   can't think of a reason to break something with them… maybe if the parent is not expecting them?
6. inject context (withRouter, withTheme, etc…), set some functionallity on
7. exceptios:
   1. Promises - use .catch((err) => { do something })
   2. async await should implement a try/catch to handle errors
   3. callbacks should implement signature like (err:error, res:data) => ...
8. setState is async because it's trying to debounce a bit the changes so multiple calls won't make uncessary re-renders. the second param is a callback that called upon/after the actual change.
   hooks fixes this quirky mechanism.
9. Class to functional
   1. kill constructor and use useEffect
   2. kill unmount related hooks and use UseEffect's unmount function (returned)
   3. props to function params (defaultProps and propTypes) moves out before export: CoolComp.propTypes = {…}
      BTW, Typescript is a breeze when using functional comps
   4. render to return
   5. states to useState hooks
10. styles...
    1. Inner <Comp style={{ color: 'white' }} />
    2. css modules (see my interview assignment code)
    3. classname with all sort of css libs or my wn css
    4. i'm a fan of styled components for quick implementations...
11. dangerousSetInnerHtml or use a XSS purifying lib (i prefer that)
