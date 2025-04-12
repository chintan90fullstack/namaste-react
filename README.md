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