# Namaste React first app


# parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differntial Bundling - Support older browser
- Diagnostic
- Error Handling
- Https Support
- Tree Shaking - remove unused code
- Different dev and prod bundles



# Namaste Food

/*
* Header
*  - Logo
*  - Nav Items
*
* Body
*  - Search
*  - Restaurant Container
*    - RestaurantCard
*       - image
*       - Name
*       - star rating
*       - cusisine
*       - delivery time
* Footer
*  - Copyright
*  - Links
*  - Address
*  - Contact
 */




 Two types of Export/Import

 - Default Export/Import

 export default ComponentName;
 import componentName from "path";

 - Named Export/Import

 export const ComponentName;
 import {ComponentName} from  "path";

 -- we can use named export and default export in a single file the only difference is of importing them either by named import or default import


 (Normal JS utility functions)
-- useState() => givees superpowerful react , used to show some data on the initial state of the component
--  useEffect() => used to fetch data once the initial state is loaded of the react app component.

-- whenever state variable updates, it rerenders the component.



// if no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render(Just Once).
    // if dependency array is have some values, then useEffect will be called everytime when dependency values get changes.
    useEffect( () => {
        console.log("useEffect is called");
    }, [btnNameReact])

-- never use useState under any if statement, for loop or under any condition.

-- Server Side Rounting : how the traditional routing works, when we call a page it reloads the whole page.  

-- Client Side Routing: this is how single page application (SPA) works, it loads all components once the page loaded and then when we move from one page to another page via link component, then it only loads that component instead of making request on the  server.